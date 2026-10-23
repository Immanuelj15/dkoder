import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import tracksData from '../data/careerTracksData.json';

export default function CareerTracks() {
  const tracks = tracksData.tracks || [];
  const [selectedKey, setSelectedKey] = useState('service-developer');

  const currentTrack = tracks.find((t) => t.key === selectedKey) || tracks[1] || tracks[0];

  const scaleMax = 50;
  const minPos = Math.min(100, Math.max(0, (currentTrack.lpa.min / scaleMax) * 100));
  const maxPos = Math.min(100, Math.max(0, (currentTrack.lpa.max / scaleMax) * 100));
  const totalQuestions = currentTrack.questions.total || 1869;

  const easyPct = (currentTrack.difficulty.EASY / totalQuestions) * 100;
  const medPct = (currentTrack.difficulty.MEDIUM / totalQuestions) * 100;
  const hardPct = (currentTrack.difficulty.HARD / totalQuestions) * 100;

  return (
    <section className="ct" id="career-tracks" aria-labelledby="ct-heading">
      <div className="ct-wrap">
        {/* Left Intro Column */}
        <div className="ct-intro">
          <h2 id="ct-heading" className="ct-heading">
            Right filter.
            <br />
            Right <span className="ct-heading-mark">career.</span>
          </h2>

          <p className="ct-sub">
            Filter down to the exact questions asked in past placement drives for your target job category.
          </p>

          {/* Track Selection Tabs */}
          <div className="ct-tabs" role="tablist">
            {tracks.map((track) => {
              const isActive = track.key === selectedKey;
              return (
                <button
                  key={track.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedKey(track.key)}
                  className={`ct-tab ${isActive ? 'is-active' : ''}`}
                >
                  <span>{track.label}</span>
                  <span className="ct-tab-count">{track.companyCount}</span>
                </button>
              );
            })}
          </div>

          <p className="ct-totals">
            3,254 questions from 44 companies · 12 prep bundles
          </p>

          {/* Action CTAs */}
          <div className="ct-ctas">
            <a href="#plans" className="ct-cta">
              <span>Practice this track</span>
              <span className="ct-cta-icon">
                <ArrowUpRight size={20} />
              </span>
            </a>

            <a href="#plans" className="ct-cta-ghost">
              Browse all bundles
            </a>
          </div>
        </div>

        {/* Right Detail Card */}
        <div className="ct-card-shell">
          <div className="ct-card">
            <div className="ct-layer">
              <span className="ct-card-eyebrow">CAREER FOCUS</span>
              <h3 className="ct-card-title">{currentTrack.label}</h3>
              <p className="ct-card-blurb">{currentTrack.blurb}</p>

              {/* Metrics Box */}
              <div className="ct-metrics">
                {/* Package Range */}
                <div className="ct-metric">
                  <span className="ct-label">PACKAGE</span>
                  <span className="ct-metric-num">
                    ₹{currentTrack.lpa.min}–{currentTrack.lpa.max} <small>LPA</small>
                  </span>
                  <div className="ct-scale">
                    <div className="ct-scale-track">
                      <div
                        className="ct-scale-range"
                        style={{ left: `${minPos}%`, width: `${Math.max(4, maxPos - minPos)}%` }}
                      />
                      <div className="ct-scale-dot" style={{ left: `${minPos}%` }} />
                    </div>
                    <div className="ct-scale-ticks">
                      <span>0</span>
                      <span style={{ left: '50%' }}>25</span>
                      <span>50+</span>
                    </div>
                  </div>
                </div>

                {/* Questions & Difficulty */}
                <div className="ct-metric">
                  <div className="ct-metric-row">
                    <span className="ct-label">QUESTIONS & DIFFICULTY</span>
                  </div>
                  <div className="ct-metric-row items-baseline gap-2 mt-1">
                    <span className="ct-metric-num">{currentTrack.questions.total?.toLocaleString()}</span>
                    <span className="ct-metric-sub">
                      {currentTrack.questions.mcq?.toLocaleString()} MCQ · {currentTrack.questions.coding} coding
                      {currentTrack.questions.platform ? ` · ${currentTrack.questions.platform} platform` : ''}
                    </span>
                  </div>

                  <div className="ct-diff">
                    <div className="ct-diff-bar">
                      <span className="is-easy" style={{ flexGrow: easyPct }} />
                      <span className="is-medium" style={{ flexGrow: medPct }} />
                      <span className="is-hard" style={{ flexGrow: hardPct }} />
                    </div>
                    <div className="ct-diff-legend">
                      <span><i className="is-easy" /> Easy {currentTrack.difficulty.EASY}</span>
                      <span><i className="is-medium" /> Medium {currentTrack.difficulty.MEDIUM}</span>
                      <span><i className="is-hard" /> Hard {currentTrack.difficulty.HARD}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hiring Companies Pills */}
              <div className="ct-block">
                <span className="ct-label">HIRING FOR THIS TRACK · {currentTrack.companyCount} COMPANIES</span>
                <ul className="ct-companies">
                  {currentTrack.companies?.slice(0, 4).map((c) => (
                    <li key={c.name}>
                      <span>{c.name}</span>
                      <span className="ct-co-lpa">
                        ₹{c.lpaMin === c.lpaMax ? c.lpaMin : `${c.lpaMin}–${c.lpaMax}`}L
                      </span>
                    </li>
                  ))}
                  {currentTrack.companyCount > 4 && (
                    <li className="ct-co-more">
                      +{currentTrack.companyCount - 4} more
                    </li>
                  )}
                </ul>
              </div>

              {/* Your Next Move */}
              <div className="ct-next">
                <span className="ct-label">YOUR NEXT MOVE</span>
                <p className="ct-next-text">
                  Start with C programming, then work through the {currentTrack.bundles?.[0]?.name || 'Complete Prep'} bundle.
                </p>

                {/* Bundles Grid */}
                <div className="ct-bundles">
                  {currentTrack.bundles?.slice(0, 2).map((bundle) => (
                    <a
                      key={bundle.slug}
                      href="#plans"
                      className="ct-bundle"
                    >
                      <div className="ct-bundle-main">
                        <strong>{bundle.name}</strong>
                        <small>{bundle.count} questions</small>
                      </div>
                      <span className="ct-bundle-price">{bundle.displayPrice}</span>
                      <span className="ct-bundle-arrow">
                        <ArrowUpRight size={16} />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
