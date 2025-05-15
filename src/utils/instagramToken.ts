
interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface ErrorResponse {
  error: {
    message: string;
    type: string;
    code: number;
    error_subcode?: number;
  };
}

export const refreshInstagramToken = async (currentToken: string) => {
  try {
    console.log('Refreshing Instagram token...');
    
    const response = await fetch(
      `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${currentToken}`
    );
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Failed to refresh token. Status:', response.status, 'Response:', errorText);
      throw new Error(`Failed to refresh token: ${response.status} ${errorText}`);
    }

    const data: TokenResponse = await response.json();
    console.log('Token refreshed successfully, expires in:', data.expires_in, 'seconds');
    
    // Store new token and expiration date (slightly before actual expiration)
    const expirationDate = new Date();
    expirationDate.setSeconds(expirationDate.getSeconds() + data.expires_in - 86400); // Expire 1 day early
    
    localStorage.setItem('instagram_token', data.access_token);
    localStorage.setItem('instagram_token_expiration', expirationDate.toISOString());
    
    return data.access_token;
  } catch (error) {
    console.error('Error refreshing Instagram token:', error);
    throw error;
  }
};

export const getInstagramToken = async (): Promise<string | null> => {
  try {
    // First, check if token is available in environment variables (Netlify build config)
    const envToken = import.meta.env.VITE_INSTAGRAM_TOKEN;
    
    if (envToken) {
      console.log('Using Instagram token from environment variables');
      
      // Test if the token is valid
      try {
        // Make a minimal API request to test the token
        const testResponse = await fetch(
          `https://graph.instagram.com/me?fields=id&access_token=${envToken}`
        );
        
        if (!testResponse.ok) {
          const errorData: ErrorResponse = await testResponse.json();
          console.error('Environment token is invalid:', errorData);
          
          if (errorData.error?.code === 190) {
            console.error('Token validation failed: Access token has expired or is invalid');
          }
          
          // Try falling back to localStorage if env token is invalid
          console.warn('Falling back to localStorage token');
        } else {
          console.log('Environment token validated successfully');
          return envToken;
        }
      } catch (testError) {
        console.error('Error testing environment token:', testError);
      }
    }
    
    // Fallback to localStorage
    console.log('Checking localStorage for Instagram token');
    const token = localStorage.getItem('instagram_token');
    const expirationDate = localStorage.getItem('instagram_token_expiration');
    
    if (!token || !expirationDate) {
      console.warn('No token found in localStorage');
      return null;
    }

    // Check if token needs refresh (expired or will expire in next 24 hours)
    const expiration = new Date(expirationDate);
    const now = new Date();
    
    if (expiration <= now) {
      console.log('Token expired, attempting to refresh');
      try {
        return await refreshInstagramToken(token);
      } catch (error) {
        console.error('Failed to refresh expired token:', error);
        return null;
      }
    }
    
    console.log('Using valid token from localStorage');
    return token;
  } catch (error) {
    console.error('Error in getInstagramToken:', error);
    return null;
  }
};
