
interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export const refreshInstagramToken = async (currentToken: string) => {
  try {
    const response = await fetch(
      `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${currentToken}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to refresh token');
    }

    const data: TokenResponse = await response.json();
    
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
  const token = localStorage.getItem('instagram_token');
  const expirationDate = localStorage.getItem('instagram_token_expiration');
  
  if (!token || !expirationDate) {
    return null;
  }

  // Check if token needs refresh (expired or will expire in next 24 hours)
  const expiration = new Date(expirationDate);
  const now = new Date();
  
  if (expiration <= now) {
    try {
      return await refreshInstagramToken(token);
    } catch (error) {
      console.error('Failed to refresh expired token:', error);
      return null;
    }
  }
  
  return token;
};
