import React, { useState, useEffect } from 'react';
import { X, Eye, Type, Activity, RotateCcw } from 'lucide-react';

export default function AccessibilityModal({ isOpen, onClose }) {
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    if (largeText) {
      document.documentElement.style.fontSize = '18px';
    } else {
      document.documentElement.style.fontSize = '';
    }

    if (reducedMotion) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }
  }, [highContrast, largeText, reducedMotion]);

  if (!isOpen) return null;

  const resetAll = () => {
    setHighContrast(false);
    setLargeText(false);
    setReducedMotion(false);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-md rounded-[24px] border-2 border-[#17181A] bg-[#FFFDF8] p-6 shadow-[8px_8px_0px_#FCC419]">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#17181A]/10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#FCC419] border border-[#17181A] flex items-center justify-center font-bold">
              Aa
            </div>
            <h3 className="text-xl font-bold text-[#17181A] font-heading m-0">
              Accessibility Settings
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-[#17181A] bg-white flex items-center justify-center hover:bg-[#FFF8E6] transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Options */}
        <div className="py-5 space-y-4 font-body">
          {/* High Contrast */}
          <div className="flex items-center justify-between p-3.5 rounded-xl border border-[#17181A]/15 bg-white">
            <div className="flex items-center gap-3">
              <Eye size={18} className="text-[#4E25A5]" />
              <div>
                <div className="text-sm font-bold text-[#17181A]">High Contrast</div>
                <div className="text-xs text-[#5F6060]">Increase color contrast for visibility</div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setHighContrast(!highContrast)}
              className={`w-12 h-6 rounded-full transition-colors relative border border-[#17181A] ${
                highContrast ? 'bg-[#4E25A5]' : 'bg-[#E5DDCD]'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform absolute top-0.5 left-0.5 ${
                  highContrast ? 'translate-x-6' : ''
                }`}
              />
            </button>
          </div>

          {/* Larger Text */}
          <div className="flex items-center justify-between p-3.5 rounded-xl border border-[#17181A]/15 bg-white">
            <div className="flex items-center gap-3">
              <Type size={18} className="text-[#4E25A5]" />
              <div>
                <div className="text-sm font-bold text-[#17181A]">Larger Text Size</div>
                <div className="text-xs text-[#5F6060]">Increase page reading font size</div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setLargeText(!largeText)}
              className={`w-12 h-6 rounded-full transition-colors relative border border-[#17181A] ${
                largeText ? 'bg-[#4E25A5]' : 'bg-[#E5DDCD]'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform absolute top-0.5 left-0.5 ${
                  largeText ? 'translate-x-6' : ''
                }`}
              />
            </button>
          </div>

          {/* Reduced Motion */}
          <div className="flex items-center justify-between p-3.5 rounded-xl border border-[#17181A]/15 bg-white">
            <div className="flex items-center gap-3">
              <Activity size={18} className="text-[#4E25A5]" />
              <div>
                <div className="text-sm font-bold text-[#17181A]">Reduced Motion</div>
                <div className="text-xs text-[#5F6060]">Minimize moving animations and tickers</div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setReducedMotion(!reducedMotion)}
              className={`w-12 h-6 rounded-full transition-colors relative border border-[#17181A] ${
                reducedMotion ? 'bg-[#4E25A5]' : 'bg-[#E5DDCD]'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform absolute top-0.5 left-0.5 ${
                  reducedMotion ? 'translate-x-6' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-[#17181A]/10 font-body">
          <button
            type="button"
            onClick={resetAll}
            className="flex items-center gap-1.5 text-xs font-bold text-[#5F6060] hover:text-[#17181A]"
          >
            <RotateCcw size={13} />
            <span>Reset to default</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#17181A] text-white text-xs font-bold hover:bg-[#4E25A5] transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
