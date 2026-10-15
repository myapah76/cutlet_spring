import React from 'react';
import { Language, PageView } from '@/types';

interface HeaderProps {
  currentView: PageView;
  setCurrentView: (view: PageView) => void;
  language?: Language;
  setLanguage?: (lang: Language) => void;
  cartItems?: any[];
  onOpenOrderPad?: () => void;
  onOpenReservation?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  setCurrentView,
}) => {

  return (
    <header className="fixed top-0 w-full z-50 bg-[#fbf9f6]/95 backdrop-blur-xl border-b border-[#eae8e5] shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
      <div className="h-14 sm:h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => {
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex flex-col text-left group cursor-pointer shrink-0"
        >
          <div className="flex items-baseline gap-1.5 sm:gap-2">
            <span className="font-headline-lg text-lg sm:text-2xl tracking-tight text-[#1b1c1a] group-hover:text-[#af101a] transition-colors font-bold">
              봄돈까스
            </span>
            <span className="font-body-md text-[#585757] text-xs sm:text-sm">|</span>
            <span className="font-label-lg text-[10px] sm:text-xs tracking-wider sm:tracking-widest uppercase text-[#1b1c1a]">
              CUTLET SPRING
            </span>
          </div>
        </button>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-4 sm:gap-6 md:gap-10">
          <button
            onClick={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`font-menu-bar text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer ${
              currentView === 'home'
                ? 'text-[#af101a] font-bold border-b-2 border-[#af101a] pb-0.5 sm:pb-1'
                : 'text-[#5b403d] hover:text-[#1b1c1a]'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => {
              setCurrentView('menu');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`font-menu-bar text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer ${
              currentView === 'menu'
                ? 'text-[#af101a] font-bold border-b-2 border-[#af101a] pb-0.5 sm:pb-1'
                : 'text-[#5b403d] hover:text-[#1b1c1a]'
            }`}
          >
            Menu
          </button>
        </nav>

        {/* Right Info & Actions */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6 shrink-0">
          {/* Direct Line / Contact */}
          <a
            href="tel:0393762717"
            aria-label="Call 039 376 2717"
            className="flex items-center gap-1.5 p-2 sm:px-3 sm:py-1.5 border border-[#eae8e5] bg-[#f5f3f0] hover:bg-[#eae8e5] text-[#1b1c1a] hover:text-[#af101a] rounded-lg transition-colors font-label-md text-xs tracking-wider font-bold"
          >
            <span className="material-symbols-outlined text-[16px] text-[#af101a]">call</span>
            <span className="hidden sm:inline">039 376 2717</span>
          </a>
        </div>
      </div>
    </header>
  );
};
