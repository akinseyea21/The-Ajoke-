export type SequenceDay = {
  dayNumber: number;
  dayLabel: string; // e.g. "DAY 0"
  title: string;
  cadenceNote: string; // e.g. "Immediate upon resource download"
  conversionStage: 'Empathy & Identity' | 'Perspective Shift' | 'Emotional Release' | 'Observation & Baseline' | 'Teaching Framework' | 'Need Recognition' | 'Coaching Invitation';
  subjectLine: string; // for email
  previewText: string;
  messageContent: string; // Plain text sequence
  whatsAppContent: string; // WhatsApp formatted with *bold* headers
  corePrinciple: string;
  readTime: string;
  quoteForSlide: string;
  slideSubtitle: string;
  keyActionForParent: string;
};

export type CoachingTier = {
  duration: string;
  investmentNaira: string;
  investmentFormatted: string;
  tagline: string;
  recommendedFor: string;
  features: string[];
  ctaMessage: string;
  isPopular?: boolean;
};

export type ColorSwatch = {
  name: string;
  hex: string;
  role: string;
  category: 'neutrals' | 'browns' | 'accents';
};
