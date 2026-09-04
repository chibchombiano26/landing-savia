export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  badge?: string;
  highlight?: string;
}

export interface GoogleServiceInfo {
  service: 'Gmail' | 'Google Drive' | 'Google Calendar';
  icon: string;
  dataRequested: string[];
  purpose: string;
  executionModel: string;
  badgeColor: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  priceMonthly: number;
  priceAnnualMonthly: number;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
