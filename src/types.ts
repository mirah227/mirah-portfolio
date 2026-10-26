export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface ProjectImage {
  id: string;
  url: string;
  title: string;
  caption?: string;
  category?: 'website' | 'social' | 'community' | 'moderation' | 'growth' | 'general';
}

export interface ContributedProject {
  id: string;
  name: string;
  category?: string;
  role?: string;
  roles?: string[];
  highlightStat?: string;
  description?: string;
  responsibilities?: string[];
  contributions?: string[];
  results?: string[];
  images?: ProjectImage[];
  projectUrl?: string;
}

export interface WhatIBringValue {
  id: string;
  number: string;
  title: string;
  description: string;
  valueToProject: string;
}

export interface CommunityReview {
  id: string;
  screenshotUrl: string;
  reviewerName?: string;
  roleOrProject?: string;
  caption?: string;
  date?: string;
}

