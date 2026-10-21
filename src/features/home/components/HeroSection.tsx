import React from 'react';
import { Language, PageView } from '@/types';

interface HeroSectionProps {
  setCurrentView: (view: PageView) => void;
  language: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  setCurrentView,
  language,
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#fbf9f6] py-12 lg:py-20 border-b border-[#eae8e5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col z-10">
            {/* Overline Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#eae8e5] rounded-full font-label-md text-xs uppercase tracking-widest text-[#1b1c1a] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#af101a]"></span>
                Established 2023
              </span>
            </div>

            {/* Korean Accent Subhead */}
            <span className="text-xl md:text-2xl text-[#af101a] font-bold tracking-tight mb-2">
              타협하지 않는 원재료와 장인정신
            </span>

            {/* Main Multilingual Headline */}
            <h1 className="font-headline-lg text-4xl sm:text-5xl lg:text-6xl text-[#1b1c1a] font-bold leading-[1.12] mb-5">
              Nghệ Thuật Tonkatsu <br />
              <span className="inline-block">Thủ Công</span>
              <span className="italic font-normal text-[#5b403d] block mt-1">
                The Art of Hand Crafted Cutlets
              </span>
            </h1>

            {/* Body Description */}
            <p className="font-body-lg text-sm sm:text-base text-[#5b403d] max-w-xl mb-8 leading-relaxed">
              120-hour wet-aged chilled pork, house-baked breadcrumbs freshly ground every dawn, and
              precision-fried golden cutlets. Served with rich fruit-simmered artisanal demi-glace and
              crisp mountain cabbage in an intimate Scandinavian-Japanese dining room.
            </p>

            {/* Action Button */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={() => {
                  setCurrentView('menu');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-[#af101a] text-white font-label-lg text-xs md:text-sm uppercase tracking-wider rounded-lg shadow-md hover:bg-[#d32f2f] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>
                  {language === 'KR'
                    ? '전체 메뉴 둘러보기'
                    : language === 'VI'
                      ? 'Xem Thực Đơn Đầy Đủ'
                      : language === 'JP'
                        ? 'メニューを見る'
                        : 'Explore Full Menu'}
                </span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>

            {/* Quick Highlight Metrics / Bento Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-[#f5f3f0] p-4 rounded-xl shadow-xs border border-[#eae8e5]">
              <div className="flex flex-col">
                <span className="font-price-numeral text-2xl text-[#af101a] font-extrabold">120h</span>
                <span className="font-body-sm text-xs text-[#585757]">Wet-Aged Chilled Pork</span>
              </div>
              <div className="flex flex-col">
                <span className="font-price-numeral text-2xl text-[#1b1c1a] font-extrabold">100%</span>
                <span className="font-body-sm text-xs text-[#585757]">Never Frozen Quality</span>
              </div>
              <div className="flex flex-col">
                <span className="font-price-numeral text-2xl text-[#835500] font-extrabold">Daily</span>
                <span className="font-body-sm text-xs text-[#585757]">Fresh Bakery Panko</span>
              </div>
            </div>
          </div>

          {/* Right Visual (5 Cols): Chopstick Holding Pink Cutlet + Editorial Seals */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Background Atmospheric Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#feae2c]/20 via-[#ffdad6]/20 to-transparent rounded-full filter blur-3xl opacity-60 pointer-events-none"></div>

            {/* Hero Dish Visual Frame */}
            <div className="relative w-full max-w-md p-2 overflow-hidden">
              {/* Cutlet Hero Frame - Photo Loading placeholder matching menu */}
              <div className="relative w-full h-[440px] sm:h-[480px] rounded-xl overflow-hidden bg-[#f3f1ec] border border-[#eae6df] group flex flex-col items-center justify-center select-none">
                <div className="flex flex-col items-center justify-center gap-2 text-[#8f6f6c]">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-[#d5cfc5] border-t-[#af101a] animate-spin" />
                  <span className="font-menu-bar text-xs sm:text-sm uppercase tracking-widest font-bold text-[#8f6f6c]">
                    Photo Loading...
                  </span>
                  <span className="font-kr-serif text-[11px] sm:text-xs text-[#a89d91]">
                    사진 준비 중
                  </span>
                </div>

                {/* Overlaid Editorial Kanji/Hangul Stamp */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded shadow-sm border border-[#eae8e5]">
                  <span className="font-label-md text-xs tracking-widest text-[#af101a] uppercase font-bold block">
                    봄돈까스
                  </span>
                  <span className="font-body-sm text-[10px] text-[#585757] block">
                    AUTUMN BATCH
                  </span>
                </div>

                {/* Vertical Accent Seal Box */}
                <div className="absolute top-4 right-4 bg-[#af101a] text-white px-2.5 py-3.5 rounded flex flex-col items-center justify-center shadow-lg">
                  <span className="font-label-md text-[11px] [writing-mode:vertical-rl] tracking-widest uppercase font-bold">
                    수제 빵가루
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#feae2c] mt-2"></span>
                </div>

                {/* Bottom Floating Spec Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-lg shadow-md flex items-center justify-between border border-[#eae8e5]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#af101a] text-[20px]">
                      restaurant
                    </span>
                    <div>
                      <span className="font-title-md text-xs font-bold text-[#1b1c1a] block">
                        Signature Hire Katsu Medallion
                      </span>
                      <div className="font-body-sm text-[11px] text-[#585757] leading-tight">
                        <div>Natural Rosy Hue</div>
                        <div className="text-[10px] text-[#835500] font-medium">100% Fully Cooked</div>
                      </div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 bg-[#feae2c]/30 text-[#835500] font-label-md text-[10px] uppercase font-bold rounded">
                    BEST
                  </span>
                </div>
              </div>

              {/* Footnote Under Cutlet */}
              <div className="mt-3 flex items-center justify-end px-1">
                <button
                  onClick={() => {
                    setCurrentView('menu');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="font-label-md text-[#af101a] font-bold text-xs hover:underline cursor-pointer flex items-center gap-1 group"
                >
                  <span>Explore Full Menu</span>
                  <span className="material-symbols-outlined text-[14px] transition-transform group-hover:translate-x-0.5">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
