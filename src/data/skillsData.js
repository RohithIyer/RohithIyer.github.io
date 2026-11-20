// src/data/skillsData.js

export const skillsData = {
  "Data Engineering & Cloud": [
    { name: "SQL", icon: "/images/logos/sql.PNG" },
    { name: "Python", icon: "/images/logos/python.PNG" },
    { name: "AWS", icon: "/images/logos/aws.PNG" },
    { name: "Databricks", icon: "/images/logos/databricks.PNG" },
    { name: "Snowflake", icon: "/images/logos/snowflake.PNG" },
    { name: "GCP", icon: "/images/logos/gcp.PNG" },
    { name: "Azure", icon: "/images/logos/azure.PNG" },
    { name: "DynamoDB", badge: "DB" }
  ],
  "AI & Evaluation": [
    { name: "Multi-Agent LLMs", badge: "AI" },
    { name: "LLM-as-Judge", badge: "EV" },
    { name: "Mosaic AI", badge: "MA" },
    { name: "Braintrust", badge: "BT" },
    { name: "Scikit-learn", badge: "ML" },
    { name: "XGBoost", badge: "XG" },
    { name: "MLflow", badge: "MF" }
  ],
  "BI & Analytics": [
    { name: "Power BI", icon: "/images/logos/powerbi.PNG" },
    { name: "Tableau", icon: "/images/logos/tableau.PNG" },
    { name: "R", icon: "/images/logos/r.PNG" },
    { name: "Streamlit", badge: "ST" },
    { name: "Plotly", badge: "PL" }
  ],
  "App & DevOps": [
    { name: "TypeScript", badge: "TS" },
    { name: "Git & GitHub", icon: "/images/logos/github.PNG" },
    { name: "CI/CD", icon: "/images/logos/ci-cd.PNG" },
    { name: "Docker", badge: "DK" },
    { name: "REST APIs", badge: "API" },
    { name: "FastAPI / Flask", badge: "PY" }
  ]
};

export const getSkillCategories = () => Object.keys(skillsData);
