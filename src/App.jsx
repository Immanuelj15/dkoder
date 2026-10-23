import React, { useState } from 'react';
import LandingNavbar from './components/LandingNavbar';
import HeroDialogue from './components/HeroDialogue';
import CompanyTicker from './components/CompanyTicker';
import InterviewThoughts from './components/InterviewThoughts';
import PracticeDemo from './components/PracticeDemo';
import CareerTracks from './components/CareerTracks';
import DailyPractice from './components/DailyPractice';
import PlansSection from './components/PlansSection';
import FeaturesGrid from './components/FeaturesGrid';
import InspectProof from './components/InspectProof';
import BatchView from './components/BatchView';
import Leaderboard from './components/Leaderboard';
import FinalCTA from './components/FinalCTA';
import SiteFooter from './components/SiteFooter';
import AccessibilityModal from './components/AccessibilityModal';

export default function App() {
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);

  return (
    <div className="page-container min-h-screen bg-[#FFFDF8] text-[#17181A]">
      {/* 1. Header Navigation */}
      <LandingNavbar onOpenAccessibility={() => setAccessibilityOpen(true)} />

      {/* 2. Hero Dialogue with 3D Characters & Rotating Comic Speech Bubbles */}
      <HeroDialogue />

      {/* 3. Company Trust Marquee Band */}
      <CompanyTicker />

      {/* 4. Interview Tomorrow. Mind Everywhere? Interactive Worries & Solution */}
      <InterviewThoughts />

      {/* 5. A Deep Question Bank. Only a Few for You. Practice Filter Workbench */}
      <PracticeDemo />

      {/* 6. Right Filter. Right Career. Career Tracks & Salary Sliders */}
      <CareerTracks />

      {/* 7. What Should I Do Today? Daily Practice Interactive Checklist */}
      <DailyPractice />

      {/* 8. Pick Your Price, Not a Maybe. Plans & Pricing Subscriptions */}
      <PlansSection />

      {/* 9. More Than Coding Problems. 5 Features Grid */}
      <FeaturesGrid />

      {/* 10. Proof Should Be Something You Can Inspect */}
      <InspectProof />

      {/* 11. Now Imagine Seeing the Whole Batch. College Admin Analytics */}
      <BatchView />

      {/* 12. Earn Your Spot. Student Gamification Leaderboard */}
      <Leaderboard />

      {/* 13. Your Next Move: One Goal. One Useful Next Step. */}
      <FinalCTA />

      {/* 14. Comprehensive Site Footer & Recognitions */}
      <SiteFooter />

      {/* Accessibility Preferences Modal */}
      <AccessibilityModal
        isOpen={accessibilityOpen}
        onClose={() => setAccessibilityOpen(false)}
      />
    </div>
  );
}
