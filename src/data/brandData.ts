import { CoachingTier, ColorSwatch } from '../types';

export const BRAND_INFO = {
  name: 'THE AJOKE',
  founder: 'Ajoke',
  motto: 'Understand. Empower. Transform.',
  mission: 'Helping parents and caregivers look beyond the diagnosis, understand the individual child, identify their strengths and needs, and intentionally develop their capacities and skills.',
  coachingContact: {
    phone: '07084333263',
    phoneFormatted: '+234 708 433 3263',
    whatsAppUrl: 'https://wa.me/2347084333263?text=Hello%20Ajoke,%20I%20have%20completed%20the%2012-day%20resource%20and%20would%20love%20to%20learn%20more%20about%20your%201:1%20Parent%20Coaching.',
    label: '1:1 Coaching & Consultation'
  },
  summitContact: {
    name: "The Ajoke's Haven",
    event: 'Learning Your Autistic Child Summit',
    whatsAppGroupUrl: 'https://chat.whatsapp.com/BXfCEq8ag9wDXYMo6wz6oG?mode=gi_t',
    purpose: 'Summit updates, community discussions, and event information for parents, educators, and therapists.',
    label: 'Summit Community Only'
  }
};

export const COLOR_PALETTE: ColorSwatch[] = [
  { name: 'Warm Cream Background', hex: '#F3EBDD', role: 'Dominant canvas neutral', category: 'neutrals' },
  { name: 'Pure White', hex: '#FFFFFF', role: 'Crisp card background & text contrast', category: 'neutrals' },
  { name: 'Almond Beige', hex: '#EEDFC3', role: 'Secondary surface & highlight cards', category: 'neutrals' },
  { name: 'Soft Tan', hex: '#E9DCC9', role: 'Hairline borders & input backgrounds', category: 'neutrals' },
  { name: 'Muted Sand', hex: '#E9D9C0', role: 'Subtle borders and dividers', category: 'neutrals' },
  { name: 'Espresso Brown', hex: '#3E2A1E', role: 'Primary typography & brand mark', category: 'browns' },
  { name: 'Deep Earth Brown', hex: '#2B2118', role: 'Headlines, strong titles, dark mode elements', category: 'browns' },
  { name: 'Roasted Chestnut', hex: '#6B4A34', role: 'Subtitles, secondary logos, calligraphic accents', category: 'browns' },
  { name: 'Slate Taupe', hex: '#7A6A58', role: 'Muted metadata and secondary text', category: 'browns' },
  { name: 'Warm Terracotta Gold', hex: '#C08A4E', role: 'Key interactive highlights and badges', category: 'accents' },
  { name: 'Earthy Caramel Accent', hex: '#A9825E', role: 'Active indicators, button highlights, links', category: 'accents' }
];

export const COACHING_TIERS: CoachingTier[] = [
  {
    duration: '3 Months Coaching',
    investmentNaira: '600,000',
    investmentFormatted: '₦600,000',
    tagline: 'Foundations & Urgent Stabilization',
    recommendedFor: 'Parents facing immediate behavioural challenges, sensory distress, or navigating an early diagnosis.',
    features: [
      'Comprehensive child observational audit & baseline report',
      'Personalized sensory & communication profile map',
      'Bi-weekly 60-minute 1:1 strategy sessions with Ajoke',
      'Customized step-by-step home teaching routine',
      'Priority WhatsApp voice-note support between sessions'
    ],
    ctaMessage: 'Hello Ajoke, I would love to explore the 3 Months (₦600,000) 1:1 Parent Coaching partnership.'
  },
  {
    duration: '6 Months Coaching',
    investmentNaira: '1,200,000',
    investmentFormatted: '₦1,200,000',
    tagline: 'Deep Capacity Building & Skill Mastery',
    recommendedFor: 'Parents committed to long-term developmental transformation, school transitions, and sustained independence.',
    features: [
      'Everything in the 3-Month foundational program',
      'Extended developmental curriculum across social, self-care, & emotional skills',
      'Bi-weekly coaching sessions plus monthly environmental & school review',
      'Video analysis of child interactions with real-time feedback',
      'Caregiver & domestic support training frameworks',
      'Direct WhatsApp emergency check-in access'
    ],
    ctaMessage: 'Hello Ajoke, I would love to explore the 6 Months (₦1,200,000) 1:1 Parent Coaching partnership.',
    isPopular: true
  },
  {
    duration: '1 Year Coaching',
    investmentNaira: '2,400,000',
    investmentFormatted: '₦2,400,000',
    tagline: 'Full Developmental Stewardship',
    recommendedFor: 'Families seeking comprehensive, year-round guidance through all developmental stages and life adjustments.',
    features: [
      'Full year of dedicated developmental partnership with Ajoke',
      'Bi-weekly strategy sessions with quarterly comprehensive developmental audits',
      'In-depth IEP & school curriculum coordination strategy',
      'Full family ecosystem coaching (siblings, extended family, therapists)',
      'Continuous direct WhatsApp voice-note access & priority response',
      'Dedicated transition planning for adolescent or new milestone phases'
    ],
    ctaMessage: 'Hello Ajoke, I would love to explore the 1 Year (₦2,400,000) 1:1 Parent Coaching partnership.'
  }
];

export const TEACHING_PRINCIPLES = [
  {
    number: '01',
    title: 'Autism is a name. It is not the whole child.',
    description: 'A diagnosis should not become the entire identity of a child. The child is a person with their own personality, preferences, strengths, needs, interests, abilities, and unique way of experiencing the world.'
  },
  {
    number: '02',
    title: 'Autistic children are unique people.',
    description: 'Their uniqueness should not be treated as a flaw to erase. They may need more repetition, modelling, structure, patience, or a different learning channel. We develop skills while honouring who they are.'
  },
  {
    number: '03',
    title: 'Autism is not a punishment.',
    description: 'Grieving altered expectations is natural, but parents cannot build their parenting inside sorrow. We shift our attention from "Why did this happen?" to "Where is my child now, and how do we develop from here?"'
  },
  {
    number: '04',
    title: 'Start where the child is.',
    description: 'Stop parenting an imaginary benchmark. Observe what your child can do, what triggers distress, how they communicate without words, their patterns, and their authentic strengths.'
  },
  {
    number: '05',
    title: 'Skills are taught.',
    description: 'Children do not learn complex skills through osmosis. Model it. Guide them. Practise it. Repeat it. Repeat again. Intentionality, calm consistency, and patience build lasting capacity.'
  },
  {
    number: '06',
    title: 'Behaviour is communication.',
    description: 'Replace frustration with curiosity. Ask what the child is communicating before, during, and after a meltdown or resistance instead of reflexively labelling it as bad behaviour.'
  },
  {
    number: '07',
    title: 'Parents also need to learn.',
    description: 'Parenting an autistic child invites the caregiver to learn new ways of observing, communicating, and teaching. You are not expected to know everything immediately. You grow alongside your child.'
  }
];

export const VOICE_GUIDELINES = {
  attributes: ['Warm', 'Direct', 'Intelligent', 'Thought provoking', 'Compassionate', 'Confident', 'Educational', 'Human', 'Calm', 'Purposeful'],
  strictlyAvoid: [
    'No clinical, cold, or hospital-like jargon',
    'No infantile language or talking down to parents or autistic children',
    'No NGO or charitable appeal tone (THE AJOKE is a high-standard business)',
    'No em dashes (strictly prohibited across all copy)',
    'No excessive emojis (only the brown heart 🤎 sparingly)',
    'No aggressive scarcity tactics or false urgency',
    'No medical cure claims or diagnostic promises'
  ]
};
