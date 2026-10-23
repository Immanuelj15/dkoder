import React from 'react';

const sizeMap = {
  sm: { mark: 36, text: 22 },
  md: { mark: 44, text: 26 },
  lg: { mark: 56, text: 32 }
};

export default function BrandLogo({ size = 'md', className = '', tone = 'dark' }) {
  const isLight = tone === 'light';
  const conf = sizeMap[size] || sizeMap.md;

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`.trim()}>
      <img
        src="/dkoder-mark.png"
        alt="Dkoder Logo Mark"
        aria-hidden="true"
        style={{ height: conf.mark, width: conf.mark }}
        className={`object-contain ${isLight ? '' : 'mix-blend-multiply'}`}
      />
      <span
        style={{
          fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
          fontSize: conf.text,
          lineHeight: 1,
          color: isLight ? '#ffffff' : '#1a1a1a'
        }}
        className="font-extrabold tracking-[-0.03em]"
      >
        Dkoder
      </span>
    </span>
  );
}
