'use client';
import { useState } from 'react';
import Button from '../components/ui/Button';

interface HeroSectionProps {
  loading: boolean
}

export default function HeroSection({ loading }: HeroSectionProps) {
  const [activeButton, setActiveButton] = useState<'get-started' | 'see-details' | null>(null)

  const handleGetStarted = (): void => {
    setActiveButton('get-started')
    // Add navigation logic here
  }

  const handleSeeDetails = (): void => {
    setActiveButton('see-details')
    // Add navigation logic here
  }

  return (
    <section className="relative z-0  w-full h-[394px] sm:h-[591px] lg:h-[788px] overflow-visible">
      
      {/* Main Hero Content */}
      <div className="absolute inset-x-0 bottom-0 w-full flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[952px] h-[302px] sm:h-[453px] lg:h-[604px]">
        {/* Hero Content Container */}
          {/* Left side images */}
          {/* Main content */}
            <div className="flex flex-col z-10 gap-[10px] sm:gap-[15px] lg:gap-[20px]  items-center w-full">
            
            {/* Client testimonial */}
            <div className="flex flex-row gap-[4px] sm:gap-[1px] lg:gap-[8px]  items-center w-full max-w-[200px] sm:max-w-[200px] p-[5px] sm:p-[6px] lg:p-[6px] bg-gradient-to-r from-[#ff541f21] to-[#ff541f0a] border border-[#ffffff26] rounded-[14px] sm:rounded-[21px] lg:rounded-[22px]">
              <img
                src="/images/happy_clients.png"
                alt="Client avatars"
                className="w-[56px] sm:w-[84px] lg:w-[112px] h-[16px] sm:h-[24px] lg:h-[32px]"
              />
              <div className="flex flex-col gap-[1px] sm:gap-[1px] lg:gap-[2px] items-center w-full">
                <img
                  src="/images/star.png"
                  alt="Rating stars"
                  className="w-[31px] sm:w-[46px] lg:w-[62px] h-[5px] sm:h-[7px] lg:h-[10px]"
                />
                <p className="text-[6px] sm:text-[9px] lg:text-[12px] font-normal leading-[8px] sm:leading-[12px] lg:leading-[16px] text-left text-[#ffffffa5] font-modernist">
                  115+ happy clients
                </p>
              </div>
            </div>
            
            {/* Main heading */}
            <h1 className="text-[29px] sm:text-[44px] lg:text-[59px] font-bold leading-[32px] sm:leading-[49px] lg:leading-[65px] text-center text-white w-full font-modernist">
              <span className="text-white">Automate </span>
              <span className="text-[#ff531f]">Intelligence</span>
              <span className="text-white">. Accelerate Growth.</span>
            </h1>
            
            {/* Description */}
            <p className="text-[8px] sm:text-[12px] lg:text-[16px] font-normal leading-[9px] sm:leading-[14px] lg:leading-[19px] text-center text-[#ffffffb2] w-[68%] font-modernist">
              Our AI-powered SaaS platform empowers businesses to streamline operations, automate repetitive tasks, and make smarter, data-driven decisions—all from one intuitive dashboard.
            </p>
            
            {/* Action buttons */}
            <div className="flex flex-row gap-[8px] sm:gap-[12px] lg:gap-[16px] justify-center items-center w-auto">
              <Button
                text="Get Started"
                text_font_size="text-[7px] sm:text-[10px] lg:text-[14px]"
                text_font_family="Sk-Modernist"
                text_font_weight="font-bold"
                text_line_height="leading-[9px] sm:leading-[13px] lg:leading-[18px]"
                text_color="text-white"
                fill_background_color="bg-[#ff531f]"
                border_border_radius="rounded-[3px] sm:rounded-[4px] lg:rounded-[6px]"
                padding="pt-[4px] pr-[13px] pb-[4px] pl-[13px] sm:pt-[6px] sm:pr-[19px] sm:pb-[6px] sm:pl-[19px] lg:pt-[8px] lg:pr-[26px] lg:pb-[8px] lg:pl-[26px]"
                className="w-auto hover:bg-primary-light active:scale-95 transition-all duration-200"
                onClick={handleGetStarted}
              />
              
              <Button
                text="See Details"
                text_font_size="text-[7px] sm:text-[10px] lg:text-[14px]"
                text_font_family="Sk-Modernist"
                text_font_weight="font-normal"
                text_line_height="leading-[9px] sm:leading-[13px] lg:leading-[18px]"
                text_color="text-white"
                fill_background_color="bg-transparent"
                border_border="border border-[#fcfcfc3a]"
                border_border_radius="rounded-[3px] sm:rounded-[4px] lg:rounded-[6px]"
                padding="pt-[4px] pr-[13px] pb-[4px] pl-[13px] sm:pt-[6px] sm:pr-[19px] sm:pb-[6px] sm:pl-[19px] lg:pt-[8px] lg:pr-[26px] lg:pb-[8px] lg:pl-[26px]"
                className="w-auto hover:bg-background-subtle active:scale-95 transition-all duration-200"
                onClick={handleSeeDetails}
              />
            </div>
            </div>
          </div>
        </div>
      
      {/* Side Images */}
      <img
        src="/images/img_image.png"
        alt="Side design"
        className="absolute top-[65px] sm:top-[97px] lg:top-[130px] left-0 w-[152px] sm:w-[228px] lg:w-[304px] h-[394px] sm:h-[591px] lg:h-[788px] "
      />
    </section>
  )
}