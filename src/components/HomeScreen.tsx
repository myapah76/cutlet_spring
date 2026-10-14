import React from 'react';
import { Language, PageView, MenuItem } from '@/types';
import { MENU_ITEMS } from '@/data';

interface HomeScreenProps {
  setCurrentView: (view: PageView) => void;
  language: Language;
  onSelectItem?: (item: MenuItem) => void;
  onOpenReservation?: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  setCurrentView,
  language,
}) => {
  const springSet = MENU_ITEMS.find((i) => i.id === 'spring-signature-set') || MENU_ITEMS[0];
  const hireKatsu = MENU_ITEMS.find((i) => i.id === 'pork-tenderloin-cutlet-set') || MENU_ITEMS[1];
  const retroKatsu = MENU_ITEMS.find((i) => i.id === 'korean-style-retro-tonkatsu') || MENU_ITEMS[7];

  return (
    <div className="flex flex-col w-full">
      {/* ======================================================== */}
      {/* HERO SECTION: Editorial Split Banner                     */}
      {/* ======================================================== */}
      <section className="relative w-full overflow-hidden bg-[#fbf9f6] py-12 lg:py-20 border-b border-[#eae8e5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col z-10">
              {/* Overline Badge */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#eae8e5] rounded-full font-label-md text-xs uppercase tracking-widest text-[#af101a] font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#af101a] animate-ping"></span>
                  Thảo Điền, Saigon
                </span>
                <span className="text-[#585757] hidden sm:inline">|</span>
                <span className="font-label-md text-xs text-[#585757] tracking-wider uppercase font-semibold">
                  Established 2021
                </span>
              </div>

              {/* Korean Accent Subhead */}
              <span className="text-xl md:text-2xl text-[#af101a] font-bold tracking-tight mb-2">
                타협하지 않는 원재료와 장인정신
              </span>

              {/* Main Multilingual Headline */}
              <h1 className="font-headline-lg text-4xl sm:text-5xl lg:text-6xl text-[#1b1c1a] font-bold leading-[1.12] mb-5">
                Nghệ Thuật Tonkatsu Thủ Công <br className="hidden sm:inline" />
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

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <button
                  onClick={() => {
                    setCurrentView('menu');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 bg-[#af101a] text-white font-label-lg text-xs md:text-sm uppercase tracking-wider rounded-lg shadow-md hover:bg-[#d32f2f] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>{language === 'KR' ? '전체 메뉴 둘러보기' : language === 'VI' ? 'Xem Thực Đơn Đầy Đủ' : language === 'JP' ? 'メニューを見る' : 'Explore Full Menu'}</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>

              {/* Quick Highlight Metrics / Bento Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#f5f3f0] p-4 rounded-xl shadow-xs border border-[#eae8e5]">
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
                <div className="flex flex-col">
                  <span className="font-price-numeral text-2xl text-[#1b1c1a] font-extrabold">75°C</span>
                  <span className="font-body-sm text-xs text-[#585757]">Precision Tender Core</span>
                </div>
              </div>
            </div>

            {/* Right Visual (5 Cols): Chopstick Holding Pink Cutlet + Editorial Seals */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              {/* Background Atmospheric Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#feae2c]/20 via-[#ffdad6]/20 to-transparent rounded-full filter blur-3xl opacity-60 pointer-events-none"></div>

              {/* Hero Dish Visual Frame */}
              <div className="relative w-full max-w-md bg-white p-4 rounded-2xl shadow-xl border border-[#eae8e5] overflow-hidden">
                {/* Cutlet Hero Image */}
                <div className="relative w-full h-[440px] sm:h-[480px] rounded-xl overflow-hidden bg-[#efeeeb] group">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="Close-up macro photography of wooden chopsticks lifting a single thick piece of Japanese pork tenderloin katsu with rosy pink center and golden needle panko."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0JEY2qTMEv-dl-nKcCEZn9PCdFvqQbZ3CNgti1A4ZomzbQEWEl2wleYeF6RAslLG3UacZoG1e_KbttjTZQa0oCeHD-fJjtOW6gBK4_xBZfgxyX4246sAgQqd8B8y2cXUdwPtOBjF3Cv-cVtE5eHOKETrpGfreNxfSC3TKkqRLEIxMtrtpIRhgmw_7pJmp6GG-enmxHNpj25zOd6DxYGiwMosEX9q3ZS8DmFf4JmX6WbPO-16Z4crWMA"
                  />
                  {/* Subtle Image Scrim Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

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
                        <span className="font-body-sm text-[11px] text-[#585757] block">
                          Natural Rosy Hue • 100% Fully Cooked
                        </span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 bg-[#feae2c]/30 text-[#835500] font-label-md text-[10px] uppercase font-bold rounded">
                      BEST
                    </span>
                  </div>
                </div>

                {/* Footnote Under Cutlet */}
                <div className="mt-3 flex items-center justify-between px-1">
                  <span className="font-body-sm text-[#585757] text-[11px]">
                    Plate Ref: 01 / Anshim Katsu
                  </span>
                  <button
                    onClick={() => {
                      setCurrentView('menu');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="font-label-md text-[#af101a] font-bold text-xs hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <span>200.000 VND</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 1: CULINARY PHILOSOPHY & THE 4 FOUNDATIONS       */}
      {/* ======================================================== */}
      <section className="w-full bg-[#f5f3f0] py-16 lg:py-24 border-b border-[#eae8e5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#eae8e5]">
            <div>
              <div className="flex items-center gap-2 text-[#af101a] font-label-md text-xs uppercase tracking-widest mb-1.5 font-bold">
                <span>01 / Philosophy</span>
                <span className="w-8 h-[2px] bg-[#af101a]"></span>
              </div>
              <h2 className="font-headline-lg text-3xl lg:text-4xl text-[#1b1c1a] font-bold tracking-tight">
                타협하지 않는 원재료
                <span className="block font-title-lg text-lg text-[#5b403d] font-normal mt-1">
                  Nguyên Liệu Không Thỏa Hiệp — Uncompromising Artisanal Craft
                </span>
              </h2>
            </div>
            <p className="font-body-md text-xs sm:text-sm text-[#585757] max-w-md mt-4 md:mt-0 leading-relaxed">
              Every morning before sunrise, our kitchen atelier executes an exact 4-tier preparation sequence
              to guarantee unparalleled crispness, succulent meat tenderness, and zero greasy residue.
            </p>
          </div>

          {/* 4 Pillars Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1: Chilled Aged Pork */}
            <div className="bg-white p-4 rounded-xl shadow-xs border border-[#eae8e5] flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-full h-44 rounded-lg overflow-hidden bg-[#efeeeb] mb-3 relative">
                  <img
                    className="w-full h-full object-cover"
                    alt="Pristine cuts of fresh pink pork tenderloin wet aged 120h"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt6JRPlwDWFr6LAOv1MUnDQBD2KuItYlibNnFiVNUCM65yyu3DZfww45Tx92glqUy-8_N_455H_Xxjx9q1ZSNudPCtdjOzZSTrQRoEQfWRPEXzeSyy2Nk9JmKVUUHvCnRuX6ZIewSFTCoO0HPIeWWpptdscwhjNUCrADdkN-pZi5a1DtHX7QtUltdPwlObLZvnVcKKZukW_BDl-vltFIcRVwUC-8Sq0DtPaTaZATGg3hzAWUpQYwvHFg"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-black/80 text-white font-label-md text-[10px] rounded uppercase font-semibold">
                    FOUNDATION 01
                  </span>
                </div>
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-title-lg text-sm font-bold text-[#1b1c1a]">원육 • Chilled Pork</h3>
                  <span className="font-label-md text-xs text-[#af101a] font-bold">120h AGED</span>
                </div>
                <span className="font-body-sm text-xs text-[#585757] block mb-2">
                  Thịt Heo Mát Không Đông Lạnh
                </span>
                <p className="font-body-sm text-xs text-[#5b403d] leading-relaxed mb-4">
                  We exclusively source chilled prime cuts, never frozen. Each slab is personally trimmed and wet-aged for 120 hours to maximize deep natural umami and butter-soft bite.
                </p>
              </div>
              <div className="pt-2 border-t border-[#eae8e5] flex items-center justify-between font-label-md text-[#585757] text-[11px]">
                <span>Inspection: Daily 07:00</span>
                <span className="material-symbols-outlined text-[16px] text-[#af101a]">verified</span>
              </div>
            </div>

            {/* Pillar 2: Fresh Bakery Panko */}
            <div className="bg-white p-4 rounded-xl shadow-xs border border-[#eae8e5] flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-full h-44 rounded-lg overflow-hidden bg-[#efeeeb] mb-3 relative">
                  <img
                    className="w-full h-full object-cover"
                    alt="Mound of fluffy fresh long needle-like panko breadcrumbs"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnqSNp3UZz7ywVg3uagYUDOcIJG4pPM5yGcyNjg0c4EurjyAuCSN7DfOPpsH1UCyXFbYz2x9P4dmgnk8V9teb-g3M4wXVUe2KYge7OaXmlyRMbcXCB8nhmNHhlKeAp2i0eu-4nQ-e-7hoNV5q9SlEuwYpx3Q5uRtoJe4Ih-aizdWUZbD_13NLzmxIWAhXny2r8xYrCRBFFTAcNKQHo6IhiEFfyPorMmqh6OMW6GGEFqIi1d-ClzoUXdg"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-black/80 text-white font-label-md text-[10px] rounded uppercase font-semibold">
                    FOUNDATION 02
                  </span>
                </div>
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-title-lg text-sm font-bold text-[#1b1c1a]">빵가루 • Fresh Panko</h3>
                  <span className="font-label-md text-xs text-[#835500] font-bold">HOUSE BAKED</span>
                </div>
                <span className="font-body-sm text-xs text-[#585757] block mb-2">
                  Bột Chiên Xù Tươi Nướng Mới
                </span>
                <p className="font-body-sm text-xs text-[#5b403d] leading-relaxed mb-4">
                  Custom recipe milk loaves baked in-house daily, then shredded using specialized coarse drums into delicate needle flakes that form an airy, grease-repelling golden armor.
                </p>
              </div>
              <div className="pt-2 border-t border-[#eae8e5] flex items-center justify-between font-label-md text-[#585757] text-[11px]">
                <span>Grater: Dawn 06:30</span>
                <span className="material-symbols-outlined text-[16px] text-[#835500]">bakery_dining</span>
              </div>
            </div>

            {/* Pillar 3: Homemade Demi-Glace Sauce */}
            <div className="bg-white p-4 rounded-xl shadow-xs border border-[#eae8e5] flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-full h-44 rounded-lg overflow-hidden bg-[#efeeeb] mb-3 relative">
                  <img
                    className="w-full h-full object-cover"
                    alt="Glossy rich artisanal dark brown tonkatsu sauce with roasted sesame"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFVrg_xWeT1wvGkJjAX8uT7Dch3E3C_Tei3fYiHhzgd0hM64EkOQdZilkJJr8mOMbw75gR15-GgZuJ0hVDpbcGX_lH_a41Q4gt2NI3yMI9Mj2vdMU4WQZI4Nop-_Yi0DmJZLJNvHN_lqlUzfOYWKpZYvOHhwu7_FoZstvDQk6X2YctR6NQYy4hXQ78eXxw-pVlmPiBkvGVAJnv2ZTstk8eaxk6yb-PdpNtEpxbo_LpwR03sPdFEw6l-A"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-black/80 text-white font-label-md text-[10px] rounded uppercase font-semibold">
                    FOUNDATION 03
                  </span>
                </div>
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-title-lg text-sm font-bold text-[#1b1c1a]">특제 소스 • Tonkatsu Sauce</h3>
                  <span className="font-label-md text-xs text-[#af101a] font-bold">18h SIMMER</span>
                </div>
                <span className="font-body-sm text-xs text-[#585757] block mb-2">
                  Nước Sốt Độc Quyền Trái Cây
                </span>
                <p className="font-body-sm text-xs text-[#5b403d] leading-relaxed mb-4">
                  Prepared without artificial thickeners. Simmered with crisp Fuji apples, sweet onions, and ripe tomatoes over gentle heat to yield a naturally harmonized sweet-savory tang.
                </p>
              </div>
              <div className="pt-2 border-t border-[#eae8e5] flex items-center justify-between font-label-md text-[#585757] text-[11px]">
                <span>Slow Reduction: 18 Hours</span>
                <span className="material-symbols-outlined text-[16px] text-[#af101a]">soup_kitchen</span>
              </div>
            </div>

            {/* Pillar 4: Precision 0.8mm Mountain Cabbage */}
            <div className="bg-white p-4 rounded-xl shadow-xs border border-[#eae8e5] flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-full h-44 rounded-lg overflow-hidden bg-[#efeeeb] mb-3 relative">
                  <img
                    className="w-full h-full object-cover"
                    alt="Fluffy high mound of translucent razor-thin shredded cabbage ribbons"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAUvcjkC-rjR0XbTrELeJ5G_XDdQ1x3c26Ly5pEnmJCoAVAqcHxYS1AD0kz6fthEQYwV3bGITqh44e4maxvSZC8QK4qrHAJBhx5cMdQl7QufFdFQBdMsQGO6aLwxApjUrS2mnHDnu2XK7LOfkL7nYYwsY0tCsGnfOZSlSKdLC1CxxD3ataSFcEaWhELD8YvZTGjFOuS057g2BSe4WG3zbzp-A7dW4yGQix_KJ6yXPyhNIS-SKvIjt1Qw"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-black/80 text-white font-label-md text-[10px] rounded uppercase font-semibold">
                    FOUNDATION 04
                  </span>
                </div>
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-title-lg text-sm font-bold text-[#1b1c1a]">양배추 • Shaved Cabbage</h3>
                  <span className="font-label-md text-xs text-[#585757] font-bold">0.8mm ICE</span>
                </div>
                <span className="font-body-sm text-xs text-[#585757] block mb-2">
                  Bắp Cải Tươi Ngâm Nước Đá
                </span>
                <p className="font-body-sm text-xs text-[#5b403d] leading-relaxed mb-4">
                  High-altitude sweet cabbage shaved to a delicate 0.8mm thickness, revitalized in filtered ice water to impart maximum crispness and balance the rich warmth of fried pork.
                </p>
              </div>
              <div className="pt-2 border-t border-[#eae8e5] flex items-center justify-between font-label-md text-[#585757] text-[11px]">
                <span>Ice Temp: 2°C Shock</span>
                <span className="material-symbols-outlined text-[16px] text-[#585757]">ac_unit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 2: CHEF'S MASTERPIECE - SPRING SIGNATURE         */}
      {/* ======================================================== */}
      <section className="w-full bg-[#fbf9f6] py-16 lg:py-24 border-b border-[#eae8e5]" id="menu-signature">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Signature Bento Container */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#eae8e5] p-6 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Large Dish Feature Photography (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[480px] rounded-xl overflow-hidden bg-[#efeeeb] shadow-inner group">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="Editorial top-down angle of lavish Japanese Tonkatsu set meal served on blonde wood table"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoujYRTbKIjPmoUOycuPwt3PQdbJXhR11Z-Q1ra-9xnrsaXJFxFPYycLZVv8-NnQbYhdtUJOh9_dSc7B_vCTQdxjrrzmtFtbA-UX60gKbv4UCw8ZEFtSGyRl5NqM6aCxDLT2XFPCs93-So_f4-Jqd_91fjhb2e4JW2kaTiRoWRILUItX0jgBq2CJ-Xh7ambnCkA6bqMLGbDnKKbj2pRWfYVsnScaMgIe9pHxR0lPH9N0uVfFdLEjATsA"
                  />
                  <div className="absolute top-4 left-4 bg-[#af101a] text-white px-3 py-1.5 rounded-full font-label-md text-xs tracking-wider uppercase flex items-center gap-1.5 shadow">
                    <span className="material-symbols-outlined text-[16px]">grade</span>
                    <span>ATELIER OMAKASE SELECTION</span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded font-label-md text-xs text-[#1b1c1a] shadow border border-[#eae8e5]">
                    Includes 3 House Sauces &amp; Endless Refills
                  </div>
                </div>

                {/* Inset Miniature Dish Gallery (Sides & Components) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                  <div className="bg-[#f5f3f0] p-2.5 rounded-lg flex items-center gap-2 border border-[#eae8e5]">
                    <div className="w-10 h-10 rounded-full bg-[#efeeeb] overflow-hidden shrink-0 border border-[#eae8e5]">
                      <img
                        className="w-full h-full object-cover"
                        alt="Tonjiru Miso soup"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHamC3DKoGpCnH9yzLrLc3ZsDu3J7GiMIdJHQIox49LUbOnRaNnBhN9Tdz1szefwSLJO29oOCTL4X_yFWdB7IgqreBFFHERk0DCtgbe3iEe-bS5QtlB0723-bHJcvi00jkrtdYj0nFwI9xeFANAn7cvyvSsKS00otF1vF5vFRNn7xowAgh5GXLKmSJi8p92vnGvlkMiwffEia3sHKZtl1CANIJWPvND6BrJ2-X4Niwv8GbIbFNZ6AhPw"
                      />
                    </div>
                    <div className="truncate">
                      <span className="font-label-md text-[10px] text-[#585757] block truncate">SOUP</span>
                      <span className="font-title-md text-xs text-[#1b1c1a] font-semibold truncate">Tonjiru Miso</span>
                    </div>
                  </div>

                  <div className="bg-[#f5f3f0] p-2.5 rounded-lg flex items-center gap-2 border border-[#eae8e5]">
                    <div className="w-10 h-10 rounded-full bg-[#efeeeb] overflow-hidden shrink-0 border border-[#eae8e5]">
                      <img
                        className="w-full h-full object-cover"
                        alt="Pearl Rice"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQZyseVh5rSv0ikNDOPcmHsjiq859ljgZGGdFKA-xlxu_UllgAdg_qci_N5kttQFQLZPys20hHfZQ32KPHm185sKo9sKGzLz76ZKfnkTMFLwhedHNGrFtkMlolS9EdsLVOfOrXvxYpUhYVfrVAQ86BrZEbp9x-GpYQuAWsG82VpSbww-gK7BoFnpP8QvMEf6CEmbHAiMew-MiJXT51ofpC_hDwJpmEO3JUXgvNceuOnsQbdGT6u1wpJQ"
                      />
                    </div>
                    <div className="truncate">
                      <span className="font-label-md text-[10px] text-[#585757] block truncate">GRAIN</span>
                      <span className="font-title-md text-xs text-[#1b1c1a] font-semibold truncate">Pearl Rice</span>
                    </div>
                  </div>

                  <div className="bg-[#f5f3f0] p-2.5 rounded-lg flex items-center gap-2 border border-[#eae8e5]">
                    <div className="w-10 h-10 rounded-full bg-[#efeeeb] overflow-hidden shrink-0 border border-[#eae8e5]">
                      <img
                        className="w-full h-full object-cover"
                        alt="Demi Glace sauce"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2RuDPR276Q7qeT6uI6vKTsBfNm-FJRJKBap87og95okoiYAHF9qwYsmGfEP2b1jJFh3z8xS2MuUXaOiQWxFXD1kRfq9d4gANlwTEHSTL5EZbvah254sFs3ngjEPVCWeoFfy9IUaSb7LXluyaIHOlR8lOzN9DWUwApVNCOfkmK2qOJ-Ou8d6sHPgcBiKH_FGQLIsWyXIYiz0xg_msb6fA7CRHHCDc1Lw0p53NqdTjpvhs7zPQfXDpPqg"
                      />
                    </div>
                    <div className="truncate">
                      <span className="font-label-md text-[10px] text-[#585757] block truncate">SAUCE</span>
                      <span className="font-title-md text-xs text-[#1b1c1a] font-semibold truncate">Demi Glace</span>
                    </div>
                  </div>

                  <div className="bg-[#f5f3f0] p-2.5 rounded-lg flex items-center gap-2 border border-[#eae8e5]">
                    <div className="w-10 h-10 rounded-full bg-[#efeeeb] overflow-hidden shrink-0 border border-[#eae8e5]">
                      <img
                        className="w-full h-full object-cover"
                        alt="Atelier Kimchi"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaDmZGxJ5xJEoosw3Dn9_9ma-haQBeLpEJxt4dlfatCZCmJaq2b7ysz5tJFpSLF0I8fPfpdA2joqe9XDNDaPVAeTexCBJtLZBSlub-OnqtKrr3oDyP9LCuhp7Pz0yNqMW6hPz9lHCp9JhwLIazs2odg8JZTEb8jD3Iq-NaGW7yYn4qaSpisJ5gQWKXYlHVsaMCXObEXA9kWjcsEnGZDCoyt-EKcIMK4i6U-034bIXwC-gar_fo20n6Ow"
                      />
                    </div>
                    <div className="truncate">
                      <span className="font-label-md text-[10px] text-[#585757] block truncate">BANCHAN</span>
                      <span className="font-title-md text-xs text-[#1b1c1a] font-semibold truncate">Atelier Kimchi</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Masterpiece Story & Spec Order (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 bg-[#feae2c]/30 text-[#835500] font-label-md text-xs rounded uppercase font-bold tracking-wider">
                    CHEF'S SIGNATURE
                  </span>
                  <span className="text-[#585757] text-xs font-semibold">• NO. 01 RECOMMENDATION</span>
                </div>

                {/* Korean and English Titles */}
                <h3 className="font-headline-lg text-3xl sm:text-4xl text-[#1b1c1a] font-bold leading-tight">
                  봄 시그니쳐 모둠 세트
                </h3>
                <span className="font-title-lg text-base text-[#af101a] font-bold mt-1 block">
                  Spring Atelier Grand Platter
                </span>
                <span className="font-body-md text-xs text-[#585757] block mt-0.5">
                  Set Thăn Heo &amp; Phô Mai Thập Cẩm Đặc Biệt
                </span>

                {/* Price & Prep Tag */}
                <div className="flex items-baseline gap-4 my-4 py-3 bg-[#f5f3f0] px-4 rounded-lg border border-[#eae8e5]">
                  <span className="font-price-numeral text-3xl text-[#af101a] font-extrabold">
                    275.000 <span className="text-sm font-semibold text-[#1b1c1a]">VND</span>
                  </span>
                  <span className="font-body-sm text-[#585757] text-xs">8% VAT Excluded</span>
                  <div className="ml-auto flex items-center gap-1 font-label-md text-xs text-[#1b1c1a] font-semibold">
                    <span className="material-symbols-outlined text-[16px] text-[#835500]">schedule</span>
                    <span>18 MIN PREP</span>
                  </div>
                </div>

                {/* Cutlet Combination Breakdown List */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#af101a] text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <p className="font-body-md text-xs sm:text-sm text-[#5b403d] leading-relaxed">
                      <strong className="text-[#1b1c1a]">2x Chilled Tenderloin Medallions (안심)</strong> — Rosy tender center gently cooked at precisely 75°C core temperature.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#835500] text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <p className="font-body-md text-xs sm:text-sm text-[#5b403d] leading-relaxed">
                      <strong className="text-[#1b1c1a]">2x Molten Mozzarella Katsu (치즈카츠)</strong> — 100% pure block mozzarella wrapped in thinly folded pork loin.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#585757] text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <p className="font-body-md text-xs sm:text-sm text-[#5b403d] leading-relaxed">
                      <strong className="text-[#1b1c1a]">1x Wild Tiger Prawn (새우카츠)</strong> — Jumbo sea prawn fried with whole panko for an intense oceanic crunch.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#585757] text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <p className="font-body-md text-xs sm:text-sm text-[#5b403d] leading-relaxed">
                      <strong className="text-[#1b1c1a]">Unlimited Refills:</strong> Koshihikari rice, Tonjiru miso soup, and ice-chilled cabbage.
                    </p>
                  </div>
                </div>

                {/* CTA Actions */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setCurrentView('menu');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex-1 py-3 px-5 bg-[#1b1c1a] text-white hover:bg-[#af101a] font-label-md text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer font-bold"
                  >
                    <span>{language === 'KR' ? '전체 메뉴 보기' : language === 'VI' ? 'Xem Toàn Bộ Thực Đơn' : language === 'JP' ? 'メニューを見る' : 'Explore Full Menu'}</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
                <p className="font-body-sm text-[11px] text-[#585757] mt-3 italic">
                  * Note: Due to freshness protocols, cheese katsu is limited to 40 portions daily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
