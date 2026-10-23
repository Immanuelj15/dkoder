import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const features = [
  { n: '01', title: 'Aptitude & MCQs', body: 'Build speed and accuracy for screening rounds.' },
  { n: '02', title: 'Coding practice', body: 'Work through challenges and test code in the browser.' },
  { n: '03', title: 'Mock exams', body: 'Practise timed, test-like rounds and review results.' },
  { n: '04', title: 'Courses & sets', body: 'Use curated problem sets and the course library where included.' },
  { n: '05', title: 'Progress & scores', body: 'Track activity, XP and analytics as you improve.' }
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="relative px-4 sm:px-8 py-20 sm:py-28 overflow-hidden bg-[#FFFDF8]">
      <div className="max-w-[1240px] mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <span className="block text-xs font-bold uppercase tracking-widest text-[#17181A] mb-4 font-body">
            What's actually included
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold leading-[1.05] mb-6 text-[#17181A] tracking-tight font-heading">
            More than coding
            <br />
            problems.
          </h2>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-10">
          {features.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <article
                key={item.n}
                className="rounded-[20px] p-5 border border-[#DAD4C8] bg-[#FFF8E6] min-h-[205px] flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#17181A]"
              >
                <div>
                  <span
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-full text-xs font-extrabold font-body ${
                      isEven ? 'bg-[#FCC827] text-[#17181A]' : 'bg-[#4E25A5] text-white'
                    }`}
                  >
                    {item.n}
                  </span>
                  <h3 className="text-lg font-bold mb-2 leading-tight text-[#17181A] tracking-tight mt-6 font-heading">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm leading-relaxed text-[#5F6060] font-body mt-2">
                  {item.body}
                </p>
              </article>
            );
          })}
        </div>

        {/* Footer Link */}
        <div>
          <a
            href="#practice-demo"
            className="inline-flex items-center gap-2 text-base font-extrabold pb-1 text-[#17181A] border-b-2 border-[#17181A] no-underline hover:text-[#4E25A5] hover:border-[#4E25A5] transition-colors"
          >
            <span>Explore the live platform</span>
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
