import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon?: LucideIcon;
  price?: string;
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
}

export interface FaqItem {
  question: string;
  answer: string;
}