// src/utils/imageUtils.js

/**
 * Handles image loading with fallback for different file extensions and cases
 * @param {string} imagePath - The image path without extension
 * @param {string[]} extensions - Array of extensions to try ['.jpg', '.JPG', '.png', '.PNG']
 * @returns {string} - The image path with correct extension
 */
export const getImageWithFallback = (imagePath, extensions = ['.jpg', '.JPG', '.png', '.PNG', '.jpeg', '.JPEG']) => {
  return imagePath; // Return as-is, we'll handle errors in component
};

/**
 * Image error handler that tries different extensions
 * @param {Event} e - The error event
 * @param {string} basePath - Base path without extension
 * @param {string[]} fallbackPaths - Array of complete fallback paths
 */
export const handleImageError = (e, basePath, fallbackPaths = []) => {
  const extensions = ['.jpg', '.JPG', '.png', '.PNG', '.jpeg', '.JPEG'];
  const target = e.target;
  const currentSrc = target.src;
  
  // Extract the base path without extension
  const currentBase = currentSrc.substring(0, currentSrc.lastIndexOf('.'));
  const triedExtensions = target.dataset.triedExtensions ? JSON.parse(target.dataset.triedExtensions) : [];
  
  // Find next extension to try
  const nextExtension = extensions.find(ext => !triedExtensions.includes(ext));
  
  if (nextExtension && currentBase === basePath) {
    // Try next extension
    triedExtensions.push(nextExtension);
    target.dataset.triedExtensions = JSON.stringify(triedExtensions);
    target.src = currentBase + nextExtension;
  } else if (fallbackPaths.length > 0) {
    // Try fallback paths
    const currentFallbackIndex = parseInt(target.dataset.fallbackIndex || '-1');
    const nextIndex = currentFallbackIndex + 1;
    
    if (nextIndex < fallbackPaths.length) {
      target.dataset.fallbackIndex = nextIndex;
      target.dataset.triedExtensions = JSON.stringify([]); // Reset for new path
      target.src = fallbackPaths[nextIndex];
    } else {
      // All attempts failed, set a default placeholder
      target.src = '/images/placeholder.png';
      console.error('Failed to load image:', basePath);
    }
  } else {
    // No more options, use placeholder
    target.src = '/images/placeholder.png';
    console.error('Failed to load image:', basePath);
  }
};

/**
 * Component wrapper for images with automatic fallback
 */
export const SmartImage = ({ src, alt, className, fallbackPaths = [], ...props }) => {
  const basePath = src.substring(0, src.lastIndexOf('.'));
  
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => handleImageError(e, basePath, fallbackPaths)}
      {...props}
    />
  );
};