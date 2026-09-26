import React, { useState } from 'react';
import {
  Smartphone,
  Mail,
  Image as ImageIcon,
  Copy,
  Check,
  Share2,
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  Clock,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { SEQUENCE_DAYS } from '../data/sequenceData';
import { BRAND_INFO } from '../data/brandData';
import { TheAjokeLogo } from './TheAjokeLogo';

export const SequenceViewer: React.FC = () => {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [previewMode, setPreviewMode] = useState<'whatsapp' | 'email' | 'carousel'>('whatsapp');
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const currentDay = SEQUENCE_DAYS[activeDayIndex];

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleToggleSpeech = () => {
    if (!('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(currentDay.messageContent);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    // Pick a natural English voice if available
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(
      (v) => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Female') || v.name.includes('Google'))
    );
    if (preferredVoice) utterance.voice = preferredVoice;

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <section id="sequence" className="py-12 lg:py-20 bg-[#F3EBDD]/60 border-b border-[#E9D9C0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#7A6A58] mb-2">
            <span>Lead Nurture Flow</span>
            <span aria-hidden="true">·</span>
            <span>12-Day Architecture</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#2B2118]">
            The 12-Day Sequence
          </h2>
          <p className="mt-3 text-base text-[#6B4A34] leading-relaxed">
            Written in Ajoke&apos;s signature voice: warm, direct, intelligent, and purposeful. Each milestone moves parents from diagnostic confusion to observation, skill modelling, and the recognition of personal guidance.
          </p>
        </div>

        {/* Milestone Navigation Tabs */}
        <div className="mb-8">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none border-b border-[#E9D9C0]">
            {SEQUENCE_DAYS.map((day, idx) => {
              const isActive = idx === activeDayIndex;
              return (
                <button
                  key={day.dayNumber}
                  onClick={() => {
                    setActiveDayIndex(idx);
                    if (isSpeaking) {
                      window.speechSynthesis.cancel();
                      setIsSpeaking(false);
                    }
                  }}
                  className={`px-3.5 py-2.5 rounded-t-lg text-left transition-all shrink-0 border-b-2 flex flex-col gap-0.5 ${
                    isActive
                      ? 'border-[#3E2A1E] bg-[#EEDFC3] text-[#2B2118] font-semibold'
                      : 'border-transparent text-[#7A6A58] hover:text-[#2B2118] hover:bg-[#EEDFC3]/40'
                  }`}
                >
                  <span className="text-[11px] font-mono tracking-wider uppercase text-[#A9825E]">
                    {day.dayLabel}
                  </span>
                  <span className="text-xs sm:text-sm font-serif truncate max-w-[140px] sm:max-w-[170px]">
                    {day.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Context, Intent, and Controls */}
          <div className="lg:col-span-4 space-y-6">
            {/* Milestone Card */}
            <div className="p-5 rounded-xl bg-white border border-[#E9D9C0] shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-[#E9D9C0] pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#A9825E] font-semibold">
                  {currentDay.dayLabel} of 12
                </span>
                <span className="text-xs text-[#7A6A58] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {currentDay.readTime}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-[#2B2118]">
                  {currentDay.title}
                </h3>
                <p className="text-xs text-[#7A6A58] mt-1 italic">
                  {currentDay.cadenceNote}
                </p>
              </div>

              <div className="space-y-3 pt-2 text-xs">
                <div>
                  <span className="font-semibold text-[#2B2118] block mb-0.5">
                    Strategic Objective:
                  </span>
                  <p className="text-[#6B4A34] leading-relaxed">
                    {currentDay.corePrinciple}
                  </p>
                </div>

                <div>
                  <span className="font-semibold text-[#2B2118] block mb-0.5">
                    Parent Action:
                  </span>
                  <p className="text-[#6B4A34] leading-relaxed bg-[#F3EBDD] p-2.5 rounded-md border border-[#E9D9C0]">
                    {currentDay.keyActionForParent}
                  </p>
                </div>
              </div>

              {/* View Mode Switcher */}
              <div className="pt-2 border-t border-[#E9D9C0]">
                <label className="text-xs font-semibold text-[#2B2118] block mb-2">
                  Preview Simulator:
                </label>
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#F3EBDD] rounded-lg border border-[#E9D9C0]">
                  <button
                    onClick={() => setPreviewMode('whatsapp')}
                    className={`flex items-center justify-center gap-1.5 py-1.5 px-2 text-xs font-medium rounded-md transition-colors ${
                      previewMode === 'whatsapp'
                        ? 'bg-white text-[#2B2118] shadow-xs'
                        : 'text-[#7A6A58] hover:text-[#2B2118]'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>

                  <button
                    onClick={() => setPreviewMode('email')}
                    className={`flex items-center justify-center gap-1.5 py-1.5 px-2 text-xs font-medium rounded-md transition-colors ${
                      previewMode === 'email'
                        ? 'bg-white text-[#2B2118] shadow-xs'
                        : 'text-[#7A6A58] hover:text-[#2B2118]'
                    }`}
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email</span>
                  </button>

                  <button
                    onClick={() => setPreviewMode('carousel')}
                    className={`flex items-center justify-center gap-1.5 py-1.5 px-2 text-xs font-medium rounded-md transition-colors ${
                      previewMode === 'carousel'
                        ? 'bg-white text-[#2B2118] shadow-xs'
                        : 'text-[#7A6A58] hover:text-[#2B2118]'
                    }`}
                  >
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>Graphic</span>
                  </button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => handleCopy(currentDay.whatsAppContent, 'whatsapp')}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-[#2B2118] bg-[#EEDFC3] hover:bg-[#E9DCC9] rounded-md transition-colors"
                >
                  {copiedType === 'whatsapp' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Copied WhatsApp Format!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy for WhatsApp (*Bold* tags)</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => handleCopy(currentDay.messageContent, 'plain')}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-[#7A6A58] hover:text-[#2B2118] bg-transparent hover:bg-[#F3EBDD] border border-[#E9D9C0] rounded-md transition-colors"
                >
                  {copiedType === 'plain' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Copied Plain Text!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Plain Text</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleToggleSpeech}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-[#6B4A34] bg-[#F3EBDD] hover:bg-[#EEDFC3] rounded-md transition-colors"
                >
                  {isSpeaking ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5 text-rose-700" />
                      <span>Stop Voice Reading</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Listen to Voice Pacing</span>
                    </>
                  )}
                </button>
              </div>

              {/* Next/Prev Navigation */}
              <div className="flex items-center justify-between pt-3 border-t border-[#E9D9C0]">
                <button
                  disabled={activeDayIndex === 0}
                  onClick={() => {
                    setActiveDayIndex((prev) => Math.max(0, prev - 1));
                    if (isSpeaking) {
                      window.speechSynthesis.cancel();
                      setIsSpeaking(false);
                    }
                  }}
                  className="inline-flex items-center gap-1 text-xs text-[#7A6A58] hover:text-[#2B2118] disabled:opacity-40 disabled:pointer-events-none"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <span className="text-xs font-mono text-[#7A6A58]">
                  {activeDayIndex + 1} / {SEQUENCE_DAYS.length}
                </span>

                <button
                  disabled={activeDayIndex === SEQUENCE_DAYS.length - 1}
                  onClick={() => {
                    setActiveDayIndex((prev) => Math.min(SEQUENCE_DAYS.length - 1, prev + 1));
                    if (isSpeaking) {
                      window.speechSynthesis.cancel();
                      setIsSpeaking(false);
                    }
                  }}
                  className="inline-flex items-center gap-1 text-xs text-[#7A6A58] hover:text-[#2B2118] disabled:opacity-40 disabled:pointer-events-none"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Live Simulator Frame */}
          <div className="lg:col-span-8">
            {previewMode === 'whatsapp' && (
              <div className="max-w-xl mx-auto rounded-3xl overflow-hidden border-8 border-[#3E2A1E]/80 shadow-2xl bg-[#EEDFC3]/30">
                {/* Simulated Phone Top Bar */}
                <div className="bg-[#2B2118] text-[#F3EBDD] px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <TheAjokeLogo size="sm" />
                    <div>
                      <div className="font-serif font-bold text-sm leading-tight text-white flex items-center gap-1.5">
                        <span>Ajoke</span>
                        <span className="text-[10px] text-[#A9825E] font-normal uppercase tracking-wider">
                          THE AJOKE
                        </span>
                      </div>
                      <div className="text-[10px] text-[#E9D9C0]">
                        Autism Education &amp; Parent Coaching
                      </div>
                    </div>
                  </div>
                  <div className="text-xs font-mono text-[#E9D9C0]">
                    WhatsApp
                  </div>
                </div>

                {/* Chat Area */}
                <div className="p-4 sm:p-6 bg-[#F3EBDD]/90 min-h-[460px] flex flex-col justify-start space-y-4">
                  <div className="text-center">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#7A6A58] bg-[#E9D9C0]/60 px-3 py-1 rounded-full">
                      Broadcast Message · {currentDay.dayLabel}
                    </span>
                  </div>

                  {/* Message Bubble */}
                  <div className="max-w-[92%] sm:max-w-[85%] bg-white rounded-2xl rounded-tl-xs p-4 sm:p-5 shadow-xs border border-[#E9D9C0] text-[#2B2118] space-y-3">
                    <div className="font-serif font-bold text-base text-[#6B4A34] border-b border-[#F3EBDD] pb-1">
                      {currentDay.dayLabel} | {currentDay.title}
                    </div>

                    <div className="text-xs sm:text-sm leading-relaxed whitespace-pre-line font-sans text-[#3E2A1E]">
                      {currentDay.messageContent}
                    </div>

                    {/* CTA Links in WhatsApp Bubble if applicable */}
                    {currentDay.dayNumber === 10 && (
                      <div className="pt-2 border-t border-[#F3EBDD]">
                        <a
                          href={BRAND_INFO.coachingContact.whatsAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6B4A34] hover:underline"
                        >
                          <Smartphone className="w-3.5 h-3.5" />
                          <span>Tap here to message on WhatsApp: 07084333263</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}

                    {currentDay.dayNumber === 12 && (
                      <div className="pt-2 border-t border-[#F3EBDD] space-y-2">
                        <div className="p-2.5 bg-[#F3EBDD] rounded-lg border border-[#E9D9C0] text-[11px] text-[#3E2A1E]">
                          <span className="font-bold block text-[#6B4A34]">1:1 Coaching Enquiry:</span>
                          Reach out directly on WhatsApp: <strong>07084333263</strong>
                        </div>
                        <div className="p-2.5 bg-[#EEDFC3]/60 rounded-lg border border-[#E9D9C0] text-[11px] text-[#3E2A1E]">
                          <span className="font-bold block text-[#6B4A34]">The Ajoke&apos;s Haven (Summit Updates):</span>
                          <a
                            href={BRAND_INFO.summitContact.whatsAppGroupUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#6B4A34] underline font-medium break-all"
                          >
                            chat.whatsapp.com/BXfCEq8ag9wDXYMo6wz6oG
                          </a>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-end gap-1 text-[10px] text-[#7A6A58] pt-1">
                      <span>09:15 AM</span>
                      <span className="text-[#A9825E] font-bold">✓✓</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Phone Bottom Bar */}
                <div className="bg-[#E9D9C0] p-3 text-center text-xs text-[#7A6A58] border-t border-[#E9DCC9]">
                  Comfortably formatted for direct phone reading · No em dashes used
                </div>
              </div>
            )}

            {previewMode === 'email' && (
              <div className="bg-white rounded-2xl border border-[#E9D9C0] shadow-sm overflow-hidden max-w-2xl mx-auto">
                {/* Email Client Header */}
                <div className="bg-[#F3EBDD] p-4 border-b border-[#E9D9C0] space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#7A6A58] w-16">Subject:</span>
                    <span className="font-serif font-bold text-[#2B2118] text-sm truncate">
                      {currentDay.subjectLine}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#7A6A58] w-16">Preheader:</span>
                    <span className="text-[#7A6A58] truncate">{currentDay.previewText}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#7A6A58] w-16">From:</span>
                    <span className="text-[#3E2A1E]">
                      Ajoke &lt;ajoke@theajoke.com&gt;
                    </span>
                  </div>
                </div>

                {/* Email Body */}
                <div className="p-6 sm:p-10 space-y-6 max-w-xl mx-auto font-sans">
                  {/* Brand Header */}
                  <div className="text-center pb-6 border-b border-[#E9D9C0]">
                    <TheAjokeLogo size="md" showSubtitle={true} />
                  </div>

                  {/* Kicker */}
                  <div className="text-xs uppercase tracking-widest text-[#A9825E] font-semibold text-center">
                    {currentDay.dayLabel} | {currentDay.title}
                  </div>

                  {/* Message Prose */}
                  <div className="text-sm sm:text-base leading-relaxed whitespace-pre-line text-[#3E2A1E]">
                    {currentDay.messageContent}
                  </div>

                  {/* Primary CTA Button for Days 10 and 12 */}
                  {currentDay.dayNumber >= 10 && (
                    <div className="pt-4 text-center">
                      <a
                        href={BRAND_INFO.coachingContact.whatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#3E2A1E] rounded-md hover:bg-[#2B2118] shadow-xs transition-colors"
                      >
                        <Smartphone className="w-4 h-4" />
                        <span>Reach out on WhatsApp: 07084333263</span>
                      </a>
                    </div>
                  )}

                  {/* Email Footer */}
                  <div className="pt-8 border-t border-[#E9D9C0] text-center text-xs text-[#7A6A58] space-y-2">
                    <p className="font-serif font-bold text-[#2B2118]">THE AJOKE</p>
                    <p className="text-[11px] uppercase tracking-widest text-[#A9825E]">
                      Understand. Empower. Transform.
                    </p>
                    <p className="text-[10px] text-[#7A6A58]">
                      You received this email because you downloaded a free educational resource from THE AJOKE.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {previewMode === 'carousel' && (
              <div className="space-y-4 max-w-xl mx-auto">
                {/* Visual Graphic Slide */}
                <div
                  id="graphic-slide"
                  className="aspect-square bg-[#F3EBDD] rounded-2xl border-2 border-[#E9D9C0] p-8 sm:p-12 flex flex-col justify-between shadow-md relative overflow-hidden text-[#2B2118]"
                >
                  {/* Subtle decorative circular background glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#EEDFC3]/60 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />

                  {/* Top Bar of Slide */}
                  <div className="flex items-center justify-between relative z-10">
                    <TheAjokeLogo size="sm" variant="horizontal" />
                    <span className="font-mono text-xs uppercase tracking-widest text-[#A9825E] font-semibold">
                      {currentDay.dayLabel}
                    </span>
                  </div>

                  {/* Center Content */}
                  <div className="relative z-10 space-y-4 my-auto">
                    <p className="text-xs uppercase tracking-widest text-[#7A6A58] font-semibold">
                      {currentDay.slideSubtitle}
                    </p>
                    <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold leading-snug text-[#2B2118] text-balance">
                      &ldquo;{currentDay.quoteForSlide}&rdquo;
                    </blockquote>
                  </div>

                  {/* Bottom Bar */}
                  <div className="flex items-center justify-between border-t border-[#6B4A34]/20 pt-4 relative z-10 text-xs">
                    <div>
                      <span className="font-serif font-bold text-[#3E2A1E]">Ajoke</span>
                      <span className="text-[#7A6A58] block text-[10px] uppercase tracking-widest">
                        Founder, THE AJOKE
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-medium text-[#6B4A34]">
                        Understand · Empower · Transform
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-lg border border-[#E9D9C0] flex items-center justify-between text-xs text-[#7A6A58]">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#A9825E]" />
                    Optimized for WhatsApp Status &amp; Instagram Carousel
                  </span>
                  <button
                    onClick={() => handleCopy(currentDay.quoteForSlide, 'quote')}
                    className="text-[#6B4A34] hover:text-[#2B2118] font-medium inline-flex items-center gap-1"
                  >
                    <Copy className="w-3 h-3" />
                    <span>Copy Slide Quote</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
