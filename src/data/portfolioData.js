// src/data/portfolioData.js

export const personalInfo = {
  name: "Rohith Krishnamurthy",
  title: "Data Analytics Professional",
  email: "krishnamurthy.ro@northeastern.edu",
  phone: "+1 (123) 456-7890",
  location: "New York, NY",
  linkedin: "https://www.linkedin.com/in/rohkrish5915",
  github: "https://github.com/RohithIyer",
  resume: "/resume/Rohith_Krishnamurthy_Resume.pdf",
  profileImage: "/images/profile.jpg"
};

export const heroImages = [
  "/images/banner1.jpg",
  "/images/banner2.jpg",
  "/images/dashboard_header.jpg",
  "/images/financial-default-by-purpose.jpg"
];

export const aboutMe = `I build data systems that answer real business questions.

Over 4+ years in consulting and analytics, I've worked on forecasting, risk modeling, ETL pipelines, and dashboards used by leadership teams to make actual decisions, not vanity charts.

**What I've done:**
• Delivered $8M+ in cost savings through process optimization and system decommissioning
• Built forecasting and risk models (up to 90% accuracy) used for financial planning
• Designed SQL + Python pipelines that cut data processing time by ~40%
• Turned messy, fragmented data into analysis-ready datasets for ML and reporting

**What I work with:**
SQL, Python (pandas, scikit-learn), Tableau, ETL pipelines, ML models, cloud deployments

**What I'm looking for:**
Roles where data is used to drive decisions, not just populate dashboards.

If you're hiring for data, analytics, or applied ML roles and care about impact over buzzwords, let's talk.`;

export const education = [
  {
    degree: "MPS in Analytics (Applied Machine Intelligence)",
    specialization: "Applied Machine Intelligence",
    school: "Northeastern University",
    location: "Boston, MA",
    duration: "Sep 2023 - Mar 2025",
    gpa: "4.0/4.0",
    coursework: [
      "AI Applications",
      "AI Ethics",
      "Probability and Statistics",
      "Principle of Data Visualization and Business Intelligence"
    ],
    achievements: [
      "4.0 GPA",
      "Capstone: AI-Powered Cryptocurrency Investment Assistant"
    ]
  },
  {
    degree: "PG Diploma in Data Science",
    specialization: "Data Science",
    school: "IIIT Bangalore",
    location: "Bangalore, India",
    duration: "Sep 2018 - Sep 2019",
    gpa: "3.4/4.0",
    coursework: [
      "Predictive Analytics I and II",
      "SQL & Data Warehousing",
      "Big Data Analytics",
      "Data Engineering Pipelines"
    ],
    achievements: []
  },
  {
    degree: "B.E. in Computer Science",
    specialization: "Computer Science",
    school: "Sri Ramakrishna Institute of Technology",
    location: "Tamil Nadu, India",
    duration: "2014 - 2018",
    gpa: "3.2/4.0",
    coursework: [
      "Data Structures",
      "Operating Systems",
      "Object-Oriented Programming",
      "Database Systems"
    ],
    achievements: []
  }
];

export const experience = [
  {
    position: "Software Development & Data Analytics Intern",
    company: "Vester",
    location: "Remote, USA",
    duration: "Jul 2025 - Present",
    type: "Part-time",
    description: "Working on end-to-end crypto analytics infrastructure, spanning data engineering, AI systems, and analytics dashboards.",
    responsibilities: [
      "Scaled token coverage from 20+ to 110+ assets, integrating on-chain, market, and sentiment data into PostgreSQL pipelines.",
      "Redesigned ETL architecture to use parallel Cloud Run workers for scalable, fault-isolated execution.",
      "Built automated data quality audits across dozens of metrics, enabling high-trust dashboards.",
      "Developed Streamlit dashboards and LLM-based tools to operationalize blockchain data for business teams.",
      "Contributed to multi-agent LLM pipelines, hallucination detection, and output validation workflows."
    ],
    technologies: ["Python", "SQL", "PostgreSQL", "Airflow", "Streamlit", "GCP", "LangGraph", "Gemini", "OpenAI"]
  },
  {
    position: "Senior Data Analyst",
    company: "Capgemini",
    location: "India",
    duration: "2021 - 2022",
    type: "Full-time",
    description: "Led data initiatives for banking and finance clients, specializing in predictive analytics and business intelligence.",
    responsibilities: [
      "Developed predictive models that improved forecasting accuracy by 90%",
      "Created interactive dashboards that enhanced data accessibility by 15%",
      "Optimized data pipelines reducing processing time by 40%",
      "Led cross-functional teams to deliver data-driven solutions",
      "Mentored junior analysts on best practices in data analytics"
    ],
    technologies: ["Python", "SQL", "Tableau", "Power BI", "AWS", "Machine Learning"]
  },
  {
    position: "Data Analyst",
    company: "Capgemini",
    location: "India",
    duration: "2019 - 2021",
    type: "Full-time",
    description: "Transformed business requirements into actionable insights for finance and operations teams.",
    responsibilities: [
      "Built automated reporting systems saving 20 hours per week",
      "Developed SQL pipelines for ETL processes",
      "Created data visualization dashboards for C-level executives",
      "Performed statistical analysis to identify business trends",
      "Collaborated with stakeholders to define KPIs and metrics"
    ],
    technologies: ["SQL", "Python", "Tableau", "Excel", "ETL", "Data Warehousing"]
  },
  {
    position: "Software Engineer",
    company: "Capgemini",
    location: "India", 
    duration: "2018 - 2019",
    type: "Full-time",
    description: "Started career focusing on software development and data engineering.",
    responsibilities: [
      "Developed data processing applications using Python",
      "Implemented database solutions for client applications",
      "Participated in full software development lifecycle",
      "Wrote technical documentation for data processes"
    ],
    technologies: ["Python", "Java", "SQL", "Git", "Agile"]
  }
];

export const skills = {
  "Programming & Analytics": [
    { name: "SQL", level: 95, icon: "/images/logos/sql.png" },
    { name: "Python", level: 90, icon: "/images/logos/python.png" },
    { name: "R", level: 80, icon: "/images/logos/r.png" }
  ],
  "Data Visualization": [
    { name: "Tableau", level: 90, icon: "/images/logos/tableau.png" },
    { name: "Power BI", level: 85, icon: "/images/logos/powerbi.png" }
  ],
  "Cloud Platforms": [
    { name: "AWS", level: 80, icon: "/images/logos/aws.jpg" },
    { name: "Azure", level: 75, icon: "/images/logos/azure.jpg" },
    { name: "GCP", level: 70, icon: "/images/logos/gcp.png" }
  ],
  "Data Engineering": [
    { name: "Snowflake", level: 85, icon: "/images/logos/snowflake.png" },
    { name: "Databricks", level: 80, icon: "/images/logos/databricks.png" }
  ],
  "Machine Learning": [
    { name: "Scikit-learn", level: 85, icon: "/images/logos/sklearn.png" },
    { name: "TensorFlow", level: 75, icon: "/images/logos/tensorflow.png" },
    { name: "PyTorch", level: 70, icon: "/images/logos/pytorch.png" }
  ],
  "Tools & Version Control": [
    { name: "Git/GitHub", level: 90, icon: "/images/logos/github.png" },
    { name: "CI/CD", level: 75, icon: "/images/logos/cicd.png" }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Enhanced Privacy Policy Analyzer",
    category: "AI/NLP",
    description: "An intelligent web application that analyzes privacy policies using AI to help users understand what data companies collect, how it's used, and what privacy risks exist.",
    longDescription: `An intelligent web application that analyzes privacy policies using AI to help users understand what data companies collect, how it's used, and what privacy risks exist.
    
    Key Features:
    • GPT-4 Integration for advanced natural language processing
    • Platform Detection to automatically identify service types
    • Interactive Chatbot for follow-up questions
    • Multi-dimensional privacy assessment across 6 key areas
    • Regulatory compliance checks for GDPR, CCPA
    • Readability analysis with complexity metrics`,
    technologies: ["React", "Python", "Flask", "GPT-4", "SQLite", "Tailwind CSS"],
    images: [
      "/images/privacy-analyzer-main.jpg",
      "/images/privacy-analyzer-dashboard.jpg",
      "/images/privacy-analyzer-enhanced.jpg",
      "/images/privacy-analyzer-results.jpg"
    ],
    features: [
      "AI-powered analysis with GPT-4",
      "Comprehensive privacy scoring",
      "Regulatory compliance checking",
      "Interactive chatbot interface",
      "URL scraping and PDF upload support"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/RohithIyer/enhanced_privacy_policy_analyzer",
    date: "2024"
  },
  {
    id: 2,
    title: "Taxi Service Optimization & Workflow Automation",
    category: "Machine Learning",
    description: "A comprehensive system for analyzing taxi service data, predicting demand patterns, and optimizing resource allocation to improve operational efficiency.",
    longDescription: `This project leverages NYC TLC Trip data to demonstrate data-driven approaches to taxi service optimization through data analysis, predictive modeling, and automated monitoring.

    Key Accomplishments:
    • Developed predictive models forecasting trip demand and revenue with 90% accuracy
    • Created automated systems for monitoring KPIs and alerting stakeholders
    • Implemented data-driven strategies for resource allocation
    • Built interactive dashboard for performance visualization`,
    technologies: ["Python", "Pandas", "Scikit-learn", "Streamlit", "Plotly", "XGBoost"],
    images: [
      "/images/demand_forecast.jpg",
      "/images/demand_trend_chart.jpg",
      "/images/revenue_forecast.jpg",
      "/images/revenue_trend_chart.jpg"
    ],
    features: [
      "90% accuracy in demand forecasting",
      "Real-time KPI monitoring",
      "Interactive Streamlit dashboard",
      "Automated alert system",
      "Resource optimization recommendations"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/RohithIyer/taxi-service-optimization",
    date: "2024"
  },
  {
    id: 3,
    title: "AI SQL Business Intelligence Agent",
    category: "AI/Automation",
    description: "An intelligent SQL query generator that uses AI to transform natural language questions into SQL queries.",
    longDescription: `An intelligent SQL query generator that transforms natural language questions into optimized SQL queries using OpenAI GPT models.

    Features:
    • Natural language to SQL conversion
    • Support for multiple data sources (CSV, Excel, JSON, URLs)
    • Interactive data visualization with Chart.js
    • Query history and templates for efficiency
    • Dark mode and multiple themes
    • Keyboard shortcuts for power users`,
    technologies: ["Python", "OpenAI GPT", "FastAPI", "JavaScript", "Chart.js", "SQL"],
    images: [
      "/images/sql-agent-main.jpg",
      "/images/sql-agent-exploration.jpg",
      "/images/sql-agent-generated-query.jpg",
      "/images/sql-agent-results.jpg"
    ],
    features: [
      "Natural language to SQL conversion",
      "Multiple data source support",
      "Interactive visualizations",
      "Query history tracking",
      "Keyboard shortcuts"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/RohithIyer/ai-sql-bi-agent",
    date: "2024"
  },
  {
    id: 4,
    title: "Call of Duty Analytics Platform",
    category: "Gaming Analytics",
    description: "A comprehensive analytics platform for Call of Duty game data, featuring player analytics, revenue optimization, fraud detection, and real-time monitoring.",
    longDescription: `A comprehensive analytics platform analyzing Call of Duty game data to provide insights on player behavior, revenue optimization, and fraud detection.

    Features:
    • Comprehensive player behavior analysis and segmentation
    • Transaction analysis and monetization insights
    • Automated fraud detection for transactions
    • Live dashboards and monitoring capabilities
    • Interactive charts using Plotly and Streamlit
    • FastAPI backend for data access`,
    technologies: ["Python", "FastAPI", "Streamlit", "Plotly", "Pandas", "Machine Learning"],
    images: [
      "/images/dashboard_header.jpg",
      "/images/financial-status-by-amount.jpg",
      "/images/financial-default-by-purpose.jpg"
    ],
    features: [
      "Player behavior analytics",
      "Revenue optimization insights",
      "Fraud detection system",
      "Real-time monitoring",
      "REST API backend"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/RohithIyer/cod-analytics-platform",
    date: "2023"
  },
  {
    id: 5,
    title: "Financial Risk Prediction Model",
    category: "Finance/ML",
    description: "Machine learning model to predict loan default risk with 92% accuracy using XGBoost and LSTM.",
    longDescription: `Developed a sophisticated financial risk model that predicts loan default probability using advanced machine learning techniques.

    Achievements:
    • 92% prediction accuracy using ensemble methods
    • Feature engineering from 50+ financial indicators
    • Real-time risk scoring API
    • Model interpretability with SHAP values
    • Automated model retraining pipeline`,
    technologies: ["Python", "XGBoost", "LSTM", "MLflow", "SQL", "Tableau"],
    images: [
      "/images/financial-risk.jpg",
      "/images/financial-model-learning-curve1.jpg",
      "/images/financial-model-learning-curve2.jpg",
      "/images/model_demand_accuracy.jpg"
    ],
    features: [
      "92% prediction accuracy",
      "Credit risk scoring",
      "Feature importance analysis",
      "Risk visualization dashboard",
      "Model performance monitoring"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/RohithIyer/loan-prediction-nlp-app",
    date: "2024"
  },
  {
    id: 6,
    title: "Airbnb Market Analysis Dashboard",
    category: "Data Visualization",
    description: "Comprehensive analysis of Airbnb pricing and availability trends in Austin using SQL and Tableau.",
    longDescription: `Analyzed Airbnb market data for Austin to identify pricing patterns, seasonal trends, and investment opportunities.

    Key Insights:
    • Identified optimal pricing strategies by neighborhood
    • Seasonal demand patterns and price fluctuations
    • Host performance metrics and success factors
    • Property type analysis and ROI calculations
    • Interactive Tableau dashboard for stakeholders`,
    technologies: ["SQL", "Tableau", "Python", "Pandas", "Statistical Analysis"],
    images: [
      "/images/airbnb-dashboard.jpg",
      "/images/airbnb-pricing-boxplot.jpg",
      "/images/airbnb-seasonal-trends.jpg",
      "/images/airbnb-hosts-chart.jpg"
    ],
    features: [
      "Market trend analysis",
      "Pricing optimization insights",
      "Seasonal pattern detection",
      "Interactive Tableau dashboards",
      "Investment recommendations"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/RohithIyer/ProjectRepository/tree/main/Airbnb%20Dashboard",
    date: "2023"
  }
];

// Re-export projectsData for compatibility
export const projectsData = projects;

// Skills data for compatibility
export const skillsData = skills;

// Helper functions
export const getProjectById = (id) => {
  return projects.find(project => project.id === parseInt(id));
};

export const getProjectsByCategory = (category) => {
  if (category === 'All') return projects;
  return projects.filter(project => project.category === category);
};

export const getCategories = () => {
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  return categories;
};

export const getSkillCategories = () => {
  return Object.keys(skills);
};

export const getSkillsByCategory = (category) => {
  return skills[category] || [];
};

export const getAllSkills = () => {
  return Object.values(skills).flat();
};