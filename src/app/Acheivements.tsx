'use client';
import { useState, useEffect } from 'react';
 import Button from'../components/ui/Button';

interface AchievementsProps {
  loading: boolean
}

interface Achievement {
  id: number
  year: string  
  value: string
  label: string
  description: string
  images: string[]
}

export default function AchievementsSection({ loading }: AchievementsProps) {
  const [achievements, setAchievements] = useState<Achievement[]>([])

  useEffect(() => {
    if (!loading) {
      setAchievements([
        {
          id: 1,
          year: '2014',
          value: '2014',
          label: 'Year of establishment',
          description: 'More than 10 years in the field',
          images: ['/images/ach_img1.png']
        },
        {
          id: 2,
          year: '304',
          value: '304',
          label: 'Projects are launched',
          description: 'A lot of projects are done',
          images: ['/images/ach_img2.png']

          
        },
        {
          id: 3,
          year: '189',
          value: '189',
          label: 'Clients are satisfied',
          description: 'These people love us',
          images: ['/images/ach_img3.png']
        },
        {
          id: 4,
          year: '12',
          value: '12',
          label: 'Projects in work',
          description: 'What we do right now',
          images: ['/images/ach_img4.png']
        }
      ])
    }
  }, [loading])

  const handleGetStarted = (): void => {
    // Add navigation logic here
  }

  if (loading) {
    return (
      <section className="relative w-full px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-20">
        <div className="flex flex-col gap-[28px] sm:gap-[27px] lg:gap-[36px] justify-start items-center w-full h-auto">
          <div className="flex flex-row gap-[20px] sm:gap-[15px] lg:gap-[20px] justify-center items-start w-auto">
            <div className="w-16 h-6 bg-background-subtle animate-pulse rounded"></div>
            <div className="w-96 h-8 bg-background-subtle animate-pulse rounded"></div>
          
          </div>
          
          <div className="flex flex-row gap-[15px] sm:gap-[13px] lg:gap-[18px] justify-start items-start w-full">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex flex-col justify-start items-start w-full sm:w-[calc(50%-7px)] lg:w-[calc(25%-14px)]">
                <div className="w-full h-16 bg-background-subtle animate-pulse rounded mb-4"></div>
                <div className="w-3/4 h-4 bg-background-subtle animate-pulse rounded mb-2"></div>
                <div className="w-full h-4 bg-background-subtle animate-pulse rounded mb-4"></div>
                <div className="w-full h-16 bg-background-subtle animate-pulse rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-20">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-[18px] sm:gap-[27px] lg:gap-[36px] justify-start items-center w-full h-auto">
        
        {/* Section Header */}
        <div className="flex flex-row gap-[10px] sm:gap-[15px] lg:gap-[20px] justify-center items-start w-auto">
          <p className="text-[5px] sm:text-[8px] lg:text-[11px] font-normal leading-[14px] sm:leading-[21px] lg:leading-[29px] text-left text-[#ffffff99] font-modernist">
            2025
          </p>
          <p className="text-[10px] sm:text-[15px] lg:text-[20px] font-bold leading-[14px] sm:leading-[21px] lg:leading-[29px] text-left text-white mb-[11px] sm:mb-[16px] lg:mb-[22px] font-modernist">
            Whether you are designing for personal projects, creative teams, or large-scale campaigns, our AI-powered platform is built to bring your ideas to life—quickly, beautifully, and intelligently. And the results? The numbers speak for themselves:
          </p>
        </div>
        
        {/* Achievements Grid */}
        <div className="flex flex-row gap-[9px] sm:gap-[13px] lg:gap-[18px] justify-start items-start w-full">
          
          {/* First Achievement */}
          <div className="flex flex-col justify-start items-start w-full sm:w-[calc(50%-7px)] lg:w-[calc(25%-14px)]">
            <p className="text-[24px] sm:text-[36px] lg:text-[49px] font-bold leading-[27px] sm:leading-[41px] lg:leading-[55px] text-left text-white font-modernist">
              2014
            </p>
            <p className="text-[8px] sm:text-[12px] lg:text-[16px] font-normal leading-[11px] sm:leading-[16px] lg:leading-[22px] text-left text-white mt-[3px] sm:mt-[4px] lg:mt-[6px] font-modernist">
              Year of establishment
            </p>
            <div className="flex flex-col justify-start items-start w-full">
              <p className="text-[5px] sm:text-[8px] lg:text-[11px] font-normal leading-[7px] sm:leading-[11px] lg:leading-[15px] text-left text-[#8e8d8d] font-modernist">
                More than 10 years in the field
              </p>
              <img
                src="/images/ach_img1.png"
                alt="Achievement visualization"
                className="w-full mt-[-4px] sm:mt-[-6px] lg:mt-[-8px]"
              />
            </div>
          </div>
          
          {/* Second Achievement */}
          <div className="flex flex-col justify-start items-start self-end w-full sm:w-[calc(50%-7px)] lg:w-[calc(25%-14px)] mt-[31px] sm:mt-[46px] lg:mt-[62px]">
            <p className="text-[24px] sm:text-[36px] lg:text-[49px] font-bold leading-[27px] sm:leading-[41px] lg:leading-[55px] text-left text-white font-modernist">
              304
            </p>
            <p className="text-[8px] sm:text-[12px] lg:text-[16px] font-normal leading-[11px] sm:leading-[16px] lg:leading-[22px] text-left text-white mt-[2px] sm:mt-[3px] lg:mt-[4px] font-modernist">
              Projects are launched
            </p>
            <p className="text-[5px] sm:text-[8px] lg:text-[11px] font-normal leading-[7px] sm:leading-[11px] lg:leading-[15px] text-left text-[#8e8d8d] font-modernist">
              A lot of projects are done
            </p>
            <img
              src="/images/ach_img2.png"
              alt="Projects visualization"
              className="w-full mt-[8px] sm:mt-[12px] lg:mt-[16px]"
            />
          </div>
          
          {/* Third Achievement */}
          <div className="flex flex-col justify-start items-start w-full sm:w-[calc(50%-7px)] lg:w-[calc(25%-14px)]">
            <p className="text-[24px] sm:text-[36px] lg:text-[49px] font-bold leading-[27px] sm:leading-[41px] lg:leading-[55px] text-left text-white font-modernist">
              189
            </p>
            <p className="text-[8px] sm:text-[12px] lg:text-[16px] font-normal leading-[11px] sm:leading-[16px] lg:leading-[22px] text-left text-white mt-[3px] sm:mt-[4px] lg:mt-[6px] font-modernist">
              Clients are satisfied
            </p>
            <div className="flex flex-col justify-start items-start w-full">
              <p className="text-[5px] sm:text-[8px] lg:text-[11px] font-normal leading-[7px] sm:leading-[11px] lg:leading-[15px] text-left text-[#8e8d8d] font-modernist">
                These people love us
              </p>
              <img
                src="/images/ach_img3.png"
                alt="Clients visualization"
                className="w-full mt-[-4px] sm:mt-[-6px] lg:mt-[-8px]"
              />
            </div>
          </div>
          
          {/* Fourth Achievement */}
          <div className="flex flex-col justify-start items-start self-end w-full sm:w-[calc(50%-7px)] lg:w-[calc(25%-14px)]">
            <p className="text-[24px] sm:text-[36px] lg:text-[49px] font-bold leading-[27px] sm:leading-[41px] lg:leading-[55px] text-left text-white font-modernist">
              12
            </p>
            <p className="text-[8px] sm:text-[12px] lg:text-[16px] font-normal leading-[11px] sm:leading-[16px] lg:leading-[22px] text-left text-white mt-[2px] sm:mt-[3px] lg:mt-[4px] font-modernist">
              Projects in work
            </p>
            <p className="text-[5px] sm:text-[8px] lg:text-[11px] font-normal leading-[7px] sm:leading-[11px] lg:leading-[15px] text-left text-[#8e8d8d] font-modernist">
              What we do right now
            </p>
            <img
              src="/images/ach_img4.png"
              alt="Current projects visualization"
              className="w-full mt-[8px] sm:mt-[12px] lg:mt-[16px]"
            />
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="flex flex-row justify-between items-center  gap-[8px] sm:gap-[12px] lg:gap-[16px] justify-center items-center w-auto ">
          <Button
            text="Get Started"
            text_font_size="text-[7px]  lg:text-[14px]"
            text_font_family="Sk-Modernist"
            text_font_weight="font-bold"
            text_line_height="leading-[7px]  lg:leading-[14px]"
            text_color="text-white"
            fill_background_color="bg-[#ff531f]"
            border_border_radius="rounded-[3px] sm:rounded-[4px] lg:rounded-[6px]"
            padding="pt-[5px] pr-[20px] pb-[5px] pl-[12px]  sm:pr-[19px] pb-[5px] pt-[5px] lg:pt-[10px] lg:pr-[40px] lg:pb-[10px] lg:pl-[24px]"
            className="w-auto gap-[4px]  lg:gap-[8px] hover:bg-primary-light active:scale-95 transition-all duration-200"
            onClick={handleGetStarted}
          >
            Get Started
            <img
              src="/images/img_arrowright_white_a700.svg"
              alt="Arrow right"
              className="w-[8px] sm:w-[12px] lg:w-[16px] h-[5px] sm:h-[7px] lg:h-[10px] ml-2"
            />
          </Button>
          
          <div className="flex flex-row justify-end items-center w-auto">
            <p className="text-[5px] sm:text-[8px] lg:text-[11px] font-normal leading-[6px] sm:leading-[9px] lg:leading-[13px] text-left text-[#ffffff99] font-modernist">
              Slots are avaliable
            </p>
            <div className="w-[2px] sm:w-[3px] lg:w-[4px] h-[2px] sm:h-[3px] lg:h-[4px] bg-[#09c300] rounded-[1px] sm:rounded-[1px] lg:rounded-[2px] ml-[3px] sm:ml-[4px] lg:ml-[6px]"></div>
          </div>
        </div>
      </div>
      
      {/* Additional Background Elements */}
      <img
        src="/images/img_dots.png"
        alt="Background dots pattern"
        className="absolute top-[-15px] sm:top-[-22px] lg:top-[-30px] left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-[349px] lg:left-[466px] w-[359px] sm:w-[538px] lg:w-[718px] h-[446px] sm:h-[669px] lg:h-[892px]"
      />
      
      {/* Bottom decorative images
      <div className="absolute bottom-[-60px] sm:bottom-[-90px] lg:bottom-[-120px] left-0 w-full flex flex-col justify-start items-start">
        <div className="flex flex-row justify-start items-center w-full">
          <div className="flex flex-col gap-[4px] sm:gap-[6px] lg:gap-[8px] justify-start items-end w-full">
            <div className="w-[122px] sm:w-[183px] lg:w-[244px] h-[216px] sm:h-[324px] lg:h-[432px] bg-gradient-to-t from-[#010101] to-transparent"></div>
            <img
               // src="/images/img_rectangle_34624208.png"
              alt="Decorative background"
              className="w-[548px] sm:w-[822px] lg:w-[1096px] h-[122px] sm:h-[183px] lg:h-[244px]"
            />
          </div>
        </div>
        
        {/* <img 
          src="/images/img_rounded_rectangle.png"
          alt="Decorative element"
          className="mt-[-7px] sm:mt-[-10px] lg:mt-[-14px] ml-[57px] sm:ml-[86px] lg:ml-[114px] w-[44px] sm:w-[66px] lg:w-[88px] h-[157px] sm:h-[235px] lg:h-[314px]"
         /> 
      </div>*/}
    </section>
  )
}