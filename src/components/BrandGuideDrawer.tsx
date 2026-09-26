import React, { useState } from 'react';
import { X, Check, Copy, Palette, BookOpen, AlertTriangle } from 'lucide-react';
import { COLOR_PALETTE, TEACHING_PRINCIPLES, VOICE_GUIDELINES, BRAND_INFO } from '../data/brandData';
import { TheAjokeLogo } from './TheAjokeLogo';

interface BrandGuideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandGuideDrawer: React.FC<BrandGuideDrawerProps> = ({ isOpen, onClose }) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedHex(text);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#2B2118]/60 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-2xl bg-[#F3EBDD] h-full shadow-2xl flex flex-col border-l border-[#E9D9C0]">
        {/* Drawer Header */}
        <div className="px-6 py-5 border-b border-[#E9D9C0] bg-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <TheAjokeLogo size="sm" />
            <div>
              <h2 className="font-serif text-lg font-bold text-[#2B2118]">
                THE AJOKE Brand Guide
              </h2>
              <p className="text-xs text-[#7A6A58]">
                Design System, Philosophy &amp; Voice Standards
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#7A6A58] hover:text-[#2B2118] hover:bg-[#F3EBDD] rounded-full transition-colors"
            aria-label="Close brand guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-8 text-[#3E2A1E]">
          {/* Section 1: Brand Philosophy */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A9825E]">
              <BookOpen className="w-4 h-4" />
              <span>Brand Philosophy</span>
            </div>
            <div className="p-4 bg-white rounded-xl border border-[#E9D9C0] space-y-2">
              <h3 className="font-serif text-xl font-bold text-[#2B2118]">
                {BRAND_INFO.motto}
              </h3>
              <p className="text-xs leading-relaxed text-[#6B4A34]">
                {BRAND_INFO.mission}
              </p>
            </div>
          </section>

          {/* Section 2: Official Color Palette */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A9825E]">
              <Palette className="w-4 h-4" />
              <span>Official Color Palette</span>
            </div>
            <p className="text-xs text-[#7A6A58]">
              Warm, earthy, sophisticated, spacious, and elegant. Click any swatch to copy the hex code.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {COLOR_PALETTE.map((color) => {
                const isCopied = copiedHex === color.hex;
                return (
                  <button
                    key={color.hex}
                    onClick={() => copyToClipboard(color.hex)}
                    className="flex flex-col p-2.5 rounded-lg bg-white border border-[#E9D9C0] text-left hover:border-[#6B4A34] transition-colors group relative"
                  >
                    <div
                      className="w-full h-10 rounded-md border border-black/10 mb-2 transition-transform group-hover:scale-[1.02]"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#2B2118]">
                        {color.hex}
                      </span>
                      {isCopied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-700" />
                      ) : (
                        <Copy className="w-3 h-3 text-[#7A6A58] opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                    <span className="text-[10px] text-[#7A6A58] truncate mt-0.5">
                      {color.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Section 3: The 7 Teaching Principles */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A9825E]">
              <span>The 7 Teaching Principles</span>
            </div>
            <div className="space-y-2.5">
              {TEACHING_PRINCIPLES.map((principle) => (
                <div
                  key={principle.number}
                  className="p-3.5 bg-white rounded-lg border border-[#E9D9C0] space-y-1 text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[#A9825E] font-bold">
                      {principle.number}.
                    </span>
                    <h4 className="font-serif font-bold text-[#2B2118] text-sm">
                      {principle.title}
                    </h4>
                  </div>
                  <p className="text-[#6B4A34] pl-6 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Voice & Copywriting Directives */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A9825E]">
              <AlertTriangle className="w-4 h-4" />
              <span>Voice Guidelines &amp; Strict Constraints</span>
            </div>

            <div className="p-4 bg-white rounded-xl border border-[#E9D9C0] space-y-3 text-xs">
              <div>
                <span className="font-semibold text-[#2B2118] block mb-1.5">
                  Voice Attributes:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {VOICE_GUIDELINES.attributes.map((attr, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-[#F3EBDD] text-[#6B4A34] rounded-md text-[11px] font-medium"
                    >
                      {attr}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#E9D9C0] pt-3">
                <span className="font-semibold text-[#2B2118] block mb-1.5">
                  Strictly Avoid:
                </span>
                <ul className="space-y-1 text-[#6B4A34]">
                  {VOICE_GUIDELINES.strictlyAvoid.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-rose-600 font-bold">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Drawer Footer */}
        <div className="p-4 bg-white border-t border-[#E9D9C0] text-center">
          <p className="text-[11px] text-[#7A6A58]">
            THE AJOKE · Proprietary Brand &amp; Educational Standard
          </p>
        </div>
      </div>
    </div>
  );
};
