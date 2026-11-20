// src/config/portfolioConfig.js

export const portfolioConfig = {
  // Personal Information
  personal: {
    fullName: "Rohith Krishnamurthy",
    firstName: "Rohith",
    lastName: "Krishnamurthy",
    email: "rsr.kvk@gmail.com",
    phone: "+1 617 755 2053",
    location: "Seattle, WA",
    title: "Data Engineer & AI Systems Builder",
    shortBio: "Designing cloud data pipelines, automated reporting architectures, and evaluated AI workflows",
    resumeFileName: "Rohith_Krishnamurthy_Resume.pdf",
    resumePath: "/resume/Rohith_Krishnamurthy_Resume.pdf"
  },

  // Social Links
  social: {
    github: "https://github.com/RohithIyer",
    linkedin: "https://www.linkedin.com/in/rohith-krishnamurthy5915",
    portfolio: "https://rohithiyer.github.io"
  },

  // Profile Images (in order of preference)
  profileImages: [
    "/images/profile.jpg",
    "/images/profile_old.jpg",
    "/images/banner1.jpg",
    "/images/banner2.jpg"
  ],

  // Default placeholder image
  placeholderImage: "/images/banner1.jpg",

  // Supported image extensions for automatic fallback
  imageExtensions: ['.jpg', '.JPG', '.png', '.PNG', '.jpeg', '.JPEG', '.svg', '.SVG'],

  // Navigation Items
  navigation: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Work Focus", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Credentials", href: "#education" },
    { label: "Contact", href: "#contact" }
  ]
};

export const getResumePath = () => portfolioConfig.personal.resumePath;
export const getProfileImage = () => portfolioConfig.profileImages[0];
export const getProfileImageFallbacks = () => portfolioConfig.profileImages;

export default portfolioConfig;
