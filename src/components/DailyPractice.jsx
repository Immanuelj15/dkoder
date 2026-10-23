import React, { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

const initialTasks = [
  { id: 1, text: 'Solve two array questions', completed: false },
  { id: 2, text: 'Review one SQL query', completed: false },
  { id: 3, text: 'Try five aptitude questions', completed: false },
  { id: 4, text: 'Review one coding solution', completed: false }
];

export default function DailyPractice() {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const doneCount = tasks.filter(t => t.completed).length;

  return (
    <section className="relative px-4 sm:px-8 py-20 sm:py-28 overflow-hidden bg-[#F7E6AD]">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[75px] items-center">
        {/* Left Side: Copy and Illustration */}
        <div>
          <span className="block text-xs font-bold uppercase tracking-widest text-[#17181A] mb-4 font-body">
            Try a real day's practice
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold leading-[1.05] mb-6 text-[#17181A] tracking-tight font-heading">
            “What should I
            <br />
            do today?”
          </h2>

          <div className="relative my-4">
            <img
              src="/study-duo-illustration.png"
              alt="Two students reviewing practice questions together on a laptop"
              className="w-full max-w-[440px] h-[250px] object-contain object-bottom mx-auto block"
            />
          </div>

          <a
            href="#plans"
            className="inline-flex items-center gap-2 text-base font-extrabold pb-1 mt-6 text-[#17181A] border-b-2 border-[#17181A] no-underline hover:text-[#4E25A5] hover:border-[#4E25A5] transition-colors"
          >
            <span>Start practising on Dkoder</span>
            <ArrowUpRight size={17} />
          </a>
        </div>

        {/* Right Side: Interactive Checklist Card */}
        <div className="rounded-[24px] border-2 border-[#17181A] bg-[#FFFDF8] p-6 sm:p-9 shadow-[8px_8px_0px_#4E25A5]">
          <div className="flex items-start justify-between gap-4 border-b border-[#17181A]/10 pb-5">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#6E5F36] block font-body">
                A DAY ON YOUR PATH
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#17181A] tracking-tight mt-1 font-heading">
                Today’s practice
              </h3>
            </div>

            <span className="px-3 py-1.5 rounded-full text-xs font-extrabold whitespace-nowrap bg-[#FCC827] text-[#17181A] border border-[#17181A] shadow-[2px_2px_0px_#17181A]">
              {doneCount} / {tasks.length} done
            </span>
          </div>

          {/* Checklist */}
          <div className="grid gap-3 my-6 font-body">
            {tasks.map((task) => (
              <label
                key={task.id}
                onClick={() => toggleTask(task.id)}
                className={`flex items-center gap-3.5 p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                  task.completed
                    ? 'border-[#17181A] bg-[#FFF8E6] shadow-[2px_2px_0px_#17181A]'
                    : 'border-[#17181A]/20 bg-white hover:border-[#17181A] hover:bg-[#FFFDF8]'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-md border-2 border-[#17181A] flex items-center justify-center transition-colors ${
                    task.completed ? 'bg-[#4E25A5] text-white' : 'bg-white'
                  }`}
                >
                  {task.completed && <Check size={14} strokeWidth={3} />}
                </div>

                <span
                  className={`text-[15px] font-semibold select-none ${
                    task.completed ? 'line-through text-[#68635B]' : 'text-[#17181A]'
                  }`}
                >
                  {task.text}
                </span>
              </label>
            ))}
          </div>

          {/* Card Footnote */}
          <div className="pt-2 text-xs text-[#68635B] flex items-center justify-between">
            <span>Consistent progress builds placement readiness</span>
            <span className="font-bold text-[#4E25A5]">Daily Goal: 100 XP</span>
          </div>
        </div>
      </div>
    </section>
  );
}
