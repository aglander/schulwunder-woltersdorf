
/**
 * Utility to optimize images and prepare them for optimal loading
 */

// Mapping of image paths to their dimensions for proper sizing
export const imageDimensions: Record<string, { width: number, height: number }> = {
  "/assets/schulbauwunder-hero.jpg": { width: 1920, height: 1080 },
  "/assets/schulgruendungswunder-hero.jpg": { width: 1920, height: 1080 },
  "/assets/schulinnovationswunder-hero.png": { width: 1920, height: 1080 },
  // Add more images as needed
};

type LoadingType = "eager" | "lazy";
type DecodingType = "sync" | "async" | "auto";
type FetchPriorityType = "auto" | "high" | "low";

/**
 * Generate appropriate loading strategy based on image importance
 */
export const getLoadingStrategy = (imagePath: string, isLCP: boolean = false) => {
  return {
    loading: (isLCP ? "eager" : "lazy") as LoadingType,
    decoding: (isLCP ? "sync" : "async") as DecodingType,
    fetchPriority: (isLCP ? "high" : "auto") as FetchPriorityType,
  };
};

/**
 * Get image dimensions if available
 */
export const getImageDimensions = (imagePath: string) => {
  return imageDimensions[imagePath] || { width: 800, height: 600 };
};
