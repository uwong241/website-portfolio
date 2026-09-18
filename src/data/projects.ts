import { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'AI Code Review Assistant',
    description: 'Intelligent code review tool that detects anti-patterns, security vulnerabilities, and performance issues using static analysis.',
    problem: 'Manually reviewing code in large codebases is time-consuming and often inconsistent.',
    solution: 'Statically analyze with custom AST-based pattern detection, provide actionable PR-level suggestions with confidence scores.',
    technologies: ['TypeScript', 'Python', 'React', 'LLM APIs'],
    role: 'Lead Frontend Engineer',
    year: 2024,
    metrics: [
      '40% reduction in code review time',
      '98% accuracy on common patterns',
      'Integrated with CI pipelines',
    ],
    link: '#',
    github: '#',
  },
  {
    title: 'Finance Dashboard',
    description: 'Real-time financial data visualization dashboard with multi-dimensional filtering and interactive charts.',
    problem: 'Finance teams needed faster insights but existing tools required too much manual work.',
    solution: 'Real-time WebSocket connections, custom charting library, drag-drop widgets for ad-hoc reports.',
    technologies: ['React', 'D3.js', 'Firebase', 'Node.js'],
    role: 'Core Developer',
    year: 2024,
    metrics: [
      'Data latency < 500ms',
      '50K+ daily users',
      'Reduced reporting time by 60%',
    ],
    link: '#',
    github: '#',
  },
  {
    title: 'E-commerce Search',
    description: 'Full-text search with fuzzy matching, typos, and relevance ranking for large product catalogs.',
    problem: 'Product search was slow and returned irrelevant results due to simple keyword matching.',
    solution: 'Elasticsearch integration with custom relevance scoring based on stock, pricing, and user behavior.',
    technologies: ['Elasticsearch', 'React', 'TypeScript', 'AWS'],
    role: 'Backend & Frontend',
    year: 2023,
    metrics: [
      '72% relevancy improvement',
      '40% faster search queries',
      '40% higher conversion rate',
    ],
    link: '#',
    github: '#',
  },
  {
    title: 'Collaborative Code Editor',
    description: 'Real-time code editor with shared cursor, live preview, and multi-user code review.',
    problem: 'Remote teams needed better collaboration tools for pair programming and code review.',
    solution: 'Reactive state sync using WebSocket, conflict resolution algorithms for real-time edits.',
    technologies: ['React', 'WebSocket', 'Operation-Based CRDTs', 'Node.js'],
    role: 'Full-Stack Developer',
    year: 2023,
    metrics: [
      'Sub-100ms latency',
      'Simultaneous user: 20+',
      'Zero data loss on network faults',
    ],
    link: '#',
    github: '#',
  },
];

export const projectCategories = [
  { name: 'Full-Stack', projects: projects.slice(0, 2) },
  { name: 'Frontend Focused', projects: projects.slice(2, 4) },
];
