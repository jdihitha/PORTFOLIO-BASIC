export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  category: 'Full-Stack' | 'Web App' | 'Interactive / Game' | 'Frontend';
  liveUrl?: string;
  githubUrl?: string;
  statusBadge?: string;
}

export interface SkillCategory {
  categoryName: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: string;
    note?: string;
  }[];
}

export interface ExploringItem {
  id: string;
  topic: string;
  category: string;
  status: string;
  description: string;
  learningFocus: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  role: string;
  category: 'Academic Project' | 'Ideathon & Hackathon' | 'Outreach & Internship' | 'Client & Freelance';
  period: string;
  description: string;
  highlights: string[];
  technologies?: string[];
  statusTag?: string;
}

export interface InterestArea {
  title: string;
  description: string;
  iconName: string;
}
