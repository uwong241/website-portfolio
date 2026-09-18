import { Skill } from '../types';

export const skills: Skill[] = [
  {
    category: 'Frontend',
    items: [
      'React', 'React Router', 'TypeScript', 'Next.js',
      'Tailwind CSS', 'Framer Motion', 'WASM for UI',
      'Tree Shaking', 'Performance Tuning',
    ],
  },
  {
    category: 'Backend',
    items: [
      'Node.js', 'Express', 'Fastify',
      'PostgreSQL', 'Redis', 'Elasticsearch',
      'GraphQL', 'REST APIs',
    ],
  },
  {
    category: 'Tools & Deploy',
    items: [
      'Docker', 'Kubernetes', 'AWS',
      'Vercel', 'Netlify',
      'CI/CD pipelines', 'Jest, Vitest',
    ],
  },
  {
    category: 'Algorithms',
    items: [
      'Data Structures', 'Algorithms',
      'Complexity Analysis', 'Caching Strategies',
      'Search Optimization', 'Evaluation Metrics',
    ],
  },
];

export const stats = [
  { label: 'Years Experience', value: '8+' },
  { label: 'Projects Shipped', value: '50+' },
  { label: 'Happy Clients', value: '30+' },
];
