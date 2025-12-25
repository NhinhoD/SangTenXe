import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon?: LucideIcon;
  price?: string;
  category?: 'car' | 'moto' | 'all';
}

export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  image: string;
  date: string;
  author?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}