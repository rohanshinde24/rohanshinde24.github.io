import React, { useRef, useState } from 'react';
import ProjectModal from '../components/ProjectModal';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'QueryLens',
    priority: 5,
    description:
      'Full-stack PostgreSQL performance tool with intelligent query optimization.',
    fullDescription:
      'Developed a full-stack PostgreSQL performance tool using Java and Spring Boot, with a REST API for deep query analysis, intelligent pattern detection, and automated rewriting for more efficient execution plans. Architected a modular optimization engine using the Strategy design pattern to rewrite SQL anti-patterns like non-SARGable predicates, reducing query latency over 80% on average by converting full table scans into indexed access paths. Engineered an automated CI/CD pipeline with GitHub Actions and a comprehensive JUnit and Mockito test suite (TDD), achieving 90% code coverage on core optimizer logic.',
    tech: [
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'REST API',
      'Docker',
      'TDD',
      'CI/CD',
      'JUnit',
      'Mockito',
    ],
    link: 'https://github.com/rohanshinde24/QueryLens',
    image: '/images/querylens.svg',
    category: 'Backend Development',
  },
  {
    name: 'RetentionPulse',
    priority: 6,
    description:
      'End-to-end low-latency FastAPI microservices system for customer churn prediction.',
    fullDescription:
      'Engineered an end-to-end, low-latency FastAPI microservices system using asynchronous I/O, connection pooling, and request batching and deploying it via a CI/CD pipeline with automated contract testing (pytest). Owned the full deployment and infrastructure for 4 containerized services, implementing a zero-downtime continuous deployment workflow and managing inter-service communication through a central API gateway.',
    tech: [
      'FastAPI',
      'Python',
      'TypeScript',
      'React',
      'Docker',
      'CI/CD',
      'pytest',
      'LightGBM',
    ],
    link: 'https://github.com/rohanshinde24/RetentionPulse',
    image: '/images/retentionpulse.svg',
    demo: 'https://retentionpulse-1.onrender.com',
    category: 'Full-Stack ML',
  },
  {
    name: 'FinTrackr',
    priority: 7,
    description:
      'Full-stack finance tracker with secure REST API and normalized PostgreSQL schema.',
    fullDescription:
      'Designed and built a full-stack finance tracker, implementing a secure Node.js REST API and a normalized PostgreSQL schema, while achieving 90% test coverage to ensure backend reliability and data integrity. Implemented responsive React frontend with semantic HTML/CSS and accessibility-first design, ensuring WCAG compliance. Containerized with Docker and deployed to Azure App Services via GitHub Actions, reducing deployment time by 70%.',
    tech: [
      'React',
      'Node.js',
      'PostgreSQL',
      'Docker',
      'GitHub Actions',
      'Azure',
      'REST API',
    ],
    link: 'https://github.com/rohanshinde24/FinTrackr',
    image: '/images/fintrackr.svg',
    category: 'Full-Stack Development',
  },
  {
    name: 'GridSweep',
    priority: 8,
    description:
      'Accessible grid game with keyboard controls and comprehensive testing.',
    fullDescription:
      'Grid game implementation built with Next.js 15, React 19, and TypeScript 5. Features first-click safety with intelligent placement algorithms, full keyboard navigation, WCAG 2.1 AA compliance with a 96% Lighthouse accessibility score, and 95%+ test coverage using Jest and Playwright. Includes dark and light themes, Framer Motion animations, and comprehensive E2E testing, with pure functional game logic and immutable state updates.',
    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Jest',
      'Playwright',
      'Vercel',
    ],
    link: 'https://github.com/rohanshinde24/gridsweep',
    image: '/images/gridsweep.png',
    demo: 'https://gridsweep.vercel.app',
    category: 'Frontend Development',
  },
  {
    name: 'Autonomous Kart Racing Agent',
    priority: 10,
    description:
      'Reinforcement learning agents trained in Unity for optimal racing.',
    fullDescription:
      'Designed and trained multi-agent reinforcement-learning karts in Unity using the ML-Agents toolkit. Employed reward shaping and curriculum learning to accelerate convergence, then integrated a TensorFlow backend for policy optimization. The agents achieved a 25% reduction in lap time over baseline, with custom in-engine overlays for performance metrics and behavior inspection.',
    tech: ['Unity ML-Agents', 'Python', 'TensorFlow', 'C#'],
    // link: 'https://github.com/rohan/unity-kart-rl',
    image: '/images/kart-rl.png',
    category: 'Reinforcement Learning',
  },
  {
    name: 'SmartJournal',
    priority: 9,
    description:
      'iOS journaling app with on-device sentiment analysis and LLM summarization.',
    fullDescription:
      "Built a private journaling app powered by on-device sentiment analysis and LLM-generated summaries. Used Core ML and Create ML to train, evaluate, and deploy sentiment models, then visualized emotional trends and journaling behavior using Apple's Charts framework. Integrated App Intents, VoiceOver accessibility, and Live Activities for a native experience.",
    tech: ['Swift', 'SwiftUI', 'Core ML', 'Create ML'],
    // link: 'https://github.com/rohan/SmartJournal',
    image: '/images/smartjournal.png',
    category: 'Mobile Development',
  },
  {
    name: 'LedgerFlow',
    priority: 1,
    description:
      'Financial-operations platform where deterministic services govern every agent-proposed action.',
    fullDescription:
      'Built a financial-operations platform for synthetic small-business data that handles categorization, invoice and payment reconciliation, anomaly detection, and investigation. A Java 21 and Spring Boot core owns monetary precision, accounting invariants, validation, and reconciliation candidates. A separate FastAPI agent service can only use typed read capabilities to investigate ambiguity and return proposals. The design keeps nondeterministic reasoning outside financial state changes, with deterministic validation, escalation, and auditable outcomes at every decision boundary.',
    tech: [
      'Java 21',
      'Spring Boot',
      'Python',
      'FastAPI',
      'Next.js',
      'PostgreSQL',
      'Docker',
      'REST API',
    ],
    image: '/images/ledgerflow.svg',
    category: 'Full-Stack Systems',
  },
  {
    name: 'CareRoute',
    priority: 2,
    description:
      'Safety-first referral coordination with bounded model assistance and deterministic workflow control.',
    fullDescription:
      'Built a synthetic-data referral-coordination system that places model reasoning at bounded ambiguity points without allowing it to control workflow state or booking. Two FastAPI services own separate PostgreSQL domains and communicate through a typed HTTP gateway. Booking remains a single, confirmation-gated, idempotent transaction in the provider domain. Durable Inngest workflows, transactional outboxes relayed through Redis Streams, and OpenTelemetry traces support recovery and auditability. Every model proposal is schema-constrained, limited to observed candidates, deterministically validated, and fails closed to human review when invalid or uncertain.',
    tech: [
      'Python',
      'FastAPI',
      'Next.js',
      'PostgreSQL',
      'Redis',
      'Inngest',
      'LangGraph',
      'OpenTelemetry',
      'Docker',
    ],
    link: 'https://github.com/rohanshinde24/CareRoute',
    image: '/images/careroute.svg',
    category: 'Full-Stack Systems',
  },
  {
    name: 'RepoShift',
    priority: 3,
    description:
      'Failure-aware code migration system with durable task execution and isolated repair sandboxes.',
    fullDescription:
      'Built a code-migration control plane that plans repository changes as dependency-aware tasks, executes edits in isolated Docker worktrees, and validates them against tests. PostgreSQL coordinates task claims with row locks, expiring leases, fencing tokens, durable checkpoints, and cancellation. Bounded repair attempts run against a recorded source snapshot. GitHub publication is opt-in, produces draft pull requests only, and reconciles ambiguous responses rather than duplicating remote changes. Local validation covers worker replacement, stale-result fencing, duplicate delivery, cancellation, bounded retries, and sandbox constraints.',
    tech: [
      'TypeScript',
      'Fastify',
      'PostgreSQL',
      'Docker',
      'Azure OpenAI',
      'GitHub API',
    ],
    image: '/images/reposhift.svg',
    category: 'Developer Infrastructure',
  },
  {
    name: 'Orbit',
    priority: 4,
    description:
      'Distributed job scheduler with leader election, worker leases, and fenced assignments.',
    fullDescription:
      'Built a fault-tolerant distributed job scheduler in Java using gRPC, PostgreSQL, and a three-member etcd cluster for leader election. Worker leases reclaim abandoned work, while fencing tokens reject stale completions after reassignment. The scheduler sustained 1,086 dispatches per second at 112.6 ms p99 across eight workers in a contended local Docker environment, and recovered from nine consecutive leader kills with a 2.9-second median handover. Fault-injection tests cover killed and frozen workers, stale completions, duplicate acknowledgements, and leader failover.',
    tech: [
      'Java',
      'gRPC',
      'PostgreSQL',
      'etcd',
      'Prometheus',
      'OpenTelemetry',
      'Docker',
    ],
    link: 'https://github.com/rohanshinde24/Orbit',
    image: '/images/orbit.svg',
    category: 'Distributed Systems',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const lastTriggerRef = useRef(null);
  const orderedProjects = [...projects].sort((a, b) => a.priority - b.priority);
  const featuredProjects = orderedProjects.filter(
    (project) => project.priority <= 6
  );
  const earlierProjects = orderedProjects.filter(
    (project) => project.priority > 6
  );

  const openProject = (project, trigger) => {
    lastTriggerRef.current = trigger;
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
    window.requestAnimationFrame(() => lastTriggerRef.current?.focus());
  };

  return (
    <div className="w-full py-12 sm:py-20 px-4 sm:px-6 bg-surface dark:bg-surface-dark">
      <h2 className="font-display text-4xl sm:text-5xl font-semibold mb-3 text-ink dark:text-ink-dark text-center">
        Featured Engineering Projects
      </h2>
      <p className="max-w-2xl mx-auto mb-8 sm:mb-12 text-center text-muted dark:text-muted-dark">
        Systems and developer tooling built around correctness, recovery, and
        measurable performance.
      </p>

      <div className="grid gap-8 sm:gap-12 md:grid-cols-2 max-w-6xl mx-auto">
        {featuredProjects.map((project) => (
          <motion.button
            key={project.name}
            type="button"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            onClick={(event) => openProject(project, event.currentTarget)}
            aria-haspopup="dialog"
            className="w-full p-6 sm:p-8 rounded-lg bg-canvas dark:bg-canvas-dark border border-line dark:border-line-dark cursor-pointer hover:border-accent dark:hover:border-accent-dark transition-colors duration-200 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-accent-dark"
          >
            {project.image && (
              <div className="relative mb-4 sm:mb-6">
                <img
                  src={project.image}
                  alt=""
                  className="w-full h-40 sm:h-48 object-cover rounded-md border border-line dark:border-line-dark"
                />
                <div className="absolute top-2 right-2">
                  <span className="px-2 py-1 text-xs font-medium bg-surface/95 dark:bg-surface-dark/95 text-ink dark:text-ink-dark border border-line dark:border-line-dark rounded">
                    {project.category}
                  </span>
                </div>
              </div>
            )}
            <h3 className="font-display text-2xl font-semibold text-ink dark:text-ink-dark mb-3">
              {project.name}
            </h3>
            <p className="text-muted dark:text-muted-dark mb-4 text-sm sm:text-base">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs bg-accent-soft dark:bg-accent-darkSoft text-muted dark:text-muted-dark rounded"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 4 && (
                <span className="px-2 py-1 text-xs bg-accent-soft dark:bg-accent-darkSoft text-muted dark:text-muted-dark rounded">
                  +{project.tech.length - 4} more
                </span>
              )}
            </div>
            {project.demo && (
              <div className="text-sm text-accent dark:text-accent-dark font-medium">
                Live demo available
              </div>
            )}
          </motion.button>
        ))}
      </div>

      <section
        className="max-w-6xl mx-auto mt-16 sm:mt-24"
        aria-labelledby="earlier-projects-heading"
      >
        <h3
          id="earlier-projects-heading"
          className="font-display text-3xl sm:text-4xl font-semibold mb-3 text-ink dark:text-ink-dark"
        >
          Earlier Projects
        </h3>
        <p className="mb-8 text-muted dark:text-muted-dark">
          Additional work across product engineering, accessibility, mobile, and
          reinforcement learning.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {earlierProjects.map((project) => (
            <motion.button
              key={project.name}
              type="button"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              onClick={(event) => openProject(project, event.currentTarget)}
              aria-haspopup="dialog"
              className="w-full p-5 sm:p-6 rounded-lg bg-canvas dark:bg-canvas-dark border border-line dark:border-line-dark cursor-pointer hover:border-accent dark:hover:border-accent-dark transition-colors duration-200 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-accent-dark"
            >
              {project.image && (
                <div className="relative mb-4">
                  <img
                    src={project.image}
                    alt=""
                    className="w-full h-40 object-cover rounded-md border border-line dark:border-line-dark"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="px-2 py-1 text-xs font-medium bg-surface/95 dark:bg-surface-dark/95 text-ink dark:text-ink-dark border border-line dark:border-line-dark rounded">
                      {project.category}
                    </span>
                  </div>
                </div>
              )}
              <h4 className="font-display text-xl font-semibold text-ink dark:text-ink-dark mb-2">
                {project.name}
              </h4>
              <p className="text-muted dark:text-muted-dark text-sm mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-accent-soft dark:bg-accent-darkSoft text-muted dark:text-muted-dark rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={closeProject} />
    </div>
  );
}
