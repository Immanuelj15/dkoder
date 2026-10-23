import React, { useState, useEffect, useRef } from 'react';

const solutions = {
  "too-much": {
    title: "One goal can narrow the next question.",
    copy: "Start with a target, then filter by company, package, mode and level. A smaller shortlist makes the next action easier to choose.",
    label: "Try the filters ↗",
    to: "#practice-demo"
  },
  "not-ready": {
    title: "Start with a short skills check.",
    copy: "A quick diagnostic gives you a first view of aptitude, programming, problem solving and technical basics so you can focus your next practice session.",
    label: "Check my skills ↗",
    to: "#practice-demo"
  },
  "no-routine": {
    title: "Let a target decide today’s practice.",
    copy: "Choose the role or company you want. Then use the relevant track, mock exam or bundle as a practical next step.",
    label: "Choose a career focus ↗",
    to: "#career-tracks"
  }
};

const thoughts = [
  ["Where do I even begin?", "too-much"],
  ["Have I really improved?", "not-ready"],
  ["Will they ask me to code?", "too-much"],
  ["What should I revise tonight?", "no-routine"],
  ["Can I explain my projects?", "not-ready"],
  ["Did I practise the right questions?", "too-much"],
  ["Can I reach that ₹10 LPA goal?", "no-routine"],
  ["Is this the right role for me?", "too-much"],
  ["What if I fail the aptitude round?", "not-ready"],
  ["What if I forget everything?", "too-much"],
  ["Will I sound confident in there?", "no-routine"],
  ["Is everyone else better prepared?", "not-ready"]
];

export default function InterviewThoughts() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const activeSolution = solutions[thoughts[selectedIndex][1]];

  return (
    <section
      ref={sectionRef}
      id="overthinking"
      className={`ot ${isInView ? 'is-in-view' : ''}`}
    >
      <div className="ot-wrap">
        {/* Section Heading */}
        <div className="ot-heading">
          <h2>
            Interview tomorrow.
            <br />
            <span>Mind everywhere?</span>
          </h2>
          <p>Tap a thought below to see how to handle it.</p>
        </div>

        {/* Scene with Student & Floating Thought Bubbles */}
        <div
          className="ot-scene"
          role="group"
          aria-label="Interview worries surrounding a student waiting with his résumé"
        >
          <div className="ot-halo" aria-hidden="true" />
          <img
            className="ot-student"
            src="/hero-dialogue/student-interview-thoughts.webp"
            alt="A worried interview candidate in a suit holding his résumé on a waiting-room bench"
            width="1312"
            height="1199"
            loading="lazy"
            draggable={false}
          />

          <div className="ot-thoughts">
            {thoughts.map(([thoughtText], idx) => (
              <button
                key={thoughtText}
                type="button"
                className={`ot-thought ${idx === selectedIndex ? 'is-active' : ''}`}
                aria-pressed={idx === selectedIndex}
                style={{ '--i': idx }}
                onClick={() => setSelectedIndex(idx)}
              >
                <span>{thoughtText}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Solution Banner Card */}
        <div className="ot-solution" aria-live="polite">
          <div>
            <span className="ot-eyebrow text-xs uppercase font-extrabold tracking-widest text-[#6e5f36]">
              WANT A SOLUTION?
            </span>
            <h3>{activeSolution.title}</h3>
            <p>{activeSolution.copy}</p>
          </div>
          <a href={activeSolution.to} className="ot-button">
            {activeSolution.label}
          </a>
        </div>
      </div>
    </section>
  );
}
