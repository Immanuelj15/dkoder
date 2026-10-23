import React, { useState, useEffect, useRef } from 'react';

const dialogues = [
  { student: "I have a dream to get placed with a ₹10 LPA package. Can you help me?", bot: "Sure, I can." },
  { student: "I want to become a game developer. Can you guide me?", bot: "Sure, I will." },
  { student: "I want to get placed at Zoho. Please help me.", bot: "Of course. I’m here to help you achieve your dream." },
  { student: "I want to be an ethical hacker. Can you guide me?", bot: "I will frame a roadmap for you." },
  { student: "I practise coding every day, but I don’t have a target.", bot: "I will help you practise toward a clear target." }
];

const CYCLE_TIME = 5000;
const FADE_TIME = 260;
const BOT_DELAY = 1400;

export default function HeroDialogue() {
  const [index, setIndex] = useState(0);
  const [activeDialogue, setActiveDialogue] = useState(0);
  const [studentVisible, setStudentVisible] = useState(true);
  const [botVisible, setBotVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const lastIndex = useRef(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const timers = [];
    const addTimeout = (fn, delay) => timers.push(setTimeout(fn, delay));

    const showNewDialogue = () => {
      lastIndex.current = index;
      setActiveDialogue(index);
      setStudentVisible(true);
    };

    if (lastIndex.current === index) {
      showNewDialogue();
    } else {
      setBotVisible(false);
      setStudentVisible(false);
      addTimeout(showNewDialogue, FADE_TIME);
    }

    if (!isPaused) {
      addTimeout(() => setBotVisible(true), BOT_DELAY);
      addTimeout(() => setIndex((prev) => (prev + 1) % dialogues.length), CYCLE_TIME);
    } else {
      setBotVisible(true);
    }

    return () => timers.forEach(clearTimeout);
  }, [index, isPaused]);

  const currentPair = dialogues[activeDialogue];
  const isBotShown = botVisible && activeDialogue === index;

  return (
    <section
      id="student-hero"
      className="dh pt-[74px]"
      style={{ minHeight: '100svh' }}
      aria-label="Students talking with the Dkoder chatbot"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <h1 className="sr-only">Dkoder: The Placement LMS for Engineering Colleges</h1>

      <div
        ref={containerRef}
        className="dh-stage"
        onFocus={() => setIsPaused(true)}
        onBlur={(e) => {
          if (!containerRef.current?.contains(e.relatedTarget)) {
            setIsPaused(false);
          }
        }}
      >
        {/* Comic Speech Bubbles */}
        <div className="dh-bubbles">
          <div className="dh-rail" aria-live="polite">
            <div className={`dh-speech dh-question ${studentVisible ? 'is-visible' : ''}`}>
              <p>{currentPair.student}</p>
            </div>
          </div>

          <div
            className={`dh-speech dh-answer ${isBotShown ? 'is-visible' : ''}`}
            aria-live="polite"
          >
            <p>{currentPair.bot}</p>
          </div>
        </div>

        {/* 3D Student Group & Robot Mascot Characters */}
        <div className="dh-characters">
          <div className="dh-students">
            <img
              src="/hero-dialogue/students-five-hero.webp"
              alt="Five college students facing the Dkoder chatbot"
              width="1774"
              height="887"
              fetchpriority="high"
              draggable={false}
            />
          </div>

          <div className="dh-bot">
            <img
              src="/hero-dialogue/dkoder-bot.webp"
              alt="Friendly Dkoder chatbot facing the students"
              width="1024"
              height="1536"
              fetchpriority="high"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
