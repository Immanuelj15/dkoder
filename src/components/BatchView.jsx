import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function BatchView() {
  const questions = [
    'Who is practising consistently?',
    'Where is the batch getting stuck?',
    'Which cohort needs attention now?'
  ];

  return (
    <section id="batch-view" className="relative px-4 sm:px-8 py-20 sm:py-28 overflow-hidden bg-[#FCC827]">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[75px] items-center">
        {/* Left Side */}
        <div>
          <span className="block text-xs font-bold uppercase tracking-widest text-[#17181A] mb-4 font-body">
            For faculty & placement teams
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold leading-[1.05] mb-6 text-[#17181A] tracking-tight font-heading">
            Now imagine seeing
            <br />
            the whole batch.
          </h2>

          <a
            href="#next-move"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-extrabold bg-[#4E25A5] text-white border-2 border-[#17181A] no-underline hover:shadow-[3px_3px_0_0_#17181A] hover:-translate-y-0.5 transition-all mt-4"
          >
            <span>Explore the college page</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Right Side: Questions worth answering Card */}
        <div className="rounded-[23px] border-2 border-[#17181A] bg-[#FFFDF8] p-7 pb-0 shadow-[10px_10px_0px_#401E87] overflow-hidden">
          <span className="block text-xs font-extrabold uppercase tracking-widest text-[#6E5F36] mb-3 font-body">
            Questions worth answering
          </span>

          <div className="divide-y divide-[#DAD4C8]">
            {questions.map((q) => (
              <p
                key={q}
                className="text-xl sm:text-2xl font-bold py-3.5 m-0 text-[#17181A] tracking-tight font-heading"
              >
                {q}
              </p>
            ))}
          </div>

          <div className="mt-4 flex justify-center">
            <img
              src="/study-duo-illustration.png"
              alt="Two students reviewing practice questions together on a laptop"
              className="h-[170px] w-auto object-contain object-bottom block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
