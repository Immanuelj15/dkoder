import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function InspectProof() {
  const steps = [
    { eyebrow: 'SELECT A TARGET', title: 'Company · Exam · Package' },
    { eyebrow: 'PRACTISE', title: 'Questions · Coding · Mocks' },
    { eyebrow: 'REVIEW', title: 'Progress · Scorecards · Next focus' }
  ];

  return (
    <section className="relative px-4 sm:px-8 py-20 sm:py-28 overflow-hidden bg-[#F0EDDF]">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[75px] items-center">
        {/* Left Side: Copy and CTAs */}
        <div>
          <span className="block text-xs font-bold uppercase tracking-widest text-[#17181A] mb-4 font-body">
            See exactly what you'd be using
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold leading-[1.05] mb-6 text-[#17181A] tracking-tight font-heading">
            Proof should be
            <br />
            something you
            <br />
            can inspect.
          </h2>

          <div className="flex flex-wrap items-center gap-6 mt-8">
            <a
              href="#practice-demo"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-extrabold bg-[#4E25A5] text-white border-2 border-[#17181A] no-underline hover:shadow-[3px_3px_0_0_#FCC827] transition-all hover:-translate-y-0.5"
            >
              <span>Visit the live product</span>
              <ArrowUpRight size={16} />
            </a>

            <a
              href="#plans"
              className="inline-flex items-center gap-2 text-base font-extrabold pb-1 text-[#17181A] border-b-2 border-[#17181A] no-underline hover:text-[#4E25A5] hover:border-[#4E25A5] transition-colors"
            >
              <span>Check current plans</span>
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        {/* Right Side: Step Cards Container */}
        <div className="rounded-[24px] border-2 border-[#17181A] bg-[#FFF8E6] p-6 sm:p-8 shadow-[10px_10px_0px_#FCC827]">
          <div className="space-y-4">
            {steps.map((step) => (
              <div
                key={step.eyebrow}
                className="rounded-2xl border border-[#17181A]/15 bg-white p-5 transition-transform hover:-translate-y-0.5 hover:shadow-[3px_3px_0_0_#17181A]"
              >
                <span className="block text-[11px] font-extrabold uppercase tracking-widest text-[#6E5F36] mb-1 font-body">
                  {step.eyebrow}
                </span>
                <div className="text-lg sm:text-xl font-bold text-[#17181A] tracking-tight font-heading">
                  {step.title}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs text-[#68635B] font-body text-center sm:text-left">
            Illustration of product areas, not a screenshot or a student outcome.
          </p>
        </div>
      </div>
    </section>
  );
}
