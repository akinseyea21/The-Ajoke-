import React from 'react';
import { Check, MessageSquare, ArrowRight, Shield, Calendar, Sparkles } from 'lucide-react';
import { COACHING_TIERS, BRAND_INFO } from '../data/brandData';
import coachingPhotoUrl from '../assets/images/ajoke_coaching_space_1790388841646.jpg';

export const CoachingPackages: React.FC = () => {
  return (
    <section id="coaching" className="py-16 lg:py-24 bg-white border-b border-[#E9D9C0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#A9825E] mb-2">
            <span>Intentional Partnership</span>
            <span aria-hidden="true">·</span>
            <span>1:1 Parent Coaching</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#2B2118]">
            Coaching Packages &amp; Investment
          </h2>
          <p className="mt-3 text-base text-[#6B4A34] leading-relaxed">
            Personalised, high-touch developmental guidance with Ajoke. Designed for parents who want to look beyond the diagnosis, understand their child&apos;s individual sensory and communicative profile, and develop real capacities with calm confidence.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          {COACHING_TIERS.map((tier) => {
            const whatsAppUrl = `https://wa.me/2347084333263?text=${encodeURIComponent(tier.ctaMessage)}`;

            return (
              <div
                key={tier.duration}
                className={`relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                  tier.isPopular
                    ? 'border-[#3E2A1E] bg-[#F3EBDD]/40 shadow-lg ring-1 ring-[#3E2A1E]'
                    : 'border-[#E9D9C0] bg-white hover:border-[#6B4A34]/50 shadow-xs'
                }`}
              >
                {tier.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#3E2A1E] text-[#F3EBDD] text-[11px] font-semibold uppercase tracking-widest px-3.5 py-1 rounded-full shadow-xs">
                    Most Popular Choice
                  </div>
                )}

                <div className="space-y-6">
                  {/* Tier Title & Tagline */}
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#2B2118]">
                      {tier.duration}
                    </h3>
                    <p className="text-xs text-[#7A6A58] font-medium mt-1">
                      {tier.tagline}
                    </p>
                  </div>

                  {/* Pricing Display */}
                  <div className="pt-2 pb-4 border-b border-[#E9D9C0]">
                    <div className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2118] tabular-nums">
                      {tier.investmentFormatted}
                    </div>
                    <span className="text-xs text-[#7A6A58] block mt-1">
                      Full investment for complete duration
                    </span>
                  </div>

                  {/* Recommended For */}
                  <div className="text-xs text-[#6B4A34] bg-[#F3EBDD] p-3 rounded-lg border border-[#E9D9C0] leading-relaxed">
                    <strong className="text-[#2B2118] block mb-0.5">Recommended for:</strong>
                    {tier.recommendedFor}
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#7A6A58] block">
                      What is included:
                    </span>
                    <ul className="space-y-2.5 text-xs text-[#3E2A1E]">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                          <Check className="w-4 h-4 text-[#A9825E] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Direct WhatsApp Consultation CTA */}
                <div className="pt-8 mt-6 border-t border-[#E9D9C0]">
                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md text-xs font-semibold transition-colors ${
                      tier.isPopular
                        ? 'bg-[#3E2A1E] text-white hover:bg-[#2B2118]'
                        : 'bg-[#EEDFC3] text-[#2B2118] hover:bg-[#E9DCC9]'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Inquire for {tier.duration.split(' ')[0]} {tier.duration.split(' ')[1]}</span>
                  </a>
                  <p className="text-[11px] text-[#7A6A58] text-center mt-2">
                    Direct consultation via WhatsApp: 07084333263
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Philosophy & Quiet Consultation Callout Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#F3EBDD] border border-[#E9D9C0] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#A9825E] font-semibold">
              The Coaching Philosophy
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2118]">
              We do not promise cures. We build capacities.
            </h3>
            <p className="text-sm text-[#6B4A34] leading-relaxed">
              Coaching with THE AJOKE does not seek to alter your child&apos;s identity or impose rigid compliance. We partner with you to interpret their communicative patterns, design environmental supports, and intentionally teach the daily living, social, and emotional skills that give them lifelong autonomy.
            </p>
            <div className="pt-2">
              <p className="text-sm font-semibold text-[#3E2A1E]">
                &ldquo;If you would love someone to walk you through this journey, kindly reach out on WhatsApp: 07084333263.&rdquo;
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center sm:items-start lg:items-end justify-center">
            <a
              href={BRAND_INFO.coachingContact.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#3E2A1E] rounded-md hover:bg-[#2B2118] shadow-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>
            <span className="text-xs text-[#7A6A58] mt-2">
              Official 1:1 Contact: 07084333263
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
