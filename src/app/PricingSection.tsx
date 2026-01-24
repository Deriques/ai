'use client';
import { useState } from 'react';
import Image from 'next/image';

interface PricingPlan {
  id: number;
  name: string;
  price: string;
  period: string;
  discount?: string;
  features: string[];
  highlighted?: boolean;
}

interface PricingSectionProps {
  pricingPlans: PricingPlan[];
  loading: boolean;
}

export default function PricingSection({ pricingPlans, loading }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  if (loading) {
    return (
      <section className="relative min-h-screen w-full bg-black py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Loading Header */}
          <div className="text-center mb-12">
            <div className="w-3/4 h-16 bg-gray-800 animate-pulse rounded mx-auto mb-6"></div>
            <div className="w-2/3 h-6 bg-gray-800 animate-pulse rounded mx-auto"></div>
          </div>

          {/* Loading Toggle */}
          <div className="flex justify-center mb-12">
            <div className="w-48 h-12 bg-gray-800 animate-pulse rounded-full"></div>
          </div>

          {/* Loading Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="w-full h-96 bg-gray-800 animate-pulse rounded-2xl"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen w-full bg-black py-20 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/img_image_88.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Choose the Plan<br />That's Right for You
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-3xl mx-auto">
            Giving you access to essential features and over 1,000 creative tools. Upgrade to the
            Pro Plan to unlock powerful AI capabilities, cloud syncing, and a whole new level of
            creative freedom.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center bg-gray-800/50 rounded-full p-1 backdrop-blur-sm">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-8 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-8 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                billingCycle === 'yearly'
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="group relative bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800 hover:border-orange-500 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-105"
            >
              {/* Card Content */}
              <div className="space-y-6">
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-white group-hover:text-orange-500 transition-colors duration-300">
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400">
                  {plan.name === 'Free' && 'Everything you need to supercharge your productivity.'}
                  {plan.name === 'Pro' && 'Unlock a new level of your personal productivity.'}
                  {plan.name === 'Team' && 'Everything you need to supercharge your productivity.'}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-sm">{plan.period}</span>
                  {plan.discount && (
                    <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {plan.discount}
                    </span>
                  )}
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

                {/* Features */}
                <div className="space-y-4">
                  <p className="text-sm text-gray-400">What's included</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <svg
                          className="w-5 h-5 text-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subscribe Button */}
                <button className="w-full bg-gradient-to-r from-orange-600/20 to-orange-500/20 hover:from-orange-600/40 hover:to-orange-500/40 text-white rounded-lg py-3 px-6 font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn border border-orange-500/30 hover:border-orange-500/60">
                  <span>Subscribe</span>
                  <svg
                    className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}