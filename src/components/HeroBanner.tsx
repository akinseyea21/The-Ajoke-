import React from 'react';
import { ArrowDown, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { TheAjokeLogo } from './TheAjokeLogo';
import heroPhotoUrl from '../assets/images/ajoke_nurture_hero_1790388830969.jpg';

export const HeroBanner: React.FC = () => {
  return (
    <section id="top" className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-[#E9D9C0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Brand & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Brand Logo & Tagline */}
            <div className="flex items-center gap-4">
              <TheAjokeLogo size="md" variant="horizontal" showSubtitle={true} />
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2B2118] text-balance leading-[1.15]">
              Beyond the diagnosis.
              <span className="block text-[#6B4A34] italic font-normal">
                Learning the child in front of you.
              </span>
            </h1>

            {/* Body Copy */}
            <p className="text-base sm:text-lg text-[#6B4A34] leading-relaxed max-w-2xl">
              A 12-day lead nurture sequence crafted for parents of autistic children who have downloaded a free educational resource. Grounded in empathy, intentional skill development, and purposeful guidance leading toward 1:1 parent coaching with Ajoke.
            </p>

            {/* Core Values row (clean unboxed text with separators, zero pills!) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm font-medium text-[#7A6A58]">
              <span className="flex items-center gap-1.5 text-[#3E2A1E]">
                <CheckCircle2 className="w-4 h-4 text-[#A9825E]" />
                Understand the Child
              </span>
              <span aria-hidden="true" className="text-[#A9825E]">·</span>
              <span className="flex items-center gap-1.5 text-[#3E2A1E]">
                <ShieldCheck className="w-4 h-4 text-[#A9825E]" />
                Intentional Capacity Building
              </span>
              <span aria-hidden="true" className="text-[#A9825E]">·</span>
              <span className="flex items-center gap-1.5 text-[#3E2A1E]">
                <HeartHandshake className="w-4 h-4 text-[#A9825E]" />
                1:1 Coaching Partnership
              </span>
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#sequence"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#3E2A1E] rounded-md hover:bg-[#2B2118] shadow-xs transition-colors"
              >
                <span>Explore 12-Day Sequence</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#coaching"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#3E2A1E] bg-[#EEDFC3] border border-[#E9D9C0] rounded-md hover:bg-[#E9DCC9] transition-colors"
              >
                <span>View Coaching Packages</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Anchor */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden shadow-md border border-[#E9D9C0] bg-white">
              <div className="aspect-4/3 relative overflow-hidden">
                <img
                  src={heroPhotoUrl}
                  alt="Mother and autistic child engaged in calm, intentional learning"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B2118]/70 via-[#2B2118]/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-serif italic text-lg sm:text-xl font-medium leading-snug">
                    &ldquo;Autism is a name. It is not the whole child.&rdquo;
                  </p>
                  <p className="text-xs uppercase tracking-widest text-[#EEDFC3] mt-1 font-medium">
                    Ajoke · Founder, THE AJOKE
                  </p>
                </div>
              </div>

              {/* Sequence Metadata Strip */}
              <div className="p-4 bg-[#F3EBDD] border-t border-[#E9D9C0] grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-xs text-[#7A6A58]">Cadence</div>
                  <div className="text-sm font-serif font-bold text-[#2B2118]">12 Days</div>
                </div>
                <div className="border-x border-[#E9D9C0]">
                  <div className="text-xs text-[#7A6A58]">Touchpoints</div>
                  <div className="text-sm font-serif font-bold text-[#2B2118]">7 Milestones</div>
                </div>
                <div>
                  <div className="text-xs text-[#7A6A58]">Coaching Tiers</div>
                  <div className="text-sm font-serif font-bold text-[#2B2118]">3 Months - 1 Yr</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
