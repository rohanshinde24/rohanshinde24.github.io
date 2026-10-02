import SectionWrapper from './SectionWrapper';

const SKILL_CATEGORIES = [
  {
    name: 'Languages',
    skills: ['Python', 'Java', 'C++', 'TypeScript', 'JavaScript', 'SQL', 'Go'],
  },
  {
    name: 'Backend & APIs',
    skills: ['FastAPI', 'Spring Boot', 'React', 'REST APIs', 'gRPC'],
  },
  {
    name: 'Databases & Storage',
    skills: ['PostgreSQL', 'Redis', 'DynamoDB', 'Elasticsearch', 'S3'],
  },
  {
    name: 'Cloud & Infrastructure',
    skills: [
      'AWS',
      'Docker',
      'SQS',
      'Terraform',
      'GitHub Actions',
      'OpenTelemetry',
      'Linux',
      'Git',
    ],
  },
  {
    name: 'AI & Agent Systems',
    skills: [
      'LLMs',
      'Tool Calling',
      'Model Routing',
      'RAG',
      'LLM Evaluation',
      'LangGraph',
    ],
  },
  {
    name: 'Engineering',
    skills: [
      'Data Structures & Algorithms',
      'System Design',
      'Distributed Systems',
      'Concurrency',
      'Fault Tolerance',
    ],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="py-12">
      <h2 className="font-display text-4xl sm:text-5xl font-semibold text-center mb-10 text-ink dark:text-ink-dark">
        Technical Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto text-left">
        {SKILL_CATEGORIES.map((category) => (
          <article
            key={category.name}
            className="bg-surface dark:bg-surface-dark border border-line dark:border-line-dark rounded-lg p-5"
          >
            <h3 className="font-display text-2xl font-semibold text-ink dark:text-ink-dark mb-4">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs bg-accent-soft dark:bg-accent-darkSoft text-muted dark:text-muted-dark rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
