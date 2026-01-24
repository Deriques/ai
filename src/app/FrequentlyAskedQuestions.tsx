'use client';

import { ArrowRight, Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';

const usefulLinks = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Team', href: '/team' },
  { name: 'Prices', href: '/prices' }
];

const helpLinks = [
  { name: 'Customer Support', href: '/support' },
  { name: 'Terms & Conditions', href: '/terms' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Contact Us', href: '/contact' }
];

export default function FooterSection() {
  return (
    <div className="bg-black text-white">
      {/* CTA Section */}
      <section className="py-20 px-5 bg-gradient-to-br from-[#1a0a05] to-[#3d1810]">
        <div className="max-w-4xl mx-auto">
<div className="bg-white/5 border border-white/10 rounded-3xl backdrop-blur-lg overflow-hidden">
  {/* Image at top with no padding */}
  <div className="flex justify-center">
    <img 
      src="/images/beam-top.png"
      alt="orange-beam-top"
      className="w-full max-w-md"
    />
  </div>
  
  {/* Content with padding */}
  <div className="p-10 md:p-16 text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
      Ready to Design Smarter?
    </h2>
<p className="text-lg text-gray-300 mb-9 max-w-2xl mx-auto leading-relaxed">
              Whether you're a freelancer, a team, or a growing agency—our tools adapt to your workflow. Design faster. Deliver better.
            </p>
            <button className="inline-flex items-center gap-3 bg-gradient-to-r from-[#ff6b3d] to-[#ff4520] text-white px-9 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-[#ff6b3d]/30 hover:-translate-y-1">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>  </div>
</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-5 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Footer Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-10 border-b border-white/10">
            {/* About Us */}
            <div>
              <h3 className="text-xl font-semibold mb-5 text-[#ff6b3d]">About Us</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                We're a team of designers, engineers, and innovators building AI tools that empower anyone to turn imagination into stunning visuals—faster, smarter, and effortlessly.
              </p>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-xl font-semibold mb-5 text-[#ff6b3d]">Useful Links</h3>
              <ul className="space-y-3">
                {usefulLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 text-sm hover:text-[#ff6b3d] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help */}
            <div>
              <h3 className="text-xl font-semibold mb-5 text-[#ff6b3d]">Help</h3>
              <ul className="space-y-3">
                {helpLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 text-sm hover:text-[#ff6b3d] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect With Us */}
            <div>
              <h3 className="text-xl font-semibold mb-5 text-[#ff6b3d]">Connect With Us</h3>
              <div className="space-y-2.5 text-gray-300 text-sm">
                <p>27 Division St, New York,<br />NY 10002, USA</p>
                <p>+123 324 2653</p>
                <p>username@mail.com</p>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 pt-8">
            <p className="text-gray-500 text-sm">© 2024 All Right Reserved.</p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-[#ff6b3d] flex items-center justify-center text-[#ff6b3d] hover:bg-[#ff6b3d] hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://pinterest.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-[#ff6b3d] flex items-center justify-center text-[#ff6b3d] hover:bg-[#ff6b3d] hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label="Pinterest"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0a12 12 0 0 0-4.37 23.17c-.07-.63-.12-1.59.03-2.27.13-.62.87-3.69.87-3.69s-.22-.44-.22-1.09c0-1.02.59-1.78 1.33-1.78.63 0 .93.47.93 1.04 0 .63-.4 1.58-.61 2.45-.17.73.37 1.33 1.1 1.33 1.32 0 2.33-1.39 2.33-3.4 0-1.78-1.28-3.02-3.11-3.02-2.12 0-3.36 1.59-3.36 3.23 0 .64.25 1.33.55 1.7.06.07.07.13.05.2l-.21.85c-.03.13-.11.16-.24.1-1.26-.59-2.05-2.43-2.05-3.91 0-3.18 2.31-6.1 6.66-6.1 3.5 0 6.22 2.49 6.22 5.82 0 3.47-2.19 6.26-5.23 6.26-1.02 0-1.98-.53-2.31-1.16l-.63 2.4c-.23.88-.85 1.98-1.26 2.65A12 12 0 1 0 12 0z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-[#ff6b3d] flex items-center justify-center text-[#ff6b3d] hover:bg-[#ff6b3d] hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a 
                href="https://google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-[#ff6b3d] flex items-center justify-center text-[#ff6b3d] hover:bg-[#ff6b3d] hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label="Google"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}