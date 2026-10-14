import React from 'react';
import { Language, PageView } from '@/types';

interface HeaderProps {
  currentView: PageView;
  setCurrentView: (view: PageView) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  cartItems?: any[];
  onOpenOrderPad?: () => void;
  onOpenReservation?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  setCurrentView,
  language,
  setLanguage,
}) => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#fbf9f6]/95 backdrop-blur-xl border-b border-[#eae8e5] shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => {
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex flex-col text-left group cursor-pointer"
        >
          <div className="flex items-baseline gap-2">
            <span className="font-headline-lg text-2xl tracking-tight text-[#1b1c1a] group-hover:text-[#af101a] transition-colors">
              봄돈까스
            </span>
            <span className="font-body-md text-[#585757]">|</span>
            <span className="font-label-lg text-xs tracking-widest uppercase text-[#1b1c1a]">
              CUTLET SPRING
            </span>
          </div>
          <span className="text-[10px] uppercase tracking-wider text-[#585757] hidden sm:block">
            Thảo Điền, Saigon
          </span>
        </button>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-6 md:gap-10">
          <button
            onClick={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`font-menu-bar text-xs md:text-sm uppercase tracking-wider transition-all cursor-pointer ${
              currentView === 'home'
                ? 'text-[#af101a] font-bold border-b-2 border-[#af101a] pb-1'
                : 'text-[#5b403d] hover:text-[#1b1c1a]'
            }`}
          >
            {language === 'KR' ? '홈 (스토리)' : language === 'VI' ? 'Trang Chủ' : language === 'JP' ? 'ホーム' : 'Home'}
          </button>
          <button
            onClick={() => {
              setCurrentView('menu');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`font-menu-bar text-xs md:text-sm uppercase tracking-wider transition-all cursor-pointer ${
              currentView === 'menu'
                ? 'text-[#af101a] font-bold border-b-2 border-[#af101a] pb-1'
                : 'text-[#5b403d] hover:text-[#1b1c1a]'
            }`}
          >
            {language === 'KR' ? '메뉴' : language === 'VI' ? 'Thực Đơn' : language === 'JP' ? 'メニュー' : 'Menu'}
          </button>
          <button
            onClick={() => {
              setCurrentView('about-us');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`font-menu-bar text-xs md:text-sm uppercase tracking-wider transition-all cursor-pointer ${
              currentView === 'about-us'
                ? 'text-[#af101a] font-bold border-b-2 border-[#af101a] pb-1'
                : 'text-[#5b403d] hover:text-[#1b1c1a]'
            }`}
          >
            {language === 'KR' ? '철학 & 공간' : language === 'VI' ? 'Giới Thiệu' : language === 'JP' ? 'こだわり' : 'About Us'}
          </button>
        </nav>

        {/* Right Info & Actions */}
        <div className="flex items-center gap-3 md:gap-6">
          {/* Language Switcher */}
          <div className="flex items-center gap-1 text-[11px] font-bold text-[#585757] tracking-wider bg-[#eae8e5]/60 px-2.5 py-1 rounded-full">
            <button
              onClick={() => setLanguage('KR')}
              className={`cursor-pointer transition-colors px-1 ${
                language === 'KR' ? 'text-[#af101a] font-extrabold underline' : 'hover:text-[#1b1c1a]'
              }`}
            >
              KR
            </button>
            <span>/</span>
            <button
              onClick={() => setLanguage('EN')}
              className={`cursor-pointer transition-colors px-1 ${
                language === 'EN' ? 'text-[#af101a] font-extrabold underline' : 'hover:text-[#1b1c1a]'
              }`}
            >
              EN
            </button>
            <span>/</span>
            <button
              onClick={() => setLanguage('VI')}
              className={`cursor-pointer transition-colors px-1 ${
                language === 'VI' ? 'text-[#af101a] font-extrabold underline' : 'hover:text-[#1b1c1a]'
              }`}
            >
              VI
            </button>
            <span>/</span>
            <button
              onClick={() => setLanguage('JP')}
              className={`cursor-pointer transition-colors px-1 ${
                language === 'JP' ? 'text-[#af101a] font-extrabold underline' : 'hover:text-[#1b1c1a]'
              }`}
            >
              JP
            </button>
          </div>

          {/* Direct Line / Contact */}
          <a
            href="tel:0393762717"
            className="flex items-center gap-1.5 px-3 py-1.5 border border-[#eae8e5] bg-[#f5f3f0] hover:bg-[#eae8e5] text-[#1b1c1a] hover:text-[#af101a] rounded-lg transition-colors font-label-md text-xs tracking-wider font-bold"
          >
            <span className="material-symbols-outlined text-[16px] text-[#af101a]">call</span>
            <span>039 376 2717</span>
          </a>
        </div>
      </div>
    </header>
  );
};
