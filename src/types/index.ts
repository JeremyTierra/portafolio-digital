export interface Job {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period?: string;
  type: 'university' | 'course' | 'highschool';
}

export interface TechCategory {
  label: string;
  items: string[];
}

export type Lang = 'es' | 'en';
