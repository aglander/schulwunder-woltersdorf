
/**
 * Utility to optimize images and prepare them for optimal loading
 */

// Define types for image loading attributes
type LoadingType = "eager" | "lazy";
type DecodingType = "sync" | "async" | "auto";
type FetchPriorityType = "auto" | "high" | "low";

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
