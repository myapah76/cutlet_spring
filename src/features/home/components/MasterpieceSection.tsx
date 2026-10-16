import React from 'react';
import { Language, PageView } from '@/types';

interface MasterpieceSectionProps {
  setCurrentView: (view: PageView) => void;
  language: Language;
}

export const MasterpieceSection: React.FC<MasterpieceSectionProps> = ({
  setCurrentView,
  language,
}) => {
  return (
    <section className="w-full bg-[#fbf9f6] py-16 lg:py-24 border-b border-[#eae8e5]" id="menu-signature">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Signature Bento Container */}
        <div className="p-2 sm:p-4 lg:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Large Dish Feature Photography (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[480px] rounded-xl overflow-hidden bg-[#f3f1ec] border border-[#eae6df] shadow-inner group flex flex-col items-center justify-center select-none">
                <div className="flex flex-col items-center justify-center gap-2 text-[#8f6f6c]">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-[#d5cfc5] border-t-[#af101a] animate-spin" />
                  <span className="font-menu-bar text-xs sm:text-sm uppercase tracking-widest font-bold text-[#8f6f6c]">
                    Photo Loading...
                  </span>
                  <span className="font-kr-serif text-[11px] sm:text-xs text-[#a89d91]">
                    사진 준비 중
                  </span>
                </div>
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
                  <div className="w-10 h-10 rounded-full bg-[#f3f1ec] overflow-hidden shrink-0 border border-[#eae6df] flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full border-2 border-[#d5cfc5] border-t-[#af101a] animate-spin" />
                  </div>
                  <div className="truncate">
                    <span className="font-label-md text-[10px] text-[#585757] block truncate">SOUP</span>
                    <span className="font-title-md text-xs text-[#1b1c1a] font-semibold truncate">Tonjiru Miso</span>
                  </div>
                </div>

                <div className="bg-[#f5f3f0] p-2.5 rounded-lg flex items-center gap-2 border border-[#eae8e5]">
                  <div className="w-10 h-10 rounded-full bg-[#f3f1ec] overflow-hidden shrink-0 border border-[#eae6df] flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full border-2 border-[#d5cfc5] border-t-[#af101a] animate-spin" />
                  </div>
                  <div className="truncate">
                    <span className="font-label-md text-[10px] text-[#585757] block truncate">GRAIN</span>
                    <span className="font-title-md text-xs text-[#1b1c1a] font-semibold truncate">Pearl Rice</span>
                  </div>
                </div>

                <div className="bg-[#f5f3f0] p-2.5 rounded-lg flex items-center gap-2 border border-[#eae8e5]">
                  <div className="w-10 h-10 rounded-full bg-[#f3f1ec] overflow-hidden shrink-0 border border-[#eae8e5] flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full border-2 border-[#d5cfc5] border-t-[#af101a] animate-spin" />
                  </div>
                  <div className="truncate">
                    <span className="font-label-md text-[10px] text-[#585757] block truncate">SAUCE</span>
                    <span className="font-title-md text-xs text-[#1b1c1a] font-semibold truncate">Demi Glace</span>
                  </div>
                </div>

                <div className="bg-[#f5f3f0] p-2.5 rounded-lg flex items-center gap-2 border border-[#eae8e5]">
                  <div className="w-10 h-10 rounded-full bg-[#f3f1ec] overflow-hidden shrink-0 border border-[#eae6df] flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full border-2 border-[#d5cfc5] border-t-[#af101a] animate-spin" />
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
                <span className="text-[#585757] text-xs font-semibold">NO. 01 RECOMMENDATION</span>
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
                  <span>
                    {language === 'KR'
                      ? '전체 메뉴 보기'
                      : language === 'VI'
                      ? 'Xem Toàn Bộ Thực Đơn'
                      : language === 'JP'
                      ? 'メニューを見る'
                      : 'Explore Full Menu'}
                  </span>
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
  );
};
