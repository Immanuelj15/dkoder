import React, { useState } from 'react';
import { 
  Code, 
  FileCheck2, 
  Database, 
  Lock, 
  RotateCcw, 
  Shuffle, 
  ChevronDown, 
  Check, 
  ArrowUpRight 
} from 'lucide-react';
import defaultFilterData from '../data/practiceFilterData.json';

const allQuestions = [
  {
    id: 1,
    title: 'Escape Sequences in Strings',
    mode: 'MCQ',
    level: 'Medium',
    company: 'TCS',
    badge: 'TCS NQT Prime',
    package: '7-10 LPA',
    type: 'mcq'
  },
  {
    id: 2,
    title: 'Rotation & Sorting',
    mode: 'Coding',
    level: 'Easy',
    company: 'Adobe',
    badge: 'Adobe MTS',
    package: '10-20 LPA',
    type: 'coding'
  },
  {
    id: 3,
    title: 'Triangle DP',
    mode: 'Platform',
    level: 'Medium',
    company: 'Zoho',
    badge: 'Zoho',
    package: '3-7 LPA',
    type: 'platform'
  },
  {
    id: 4,
    title: 'Rule-Based Decision Making',
    mode: 'MCQ',
    level: 'Easy',
    company: 'Hexaware',
    badge: 'Hexaware',
    package: '0-3 LPA',
    type: 'mcq'
  },
  {
    id: 5,
    title: 'Balanced Parentheses with Wildcards',
    mode: 'Coding',
    level: 'Medium',
    company: 'Microsoft',
    badge: 'Microsoft SDE',
    package: '20+ LPA',
    type: 'coding'
  },
  {
    id: 6,
    title: 'SQL Window Functions & Aggregates',
    mode: 'MCQ',
    level: 'Hard',
    company: 'Infosys',
    badge: 'InfyTQ Specialist',
    package: '7-10 LPA',
    type: 'mcq'
  },
  {
    id: 7,
    title: 'Binary Tree Right Side View',
    mode: 'Coding',
    level: 'Medium',
    company: 'Amazon',
    badge: 'Amazon SDE-1',
    package: '20+ LPA',
    type: 'coding'
  },
  {
    id: 8,
    title: 'System Design: LRU Cache Implementation',
    mode: 'Platform',
    level: 'Hard',
    company: 'Google',
    badge: 'Google SWE',
    package: '20+ LPA',
    type: 'platform'
  }
];

export default function PracticeDemo() {
  const [selectedCompany, setSelectedCompany] = useState('Any company');
  const [selectedPackage, setSelectedPackage] = useState('Any package');
  const [selectedMode, setSelectedMode] = useState('All practice');
  const [selectedLevel, setSelectedLevel] = useState('All levels');
  const [openSelect, setOpenSelect] = useState(null);
  const [cardOffset, setCardOffset] = useState(0);

  // Filter questions based on selection
  const filteredQuestions = allQuestions.filter(q => {
    if (selectedCompany !== 'Any company' && q.company !== selectedCompany) return false;
    if (selectedPackage !== 'Any package' && q.package !== selectedPackage) return false;
    if (selectedMode !== 'All practice' && q.mode !== selectedMode) return false;
    if (selectedLevel !== 'All levels' && q.level !== selectedLevel) return false;
    return true;
  });

  const displayedQuestions = (filteredQuestions.length > 0 ? filteredQuestions : allQuestions)
    .slice(cardOffset, cardOffset + 4);

  const resetFilters = () => {
    setSelectedCompany('Any company');
    setSelectedPackage('Any package');
    setSelectedMode('All practice');
    setSelectedLevel('All levels');
    setCardOffset(0);
  };

  const applyPreset = (preset) => {
    if (preset.values.company) setSelectedCompany(preset.values.company);
    if (preset.values.package) setSelectedPackage(preset.values.package);
    setCardOffset(0);
  };

  const surpriseMe = () => {
    const companies = ['TCS', 'Microsoft', 'Infosys', 'Zoho', 'Adobe', 'Amazon'];
    const levels = ['Easy', 'Medium', 'Hard'];
    const modes = ['MCQ', 'Coding', 'Platform'];
    setSelectedCompany(companies[Math.floor(Math.random() * companies.length)]);
    setSelectedLevel(levels[Math.floor(Math.random() * levels.length)]);
    setSelectedMode(modes[Math.floor(Math.random() * modes.length)]);
    setCardOffset(0);
  };

  const cycleOthers = () => {
    setCardOffset((prev) => (prev + 2) % (allQuestions.length - 2));
  };

  const filterOptions = {
    company: ['Any company', 'TCS', 'Microsoft', 'Infosys', 'Zoho', 'Adobe', 'Hexaware', 'Amazon', 'Google'],
    package: ['Any package', '0-3 LPA', '3-7 LPA', '7-10 LPA', '10-20 LPA', '20+ LPA'],
    mode: ['All practice', 'MCQ', 'Coding', 'Platform'],
    level: ['All levels', 'Easy', 'Medium', 'Hard']
  };

  return (
    <section id="practice-demo" className="hw">
      <div className="hw-wrap">
        {/* Header */}
        <div className="hw-heading">
          <div>
            <span className="hw-eyebrow text-xs uppercase font-extrabold tracking-widest text-[#d6d1c6]">
              <span className="hw-live" /> A LIVE LOOK INSIDE THE QUESTION POOL
            </span>
            <h2>
              A deep question bank.
              <br />
              <span>Only a few for you.</span>
            </h2>
          </div>
          <p>
            Filter through verified questions from genuine screening tests, technical interviews, and national campus exams.
          </p>
        </div>

        {/* Workbench Card */}
        <div className="hw-bench">
          {/* Left Controls Panel */}
          <div className="hw-intro">
            <span className="hw-kicker">A FOCUSED PRACTICE DEMO</span>
            <h3>Choose the destination. Cut the noise.</h3>
            <p>
              MCQs, coding rounds and platform problems, tagged by company, package and level. Pick a target and watch the noise fall away.
            </p>

            {/* Quick Target Chips */}
            <div className="hw-presets">
              <span className="hw-presets-label">QUICK TARGETS</span>
              {defaultFilterData.presets?.map((preset) => (
                <button
                  key={preset.name}
                  type="button"
                  onClick={() => applyPreset(preset)}
                  className={`hw-chip ${selectedCompany === preset.values.company ? 'is-on' : ''}`}
                >
                  {preset.name}
                </button>
              ))}
            </div>

            {/* Select Dropdowns Grid */}
            <div className="hw-controls">
              {/* Company Select */}
              <div className={`fs ${openSelect === 'company' ? 'is-open' : ''} ${selectedCompany !== 'Any company' ? 'is-set' : ''}`}>
                <label className="fs-label">COMPANY</label>
                <button
                  type="button"
                  className="fs-trigger"
                  onClick={() => setOpenSelect(openSelect === 'company' ? null : 'company')}
                >
                  <span className="fs-value">{selectedCompany}</span>
                  <ChevronDown size={14} className="fs-chev" />
                </button>
                {openSelect === 'company' && (
                  <ul className="fs-list">
                    {filterOptions.company.map((opt) => (
                      <li
                        key={opt}
                        className={`fs-opt ${selectedCompany === opt ? 'is-selected is-active' : ''}`}
                        onClick={() => {
                          setSelectedCompany(opt);
                          setOpenSelect(null);
                        }}
                      >
                        <Check size={14} className="fs-check" />
                        <span className="fs-opt-label">{opt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Package Select */}
              <div className={`fs ${openSelect === 'package' ? 'is-open' : ''} ${selectedPackage !== 'Any package' ? 'is-set' : ''}`}>
                <label className="fs-label">PACKAGE</label>
                <button
                  type="button"
                  className="fs-trigger"
                  onClick={() => setOpenSelect(openSelect === 'package' ? null : 'package')}
                >
                  <span className="fs-value">{selectedPackage}</span>
                  <ChevronDown size={14} className="fs-chev" />
                </button>
                {openSelect === 'package' && (
                  <ul className="fs-list">
                    {filterOptions.package.map((opt) => (
                      <li
                        key={opt}
                        className={`fs-opt ${selectedPackage === opt ? 'is-selected is-active' : ''}`}
                        onClick={() => {
                          setSelectedPackage(opt);
                          setOpenSelect(null);
                        }}
                      >
                        <Check size={14} className="fs-check" />
                        <span className="fs-opt-label">{opt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Mode Select */}
              <div className={`fs ${openSelect === 'mode' ? 'is-open' : ''} ${selectedMode !== 'All practice' ? 'is-set' : ''}`}>
                <label className="fs-label">MODE</label>
                <button
                  type="button"
                  className="fs-trigger"
                  onClick={() => setOpenSelect(openSelect === 'mode' ? null : 'mode')}
                >
                  <span className="fs-value">{selectedMode}</span>
                  <ChevronDown size={14} className="fs-chev" />
                </button>
                {openSelect === 'mode' && (
                  <ul className="fs-list">
                    {filterOptions.mode.map((opt) => (
                      <li
                        key={opt}
                        className={`fs-opt ${selectedMode === opt ? 'is-selected is-active' : ''}`}
                        onClick={() => {
                          setSelectedMode(opt);
                          setOpenSelect(null);
                        }}
                      >
                        <Check size={14} className="fs-check" />
                        <span className="fs-opt-label">{opt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Level Select */}
              <div className={`fs ${openSelect === 'level' ? 'is-open' : ''} ${selectedLevel !== 'All levels' ? 'is-set' : ''}`}>
                <label className="fs-label">LEVEL</label>
                <button
                  type="button"
                  className="fs-trigger"
                  onClick={() => setOpenSelect(openSelect === 'level' ? null : 'level')}
                >
                  <span className="fs-value">{selectedLevel}</span>
                  <ChevronDown size={14} className="fs-chev" />
                </button>
                {openSelect === 'level' && (
                  <ul className="fs-list">
                    {filterOptions.level.map((opt) => (
                      <li
                        key={opt}
                        className={`fs-opt ${selectedLevel === opt ? 'is-selected is-active' : ''}`}
                        onClick={() => {
                          setSelectedLevel(opt);
                          setOpenSelect(null);
                        }}
                      >
                        <Check size={14} className="fs-check" />
                        <span className="fs-opt-label">{opt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Actions Row */}
              <div className="hw-actions">
                <button
                  type="button"
                  onClick={resetFilters}
                  className="hw-reset flex items-center gap-1.5"
                >
                  <RotateCcw size={14} />
                  <span>Reset</span>
                </button>

                <button
                  type="button"
                  onClick={surpriseMe}
                  className="hw-chip hw-chip-dark flex items-center gap-1.5"
                >
                  <Shuffle size={14} />
                  <span>Surprise me</span>
                </button>
              </div>
            </div>

            <p className="hw-note">Your plan decides which companies you can open.</p>
          </div>

          {/* Right Question Bank Result Panel */}
          <div className="hw-result">
            <div className="hw-panel-top">
              <span>FROM THE FULL BANK</span>
              <span className="hw-status is-1">WIDE OPEN</span>
            </div>

            {/* Questions List */}
            <ul className="hw-cards">
              {displayedQuestions.map((q, idx) => {
                const isCoding = q.type === 'coding';
                const isPlatform = q.type === 'platform';

                return (
                  <li
                    key={q.id}
                    className={`hw-card ${isCoding ? 'is-coding' : ''} ${isPlatform ? 'is-platform' : ''}`}
                    style={{ '--d': `${idx * 0.08}s` }}
                  >
                    <div className="hw-card-icon">
                      {isCoding ? (
                        <Code size={18} />
                      ) : isPlatform ? (
                        <Database size={18} />
                      ) : (
                        <FileCheck2 size={18} />
                      )}
                    </div>

                    <div className="hw-card-body">
                      <b>{q.title}</b>
                      <div className="hw-card-text">
                        <i />
                        <i />
                      </div>
                      <div className="hw-tags">
                        <span className="hw-tag">{q.mode}</span>
                        <span className={`hw-tag ${q.level === 'Easy' ? 'is-easy' : q.level === 'Medium' ? 'is-medium' : 'is-hard'}`}>
                          {q.level}
                        </span>
                        <span className="hw-tag is-company">{q.badge}</span>
                      </div>
                    </div>

                    <div className="hw-card-lock">
                      <Lock size={15} />
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Bottom Row */}
            <div className="hw-more">
              <span>Plus every other match, ready on the practice page.</span>
              <button
                type="button"
                onClick={cycleOthers}
                className="hw-reshuffle"
              >
                <RotateCcw size={13} />
                <span>Show others</span>
              </button>
            </div>

            {/* Unlock Button */}
            <div className="hw-unlock">
              <a href="#plans" className="hw-button">
                <span>Unlock full library access</span>
                <ArrowUpRight size={16} />
              </a>
              <a href="#plans" className="hw-free-link">
                or explore free daily problems
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
