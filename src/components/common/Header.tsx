'use client';
import { useState } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative w-full bg-transparent">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-between items-center py-4">

          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={40}
              height={30}
              className="w-[20px] h-[15px] sm:w-[30px] sm:h-[22px] lg:w-[40px] lg:h-[30px]"
            />
          </div>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button 
            className="block lg:hidden p-2" 
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-white transition-all"></span>
              <span className="w-full h-0.5 bg-white transition-all"></span>
              <span className="w-full h-0.5 bg-white transition-all"></span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-row justify-between items-center w-[74%]">
            {/* Header Menu */}
            <nav className="flex flex-row gap-[24px] sm:gap-[36px] lg:gap-[48px] justify-center items-start w-auto">
              {/* Home - Active Item */}
              <div className="flex flex-col justify-start items-center w-auto">
                <span 
                  className="text-sm sm:text-base lg:text-lg font-bold leading-base text-white cursor-pointer hover:text-orange-500 transition-colors"
                  style={{ fontFamily: 'Sk-Modernist' }}
                >
                  Home
                </span>
                <div className="w-[42px] h-[1px] bg-orange-500 rounded-[1px] mt-1"></div>
              </div>

              {/*Services */}
              <span 
                className="text-sm sm:text-base lg:text-lg font-normal leading-base text-white cursor-pointer hover:text-orange-500 transition-colors"
                style={{ fontFamily: 'Sk-Modernist' }}
              >
                Services
              </span>

              {/*  Contact us */}
              <span 
                className="text-sm sm:text-base lg:text-lg font-normal leading-base text-white cursor-pointer hover:text-orange-500 transition-colors"
                style={{ fontFamily: 'Sk-Modernist' }}
              >
                Contact us
              </span>

              {/* About us */}
              <span 
                className="text-sm sm:text-base lg:text-lg font-normal leading-base text-white cursor-pointer hover:text-orange-500 transition-colors"
                style={{ fontFamily: 'Sk-Modernist' }}
              >
                About us
              </span>
            </nav>

            {/* Login Button*/}
            <Button
              text="Login"
              text_font_size="text-base"
              text_font_family="Sk-Modernist"
              text_font_weight="font-bold"
              text_line_height="leading-xs"
              text_color="text-white"
              fill_background_color="bg-orange-500"
              border_border_radius="rounded-sm"
              padding="pt-[4px] pr-[13px] pb-[4px] pl-[13px] sm:pt-[6px] sm:pr-[19px] sm:pb-[6px] sm:pl-[19px] lg:pt-[8px] lg:pr-[26px] lg:pb-[8px] lg:pl-[26px]"
              className="w-auto hover:bg-gray-100 active:scale-95 transition-all duration-200"
            />
          </div>

          {/* Mobile Navigation Menu */}
          <nav className={`${menuOpen ? 'block' : 'hidden'} lg:hidden absolute top-full left-0 right-0 bg-gray-900 border-t border-gray-700 z-50`}>
            <div className="flex flex-col p-4 space-y-4">
              {/* Mobile Home - Active Item */}
              <div className="flex flex-col items-start">
                <span 
                  className="text-base font-bold leading-base text-white"
                  style={{ fontFamily: 'Sk-Modernist' }}
                >
                  Home
                </span>
                <div className="w-[42px] h-[1px] bg-orange-500 rounded-[1px] mt-1"></div>
              </div>

              {/* Mobile Services */}
              <span 
                className="text-base font-normal leading-base text-white"
                style={{ fontFamily: 'Sk-Modernist' }}
              >
                Services
              </span>

              {/* Mobile Contact us */}
              <span 
                className="text-base font-normal leading-base text-white"
                style={{ fontFamily: 'Sk-Modernist' }}
              >
                Contact us
              </span>

              {/* Mobile About us */}
              <span 
                className="text-base font-normal leading-base text-white"
                style={{ fontFamily: 'Sk-Modernist' }}
              >
                About us
              </span>

              {/* Mobile Login Button */}
              <Button
                text="Login"
                text_font_size="text-base"
                text_font_family="Sk-Modernist"
                text_font_weight="font-bold"
                text_line_height="leading-xs"
                text_color="text-white"
                fill_background_color="bg-orange-500"
                border_border_radius="rounded-sm"
                padding="pt-[8px] pr-[26px] pb-[8px] pl-[26px]"
                className="w-auto mt-2"
              />
            </div>
          </nav>
        </div>
    </div>
    </header>
  )
}

export default Header