import React from 'react';
import { TheAjokeLogo } from './TheAjokeLogo';
import { BRAND_INFO } from '../data/brandData';
import { MessageSquare, Users } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2B2118] text-[#F3EBDD] py-14 border-t border-[#3E2A1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-[#3E2A1E]/80">
          {/* Col 1: Brand Wordmark & Philosophy */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <TheAjokeLogo size="sm" />
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-white block">
                  THE AJOKE
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#A9825E] font-medium">
                  Understand. Empower. Transform.
                </span>
              </div>
            </div>

            <p className="text-xs text-[#E9D9C0] leading-relaxed max-w-sm">
              Helping parents and caregivers look beyond the diagnosis, understand the individual child, identify strengths and needs, and intentionally develop capacities and skills.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#A9825E] font-semibold block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs text-[#E9D9C0]">
              <li>
                <a href="#sequence" className="hover:text-white transition-colors">
                  12-Day Nurture Sequence
                </a>
              </li>
              <li>
                <a href="#coaching" className="hover:text-white transition-colors">
                  1:1 Parent Coaching
                </a>
              </li>
              <li>
                <a href="#summit" className="hover:text-white transition-colors">
                  The Ajoke&apos;s Haven (Summit)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contacts (Separate Protocols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#A9825E] font-semibold block">
              Official Channels
            </span>

            <div className="space-y-2.5 text-xs">
              <a
                href={BRAND_INFO.coachingContact.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#3E2A1E] rounded-lg border border-[#6B4A34]/40 flex items-center justify-between hover:bg-[#3E2A1E]/80 transition-colors group"
              >
                <div>
                  <span className="text-[11px] text-[#A9825E] block font-medium">
                    1:1 Coaching Consultations
                  </span>
                  <span className="text-white font-mono font-semibold">
                    WhatsApp: 07084333263
                  </span>
                </div>
                <MessageSquare className="w-4 h-4 text-[#A9825E] group-hover:text-white transition-colors" />
              </a>

              <a
                href={BRAND_INFO.summitContact.whatsAppGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#3E2A1E] rounded-lg border border-[#6B4A34]/40 flex items-center justify-between hover:bg-[#3E2A1E]/80 transition-colors group"
              >
                <div>
                  <span className="text-[11px] text-[#A9825E] block font-medium">
                    The Ajoke&apos;s Haven
                  </span>
                  <span className="text-white font-medium">
                    Summit Community Group
                  </span>
                </div>
                <Users className="w-4 h-4 text-[#A9825E] group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A6A58]">
          <p>© {new Date().getFullYear()} THE AJOKE. All rights reserved.</p>
          <p className="text-[11px]">
            Autism Education &amp; Intentional Parent Coaching · Founded by Ajoke
          </p>
        </div>
      </div>
    </footer>
  );
};
