'use client';
import { useState, useEffect } from 'react';
 
 import HeroSection from'./HeroSection';
 import StatsSection from'./StatsSection';
 import FeaturesSection from'./FeaturesSection';
 import PricingSection from'./PricingSection';
 import Qns from'./qns';
 import AchievementsSection from'./Acheivements';
 import Header from'../components/common/Header';
 import FooterSection from'./FrequentlyAskedQuestions';

interface StatData {
  id: number
  label: string
  value: string
  color: string
}

interface FeatureData {
  id: number
  title: string
  description: string
  icon: string
}

interface PricingPlan {
  id: number
  name: string
  price: string
  period: string
  discount?: string
  features: string[]
  highlighted?: boolean
}

export default function HomePage() {
  const [statsData, setStatsData] = useState<StatData[]>([])
  const [featuresData, setFeaturesData] = useState<FeatureData[]>([])
  const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    loadHomeData()
  }, [])

  const loadHomeData = (): void => {
    // Simulate API calls with dummy data
    setTimeout(() => {
      setStatsData([
        { id: 1, label: 'Clients', value: '120K+', color: '#ff531f' },
        { id: 2, label: 'Projects', value: '150+', color: '#ff531f' },
        { id: 3, label: '5-Star Reviews', value: '32K+', color: '#ff531f' }
      ])

      setFeaturesData([
        { 
          id: 1, 
          title: 'Instant Ideation', 
          description: 'Skip the blank canvas and spark creativity instantly. Our AI generates high-quality, on-brand design concepts within seconds',
          icon: '/images/img_background.svg'
        },
        { 
          id: 2, 
          title: 'Smart Adaptability', 
          description: 'No two creators are the same, and neither are their styles. Our AI learns from your inputs, understands your aesthetic preferences, and fine-tunes every design',
          icon: '/images/img_background.svg'
        },
        { 
          id: 3, 
          title: 'Multi-Format Export', 
          description: 'Design once, export anywhere. Whether you need high-res graphics for print, responsive visuals for the web, mobile-optimized assets',
          icon: '/images/img_background.svg'
        },
        { 
          id: 4, 
          title: 'Seamless Revisions', 
          description: 'Say goodbye to repetitive tweaks and endless back-and-forths. With intuitive prompt-based editing',
          icon: '/images/img_background.svg'
        }
      ])

      setPricingPlans([
        {
          id: 1,
          name: 'Free',
          price: '$0',
          period: '/ month',
          features: [
            '20 design generations/month',
            'Low-res downloads',
            'Basic style presets',
            'Limited customization options'
          ]
        },
        {
          id: 2,
          name: 'Pro',
          price: '$17',
          period: '/ month',
          discount: '-20%',
          highlighted: true,
          features: [
            'Everything in Free',
            'Enigma AI',
            'Unlimited design generations',
            'Custom Themes',
            'High-resolution exports',
            'Custom Extensions',
            'Developer Tools'
          ]
        },
        {
          id: 3,
          name: 'Team',
          price: '$37',
          period: '/ month',
          discount: '-20%',
          features: [
            'Everything in Free',
            'Unlimited Shared Commands',
            'Unlimited Shared Quicklinks',
            'Priority support'
          ]
        }
      ])
      
      setLoading(false)
    }, 1000)
  }

  return (
    <main className="w-full bg-[#010101] min-h-screen overflow-x-hidden overflow-y-auto">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
      <div className="relative w-full">
        <div className="relative w-full">
          <div
            className="absolute top-[65px] sm:top-[97px] lg:top-[130px] right-[129px] sm:right-[193px] lg:right-[258px] w-[118px] sm:w-[177px] lg:w-[236px] h-[178px] sm:h-[267px] lg:h-[356px] z-10 object-cover bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/images/bg_design1.png)' }}
          />

          <img
            src="/images/bg_design2.png"
            alt="Design element"
            className="absolute top-[65px] sm:top-[97px] z-10 lg:top-[130px] right-[8px] sm:right-[12px] lg:right-[16px] w-[118px] sm:w-[177px] lg:w-[236px] h-[178px] sm:h-[267px] lg:h-[356px] object-cover"
          />

          <img
            src="/images/bg_design3.png"
            alt="Design element"
            className="absolute top-[205px] sm:top-[308px] z-10 lg:top-[410px] right-[53px] sm:right-[79px] lg:right-[106px] w-[178px] sm:w-[267px] lg:w-[356px] h-[118px] sm:h-[177px] lg:h-[236px] object-cover"
          />
      {/* Hero Background */}
      <img
        src="/images/img_image_87.png"
        alt="Hero background"
        className="absolute  top-0  h-[calc(100%+200px)] w-full object-cover pointer-events-none select-none"
      />

     {/* <div 
  className="absolute top-0 right-0 w-[60%] h-full pointer-events-none select-none"
  style={{ overflow: 'hidden' }}
>
 <img
  src="/images/img_image_88_910.png"
  alt="Hero right background"
  className="absolute top-0 right-0 h-full w-auto pointer-events-none select-none"
  style={{ 
    minWidth: '50%',
    objectFit: 'cover',
    objectPosition: 'right center'
  }}
/>
</div> */}

       <div className="absolute top-[65px] sm:top-[97px] lg:top-[130px] left-0 w-[152px] sm:w-[228px] lg:w-[304px] h-[394px] sm:h-[591px] lg:h-[788px]  z-10 lg:flex flex-col justify-center items-center w-[34%] object-cover ">
            <img
              src="/images/img_image.png"
              alt="Design preview"
                className="w-full  "
            />
            <img
              src="/images/img1.png"
              alt="Design preview"
                className="mt-[-90px] self-end w-[90%]"
            />
</div>
          <HeroSection loading={loading} />
        </div>
                
                  
                </div>

                 {/* Stats Section */}
        <StatsSection 
          statsData={statsData}
          loading={loading}
        />

                {/* Features Section */}
        <FeaturesSection  
          featuresData={featuresData}
          loading={loading}
        />

                
                {/* Achievements Section */}
        <AchievementsSection loading={loading} />
            <PricingSection 
          pricingPlans={pricingPlans}
          loading={loading}
        />
        <Qns /> 

        <div className="absolute right-0 top-[3600px] sm:top-[3700px] lg:top-[3800px] w-[700px] h-full z-0 pointer-events-none">
  <img
    src="/images/Ellipse 854 (1).png"
    alt="ellipse gradient"
    className="w-[940px] h-[983px] object-cover opacity-80"
  />
</div>


{/* Slanting lines */}
        <div className="absolute right-[-10%] h-[calc(100%+1200px)]  top-[5600px] sm:top-[3700px] lg:top-[3800px] w-[700px] h-full z-0 pointer-events-none">
        <div className=" absolute inset-0 opacity-80 pointer-events-none"
        style={{
          background: 'linear-gradient(-135deg, transparent 48%, rgba(139, 69, 19, 0.15) 48%, rgba(139, 69, 19, 0.15) 52%, transparent 52%)',
          bottom: '20%'
        }}
      />
      
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(-135deg, transparent 52%, rgba(139, 69, 19, 0.15) 52%, rgba(139, 69, 19, 0.15) 56%, transparent 56%)',
          top: '20%'
        }}
      />
         </div>
        <FooterSection />
    </main>

  )
}