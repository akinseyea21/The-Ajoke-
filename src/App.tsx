import React, { useRef } from 'react';
import { TheAjokeLogo } from './components/TheAjokeLogo';
import {
  Printer,
  MessageSquare,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Heart,
  Eye,
  Repeat,
  Compass,
  FileCheck,
  Sparkles
} from 'lucide-react';
import heroPhotoUrl from './assets/images/ajoke_nurture_hero_1790388830969.jpg';

export default function App() {
  const guideRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#EEDFC3]/40 text-[#2B2118] font-sans antialiased py-6 sm:py-12 px-3 sm:px-6">
      {/* Top Floating Action Bar (Hidden during print) */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 p-4 bg-white/95 backdrop-blur-md rounded-xl border border-[#E9D9C0] shadow-sm print:hidden">
        <div className="flex items-center gap-3">
          <TheAjokeLogo size="sm" />
          <div>
            <h1 className="font-serif text-sm sm:text-base font-bold text-[#2B2118] leading-tight">
              THE AUTISM PARENT’S STARTING POINT
            </h1>
            <p className="text-[11px] text-[#7A6A58]">
              Official Digital Guide &amp; Lead Magnet · THE AJOKE
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#2B2118] bg-[#EEDFC3] hover:bg-[#E9DCC9] rounded-md transition-colors shadow-xs"
          >
            <Printer className="w-4 h-4 text-[#6B4A34]" />
            <span>Print / Save as PDF</span>
          </button>

          <a
            href="https://wa.me/2347084333263?text=Hello%20Ajoke,%20I%20have%20read%20The%20Autism%20Parent%27s%20Starting%20Point%20guide%20and%20would%20love%20to%20learn%20more%20about%20your%201:1%20Parent%20Coaching."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#3E2A1E] hover:bg-[#2B2118] rounded-md transition-colors shadow-xs"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp: 07084333263</span>
          </a>
        </div>
      </div>

      {/* Complete Document Body - Styled as an Editorial PDF Publication */}
      <div
        ref={guideRef}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-[#E9D9C0] overflow-hidden print:shadow-none print:border-none print:m-0 print:p-0 print:max-w-none"
      >
        {/* ============================================================== */}
        {/* COVER PAGE                                                     */}
        {/* ============================================================== */}
        <section className="min-h-[960px] p-8 sm:p-16 lg:p-20 bg-[#F3EBDD] flex flex-col justify-between border-b border-[#E9D9C0] relative print:min-h-screen print:page-break-after-always">
          {/* Top Brand Seal */}
          <div className="flex items-center justify-between">
            <TheAjokeLogo size="lg" showSubtitle={false} />
            <div className="text-right">
              <span className="font-mono text-xs uppercase tracking-widest text-[#A9825E] font-semibold block">
                Foundational Guide
              </span>
              <span className="font-serif italic text-sm text-[#7A6A58]">
                Understand. Empower. Transform.
              </span>
            </div>
          </div>

          {/* Center Titles */}
          <div className="my-auto py-12 space-y-6">
            <div className="inline-block border-b-2 border-[#A9825E] pb-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#6B4A34] font-semibold">
                An Educational Resource For Parents &amp; Caregivers
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2B2118] leading-[1.1] text-balance">
              THE AUTISM PARENT’S STARTING POINT
            </h1>

            <p className="font-serif text-xl sm:text-2xl text-[#6B4A34] italic font-normal leading-relaxed max-w-2xl">
              Understanding Your Autistic Child Beyond the Diagnosis
            </p>

            <div className="pt-4 max-w-xl">
              <p className="text-sm sm:text-base text-[#3E2A1E] leading-relaxed border-l-2 border-[#A9825E] pl-4">
                You do not have to know everything today.
                <br />
                You can begin by learning the child in front of you.
              </p>
            </div>
          </div>

          {/* Cover Bottom Meta */}
          <div className="pt-8 border-t border-[#6B4A34]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#7A6A58]">
            <div>
              <span className="font-serif font-bold text-[#2B2118] text-sm block">
                Ajoke
              </span>
              <span>Founder, THE AJOKE · Autism Education &amp; Parent Coaching</span>
            </div>
            <div className="font-mono text-[11px] text-[#A9825E]">
              WhatsApp: 07084333263
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 1: INTRODUCTION                                        */}
        {/* ============================================================== */}
        <section className="p-8 sm:p-14 lg:p-16 border-b border-[#E9D9C0] space-y-6 print:page-break-after-always">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A9825E] font-semibold">
              Introduction
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2118]">
              Take a Breath
            </h2>
          </div>

          <div className="prose text-sm sm:text-base text-[#3E2A1E] leading-relaxed space-y-4 max-w-none">
            <p>
              When a diagnosis is handed to you, the room can suddenly feel very small.
            </p>
            <p>
              Every evaluation report, every medical term, and every well-meaning recommendation seems to orbit a single word: autism. Suddenly, your quiet family routine is interrupted by an overwhelming flood of therapies, opinions, and checklists.
            </p>
            <p>
              It is completely natural to feel confused. It is natural to feel overwhelmed. You may find yourself grieving the effortless milestones you anticipated, or lying awake at 2:00 AM wondering what your child’s future will look like.
            </p>
            <p>
              Here is what you need to hear before you read another article or schedule another appointment:
            </p>
            <div className="p-5 bg-[#F3EBDD] rounded-xl border border-[#E9D9C0] text-[#2B2118] font-medium my-6">
              You do not have to know everything today. You do not need to solve the next ten years this afternoon. You can begin simply by learning the child right in front of you.
            </div>
            <p>
              At THE AJOKE, we exist for this exact shift. We help parents and caregivers look beyond the diagnosis, understand the individual child, identify their authentic strengths and needs, and intentionally develop their capacities and skills.
            </p>
            <p>
              Our philosophy is simple: <strong>Understand. Empower. Transform.</strong>
            </p>
            <p>
              This guide is your reset button. Read it slowly. Keep a notebook beside you. Let us begin from where your child actually is.
            </p>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 2: THE 7 FOUNDATIONAL PRINCIPLES                       */}
        {/* ============================================================== */}
        <section className="p-8 sm:p-14 lg:p-16 border-b border-[#E9D9C0] space-y-10 print:page-break-after-always">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A9825E] font-semibold">
              Core Teaching Philosophy
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2118]">
              Seven Principles for Seeing Your Child Clearly
            </h2>
          </div>

          {/* Principle 1 */}
          <div className="space-y-3 pt-2">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-base font-bold text-[#A9825E]">01</span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B2118]">
                Autism Is a Name, Not the Whole Child
              </h3>
            </div>
            <div className="text-sm sm:text-base text-[#3E2A1E] leading-relaxed space-y-3 pl-8">
              <p>
                Autism is a diagnosis and a clinical term used to describe a neurodevelopmental profile. It describes how your child processes sensory information, communicates, and navigates their surroundings.
              </p>
              <p>
                It is not the whole child.
              </p>
              <p>
                A diagnosis should never become your child’s entire identity. Your child is a person first, with their own personality, preferences, humour, strengths, needs, interests, abilities, and unique way of experiencing life.
              </p>
              <p className="font-serif italic text-base text-[#6B4A34]">
                “Autism is a name. It is not the whole child.”
              </p>
            </div>
          </div>

          <div className="border-t border-[#E9D9C0]" />

          {/* Principle 2 */}
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-base font-bold text-[#A9825E]">02</span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B2118]">
                Your Child Is Unique
              </h3>
            </div>
            <div className="text-sm sm:text-base text-[#3E2A1E] leading-relaxed space-y-3 pl-8">
              <p>
                Two children can walk into a room with the exact same diagnosis and have completely different personalities, sensory sensitivities, communication styles, and learning rhythms.
              </p>
              <p>
                Their uniqueness is not an error to be corrected. It is part of who they are.
              </p>
              <p>
                The goal of intentional parenting is not to force your child into a rigid mould so they look or behave like everyone else. The goal is to understand how your specific child learns, and to intentionally help them develop the functional skills they need to live with dignity and independence.
              </p>
            </div>
          </div>

          <div className="border-t border-[#E9D9C0]" />

          {/* Principle 3 */}
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-base font-bold text-[#A9825E]">03</span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B2118]">
                Autism Is Not a Punishment
              </h3>
            </div>
            <div className="text-sm sm:text-base text-[#3E2A1E] leading-relaxed space-y-3 pl-8">
              <p>
                It is okay to grieve.
              </p>
              <p>
                When expectations break down, the pain is real. You do not need to feel guilty for grieving the milestones you imagined or the path you thought family life would take.
              </p>
              <p>
                However, you cannot build a home inside grief.
              </p>
              <p>
                Your child cannot develop inside your sorrow. They need your clarity, your calm, and your active presence. You cannot stay trapped in the question, “Why did this happen?”
              </p>
              <p>
                The question that will actually change your child’s life is:
              </p>
              <div className="p-3 bg-[#F3EBDD] rounded-lg border border-[#E9D9C0] font-medium text-[#2B2118]">
                “Where is my child right now, and how can I help them develop from here?”
              </div>
            </div>
          </div>

          <div className="border-t border-[#E9D9C0]" />

          {/* Principle 4 */}
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-base font-bold text-[#A9825E]">04</span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B2118]">
                Start Where Your Child Is
              </h3>
            </div>
            <div className="text-sm sm:text-base text-[#3E2A1E] leading-relaxed space-y-3 pl-8">
              <p>
                Stop parenting an imaginary benchmark. Observe before you assume.
              </p>
              <p>
                When you compare your child to what a book says they should be doing at age three, five, or eight, you create unnecessary frustration for both of you.
              </p>
              <p>
                Look at the real child in your home:
              </p>
              <ul className="space-y-1.5 list-disc list-inside text-sm">
                <li>What can my child already do independently?</li>
                <li>What are they struggling with on a daily basis?</li>
                <li>How do they communicate when spoken words are hard?</li>
                <li>What environments trigger dysregulation or joy?</li>
                <li>What genuine strengths can we lean into?</li>
              </ul>
              <p>
                Remember: your child’s current ability is a starting baseline. It is not the final verdict on their ultimate capacity.
              </p>
            </div>
          </div>

          <div className="border-t border-[#E9D9C0]" />

          {/* Principle 5 */}
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-base font-bold text-[#A9825E]">05</span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B2118]">
                Behaviour Is Communication
              </h3>
            </div>
            <div className="text-sm sm:text-base text-[#3E2A1E] leading-relaxed space-y-3 pl-8">
              <p>
                When a child acts out, screams, retreats, or refuses a routine, our natural instinct is to ask: “How do I stop this behaviour?”
              </p>
              <p>
                Replace that reaction with curiosity: “What is my child trying to communicate?”
              </p>
              <p>
                Every behaviour serves a purpose. It might signal sensory overload, physical discomfort, sudden unpredictability, or frustration at being unable to communicate a want.
              </p>
              <p>
                Observe what happens before the behaviour, what happens during the behaviour, and what happens immediately after. When you understand the message beneath the behaviour, you can address the root instead of fighting the symptom.
              </p>
            </div>
          </div>

          <div className="border-t border-[#E9D9C0]" />

          {/* Principle 6 */}
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-base font-bold text-[#A9825E]">06</span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B2118]">
                Skills Are Taught
              </h3>
            </div>
            <div className="text-sm sm:text-base text-[#3E2A1E] leading-relaxed space-y-3 pl-8">
              <p>
                Autistic children do not learn emotional regulation, personal hygiene, transition skills, or communication through osmosis.
              </p>
              <p>
                Skills must be explicitly and intentionally taught. At THE AJOKE, we follow this methodical sequence:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 my-3 text-center text-xs">
                <div className="p-3 bg-[#F3EBDD] rounded-lg border border-[#E9D9C0]">
                  <span className="font-serif font-bold text-[#2B2118] block text-sm">Model</span>
                  <span className="text-[11px] text-[#7A6A58]">Show the action</span>
                </div>
                <div className="p-3 bg-[#F3EBDD] rounded-lg border border-[#E9D9C0]">
                  <span className="font-serif font-bold text-[#2B2118] block text-sm">Guide</span>
                  <span className="text-[11px] text-[#7A6A58]">Step-by-step help</span>
                </div>
                <div className="p-3 bg-[#F3EBDD] rounded-lg border border-[#E9D9C0]">
                  <span className="font-serif font-bold text-[#2B2118] block text-sm">Practise</span>
                  <span className="text-[11px] text-[#7A6A58]">Low-pressure tries</span>
                </div>
                <div className="p-3 bg-[#F3EBDD] rounded-lg border border-[#E9D9C0]">
                  <span className="font-serif font-bold text-[#2B2118] block text-sm">Repeat</span>
                  <span className="text-[11px] text-[#7A6A58]">Reinforce pathways</span>
                </div>
                <div className="p-3 bg-[#EEDFC3] rounded-lg border border-[#E9D9C0]">
                  <span className="font-serif font-bold text-[#2B2118] block text-sm">Repeat Again</span>
                  <span className="text-[11px] text-[#6B4A34]">Sustained mastery</span>
                </div>
              </div>
              <p>
                Patience and disciplined consistency build genuine neural capacity. Skill development is an intentional craft, not an emergency.
              </p>
            </div>
          </div>

          <div className="border-t border-[#E9D9C0]" />

          {/* Principle 7 */}
          <div className="space-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-base font-bold text-[#A9825E]">07</span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B2118]">
                The Parent Has to Learn Too
              </h3>
            </div>
            <div className="text-sm sm:text-base text-[#3E2A1E] leading-relaxed space-y-3 pl-8">
              <p>
                You are not expected to be born knowing how to parent an autistic child.
              </p>
              <p>
                It requires learning a new language: new ways of observing, new ways of structuring the home environment, new ways of de-escalating tension, and new ways of celebrating incremental progress.
              </p>
              <p>
                You are developing alongside your child.
              </p>
              <p>
                The goal is never perfect parenting. The goal is more informed, calm, and intentional parenting.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 3: PRACTICAL EXERCISE                                  */}
        {/* ============================================================== */}
        <section className="p-8 sm:p-14 lg:p-16 border-b border-[#E9D9C0] bg-[#F3EBDD]/50 space-y-8 print:page-break-after-always">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A9825E] font-semibold">
              Practical Exercise
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2118]">
              Start With Your Child
            </h2>
            <p className="text-sm text-[#6B4A34] max-w-2xl leading-relaxed">
              Take thirty quiet minutes this week to complete this observational worksheet. Write without judgment or comparison. Answer based on what you actually see, not what you wish were true.
            </p>
          </div>

          {/* Worksheet Prompts */}
          <div className="space-y-6">
            <div className="p-5 bg-white rounded-xl border border-[#E9D9C0] space-y-2">
              <label className="font-serif text-base font-bold text-[#2B2118] block">
                1. What does my child genuinely enjoy and light up doing?
              </label>
              <p className="text-xs text-[#7A6A58] italic mb-3">
                Their special interests, favorite textures, songs, or sensory play.
              </p>
              <div className="h-16 border-b border-dashed border-[#E9D9C0] w-full" />
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#E9D9C0] space-y-2">
              <label className="font-serif text-base font-bold text-[#2B2118] block">
                2. What can my child already do independently without any help?
              </label>
              <p className="text-xs text-[#7A6A58] italic mb-3">
                List their current foundational strengths, self-care tasks, or navigation abilities.
              </p>
              <div className="h-16 border-b border-dashed border-[#E9D9C0] w-full" />
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#E9D9C0] space-y-2">
              <label className="font-serif text-base font-bold text-[#2B2118] block">
                3. What daily routines or tasks does my child struggle with most?
              </label>
              <p className="text-xs text-[#7A6A58] italic mb-3">
                Identify the points of recurring friction in your mornings, meals, or bedtimes.
              </p>
              <div className="h-16 border-b border-dashed border-[#E9D9C0] w-full" />
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#E9D9C0] space-y-2">
              <label className="font-serif text-base font-bold text-[#2B2118] block">
                4. How does my child communicate their wants and emotional states?
              </label>
              <p className="text-xs text-[#7A6A58] italic mb-3">
                Gestures, leading by hand, sounds, AAC devices, facial expressions, or words.
              </p>
              <div className="h-16 border-b border-dashed border-[#E9D9C0] w-full" />
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#E9D9C0] space-y-2">
              <label className="font-serif text-base font-bold text-[#2B2118] block">
                5. What situations or sensory environments seem overwhelming for my child?
              </label>
              <p className="text-xs text-[#7A6A58] italic mb-3">
                Crowded spaces, loud sounds, fluorescent lights, sudden changes in plans.
              </p>
              <div className="h-16 border-b border-dashed border-[#E9D9C0] w-full" />
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#E9D9C0] space-y-2">
              <label className="font-serif text-base font-bold text-[#2B2118] block">
                6. What authentic strengths can I deliberately build upon?
              </label>
              <p className="text-xs text-[#7A6A58] italic mb-3">
                Visual memory, rhythm, attention to detail, physical agility, affection.
              </p>
              <div className="h-16 border-b border-dashed border-[#E9D9C0] w-full" />
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#E9D9C0] space-y-2">
              <label className="font-serif text-base font-bold text-[#2B2118] block">
                7. What single skill would I like to intentionally teach next?
              </label>
              <p className="text-xs text-[#7A6A58] italic mb-3">
                Choose just ONE concrete skill: e.g., putting shoes on, pointing to communicate want, or tolerating a transition.
              </p>
              <div className="h-16 border-b border-dashed border-[#E9D9C0] w-full" />
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 4: REFLECTION                                          */}
        {/* ============================================================== */}
        <section className="p-8 sm:p-14 lg:p-16 border-b border-[#E9D9C0] space-y-8 print:page-break-after-always">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A9825E] font-semibold">
              Parent Reflection
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B2118]">
              A Different Way to See Your Child
            </h2>
            <p className="text-sm text-[#6B4A34] max-w-2xl leading-relaxed">
              These questions are not designed to test you. They are invitations to pause, release comparison, and shift into intentional curiosity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 bg-[#F3EBDD] rounded-xl border border-[#E9D9C0] space-y-3">
              <h4 className="font-serif text-lg font-bold text-[#2B2118]">
                From Fear to Curiosity
              </h4>
              <p className="text-xs text-[#3E2A1E] leading-relaxed">
                When your child exhibits a difficult behaviour, what happens inside your body? Can you pause for five seconds and ask, “What is my child trying to say right now?” instead of reacting in panic?
              </p>
            </div>

            <div className="p-6 bg-[#F3EBDD] rounded-xl border border-[#E9D9C0] space-y-3">
              <h4 className="font-serif text-lg font-bold text-[#2B2118]">
                From Comparison to Connection
              </h4>
              <p className="text-xs text-[#3E2A1E] leading-relaxed">
                Whose expectations are you carrying into your home: your neighbours, relatives, or social media? What changes when you measure your child only against their own starting line?
              </p>
            </div>

            <div className="p-6 bg-[#F3EBDD] rounded-xl border border-[#E9D9C0] space-y-3">
              <h4 className="font-serif text-lg font-bold text-[#2B2118]">
                From Crisis to Craft
              </h4>
              <p className="text-xs text-[#3E2A1E] leading-relaxed">
                Are you trying to fix everything at once? What would happen if you focused on teaching just one skill with calm consistency over the next month?
              </p>
            </div>

            <div className="p-6 bg-[#F3EBDD] rounded-xl border border-[#E9D9C0] space-y-3">
              <h4 className="font-serif text-lg font-bold text-[#2B2118]">
                From Isolation to Partnership
              </h4>
              <p className="text-xs text-[#3E2A1E] leading-relaxed">
                Have you been carrying this journey entirely on your own shoulders? What would it mean to have structured, personalised guidance walking beside you?
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 5: COACHING INVITATION                                 */}
        {/* ============================================================== */}
        <section className="p-8 sm:p-14 lg:p-16 border-b border-[#E9D9C0] bg-white space-y-10 print:page-break-after-always">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A9825E] font-semibold">
              The Next Step
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2118]">
              You Don’t Have to Figure It Out Alone
            </h2>
            <p className="text-sm sm:text-base text-[#6B4A34] leading-relaxed max-w-2xl">
              General guides provide helpful foundations. But every autistic child is unique, with their own sensory triggers, cognitive patterns, and family dynamics.
            </p>
            <p className="text-sm sm:text-base text-[#3E2A1E] leading-relaxed max-w-2xl">
              Knowing that your child needs help is one thing. Knowing exactly what steps to take on a chaotic morning in your own living room is something entirely different.
            </p>
          </div>

          <div className="p-6 sm:p-8 bg-[#F3EBDD] rounded-2xl border border-[#E9D9C0] space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#2B2118]">
              THE AJOKE 1:1 Parent Coaching
            </h3>
            <p className="text-sm text-[#3E2A1E] leading-relaxed">
              Our 1:1 coaching is a high-touch, confidential partnership designed for parents who want tailored developmental guidance with Ajoke to:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#2B2118]">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A9825E] shrink-0 mt-0.5" />
                <span>Better understand their child&apos;s sensory and communicative profile</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A9825E] shrink-0 mt-0.5" />
                <span>Identify individual strengths and unaddressed needs</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A9825E] shrink-0 mt-0.5" />
                <span>Become methodical and intentional about skill teaching</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A9825E] shrink-0 mt-0.5" />
                <span>Understand patterns and the messages beneath behaviours</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A9825E] shrink-0 mt-0.5" />
                <span>Build calm confidence and consistency in their parenting approach</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A9825E] shrink-0 mt-0.5" />
                <span>Learn how to support developmental progress in everyday home routines</span>
              </div>
            </div>
            <p className="text-xs text-[#7A6A58] italic pt-2">
              Note: THE AJOKE is not a medical or diagnostic service. We do not make cure claims or guarantee clinical outcomes. We empower parents to intentionally build real functional capacities.
            </p>
          </div>

          {/* Pricing Packages Table */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl font-bold text-[#2B2118]">
              Coaching Packages &amp; Investment
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-[#E9D9C0] bg-white flex flex-col justify-between space-y-4 shadow-xs">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#A9825E] font-semibold">
                    Tier 01
                  </span>
                  <h5 className="font-serif text-xl font-bold text-[#2B2118]">
                    3 Months Coaching
                  </h5>
                  <div className="font-serif text-2xl font-bold text-[#2B2118] my-3">
                    ₦600,000
                  </div>
                  <p className="text-xs text-[#6B4A34] leading-relaxed">
                    Designed for establishing baseline observations, setting up core home routines, and addressing immediate communication and regulation priorities.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-xl border-2 border-[#3E2A1E] bg-[#F3EBDD]/60 flex flex-col justify-between space-y-4 shadow-sm relative">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#6B4A34] font-semibold">
                    Tier 02 · Transformative
                  </span>
                  <h5 className="font-serif text-xl font-bold text-[#2B2118]">
                    6 Months Coaching
                  </h5>
                  <div className="font-serif text-2xl font-bold text-[#2B2118] my-3">
                    ₦1,200,000
                  </div>
                  <p className="text-xs text-[#6B4A34] leading-relaxed">
                    Comprehensive capacity building for sustained skill mastery, emotional regulation development, caregiver training, and milestone transitions.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-[#E9D9C0] bg-white flex flex-col justify-between space-y-4 shadow-xs">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#A9825E] font-semibold">
                    Tier 03
                  </span>
                  <h5 className="font-serif text-xl font-bold text-[#2B2118]">
                    1 Year Coaching
                  </h5>
                  <div className="font-serif text-2xl font-bold text-[#2B2118] my-3">
                    ₦2,400,000
                  </div>
                  <p className="text-xs text-[#6B4A34] leading-relaxed">
                    Full-year developmental stewardship providing continuous guidance through every stage, IEP coordination, and comprehensive family ecosystem support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Consultation CTA Box */}
          <div className="p-6 sm:p-8 bg-[#3E2A1E] text-white rounded-2xl space-y-4 text-center">
            <h4 className="font-serif text-2xl font-bold text-[#F3EBDD]">
              Consultation &amp; Coaching Inquiries
            </h4>
            <p className="text-sm text-[#E9D9C0] max-w-xl mx-auto leading-relaxed">
              If you would love someone to walk you through this journey, kindly reach out on WhatsApp: <strong>07084333263</strong>.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/2347084333263?text=Hello%20Ajoke,%20I%20have%20read%20The%20Autism%20Parent%27s%20Starting%20Point%20guide%20and%20would%20love%20to%20learn%20more%20about%20your%201:1%20Parent%20Coaching."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-[#2B2118] bg-[#F3EBDD] hover:bg-white rounded-md shadow-xs transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#6B4A34]" />
                <span>Message Ajoke on WhatsApp: 07084333263</span>
              </a>
            </div>
          </div>

          {/* Secondary Summit Community CTA */}
          <div className="p-6 bg-[#EEDFC3]/60 rounded-xl border border-[#E9D9C0] space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6B4A34]">
              <span>Learning Your Autistic Child Summit</span>
            </div>
            <p className="text-xs text-[#3E2A1E] leading-relaxed">
              Looking to join the wider summit community for updates, speaker announcements, and collective discussions?
            </p>
            <p className="text-xs font-medium text-[#2B2118]">
              Join The Ajoke&apos;s Haven for updates and conversations around the Learning Your Autistic Child Summit:
            </p>
            <a
              href="https://chat.whatsapp.com/BXfCEq8ag9wDXYMo6wz6oG?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6B4A34] hover:underline"
            >
              <span>chat.whatsapp.com/BXfCEq8ag9wDXYMo6wz6oG</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <p className="text-[10px] text-[#7A6A58] pt-1">
              Note: The Ajoke&apos;s Haven is for Summit community updates only. For individual 1:1 coaching inquiries, always use WhatsApp 07084333263.
            </p>
          </div>
        </section>

        {/* ============================================================== */}
        {/* FINAL CLOSING PAGE                                             */}
        {/* ============================================================== */}
        <section className="min-h-[800px] p-8 sm:p-16 lg:p-20 bg-[#F3EBDD] flex flex-col justify-between text-center relative print:min-h-screen print:page-break-after-always">
          <div className="flex justify-center">
            <TheAjokeLogo size="md" showSubtitle={false} />
          </div>

          <div className="my-auto space-y-6 max-w-xl mx-auto py-12">
            <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B2118] leading-tight text-balance">
              Your child is more than a diagnosis.
            </p>

            <div className="w-16 h-0.5 bg-[#A9825E] mx-auto my-4" />

            <p className="text-base sm:text-lg text-[#6B4A34] leading-relaxed">
              When you look beyond the label, you find a child ready to be understood, empowered, and developed.
            </p>

            <div className="pt-6 space-y-1">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#2B2118] block">
                THE AJOKE
              </span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#A9825E] font-medium block">
                Understand. Empower. Transform.
              </span>
            </div>
          </div>

          <div className="pt-8 border-t border-[#6B4A34]/20 text-xs text-[#7A6A58] space-y-1">
            <p className="font-semibold text-[#2B2118]">
              WhatsApp for consultation: 07084333263
            </p>
            <p className="text-[11px]">
              © {new Date().getFullYear()} THE AJOKE. All rights reserved.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
