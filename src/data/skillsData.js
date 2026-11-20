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
    { name: "DynamoDB", icon: "/images/logos/dynamodb.svg" }
  ],
  "AI & Evaluation": [
    { name: "Multi-Agent LLMs", icon: "/images/logos/multi-agent-llms.svg" },
    { name: "LLM-as-Judge", icon: "/images/logos/llm-as-judge.svg" },
    { name: "Mosaic AI", icon: "/images/logos/mosaic-ai.svg" },
    { name: "Braintrust", icon: "/images/logos/braintrust.svg" },
    { name: "Scikit-learn", icon: "/images/logos/scikitlearn.svg" },
    { name: "XGBoost", icon: "/images/logos/xgboost.svg" },
    { name: "MLflow", icon: "/images/logos/mlflow.svg" }
  ],
  "BI & Analytics": [
    { name: "Power BI", icon: "/images/logos/powerbi.PNG" },
    { name: "Tableau", icon: "/images/logos/tableau.PNG" },
    { name: "R", icon: "/images/logos/r.PNG" },
    { name: "Streamlit", icon: "/images/logos/streamlit.svg" },
    { name: "Plotly", icon: "/images/logos/plotly.svg" }
  ],
  "App & DevOps": [
    { name: "TypeScript", icon: "/images/logos/typescript.svg" },
    { name: "Git & GitHub", icon: "/images/logos/github.PNG" },
    { name: "CI/CD", icon: "/images/logos/ci-cd.PNG" },
    { name: "Docker", icon: "/images/logos/docker.svg" },
    { name: "REST APIs", icon: "/images/logos/rest-apis.svg" },
    { name: "FastAPI / Flask", icon: "/images/logos/fastapi.svg" }
  ]
};

export const skillCategoryNotes = {
  "Data Engineering & Cloud": "Building scalable ETL pipelines, cloud data warehouses, and automated reporting workflows across AWS, GCP, Snowflake, and Databricks.",
  "AI & Evaluation": "Designing multi-agent LLM workflows, predictive ML pipelines, and LLM-as-Judge governance frameworks for trustworthy AI outputs.",
  "BI & Analytics": "Translating warehouse models into executive Power BI Embedded, Tableau, and interactive Streamlit dashboards.",
  "App & DevOps": "Shipping containerized microservices, TypeScript serverless orchestrations, REST APIs, and repeatable CI/CD releases."
};

export const getSkillCategories = () => Object.keys(skillsData);
