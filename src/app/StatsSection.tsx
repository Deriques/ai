'use client';
interface StatData {
  id: number
  label: string
  value: string
  color: string
}

interface StatsSectionProps {
  statsData: StatData[]
  loading: boolean
}

export default function StatsSection({ statsData, loading }: StatsSectionProps) {
  if (loading) {
    return (
      <section className="relative w-full px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10 lg:mt-12">
        <div className="max-w-[1440px] mx-auto flex flex-row justify-center items-center w-full">
          <div className="flex flex-row justify-between w-full pt-[24px] pb-[24px] sm:pt-[36px] sm:pb-[36px] lg:pt-[48px] lg:pb-[48px] ml-[7px] sm:ml-[10px] lg:ml-[14px] p-[14px] sm:p-[21px] lg:p-[28px] border border-[#ffffff19] bg-gradient-to-b from-transparent to-black">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex flex-col gap-[3px] sm:gap-[4px] lg:gap-[6px] justify-start items-center w-auto mt-[4px] sm:mt-[6px] lg:mt-[8px]">
                <div className="w-16 h-4 bg-background-subtle animate-pulse rounded"></div>
                <div className="w-20 h-6 bg-background-subtle animate-pulse rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10 lg:mt-12">
      <div className="max-w-[1440px] mx-auto flex flex-row justify-center items-center w-full">
        <div className="flex flex-row justify-between w-full pt-[24px] pb-[24px] sm:pt-[36px] sm:pb-[36px] lg:pt-[48px] lg:pb-[48px] ml-[7px] sm:ml-[10px] lg:ml-[14px] p-[14px] sm:p-[21px] lg:p-[28px] border border-[#ffffff19] bg-gradient-to-b from-transparent to-black">
          {statsData.map((stat) => (
            <div key={stat.id} className="flex flex-col gap-[3px] sm:gap-[4px] lg:gap-[6px] justify-start items-center w-auto mt-[4px] sm:mt-[6px] lg:mt-[8px]">
              <p
                className="text-[8px] sm:text-[13px] lg:text-[17px] font-normal leading-[10px] sm:leading-[16px] lg:leading-[21px] text-center font-modernist"
                style={{ color: stat.color }}
              >
                {stat.label}
              </p>
              <p className="text-[17px] sm:text-[25px] lg:text-[34px] font-bold leading-[21px] sm:leading-[31px] lg:leading-[42px] text-center text-white font-modernist">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}