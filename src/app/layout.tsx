import React from 'react';
import '../styles/tailwind.css';
import '../styles/index.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

{/*export const metadata = {
  title: {
    default: 'AI-Powered SaaS Platform',                           
    template: 'AI-Powered SaaS Platform | %s',                     
  },
  description: 'Automate Intelligence. Accelerate Growth. Revolutionary AI-powered SaaS platform for business intelligence automation with instant ideation and smart adaptability features.',
  keywords: 'AI platform, SaaS, business intelligence, automation, artificial intelligence, smart adaptability, instant ideation, business growth, data analytics',
  
  openGraph: {
    type: 'website',
    title: {
      default: 'AI-Powered SaaS Platform',                        
      template: 'AI-Powered SaaS Platform | %s',                 
    },
    description: 'Transform your business with our AI-powered platform. Automate intelligence and accelerate growth with advanced features and flexible pricing plans.',
  },
}*/}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#010101] text-white overflow-x-hidden">{children}

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Faipowered3050back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.12" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></body>
    </html>
  );
}