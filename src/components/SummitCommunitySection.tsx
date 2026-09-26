import React from 'react';
import { Users, Info, MessageCircle, ArrowUpRight, AlertCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/brandData';

export const SummitCommunitySection: React.FC = () => {
  return (
    <section id="summit" className="py-16 lg:py-20 bg-[#F3EBDD]/40 border-b border-[#E9D9C0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#7A6A58] mb-2">
            <span>Community &amp; Events</span>
            <span aria-hidden="true">·</span>
            <span>Summit Updates</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#2B2118]">
            The Ajoke&apos;s Haven
          </h2>
          <p className="mt-3 text-base text-[#6B4A34] leading-relaxed">
            The official community space dedicated specifically to the Learning Your Autistic Child Summit.
          </p>
        </div>

        {/* Comparison & Clarity Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Summit Community Card */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-white border border-[#E9D9C0] shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#EEDFC3] flex items-center justify-center text-[#6B4A34]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2B2118]">
                    Learning Your Autistic Child Summit
                  </h3>
                  <p className="text-xs text-[#7A6A58]">
                    Hosted within The Ajoke&apos;s Haven
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#3E2A1E] leading-relaxed">
                The Learning Your Autistic Child Summit is designed to help parents, educators, therapists, and caregivers better understand autistic children, recognise their individual differences, and approach their development with greater understanding and confidence.
              </p>

              <div className="p-4 bg-[#F3EBDD] rounded-xl border border-[#E9D9C0] text-xs space-y-2">
                <span className="font-semibold text-[#2B2118] block">
                  Join The Ajoke&apos;s Haven to:
                </span>
                <ul className="space-y-1.5 text-[#6B4A34]">
                  <li>• Join the interactive summit community</li>
                  <li>• Receive direct summit announcements, schedules, and speaker updates</li>
                  <li>• Stay connected to summit conversations with other families &amp; educators</li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E9D9C0]">
              <a
                href={BRAND_INFO.summitContact.whatsAppGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 text-xs font-semibold text-white bg-[#3E2A1E] rounded-md hover:bg-[#2B2118] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Join The Ajoke&apos;s Haven on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <p className="text-[11px] text-[#7A6A58] mt-2">
                Direct group link: chat.whatsapp.com/BXfCEq8ag9wDXYMo6wz6oG
              </p>
            </div>
          </div>

          {/* Strict Separation Callout Box */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-[#EEDFC3]/50 border border-[#E9D9C0] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#6B4A34]">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <h4 className="font-serif text-lg font-bold text-[#2B2118]">
                  Important Communication Protocol
                </h4>
              </div>

              <div className="space-y-3 text-xs text-[#3E2A1E] leading-relaxed">
                <div className="p-3 bg-white rounded-lg border border-[#E9D9C0]">
                  <strong className="text-[#6B4A34] block mb-1">
                    For 1:1 Parent Coaching &amp; Consultations:
                  </strong>
                  Always message Ajoke directly on WhatsApp at <strong>07084333263</strong>. Coaching enquiries are confidential and handled privately.
                </div>

                <div className="p-3 bg-white rounded-lg border border-[#E9D9C0]">
                  <strong className="text-[#6B4A34] block mb-1">
                    For Summit Updates &amp; Community:
                  </strong>
                  Join <strong>The Ajoke&apos;s Haven</strong> WhatsApp group. This group is for collective event updates and is not for individual coaching questions.
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs text-[#7A6A58]">
              This separation ensures parents receive fast, confidential responses to coaching requests while maintaining an active summit space.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
