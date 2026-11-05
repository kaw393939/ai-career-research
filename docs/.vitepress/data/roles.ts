export const roles = [
  {
    "id": "ai-engineer",
    "number": "01",
    "title": "AI engineer",
    "field": "Software & applications",
    "category": "Build products",
    "classification": "AI-focused specialty",
    "description": "Build useful AI features in reliable applications.",
    "skills": [
      "Python / TypeScript",
      "APIs",
      "Evaluation"
    ],
    "foundations": [
      "Software engineering",
      "Testing"
    ],
    "change": "Model behavior becomes part of application quality.",
    "tag": "SOFTWARE & APPLICATIONS",
    "icon": "↗",
    "color": "green",
    "link": "/roles/ai-engineer.html"
  },
  {
    "id": "forward-deployed-engineer",
    "number": "02",
    "title": "Forward-deployed engineer",
    "field": "Customer & product",
    "category": "Work with customers",
    "classification": "Established role with AI responsibilities",
    "description": "Deliver software alongside customers and their operational constraints.",
    "skills": [
      "Integration",
      "Discovery",
      "Communication"
    ],
    "foundations": [
      "Full-stack development",
      "Delivery"
    ],
    "change": "Some deployments now include models and agents; the role is not inherently AI-only.",
    "tag": "CUSTOMER & PRODUCT",
    "icon": "↗",
    "color": "orange",
    "link": "/roles/forward-deployed-engineer.html"
  },
  {
    "id": "llm-engineer",
    "number": "03",
    "title": "LLM engineer",
    "field": "Software & applications",
    "category": "Build products",
    "classification": "Overlapping employer title",
    "description": "Build retrieval, tool use and evaluation for language applications.",
    "skills": [
      "RAG",
      "Tool use",
      "Evaluation"
    ],
    "foundations": [
      "Backend development",
      "Information retrieval"
    ],
    "change": "Language-model reliability and context pipelines add specific concerns.",
    "tag": "SOFTWARE & APPLICATIONS",
    "icon": "↗",
    "color": "purple",
    "link": "/roles/llm-engineer.html"
  },
  {
    "id": "ml-engineer",
    "number": "04",
    "title": "ML engineer",
    "field": "Data & models",
    "category": "Models & quality",
    "classification": "Established role with AI responsibilities",
    "description": "Train, serve and maintain models using repeatable pipelines.",
    "skills": [
      "Python / SQL",
      "ML pipelines",
      "Monitoring"
    ],
    "foundations": [
      "Statistics",
      "Software systems"
    ],
    "change": "Foundation models broaden an established production-ML discipline.",
    "tag": "DATA & MODELS",
    "icon": "↗",
    "color": "blue",
    "link": "/roles/ml-engineer.html"
  },
  {
    "id": "ai-evaluation-engineer",
    "number": "05",
    "title": "AI evaluation engineer",
    "field": "Quality & reliability",
    "category": "Models & quality",
    "classification": "AI-focused specialty",
    "description": "Measure model failures, regressions and task performance.",
    "skills": [
      "Test design",
      "Statistics",
      "Failure analysis"
    ],
    "foundations": [
      "Experimental design",
      "Testing"
    ],
    "change": "Open-ended model behavior requires explicit rubrics and judgment.",
    "tag": "QUALITY & RELIABILITY",
    "icon": "↗",
    "color": "pink",
    "link": "/roles/ai-evaluation-engineer.html"
  },
  {
    "id": "ai-solutions-architect",
    "number": "06",
    "title": "AI solutions architect",
    "field": "Customer & product",
    "category": "Work with customers",
    "classification": "Established role with AI responsibilities",
    "description": "Connect organizational needs to operable AI systems.",
    "skills": [
      "Cloud design",
      "Tradeoffs",
      "Communication"
    ],
    "foundations": [
      "Architecture",
      "Consulting"
    ],
    "change": "Model, data and evaluation decisions join existing architecture work.",
    "tag": "CUSTOMER & PRODUCT",
    "icon": "↗",
    "color": "yellow",
    "link": "/roles/ai-solutions-architect.html"
  },
  {
    "id": "ai-platform-engineer",
    "number": "07",
    "title": "AI platform / inference engineer",
    "field": "Cloud & platform",
    "category": "Models & quality",
    "classification": "Overlapping employer title",
    "description": "Build infrastructure for model serving and training.",
    "skills": [
      "Distributed systems",
      "Inference",
      "Observability"
    ],
    "foundations": [
      "Linux",
      "Cloud infrastructure"
    ],
    "change": "Accelerators, model serving and context platforms change system constraints.",
    "tag": "CLOUD & PLATFORM",
    "icon": "↗",
    "color": "green",
    "link": "/roles/ai-platform-engineer.html"
  },
  {
    "id": "ai-automation-engineer",
    "number": "08",
    "title": "AI agents / automation engineer",
    "field": "Software & applications",
    "category": "Build products",
    "classification": "Overlapping employer title",
    "description": "Connect models, tools and human review to bounded workflows.",
    "skills": [
      "APIs",
      "Agents",
      "Testing"
    ],
    "foundations": [
      "Process analysis",
      "Backend development"
    ],
    "change": "Probabilistic tool selection adds permission and evaluation concerns.",
    "tag": "SOFTWARE & APPLICATIONS",
    "icon": "↗",
    "color": "orange",
    "link": "/roles/ai-automation-engineer.html"
  },
  {
    "id": "ai-product-manager",
    "number": "09",
    "title": "AI product manager",
    "field": "Customer & product",
    "category": "Work with customers",
    "classification": "Established role with AI responsibilities",
    "description": "Define user value, priorities and evaluation criteria.",
    "skills": [
      "Discovery",
      "Requirements",
      "Evaluation"
    ],
    "foundations": [
      "Product ownership",
      "Domain knowledge"
    ],
    "change": "Value and acceptance criteria must account for uncertain outputs.",
    "tag": "CUSTOMER & PRODUCT",
    "icon": "↗",
    "color": "purple",
    "link": "/roles/ai-product-manager.html"
  },
  {
    "id": "responsible-ai-engineer",
    "number": "10",
    "title": "Responsible AI / governance",
    "field": "Security & governance",
    "category": "Models & quality",
    "classification": "Overlapping employer title",
    "description": "Integrate controls, incident response and risk documentation.",
    "skills": [
      "Risk analysis",
      "Controls",
      "Communication"
    ],
    "foundations": [
      "Governance",
      "Systems support"
    ],
    "change": "AI use cases add model-specific risks to established controls.",
    "tag": "SECURITY & GOVERNANCE",
    "icon": "↗",
    "color": "blue",
    "link": "/roles/responsible-ai-engineer.html"
  },
  {
    "id": "ai-security-engineer",
    "number": "11",
    "title": "AI security engineer",
    "field": "Security & governance",
    "category": "Models & quality",
    "classification": "AI-focused specialty",
    "description": "Secure AI adoption, agent integrations and sensitive data.",
    "skills": [
      "Threat modeling",
      "IAM",
      "Security automation"
    ],
    "foundations": [
      "Cybersecurity",
      "Cloud security"
    ],
    "change": "Prompt injection, tool permissions and shadow AI expand the threat model.",
    "tag": "SECURITY & GOVERNANCE",
    "icon": "↗",
    "color": "pink",
    "link": "/roles/ai-security-engineer.html"
  },
  {
    "id": "ai-network-engineer",
    "number": "12",
    "title": "AI infrastructure network engineer",
    "field": "Networking & telecom",
    "category": "Work with customers",
    "classification": "Established role with AI responsibilities",
    "description": "Design networks that carry AI training and inference workloads.",
    "skills": [
      "Routing",
      "Optics",
      "Automation"
    ],
    "foundations": [
      "TCP/IP",
      "Network design"
    ],
    "change": "AI compute creates new workload and capacity constraints; routing foundations remain.",
    "tag": "NETWORKING & TELECOM",
    "icon": "↗",
    "color": "yellow",
    "link": "/roles/ai-network-engineer.html"
  },
  {
    "id": "ai-quality-engineer",
    "number": "13",
    "title": "AI-assisted network QA engineer",
    "field": "Quality & reliability",
    "category": "Models & quality",
    "classification": "Established role with AI responsibilities",
    "description": "Validate wireless systems with automation and AI-assisted tools.",
    "skills": [
      "Python",
      "Network testing",
      "Debugging"
    ],
    "foundations": [
      "Test design",
      "Networking"
    ],
    "change": "AI assistance changes workflow without making every test role a new occupation.",
    "tag": "QUALITY & RELIABILITY",
    "icon": "↗",
    "color": "green",
    "link": "/roles/ai-quality-engineer.html"
  },
  {
    "id": "ai-data-engineer",
    "number": "14",
    "title": "Data engineering & applied AI",
    "field": "Data & models",
    "category": "Build products",
    "classification": "Established role with AI responsibilities",
    "description": "Prepare trustworthy datasets and pipelines for analytics and models.",
    "skills": [
      "SQL",
      "ETL",
      "Data quality"
    ],
    "foundations": [
      "Databases",
      "Data engineering"
    ],
    "change": "Model inputs make data quality and reproducibility especially visible.",
    "tag": "DATA & MODELS",
    "icon": "↗",
    "color": "orange",
    "link": "/roles/ai-data-engineer.html"
  },
  {
    "id": "physical-ai-engineer",
    "number": "15",
    "title": "Physical AI / autonomy delivery",
    "field": "Embedded & robotics",
    "category": "Work with customers",
    "classification": "Overlapping employer title",
    "description": "Integrate autonomy tools with customer systems and robotics.",
    "skills": [
      "C++ / Python",
      "Robotics",
      "Systems integration"
    ],
    "foundations": [
      "Embedded systems",
      "Software integration"
    ],
    "change": "AI-enabled physical products combine model behavior with real-world systems constraints.",
    "tag": "EMBEDDED & ROBOTICS",
    "icon": "↗",
    "color": "purple",
    "link": "/roles/physical-ai-engineer.html"
  }
] as const
