
/**
 * Utility to optimize images and prepare them for optimal loading
 */

// Define types for image loading attributes
export type LoadingType = "eager" | "lazy";
export type DecodingType = "sync" | "async" | "auto";
export type FetchPriorityType = "auto" | "high" | "low";

/**
 * Generate appropriate loading strategy based on image importance
 * @param isLCP - Is this a Largest Contentful Paint element
 */
export const getLoadingStrategy = (isLCP: boolean = false) => {
  return {
    loading: (isLCP ? "eager" : "lazy") as LoadingType,
    decoding: (isLCP ? "sync" : "async") as DecodingType,
    fetchPriority: (isLCP ? "high" : "auto") as FetchPriorityType,
  };
};

/**
 * This function creates default dimensions for images when exact dimensions are not known
 * @param aspectRatio - Optional aspect ratio to use (width/height), defaults to 16/9
 */
export const getDefaultDimensions = (aspectRatio: number = 16/9) => {
  const defaultWidth = 1200;
  return {
    width: defaultWidth,
    height: Math.round(defaultWidth / aspectRatio)
  };
};

/**
 * Get srcset string for responsive images
 * @param src - Base image source
 */
export const getResponsiveSrcSet = (src: string) => {
  if (!src) return undefined;
  
  // Extract file extension
  const lastDot = src.lastIndexOf('.');
  const extension = lastDot > 0 ? src.substring(lastDot) : '';
  const basePath = lastDot > 0 ? src.substring(0, lastDot) : src;
  
  // Create srcset for different widths
  return `${basePath}-480${extension} 480w, 
          ${basePath}-800${extension} 800w, 
          ${src} 1920w`;
};
