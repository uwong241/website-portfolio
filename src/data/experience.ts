import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    title: 'Senior Frontend Engineer',
    company: 'TechCorp',
    period: '2022 — Present',
    location: 'Ho Chi Minh City, Vietnam',
    description: 'Leading frontend architecture for enterprise SaaS platform serving 100K+ users.',
    achievements: [
      'Spearheaded migration from class components to functional architecture',
      'Reduced bundle size by 40% through tree-shaking and code splitting',
      'Achieved 95 Lighthouse performance score across all pages',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Agency',
    period: '2019 — 2022',
    location: 'Hanoi, Vietnam',
    description: 'Full-stack web development for various client projects.',
    achievements: [
      'Developed 20+ responsive websites and web applications',
      'Implemented custom UI component library',
      'Improved automated test coverage from 30% to 85%',
    ],
  },
  {
    title: 'Junior Developer',
    company: 'Startup',
    period: '2018 — 2019',
    location: 'Da Nang, Vietnam',
    description: 'Web development and maintenance.',
    achievements: [
      'Built and maintained company website',
      'Collaborated with team on mobile-responsive design',
      'Optimized database queries for 60% performance gain',
    ],
  },
];

export function sortExperiences(experiences: Experience[]) {
  return experiences.sort(
    (a, b) => new Date(b.startDate || '2010').getTime() - new Date(a.startDate || '2010').getTime()
  );
}
