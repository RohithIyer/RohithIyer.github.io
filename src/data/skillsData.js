// src/data/skillsData.js

export const skillsData = {
  "Core Tools": [
    {
      name: "SQL",
      level: 95,
      icon: "/images/logos/sql.png"
    },
    {
      name: "Python",
      level: 90,
      icon: "/images/logos/python.png"
    },
    {
      name: "R",
      level: 80,
      icon: "/images/logos/r.png"
    },
    {
      name: "Tableau",
      level: 85,
      icon: "/images/logos/tableau.png"
    },
    {
      name: "Power BI",
      level: 80,
      icon: "/images/logos/powerbi.png"
    },
    {
      name: "Azure",
      level: 70,
      icon: "/images/logos/azure.png"
    },
    {
      name: "AWS",
      level: 70,
      icon: "/images/logos/aws.png"
    },
    {
      name: "Snowflake",
      level: 75,
      icon: "/images/logos/snowflake.png"
    },
    {
      name: "Databricks",
      level: 70,
      icon: "/images/logos/databricks.png"
    },
    {
      name: "GitHub",
      level: 85,
      icon: "/images/logos/github.png"
    }
  ]
};

export const getSkillCategories = () => Object.keys(skillsData);
