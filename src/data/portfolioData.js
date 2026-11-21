// src/data/portfolioData.js

export const personalInfo = {
  name: "Rohith Krishnamurthy",
  title: "Data Engineer & AI Systems Builder",
  email: "rsr.kvk@gmail.com",
  phone: "+1 617 755 2053",
  location: "Seattle, WA",
  linkedin: "https://www.linkedin.com/in/rohkrish5915/",
  github: "https://github.com/RohithIyer",
  resume: "/resume/Rohith_Krishnamurthy_Resume.pdf",
  profileImage: "/images/profile.jpg"
};

export const heroImages = [
  "/images/IMG_9820.jpg",
  "/images/PXL_20231217_183716220.jpg",
  "/images/50403844_00201_0523_XLarge~2.jpg",
  "/images/50403844_00301_0532_Medium.jpg"
];

export const aboutMe = `I design end-to-end data platforms and AI systems that hold up in production.

Over 6+ years across consulting, fintech, and AI startups, my work has centered on the layer between raw data and real decisions—turning fragmented APIs, warehouses, and LLM prototypes into dependable pipelines, governed evaluation loops, and decision-ready analytics.

**How I approach data engineering:**
• Treat data quality, schema checks, and environment parity as first-class engineering requirements, not afterthoughts
• Build modular, serverless, and cloud-native pipelines that scale cleanly without manual babysitting
• Pair generative AI and multi-agent workflows with structured evaluation (LLM-as-Judge, governance checks) so outputs are trustworthy

**What you'll find here:**
Instead of repeating my resume line-by-line, this portfolio highlights the system architectures I work on, the engineering patterns behind my roles, and deep-dive project case studies. If you want the formal timeline, you can view or download my resume below.`;

export const experience = [
  {
    id: 1,
    position: "Data Engineer Trainee",
    company: "Neoware AI",
    location: "Remote, USA",
    duration: "Apr 2026 - Present",
    theme: "Serverless Reporting & ML Governance",
    focus: "Architecting event-driven reporting pipelines and release guardrails that connect Databricks SQL, serverless AWS workflows, and embedded business intelligence.",
    systemsBuilt: [
      "Serverless transformation & scheduling orchestration across AWS Lambda, TypeScript, DynamoDB, and Databricks SQL",
      "Unified data refresh plumbing linking REST APIs, Databricks workflows, and Power BI Embedded dashboards",
      "Systematic DEV-to-QA environment diff checks and repeatable deployment verification",
      "Governance control & evaluation reviews across Mosaic AI, Aether, and Braintrust"
    ],
    technologies: ["AWS Lambda", "TypeScript", "DynamoDB", "Databricks SQL", "Power BI Embedded", "REST APIs", "Mosaic AI", "Braintrust"]
  },
  {
    id: 2,
    position: "Software Development & Data Analytics Intern",
    company: "Vester AI",
    location: "Remote, USA",
    duration: "Jul 2025 - Mar 2026",
    theme: "Cloud ETL & Multi-Agent LLM Systems",
    focus: "Scaling cloud-native crypto data infrastructure on GCP while building natural-language analytics agents backed by automated evaluation pipelines.",
    systemsBuilt: [
      "Automated Python & SQL ingestion pipelines on GCP unifying multi-source market and API feeds",
      "Scheduled data quality monitoring to catch missing values, format drift, and duplicates across warehouse tables",
      "Multi-agent LLM coordination translating natural language into validated SQL and interactive charts",
      "LLM-as-Judge scoring workflows with reference summaries to verify factual grounding"
    ],
    technologies: ["Python", "SQL", "GCP", "PostgreSQL", "Multi-Agent LLMs", "LLM-as-Judge", "Streamlit"]
  },
  {
    id: 3,
    position: "Senior Data Analyst & Data Analyst",
    company: "Capgemini",
    location: "Chennai, India",
    duration: "Mar 2019 - Oct 2022",
    theme: "Enterprise Financial Pipelines & Warehouse Tuning",
    focus: "Engineering high-volume financial risk and operational pipelines on AWS and Snowflake, focused on query performance, data standardization, and repeatable model releases.",
    systemsBuilt: [
      "High-volume financial transaction ETL and feature pipelines on AWS Glue, Lambda, Redshift, and Snowflake",
      "Warehouse performance tuning through query restructuring, early filtering, indexing, and partitioning",
      "Cross-department service and risk analytics views with automated format validation",
      "Automated model packaging, publishing, and pre-release deployment checks"
    ],
    technologies: ["AWS Glue", "AWS Redshift", "AWS Lambda", "Snowflake", "SQL", "Python", "Tableau", "Power BI"]
  }
];

export const education = [
  {
    id: 1,
    degree: "Master of Professional Studies: Analytics",
    school: "Northeastern University",
    location: "Boston, MA",
    duration: "Sep 2023 - Mar 2025"
  },
  {
    id: 2,
    degree: "Post Graduate Diploma in Data Science",
    school: "IIIT Bangalore & upGrad",
    location: "Bengaluru, IN",
    duration: "Sep 2018 - May 2019"
  },
  {
    id: 3,
    degree: "B.S. in Computer Science",
    school: "Anna University",
    location: "Coimbatore, IN",
    duration: "Aug 2014 - Apr 2018"
  }
];

export const certifications = [
  {
    id: 1,
    name: "Tableau Desktop Specialist",
    issuer: "Tableau Certification"
  }
];

export const projects = [
  {
    id: 1,
    title: "AI SQL Business Intelligence Agent",
    category: "AI/Automation",
    description: "A microservice-backed NL-to-SQL assistant that converts plain-English business questions into validated SQL queries and interactive visualizations.",
    problem: "Non-technical stakeholders often wait on engineering queues for ad-hoc metrics, while naive LLM-to-SQL prototypes fail silently on schema mismatches or malformed queries.",
    architecture: "Built a containerized Flask/Python service that parses user intent against live schema metadata, generates SQL via LLM prompts, runs a validation and retry layer to catch syntax/execution errors, and returns formatted tables and Chart.js visuals.",
    technologies: ["Python", "Flask", "Docker", "SQL", "OpenAI GPT", "JavaScript", "Chart.js"],
    images: [
      "/images/sql-agent-main.JPG",
      "/images/sql-agent-explanation.JPG",
      "/images/sql-agent-generated-query.JPG",
      "/images/sql-agent-results.JPG",
      "/images/sql-agent-schema.JPG",
      "/images/sql-agent-optimization.JPG"
    ],
    features: [
      "Natural-language prompt parsing and schema-aware SQL generation",
      "Built-in SQL validation and automatic retry loop reducing query failures by 30%",
      "Dockerized microservice architecture ready for multi-cloud deployment",
      "Multi-source data support (CSV, Excel, JSON, URLs) with interactive charting",
      "Query history tracking, dark mode, and keyboard shortcuts"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/RohithIyer/ai-sql-bi-agent",
    date: "2024"
  },
  {
    id: 2,
    title: "Enhanced Privacy Policy Analyzer",
    category: "AI/NLP",
    description: "An AI-powered compliance and readability tool that parses dense privacy policies into structured risk scores, regulatory checks, and interactive Q&A.",
    problem: "Privacy policies are intentionally dense legal documents, making it difficult for users and compliance reviewers to spot data-sharing risks or GDPR/CCPA gaps quickly.",
    architecture: "Combined URL/PDF ingestion with a Flask backend and React UI that chunks policy text, evaluates six privacy dimensions with GPT-4, computes readability scores, and persists analysis history in SQLite.",
    technologies: ["React", "Python", "Flask", "GPT-4", "SQLite", "Tailwind CSS"],
    images: [
      "/images/privacy-analyzer-main.JPG",
      "/images/privacy-analyzer-dashboard.JPG",
      "/images/privacy-analyzer-enhanced.JPG",
      "/images/privacy-analyzer-results.JPG"
    ],
    features: [
      "Multi-dimensional privacy risk scoring across 6 core areas",
      "Automated GDPR and CCPA regulatory compliance checks",
      "Interactive follow-up chatbot grounded in the uploaded policy",
      "Supports direct URL scraping as well as PDF document uploads",
      "Readability and legal complexity metrics dashboard"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/RohithIyer/enhanced_privacy_policy_analyzer",
    date: "2024"
  },
  {
    id: 3,
    title: "Financial Risk Prediction System",
    category: "Finance/ML",
    description: "End-to-end credit default modeling pipeline on 500K+ records featuring automated MLflow retraining and stakeholder risk dashboards.",
    problem: "Static credit scoring models degrade as borrower behavior shifts, and black-box predictions struggle to earn adoption from risk teams without interpretability.",
    architecture: "Engineered 50+ financial indicators from 500K+ lending records, trained XGBoost and LSTM ensemble models tracked via MLflow for automated retraining, and paired outputs with SHAP explainability and Tableau risk dashboards.",
    technologies: ["Python", "XGBoost", "LSTM", "MLflow", "SQL", "Tableau"],
    images: [
      "/images/financial-risk.jpg",
      "/images/financial-model-learning-curve1.jpg",
      "/images/financial-model-learning-curve2.jpg",
      "/images/financial-default-by-purpose.jpg",
      "/images/financial-status-by-amount.jpg"
    ],
    features: [
      "Trained on 500K+ records, improving loan approval predictions by 15%",
      "Maintained 92% prediction accuracy via automated MLflow retraining",
      "Feature importance and SHAP interpretability for transparent risk scoring",
      "Executive risk dashboards that drove a 65% lift in stakeholder adoption"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/RohithIyer/ProjectRepository",
    date: "2024"
  },
  {
    id: 4,
    title: "Taxi Service Optimization & Workflow Automation",
    category: "Machine Learning",
    description: "Demand and revenue forecasting system on NYC TLC trip data with automated KPI alerting and fleet allocation insights.",
    problem: "Urban mobility operators lose revenue when fleet supply lags peak demand zones, yet manual reporting reacts too late to shifting hourly patterns.",
    architecture: "Built a time-series and gradient-boosted forecasting pipeline in Python (XGBoost & Scikit-learn) feeding a Streamlit + Plotly operational console with threshold-based KPI alerts.",
    technologies: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Streamlit", "Plotly"],
    images: [
      "/images/demand_forecast.JPG",
      "/images/demand_trend_chart.JPG",
      "/images/revenue_forecast.JPG",
      "/images/revenue_trend_chart.JPG",
      "/images/efficiency_metrics.JPG"
    ],
    features: [
      "Trip demand and revenue forecasting with 90% accuracy on NYC TLC data",
      "Automated KPI monitoring and anomaly alerting for operations teams",
      "Interactive Streamlit dashboard for zone-level fleet allocation",
      "Model accuracy tracking across demand and revenue horizons"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/RohithIyer/taxi-service-optimization",
    date: "2024"
  },
  {
    id: 5,
    title: "Call of Duty Analytics Platform",
    category: "Gaming Analytics",
    description: "Player behavior, monetization, and transaction fraud analytics platform built with a FastAPI backend and live Streamlit dashboards.",
    problem: "Live-service games generate high-velocity telemetry and in-game transactions where churn signals and fraudulent purchases must be surfaced quickly.",
    architecture: "Designed a decoupled FastAPI data service backed by Pandas/ML anomaly routines, serving segmented player cohorts, revenue funnels, and fraud alerts to an interactive Plotly/Streamlit UI.",
    technologies: ["Python", "FastAPI", "Streamlit", "Plotly", "Pandas", "Machine Learning"],
    images: [
      "/images/dashboard_header.JPG",
      "/images/forecast_insights.JPG",
      "/images/model_revenue_accuracy.JPG"
    ],
    features: [
      "Player cohort segmentation and retention behavior analysis",
      "In-game transaction and monetization funnel tracking",
      "Automated anomaly and fraud detection on transaction streams",
      "REST API backend decoupled from the interactive analytics frontend"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/RohithIyer/cod-analytics-platform",
    date: "2023"
  },
  {
    id: 6,
    title: "Airbnb Market Analysis Dashboard",
    category: "Data Visualization",
    description: "Geospatial and seasonal pricing intelligence for the Austin short-term rental market using SQL and Tableau.",
    problem: "Property hosts and investors lack clear visibility into how neighborhood, seasonality, and room type jointly affect nightly rates and occupancy ROI.",
    architecture: "Cleaned and aggregated Austin listing datasets in SQL and Python, then authored an interactive Tableau workbook linking neighborhood hotspots, pricing boxplots, and seasonal trends.",
    technologies: ["SQL", "Tableau", "Python", "Pandas", "Statistical Analysis"],
    images: [
      "/images/airbnb-dashboard.jpg",
      "/images/airbnb-hotspot-map.jpg",
      "/images/airbnb-pricing-boxplot.jpg",
      "/images/airbnb-seasonal-trends.jpg",
      "/images/airbnb-hosts-chart.jpg"
    ],
    features: [
      "Neighborhood-level pricing benchmarks and hotspot mapping",
      "Seasonal demand curves and peak pricing window analysis",
      "Host performance and superhost conversion metrics",
      "Property-type ROI comparison for investment decision-making"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/RohithIyer/ProjectRepository/tree/main/Airbnb%20Dashboard",
    date: "2023"
  }
];

export const projectsData = projects;

export const getProjectById = (id) => {
  return projects.find(project => project.id === parseInt(id, 10));
};

export const getProjectsByCategory = (category) => {
  if (category === 'All') return projects;
  return projects.filter(project => project.category === category);
};

export const getCategories = () => {
  return ['All', ...new Set(projects.map(project => project.category))];
};
