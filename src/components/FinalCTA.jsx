import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="next-move" className="px-4 pb-14 pt-20 sm:px-8 sm:pb-16 sm:pt-24 bg-[#FFFAF0]">
      <div className="max-w-[1180px] mx-auto rounded-[28px] border-2 border-[#17181A] bg-[#FCC827] shadow-[6px_6px_0px_#17181A] px-7 py-10 sm:px-12 sm:py-12 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] items-center gap-8">
        {/* Left Side */}
        <div>
          <span className="block text-xs font-bold uppercase tracking-widest text-[#17181A] mb-3 font-body">
            Your next move
          </span>
          <h2 className="text-3xl sm:text-[2.6rem] font-bold leading-[1.08] text-[#17181A] tracking-tight font-heading m-0">
            One goal. One useful next step.
          </h2>
          <p className="mt-4 max-w-[560px] text-base leading-relaxed text-[#383530] font-body m-0">
            Practise real company questions, track your progress and walk into placements ready. Colleges can partner with Dkoder for the whole campus.
          </p>
        </div>

        {/* Right Side Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
          <a
            href="#plans"
            className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-[15px] font-extrabold bg-[#4E25A5] text-white border-2 border-[#17181A] no-underline hover:shadow-[3px_3px_0_0_#17181A] hover:-translate-y-0.5 transition-all text-center"
          >
            <span>Start on Dkoder</span>
            <ArrowRight size={17} />
          </a>

          <a
            href="#batch-view"
            className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-[15px] font-extrabold bg-white text-[#17181A] border-2 border-[#17181A] no-underline hover:bg-[#FFF8E6] hover:shadow-[3px_3px_0_0_#17181A] hover:-translate-y-0.5 transition-all text-center"
          >
            <span>For colleges: apply for an MOU</span>
          </a>
        </div>
      </div>
    </section>
  );
}
