import React from 'react';
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  ArrowRight, 
  ArrowUpRight, 
  ChevronUp, 
  GraduationCap, 
  Building2, 
  Trophy, 
  Headphones, 
  ShieldCheck 
} from 'lucide-react';
import BrandLogo from './BrandLogo';

const contactCards = [
  {
    icon: Phone,
    label: 'Call us',
    value: '+91 87542 00247',
    href: 'tel:+918754200247'
  },
  {
    icon: MessageSquare,
    label: 'WhatsApp',
    value: 'Chat with our team',
    href: 'https://wa.me/918754200247?text=Hi%20Dkoder%20team%2C%20I%20have%20a%20question.',
    external: true
  },
  {
    icon: Mail,
    label: 'Email support',
    value: 'support@dkoder.co.in',
    href: 'mailto:support@dkoder.co.in'
  }
];

const footerColumns = [
  {
    title: 'For students',
    icon: GraduationCap,
    links: [
      { label: 'Practice', href: '#practice-demo' },
      { label: 'Coding practice', href: '#practice-demo' },
      { label: 'Platform arena', href: '#practice-demo' },
      { label: 'Challenges', href: '#practice-demo' },
      { label: 'Leaderboard', href: '#leaderboard-preview' },
      { label: 'Courses', href: '#features' },
      { label: 'Events', href: '#features' },
      { label: 'Resources', href: '#features' },
      { label: 'Verify a certificate', href: '#features' },
      { label: 'Pricing', href: '#plans' }
    ]
  },
  {
    title: 'For institutions',
    icon: Building2,
    links: [
      { label: 'Dkoder for colleges', href: '#batch-view' },
      { label: 'Apply for MOU', href: '#next-move' },
      { label: 'Host a hackathon', href: '#batch-view' },
      { label: 'Benefits for institutions', href: '#batch-view' },
      { label: 'Institution sign-in', href: '#plans' }
    ]
  },
  {
    title: 'Programmes',
    icon: Trophy,
    links: [
      { label: 'Hackathons', href: '#batch-view' },
      { label: '100 Days of Sustainability', href: '#batch-view' },
      { label: 'Final Year Projects', href: '#features' },
      { label: 'Topic certifications', href: '#features' },
      { label: 'Technology certifications', href: '#features' }
    ]
  },
  {
    title: 'Help & support',
    icon: Headphones,
    links: [
      { label: 'Contact support', href: 'mailto:support@dkoder.co.in' },
      { label: 'Chat on WhatsApp', href: 'https://wa.me/918754200247', external: true },
      { label: 'Sign in', href: '#plans' },
      { label: 'Create an account', href: '#plans' }
    ]
  }
];

const recognitions = [
  { slug: 'msme', name: 'Ministry of MSME' },
  { slug: 'dpiit', name: 'DPIIT Startup India' },
  { slug: 'iso', name: 'ISO 9001:2015' },
  { slug: 'mca', name: 'Ministry of Corporate Affairs' },
  { slug: 'nip', name: 'AICTE Internship Portal' },
  { slug: 'ncs', name: 'National Career Service' },
  { slug: 'naps', name: 'NAPS' },
  { slug: 'skill-india', name: 'Skill India' }
];

const legalRegistrations = [
  { label: 'CIN', value: 'U85500TN2025PTC182250' },
  { label: 'MSME Udyam Registration', value: 'UDYAM-TN-08-0120538' },
  { label: 'DPIIT recognition certificate', value: 'DIPP218224' },
  { label: 'ISO 9001:2015', value: 'QMS/0A86/0825' }
];

export default function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative flex flex-col bg-[#1E0D47] text-[#D9D0F2] font-body selection:bg-[#FCC419] selection:text-[#1E0D47]">
      <div className="flex flex-1 flex-col px-[5vw]">
        {/* Top Contact Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 border-b border-white/10 pb-10 pt-12">
          {contactCards.map((card) => {
            const Icon = card.icon;
            return (
              <a
                key={card.label}
                href={card.href}
                target={card.external ? '_blank' : undefined}
                rel={card.external ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 rounded-2xl px-4 py-4 no-underline bg-white/[0.05] border border-white/10 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#FCC419]/40 hover:bg-white/[0.08]"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#FCC419] text-[#1E0D47] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                  <Icon size={22} />
                </span>
                <span className="min-w-0 flex-1">
                  <small className="block text-[11.5px] font-bold uppercase tracking-[0.1em] text-[#B7AEDA]">
                    {card.label}
                  </small>
                  <span className="block truncate text-[15.5px] font-semibold text-white">
                    {card.value}
                  </span>
                </span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-white border border-white/10 transition-all duration-200 group-hover:bg-[#FCC419] group-hover:text-[#1E0D47]">
                  <ArrowUpRight size={15} />
                </span>
              </a>
            );
          })}
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.6fr_1fr_1fr_1fr_1fr] gap-x-8 gap-y-10 py-12">
          {/* Brand & Address Column */}
          <div className="col-span-1 md:col-span-2 xl:col-span-1 xl:pr-6">
            <BrandLogo size="md" tone="light" />
            <p className="mt-4 text-[14.5px] leading-[1.65] text-[#D9D0F2] max-w-[380px]">
              Dkoder is a placement-readiness platform for students and colleges across India: real company questions, live coding practice, courses and campus programmes.
            </p>

            <address className="mt-5 flex max-w-[380px] gap-3 rounded-2xl p-3.5 not-italic bg-white/[0.05] border border-white/10">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#FCC419]/15 text-[#FCC419]">
                <MapPin size={20} />
              </span>
              <span className="text-[13.5px] leading-[1.55]">
                <strong className="block font-semibold text-white">Our office</strong>
                Campus 1A, No. 143, Dr. M.G.R. Road, Perungudi, Chennai 600096, Tamil Nadu
              </span>
            </address>

            <a
              href="#next-move"
              className="group mt-5 inline-flex items-center gap-2.5 whitespace-nowrap rounded-full py-2 pl-2 pr-5 text-[14px] font-bold no-underline bg-[#FCC419] text-[#1E0D47] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_5px_0_#0d0524]"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#1E0D47] text-[#FCC419]">
                <Building2 size={16} />
              </span>
              <span>Partner with us</span>
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Link Columns */}
          {footerColumns.map((col) => {
            const Icon = col.icon;
            return (
              <div key={col.title} className="group/col">
                <h3 className="m-0 mb-5 flex items-center gap-3 text-[15.5px] font-bold tracking-tight text-white font-heading">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#FCC419] text-[#1E0D47] transition-transform duration-300 group-hover/col:-rotate-6 group-hover/col:scale-110">
                    <Icon size={19} />
                  </span>
                  <span>{col.title}</span>
                </h3>

                <ul className="m-0 list-none space-y-2 p-0 text-[14.5px]">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="text-[#D9D0F2] no-underline transition-colors hover:text-white hover:underline flex items-center gap-1"
                      >
                        <span>{link.label}</span>
                        {link.external && <ArrowUpRight size={12} className="opacity-60" />}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Recognitions & Registrations Section */}
        <div className="border-t border-white/10 py-10">
          <div className="mb-4 flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.12em] text-white">
            <ShieldCheck size={18} className="text-[#FCC419]" />
            <span>Recognitions & registrations</span>
          </div>

          {/* Recognition Logos Grid */}
          <ul className="m-0 grid list-none grid-cols-2 sm:grid-cols-4 xl:grid-cols-8 gap-px overflow-hidden rounded-2xl bg-[#eeeaf6] p-0">
            {recognitions.map((rec) => (
              <li
                key={rec.slug}
                className="group flex flex-col items-center justify-center gap-2 bg-white px-3 py-4 text-center transition-colors hover:bg-[#faf8ff]"
              >
                <img
                  src={`/xyzon/${rec.slug}.png`}
                  alt=""
                  loading="lazy"
                  className="h-12 w-full max-w-[110px] object-contain transition-transform duration-200 group-hover:scale-105"
                />
                <span className="text-[11px] font-semibold leading-tight text-[#4b4366]">
                  {rec.name}
                </span>
              </li>
            ))}
          </ul>

          {/* Legal Identifiers */}
          <ul className="m-0 mt-5 flex list-none flex-wrap gap-2 p-0 text-[12.5px] text-[#B7AEDA]">
            {legalRegistrations.map((item) => (
              <li
                key={item.label}
                className="rounded-full px-3 py-1.5 bg-white/[0.05] border border-white/10"
              >
                <span>{item.label}: </span>
                <span className="font-semibold text-white tracking-[0.02em]">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#150934] border-t border-white/10">
        <div className="flex flex-col items-center justify-between gap-3 px-[5vw] py-5 text-center text-[13px] text-[#B7AEDA] lg:flex-row lg:text-left">
          <span>© {new Date().getFullYear()} Dkoder. All rights reserved.</span>

          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#FCC419]" aria-hidden="true" />
            <span>Practice · Learn · Achieve</span>
          </span>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 rounded-full py-1.5 pl-1.5 pr-3.5 text-[13px] font-semibold text-white transition-colors border border-white/20 bg-transparent hover:bg-white/10 cursor-pointer"
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-[#FCC419] text-[#1E0D47] transition-transform duration-200 group-hover:-translate-y-0.5">
              <ChevronUp size={14} />
            </span>
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
