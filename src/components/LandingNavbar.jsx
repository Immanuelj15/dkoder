import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  GraduationCap, 
  Calendar, 
  FileText, 
  FolderKanban, 
  Award, 
  Cpu, 
  Accessibility, 
  Menu, 
  X,
  ArrowRight
} from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function LandingNavbar({ onOpenAccessibility }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#student-hero' },
    {
      label: 'Learn',
      dropdown: [
        { section: 'Learn', title: 'Courses', desc: 'Skill-based programs', href: '#features', icon: GraduationCap },
        { section: 'Learn', title: 'Events', desc: 'Workshops & live sessions', href: '#features', icon: Calendar },
        { section: 'Learn', title: 'Resources', desc: 'Guides, videos & articles', href: '#features', icon: FileText },
        { section: 'Learn', title: 'Final Year Projects', desc: 'Guidance, mentor & publication', href: '#features', icon: FolderKanban },
        { section: 'Certifications', title: 'Topic Wise', desc: 'Certifications by topic', href: '#features', icon: Award },
        { section: 'Certifications', title: 'Technology Wise', desc: 'Certifications by technology', href: '#features', icon: Cpu }
      ]
    },
    { label: 'Hackathons', href: '#batch-view' },
    { label: 'For Colleges', href: '#batch-view' },
    { label: 'Apply for MOU', href: '#next-move' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      id="landing-nav"
      className={`fixed top-0 left-0 right-0 z-[100] border-b-2 transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? 'border-[#1a1a1a] bg-[#fffaf0]/95 shadow-[0_6px_0_0_rgba(26,26,26,0.06)] backdrop-blur-md'
          : 'border-[#1a1a1a]/10 bg-[#fffaf0]'
      }`}
    >
      <div className="mx-auto w-[min(1240px,calc(100%-32px))] font-body">
        <div className="flex h-[74px] items-center justify-between gap-3 xl:gap-6">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 no-underline group">
            <BrandLogo size="md" className="transition-transform duration-300 group-hover:scale-105" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 min-w-0">
            {navItems.map((item, idx) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setDropdownOpen(true)}
                onMouseLeave={() => item.dropdown && setDropdownOpen(false)}
              >
                {item.dropdown ? (
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    aria-expanded={dropdownOpen}
                    className="group relative flex items-center gap-1.5 whitespace-nowrap px-3.5 py-2 text-[15px] font-semibold text-[#1a1a1a] bg-transparent border-0 cursor-pointer rounded-full hover:bg-[#fff1bf] transition-colors"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <ChevronDown
                      size={14}
                      className={`relative z-10 transition-transform duration-200 opacity-60 ${
                        dropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setActiveTab(item.label)}
                    className="group relative flex items-center gap-1.5 whitespace-nowrap px-3.5 py-2 text-[15px] font-semibold no-underline text-[#1a1a1a]"
                  >
                    <span className="relative z-10">{item.label}</span>
                    {activeTab === item.label ? (
                      <motion.span
                        layoutId="landing-nav-marker"
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full bg-[#fcc419] shadow-[inset_0_0_0_1.5px_#1a1a1a]"
                        transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full bg-[#fcc419]/45 opacity-0 scale-90 transition-[opacity,transform] duration-200 ease-out group-hover:opacity-100 group-hover:scale-100"
                      />
                    )}
                  </a>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && dropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 z-50 pt-2">
                    <div className="w-[310px] rounded-2xl border-2 border-[#1a1a1a] bg-[#fffaf0] p-2 shadow-[4px_4px_0_0_#fcc419] animate-in fade-in slide-in-from-top-2 duration-200">
                      {item.dropdown.map((sub, sIdx) => {
                        const showSection = sub.section && sub.section !== item.dropdown[sIdx - 1]?.section;
                        const Icon = sub.icon;
                        return (
                          <React.Fragment key={sub.title}>
                            {showSection && (
                              <div className={`px-3 pb-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#7a5c00] ${sIdx === 0 ? 'pt-1' : 'pt-3'}`}>
                                {sub.section}
                              </div>
                            )}
                            <a
                              href={sub.href}
                              onClick={() => setDropdownOpen(false)}
                              className="group flex items-start gap-3 rounded-xl p-2.5 no-underline transition-colors hover:bg-[#fff1bf]"
                            >
                              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border-2 border-[#1a1a1a] bg-white text-[#1a1a1a] transition-colors group-hover:bg-[#fcc419]">
                                <Icon size={17} />
                              </div>
                              <div>
                                <div className="text-[13.5px] font-bold text-[#1a1a1a]">{sub.title}</div>
                                <div className="text-xs font-medium leading-tight text-[#5c5850]">{sub.desc}</div>
                              </div>
                            </a>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="flex shrink-0 items-center gap-2 xl:gap-3">
            {/* Accessibility Button */}
            <button
              type="button"
              onClick={onOpenAccessibility}
              aria-label="Accessibility settings"
              className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#1a1a1a] bg-white text-[#1a1a1a] transition-all hover:-translate-y-0.5 hover:bg-[#fcc419] hover:shadow-[3px_3px_0_0_#1a1a1a]"
            >
              <Accessibility size={19} />
            </button>

            {/* Sign In Link */}
            <a
              href="#plans"
              className="hidden xl:block whitespace-nowrap rounded-full px-4 py-2 text-[15px] font-semibold text-[#1a1a1a] transition-colors hover:bg-[#fff1bf] no-underline"
            >
              Sign In
            </a>

            {/* Get Started Button */}
            <a
              href="#plans"
              className="hidden sm:flex whitespace-nowrap rounded-full border-2 border-[#1a1a1a] bg-[#1a1a1a] px-4 xl:px-6 py-2 xl:py-2.5 text-[14px] xl:text-[15px] font-semibold text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_0_#fcc419] active:translate-y-0 items-center gap-2"
            >
              <span>Get Started</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#1a1a1a] bg-[#fcc419] text-[#1a1a1a]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-3 rounded-3xl border-2 border-[#1a1a1a] bg-[#fffaf0] shadow-[5px_5px_0_0_#fcc419] p-4 flex flex-col gap-1 lg:hidden max-h-[80vh] overflow-y-auto"
          >
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <div className="flex flex-col py-1">
                    <span className="px-4 pt-2 pb-1 text-xs font-bold uppercase tracking-wider text-[#5c5850]">
                      {item.label}
                    </span>
                    {item.dropdown.map((sub) => {
                      const Icon = sub.icon;
                      return (
                        <a
                          key={sub.title}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="px-4 py-2.5 rounded-2xl font-semibold text-[#1a1a1a] hover:bg-[#fff1bf] flex items-center gap-3 no-underline text-sm"
                        >
                          <Icon size={16} className="opacity-70" />
                          <span>{sub.title}</span>
                        </a>
                      );
                    })}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-2xl font-semibold text-[#1a1a1a] hover:bg-[#fff1bf] flex items-center justify-between no-underline"
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={16} className="opacity-40" />
                  </a>
                )}
              </div>
            ))}
            <div className="h-px w-full bg-[#1a1a1a]/10 my-2" />
            <a
              href="#plans"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl font-bold text-[#1a1a1a] hover:bg-[#fff1bf] text-left no-underline"
            >
              Sign In
            </a>
            <a
              href="#plans"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-full font-bold bg-[#1a1a1a] text-white text-center no-underline mt-1"
            >
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
