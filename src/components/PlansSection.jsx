import React from 'react';
import { Check, ArrowUpRight, GraduationCap } from 'lucide-react';
import { pricingPlans } from '../data/pricingPlans';

export default function PlansSection() {
  const topThreePlans = pricingPlans.slice(0, 3);
  const bottomTwoPlans = pricingPlans.slice(3, 5);

  const renderCard = (plan, isFeatured = false) => {
    return (
      <div
        key={plan.id}
        className={`pl-card ${isFeatured ? 'pl-card--featured' : ''}`}
      >
        {plan.badge && (
          <span className="pl-badge">
            {plan.badge}
          </span>
        )}

        <div className="pl-card-name">
          {plan.name}
        </div>

        <div className="pl-card-body">
          {/* Price & Per-day row */}
          <div className="pl-pricerow">
            <div className="pl-bubble pl-bubble--price">
              <span className="pl-bubble-amount">₹{plan.price.toLocaleString()}</span>
              <span className="pl-bubble-period">/ year</span>
            </div>
            <div className="pl-bubble pl-bubble--day">
              {plan.perDay}
            </div>
          </div>

          {/* Target box */}
          {plan.targetBox && (
            <div className="pl-target">
              <span className="pl-target-lpa">{plan.targetBox.lpa}</span>
              <span className="pl-target-market">{plan.targetBox.market}</span>
            </div>
          )}

          {/* Features list */}
          <ul className={`pl-card-features ${isFeatured ? 'pl-card-features--2col' : ''}`}>
            {plan.features.map((feat, fIdx) => (
              <li key={fIdx}>
                <Check size={16} strokeWidth={3} />
                <span>{feat.text}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="pl-card-ctas">
            <a
              href="#plans"
              className="pl-cta"
            >
              <span>{plan.cta}</span>
              <span className="pl-cta-icon">
                <ArrowUpRight size={16} />
              </span>
            </a>

            {plan.secondaryCta && (
              <a
                href="#batch-view"
                className="pl-cta pl-cta-ghost"
              >
                <GraduationCap size={16} />
                <span>{plan.secondaryCta}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="pl" id="plans">
      <div className="pl-wrap">
        <div className="pl-head">
          <p className="pl-eyebrow">What each plan actually costs</p>
          <h2 className="pl-heading">
            Pick your <span className="pl-heading-mark">price</span>, not a maybe.
          </h2>
          <p className="pl-sub">
            Clear, annual subscriptions with zero recurring gotchas. Everything you need to crack company placements.
          </p>
        </div>

        {/* Row 1: Bronze, Silver, Gold */}
        <div className="pl-grid pl-grid--3">
          {topThreePlans.map(plan => renderCard(plan, false))}
        </div>

        {/* Row 2: Platinum & Super Dream Pack */}
        <div className="pl-grid pl-grid--2">
          {bottomTwoPlans.map(plan => renderCard(plan, plan.id === 'super_dream'))}
        </div>

        {/* Footnote */}
        <div className="pl-foot">
          <a href="#plans" className="pl-foot-link">
            See the full comparison ↗
          </a>
        </div>
      </div>
    </section>
  );
}
