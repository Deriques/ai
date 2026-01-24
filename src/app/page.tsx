import { Metadata } from 'next';
 import HomePage from'./HomePage';

export const metadata: Metadata = {
  title: 'Automate Intelligence. Accelerate Growth - AI-Powered SaaS Platform',
  description: 'Transform your business with our revolutionary AI-powered SaaS platform. Automate intelligence, accelerate growth with instant ideation, smart adaptability, and flexible pricing plans for businesses of all sizes.',
  keywords: 'AI platform, SaaS, business intelligence, automation, artificial intelligence, smart adaptability, instant ideation, business growth, data analytics, enterprise software',
  
  openGraph: {
    title: 'Automate Intelligence. Accelerate Growth - AI-Powered SaaS Platform',
    description: 'Transform your business with our revolutionary AI-powered SaaS platform. Automate intelligence, accelerate growth with instant ideation, smart adaptability, and flexible pricing plans for businesses of all sizes.',
  }
}

export default function Page() {
  return <HomePage />
}