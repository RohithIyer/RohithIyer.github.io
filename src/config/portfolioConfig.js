// src/config/portfolioConfig.js

export const portfolioConfig = {
  // Personal Information
  personal: {
    fullName: "Rohith Krishnamurthy",
    firstName: "Rohith",
    lastName: "Krishnamurthy",
    email: "rohith.krishnamurthy@email.com",
    phone: "+1 (123) 456-7890",
    location: "Your City, Country",
    title: "Full Stack Developer & Data Scientist",
    shortBio: "Crafting digital experiences with modern technologies and data-driven solutions",
    resumeFileName: "Rohith_Krishnamurthy_Resume.pdf", // Update this when you change your resume
    resumePath: "/resume/Rohith_Krishnamurthy_Resume.pdf"
  },

  // Social Links
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    portfolio: "https://yourportfolio.com"
  },

  // Profile Images (in order of preference)
  profileImages: [
    "/images/profile.jpg",
    "/images/profile.JPG",
    "/images/profile_old.jpg",
    "/images/profile_old.JPG",
    "/images/banner1.jpg",
    "/images/banner1.JPG",
    "/images/banner2.jpg",
    "/images/banner2.JPG"
  ],

  // Default placeholder image
  placeholderImage: "/images/placeholder.png",

  // Supported image extensions for automatic fallback
  imageExtensions: ['.jpg', '.JPG', '.png', '.PNG', '.jpeg', '.JPEG', '.svg', '.SVG'],

  // Navigation Items
  navigation: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ]
};

// Helper function to get resume path
export const getResumePath = () => portfolioConfig.personal.resumePath;

// Helper function to get profile image with fallbacks
export const getProfileImage = () => portfolioConfig.profileImages[0];

// Helper function to get all profile image fallbacks
export const getProfileImageFallbacks = () => portfolioConfig.profileImages;

// Export default for easier imports
export default portfolioConfig;