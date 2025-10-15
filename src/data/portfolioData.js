// src/data/portfolioData.js

export const personalInfo = {
  name: "Rohith Krishnamurthy",
  title: "Data Analytics Professional",
  email: "krishnamurthy.ro@northeastern.edu",
  phone: "+1 (617) 755 2053",
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

export const aboutMe = `Hi, I’m Rohith Krishnamurthy — a data professional with a strong foundation in analytics, engineering, and business impact.

I recently completed my Master’s in Analytics from Northeastern University with a perfect 4.0 GPA. I’m currently working as a Data Engineer Intern at Vester, where I lead the development and quality assurance of robust data pipelines and evaluation frameworks for multiple AI models.

Before this, I spent 4+ years at Capgemini, where I advanced from Data Analyst to Senior Data Analyst, translating complex business requirements into data-driven solutions across finance, operations, and product domains.

Here are a few highlights from my journey:
	•	📈 Improved forecasting accuracy by 90% through ML-powered predictive models
	•	📊 Enhanced data accessibility by 15% via interactive dashboards
	•	⚙️ Reduced data processing time by 40% by optimizing ETL workflows

My technical toolkit includes SQL, Python, Tableau, Power BI, TensorFlow, and cloud platforms (AWS, Azure). What sets me apart is my ability to bridge technical execution with real business value.

As a graduate student, I not only deepened my expertise in machine learning and advanced analytics, but also balanced academics with part-time work as a Campus Security Proctor — strengthening my time management and communication skills.

I actively engage in the tech community through events like Techstars Startup Weekend, and I recently completed a capstone project building a cryptocurrency investment assistant that combines deep learning, real-time data pipelines, and natural language interfaces for market analysis.

I’m now looking for full-time roles in predictive analytics, data strategy, or AI-driven decision systems, where I can help organizations turn data into measurable outcomes.

Let’s connect and build something impactful.`;

export const education = [
  {
    degree: "Master of Professional Studies in Analytics",
    specialization: "Applied Machine Intelligence",
    school: "Northeastern University",
    location: "Boston, MA",
    duration: "2023 - 2025",
    gpa: "4.0/4.0",
    coursework: [
      "Machine Learning",
      "Deep Learning",
      "Data Mining",
      "Statistical Analysis",
      "Big Data Analytics"
    ],
    achievements: [
      "4.0 GPA",
      "Campus Security Proctor",
      "TechStars Startup Weekend Participant"
    ]
  },
  {
    degree: "PG Diploma in Data Science",
    specialization: "Data Science",
    school: "International Institute of Information Technology, Bangalore",
    location: "Bangalore, India",
    duration: "2018 - 2019",
    gpa: "3.4/4.0",
    coursework: [
      "Data Visualization",
      "Predictive Analytics I",
      "Predictive analytics II",
      "Statistical Analysis",
      "Big Data Analytics"
    ]
  },
  {
    degree: "Bachelor of Engineering",
    specialization: "Computer Science and Engineering",
    school: "Anna University",
    location: "Chennai, India",
    duration: "2014 - 2018",
    gpa: "3.8/4.0",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Software Engineering",
      "Operating Systems",
      "Computer Networks"
    ],
    achievements: [
      "Dean's List",
      "Technical Club Member"
    ]
  }
];

export const experience = [
  {
    position: "Data Engineer Intern",
    company: "Vester AI",
    location: "Remote, USA",
    duration: "2025 - Present",
    type: "Part-time",
    description: "Led QA, data engineering, and analytics efforts for a crypto-focused AI platform, supporting multi-agent systems for real-time decision making.",
    Responsibilities: [
      "Built Python + Streamlit dashboards for blockchain adoption metrics, improving KPI visibility for leadership by 25%.",
      "Converted fragmented blockchain data into clean, analysis-ready datasets using Web3 APIs, ETL scripts, and SQL, reducing prep time by 40%.",
      "Designed automated SQL pipelines (Airflow + dbt) to feed live dashboards, cutting latency of insights from days to hours.",
      "Participated in explainable AI testing and reasoning traceability for ML models, contributing to improved user trust in crypto advisory tools."
    ],
    technologies: ["Python", "SQL", "Airflow", "dbt", "Streamlit", "PostgreSQL", "MongoDB", "Web3 APIs", "LangChain", "GPT-4", "GCP"]
  },
    {
    position: "Chief of Operations and Data Strategy",
    company: "Boston New Technology",
    location: "Remote, USA",
    duration: "2023 - 2024",
    type: "Part-time",
    description: "Oversaw operations and analytics for 10+ tech events, applying data strategy to drive event growth, sponsor ROI, and audience engagement.",
    Responsibilities: [
      "Built 10+ Tableau dashboards tracking registrations, attendance, and sponsor ROI, boosting event participation by 20%."
      "Analyzed engagement from 5,000+ participants using Python + SQL (survey/A-B testing) to optimize event format and speaker lineups.",
      "Automated reporting workflows with Python scripts, reducing manual reporting effort by 35% and improving error detection.",
      "Designed Excel-based resource allocation model, saving $50K annually while improving sponsor package planning."
    ],
    technologies: ["Python", "SQL", "Tableau", "Excel", "A/B Testing", "Event Analytics"]
  },
  {
    position: "Associate Consultant/Senior Data Analyst",
    company: "Capgemini",
    location: "India",
    duration: "2021 - 2022",
    type: "Full-time",
    description: "Led data initiatives for banking and finance clients, specializing in predictive analytics and business intelligence.",
    Responsibilities: [
      "Automated SQL + Python report generation workflows, saving 15 analyst hours weekly",
      "Built fraud detection models using logistic regression + anomaly detection, achieving 90% accuracy and reducing fraud detection time by 60%",
      "Partnered with cross-functional teams to deploy models into near real-time monitoring, reducing false positives by 15%"
    ],
    technologies: ["Python", "SQL", "Tableau", "Power BI", "AWS", "Machine Learning"]
  },
  {
    position: "Senior Software Engineer/Data Analyst",
    company: "Capgemini",
    location: "India",
    duration: "2020 - 2021",
    type: "Full-time",
    description: "Transformed business requirements into actionable insights for finance and operations teams.",
    Responsibilities: [
      "Built automated reporting systems saving 20 hours per week",
      "Developed SQL pipelines for ETL processes",
      "Created data visualization dashboards for C-level executives",
      "Performed statistical analysis to identify business trends",
      "Collaborated with stakeholders to define KPIs and metrics"
    ],
    technologies: ["SQL", "Python", "Tableau", "Excel", "ETL", "Data Warehousing"]
  },
  {
    position: "Software Engineer/Data Analyst",
    company: "Capgemini",
    location: "India", 
    duration: "2019 - 2020",
    type: "Full-time",
    description: "Started career focusing on software development and data engineering.",
    Responsibilities: [
      "Built a real-time financial risk system analyzing 200K+ daily transactions, improving risk prediction by 30% and enabling near real-time reporting",
      "Integrated financial data across 5 enterprise systems in AWS + Snowflake, cutting latency by 35%",
      "Tuned SQL queries on terabyte-scale DBs, reducing runtime by 40% and report generation time by 65%",
      "Developed forecasting models predicting customer churn/behavior with 85% accuracy, informing retention campaigns",
      "Standardized KPI definitions across 3 departments, ensuring data governance and consistent reporting"
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
    githubUrl: "https://github.com/RohithIyer/AI-SQL-BI-Agent",
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
    githubUrl: "https://github.com/RohithIyer/call-of-duty-analytics",
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
    githubUrl: "https://github.com/RohithIyer/financial-risk-model",
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
