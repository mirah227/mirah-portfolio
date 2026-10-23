export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface ContributedProject {
  id: string;
  name: string;
  category?: string;
  role?: string;
  description?: string;
  responsibilities?: string[];
  contributions?: string[];
  results?: string[];
  projectUrl?: string;
}

export interface WhatIBringValue {
  id: string;
  number: string;
  title: string;
  description: string;
  valueToProject: string;
}
