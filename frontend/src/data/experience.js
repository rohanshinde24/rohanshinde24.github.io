export const experienceData = [
  {
    company:
      'Amazon, Fulfill to Promise, Supply Chain Optimization Technologies',
    logo: '/assets/logos/amazon.svg',
    location: 'Bellevue, WA',
    role: 'Software Development Engineer Intern',
    type: 'Internship',
    period: 'May 2026 - Aug 2026',
    highlights: [
      'Designed, tested, and deployed a production Model Context Protocol (MCP) server with four Java tools using AWS Lambda, API Gateway, DynamoDB, and S3, achieving over 95% unit test coverage.',
      'Re-engineered retrieval of historical plans from thousands of time-stamped S3 objects per order, replacing paginated listings with DynamoDB date-range queries to accelerate lookup and reduce agent-context usage.',
      'Integrated the MCP with an internal troubleshooting service, accelerating fulfillment-decision analysis for approximately 5,000 internal users and reducing on-call investigation time by 70%, from 50 to 15 minutes.',
      'Owned end-to-end delivery across supply-chain teams, coordinating engineers, PMs, and BI analysts while driving production readiness through AWS CDK and CloudWatch observability.',
    ],
  },
  {
    company: 'University of Southern California - Advancement Services',
    logo: '/assets/logos/usc.svg',
    location: 'Los Angeles, CA',
    role: 'Software Engineer Intern',
    type: 'Internship',
    period: 'May 2025 – Feb 2026',
    highlights: [
      'Built an event-driven Python service using Microsoft Graph webhooks and SQS to turn calendar changes into cited meeting-prep summaries with Claude and idempotent scheduling.',
      'Designed a crash-resumable agent runtime with tool calling, per-task adaptive model routing, and identity and sensitivity guardrails, achieving zero wrong-person or prompt-injection leaks across 30 live-model evaluations.',
      'Reduced p50 latency 10x and cost per request 80% under a 200-meeting load test using versioned TTL caching, prompt caching, Batch API preprocessing, and Redis distributed locking across four service replicas.',
      'Engineered a Python data pipeline integrating Tableau and SharePoint with OAuth and distributed caching for 440+ users across 19 administrative groups.',
    ],
  },
  {
    company: 'DMI Finance',
    logo: '/assets/logos/dmi.svg',
    location: 'Delhi, India',
    role: 'Software Engineer Intern (Full Stack & AI)',
    type: 'Internship',
    period: 'Jul 2024 – Oct 2024',
    highlights: [
      'Optimized a low-latency C++ backend inference service by removing hot-path bottlenecks and improving concurrency, doubling throughput and cutting p95 response time from 500 ms to 250 ms.',
      'Cut synthetic-data generation and labeling turnaround time by 65% by building a hybrid vLLM and Groq pipeline.',
      'Raised precision from 34% to 98% by fine-tuning Llama 3.1 with QLoRA for 35-class transaction classification.',
      'Re-architected a BERT-based NLP pipeline for financial classification with automated training and evaluation workflows.',
    ],
  },
  {
    company: 'ResoluteAI Software',
    logo: '/assets/logos/resolute-ai.svg',
    location: 'Bangalore, India',
    role: 'AI Engineer Intern',
    type: 'Internship',
    period: 'Dec 2023 – May 2024',
    highlights: [
      'Architected a scalable application by delivering FastAPI microservices with Google OAuth 2.0, JWT, and end-to-end HTTPS behind Nginx, added validation, retries, and structured logging',
      'Engineered containerized, scalable embedding services using Pinecone and FAISS for secure vector search, optimizing index configurations to achieve sub-100ms latency and a 20% lift in semantic recall',
    ],
  },
];
