import React from 'react';
import { MessageSquare, Download } from 'lucide-react';
import { BRAND_INFO } from '../data/brandData';

interface NavbarProps {
  onOpenExport: () => void;
  onOpenBrandGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenExport, onOpenBrandGuide }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#F3EBDD]/90 backdrop-blur-md border-b border-[#E9D9C0] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Wordmark */}
        <a
          href="#top"
          className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2B2118] hover:text-[#6B4A34] transition-colors flex items-center gap-2"
        >
          <span className="tracking-wide">THE AJOKE</span>
        </a>

        {/* Zone 2: Clean text links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#7A6A58]">
          <a
            href="#sequence"
            className="hover:text-[#2B2118] transition-colors"
          >
            Nurture Sequence
          </a>
          <a
            href="#coaching"
            className="hover:text-[#2B2118] transition-colors"
          >
            1:1 Coaching
          </a>
          <a
            href="#summit"
            className="hover:text-[#2B2118] transition-colors"
          >
            The Ajoke&apos;s Haven
          </a>
          <button
            onClick={onOpenBrandGuide}
            className="hover:text-[#2B2118] transition-colors text-left"
          >
            Brand &amp; Voice Guide
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenExport}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#6B4A34] bg-[#EEDFC3] rounded-md hover:bg-[#E9D9C0] transition-colors whitespace-nowrap"
            title="Export sequence in multiple formats"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Sequence</span>
          </button>

          <a
            href={BRAND_INFO.coachingContact.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-[#3E2A1E] rounded-md hover:bg-[#2B2118] shadow-xs transition-colors whitespace-nowrap"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">WhatsApp:</span>
            <span>07084333263</span>
          </a>
        </div>
      </div>
    </header>
  );
};
