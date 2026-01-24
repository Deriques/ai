'use client';
interface FeatureData {
  id: number
  title: string
  description: string
  icon: string
}

interface FeaturesSectionProps {
  featuresData: FeatureData[]
  loading: boolean
}

export default function FeaturesSection({ featuresData, loading }: FeaturesSectionProps) {
  if (loading) {
    return (
      <section className="relative w-full px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14 lg:mt-16">
        <div className="flex flex-col gap-[18px] sm:gap-[27px] lg:gap-[36px] justify-start items-center w-full">
          <div className="flex flex-row justify-start items-center w-full">
            <div className="flex flex-col gap-[1px] sm:gap-[1px] lg:gap-[2px] justify-start items-start w-[42%]">
              <div className="w-3/4 h-8 bg-background-subtle animate-pulse rounded mb-4"></div>
              <div className="w-full h-4 bg-background-subtle animate-pulse rounded"></div>
            </div>
            <div className="w-[10%] h-[74px] sm:h-[111px] lg:h-[148px] bg-background-subtle animate-pulse rounded ml-8"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14 lg:mt-16 z-10">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-[24px] sm:gap-[32px] lg:gap-[40px] justify-start items-start w-full">
        
        {/* Header Section */}
        <div className="flex flex-row justify-between items-start w-full">
          <div className="flex flex-col gap-[8px] sm:gap-[10px] lg:gap-[12px] justify-start items-start w-[60%]">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-medium leading-[34px] sm:leading-[42px] lg:leading-[50px] text-left text-white font-modernist">
              <span className="text-white">Designed for Designers.<br />Powered by </span>
              <span className="text-[#ff531f]">AI.</span>
            </h2>
            <p className="text-[11px] sm:text-[13px] lg:text-[15px] font-normal leading-[16px] sm:leading-[19px] lg:leading-[22px] text-left text-[#d9d9d9] font-modernist">
              Unlock the full potential of your creativity with our AI-powered design assistant. 
              Explore new dimensions of design
            </p>
          </div>
          
          <img
            src="/images/hexagon.png"
            alt="AI Design Assistant"
            className="w-[80px] sm:w-[100px] lg:w-[120px] h-[80px] sm:h-[100px] lg:h-[120px] object-contain"
          />
        </div>
        
        {/* Feature Cards - Flexbox Layout with Different Widths */}
        <div className="flex flex-col gap-[16px] sm:gap-[20px] lg:gap-[24px] w-full">
          
          {/* First Row */}
          <div className="flex flex-col md:flex-row gap-[16px] sm:gap-[20px] lg:gap-[24px] w-full">
            {/* Card 1: Instant Ideation - 40% width, shorter */}
            <div className="md:w-[40%] relative bg-gradient-to-br from-[#272829B2] to-[#FF541F33] rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-[20px] sm:p-[24px] lg:p-[28px] border-[1.25px] border-[#ff54311a] transition-all duration-300 group overflow-hidden" 
                 style={{ backgroundColor: 'rgba(39, 40, 41, 0.7)', height: '240px' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff531f]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="flex flex-col gap-[12px] sm:gap-[14px] lg:gap-[16px]">
                  <p className="text-[11px] sm:text-[13px] lg:text-[15px] font-normal leading-[16px] sm:leading-[19px] lg:leading-[22px] text-left text-[#d9d9d9] font-modernist">
                    Skip the blank canvas and spark creativity instantly. Our AI generates high-quality, on-brand design concepts within seconds
                  </p>
                </div>
                
                <div className="flex flex-row justify-between items-center mt-auto">
                  <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-medium leading-[26px] sm:leading-[30px] lg:leading-[34px] text-left text-white font-modernist">
                    Instant Ideation
                  </h3>
                  <div className="w-[40px] sm:w-[44px] lg:w-[48px] h-[40px] sm:h-[44px] lg:h-[48px] rounded-full bg-[#ff531f] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-[20px] sm:w-[22px] lg:w-[24px] h-[20px] sm:h-[22px] lg:h-[24px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Smart Adaptability - 60% width, taller */}
            <div className="md:w-[60%] relative rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-[20px] sm:p-[24px] lg:p-[28px] border-[1.25px] border-[#ff54311a] transition-all duration-300 group overflow-hidden" 
                 style={{ backgroundColor: 'rgba(39, 40, 41, 0.7)', height: '240px' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff531f]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="flex flex-col gap-[12px] sm:gap-[14px] lg:gap-[16px]">
                  <p className="text-[11px] sm:text-[13px] lg:text-[15px] font-normal leading-[16px] sm:leading-[19px] lg:leading-[22px] text-left text-[#d9d9d9] font-modernist">
                    No two creators are the same, and neither are their styles. Our AI learns from your inputs, understands your aesthetic preferences, and fine-tunes every design
                  </p>
                </div>
                
                <div className="flex flex-row justify-between items-center mt-auto">
                  <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-medium leading-[26px] sm:leading-[30px] lg:leading-[34px] text-left text-white font-modernist">
                    Smart Adaptability
                  </h3>
                  <div className="w-[40px] sm:w-[44px] lg:w-[48px] h-[40px] sm:h-[44px] lg:h-[48px] rounded-full bg-[#ff531f] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-[20px] sm:w-[22px] lg:w-[24px] h-[20px] sm:h-[22px] lg:h-[24px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row gap-[16px] sm:gap-[20px] lg:gap-[24px] w-full">
            {/* Card 3: Multi-Format Export - 60% width, taller */}
            <div className="md:w-[60%] relative  rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-[20px] sm:p-[24px] lg:p-[28px] border-[1.25px] border-[#ff54311a] transition-all duration-300 group overflow-hidden" 
                 style={{ backgroundColor: 'rgba(39, 40, 41, 0.7)', height: '240px' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff531f]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="flex flex-col gap-[12px] sm:gap-[14px] lg:gap-[16px]">
                  <p className="text-[11px] sm:text-[13px] lg:text-[15px] font-normal leading-[16px] sm:leading-[19px] lg:leading-[22px] text-left text-[#d9d9d9] font-modernist">
                    Design once, export anywhere. Whether you need high-res graphics for print, responsive visuals for the web, mobile-optimized assets
                  </p>
                </div>
                
                <div className="flex flex-row justify-between items-center mt-auto">
                  <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-medium leading-[26px] sm:leading-[30px] lg:leading-[34px] text-left text-white font-modernist">
                    Multi-Format Export
                  </h3>
                  <div className="w-[40px] sm:w-[44px] lg:w-[48px] h-[40px] sm:h-[44px] lg:h-[48px] rounded-full bg-[#ff531f] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-[20px] sm:w-[22px] lg:w-[24px] h-[20px] sm:h-[22px] lg:h-[24px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Seamless Revisions - 40% width, shorter */}
            <div className="md:w-[40%] relative bg-gradient-to-br from-[#272829B2] to-[#FF541F33] rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-[20px] sm:p-[24px] lg:p-[28px] border-[1.25px] border-[#ff54311a] transition-all duration-300 group overflow-hidden" 
                 style={{ backgroundColor: 'rgba(39, 40, 41, 0.7)', height: '240px' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff531f]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="flex flex-col gap-[12px] sm:gap-[14px] lg:gap-[16px]">
                  <p className="text-[11px] sm:text-[13px] lg:text-[15px] font-normal leading-[16px] sm:leading-[19px] lg:leading-[22px] text-left text-[#d9d9d9] font-modernist">
                    Say goodbye to repetitive tweaks and endless back-and-forths. With intuitive prompt-based editing
                  </p>
                </div>
                
                <div className="flex flex-row justify-between items-center mt-auto">
                  <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-medium leading-[26px] sm:leading-[30px] lg:leading-[34px] text-left text-white font-modernist">
                    Seamless Revisions
                  </h3>
                  <div className="w-[40px] sm:w-[44px] lg:w-[48px] h-[40px] sm:h-[44px] lg:h-[48px] rounded-full bg-[#ff531f] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-[20px] sm:w-[22px] lg:w-[24px] h-[20px] sm:h-[22px] lg:h-[24px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}