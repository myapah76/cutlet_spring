import React from 'react';

export const PhilosophySection: React.FC = () => {
  return (
    <section className="w-full py-16 lg:py-24 border-b border-[#eae8e5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#eae8e5]">
          <div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Pillar 1: Chilled Aged Pork */}
          <div className="flex flex-col justify-between space-y-4">
            <div>
              {/* Top Image Frame - Photo Loading placeholder matching menu */}
              <div className="w-full h-44 rounded-xl overflow-hidden bg-[#f3f1ec] border border-[#eae6df] flex flex-col items-center justify-center mb-4 select-none shrink-0">
                <div className="flex flex-col items-center justify-center gap-1.5 text-[#8f6f6c]">
                  <div className="w-6 h-6 rounded-full border-2 border-[#d5cfc5] border-t-[#af101a] animate-spin" />
                  <span className="font-menu-bar text-[10px] uppercase tracking-widest font-bold text-[#8f6f6c]">
                    Photo Loading...
                  </span>
                  <span className="font-kr-serif text-[10px] text-[#a89d91]">
                    사진 준비 중
                  </span>
                </div>
              </div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-title-lg text-lg font-bold text-[#1b1c1a]">원육</h3>
                  <div className="font-body-sm text-sm text-[#5b403d] font-semibold mt-0.5">Chilled Pork</div>
                  <div className="font-body-sm text-xs text-[#585757] mt-0.5">Thịt Heo Mát Không Đông Lạnh</div>
                </div>
                <span className="font-label-md text-xs text-[#af101a] font-bold shrink-0">120h AGED</span>
              </div>
              <p className="font-body-sm text-xs text-[#5b403d] leading-relaxed">
                We exclusively source chilled prime cuts, never frozen. Each slab is personally trimmed and wet-aged for 120 hours to maximize deep natural umami and butter-soft bite.
              </p>
            </div>
          </div>

          {/* Pillar 2: Fresh Bakery Panko */}
          <div className="flex flex-col justify-between space-y-4">
            <div>
              {/* Top Image Frame - Photo Loading placeholder matching menu */}
              <div className="w-full h-44 rounded-xl overflow-hidden bg-[#f3f1ec] border border-[#eae6df] flex flex-col items-center justify-center mb-4 select-none shrink-0">
                <div className="flex flex-col items-center justify-center gap-1.5 text-[#8f6f6c]">
                  <div className="w-6 h-6 rounded-full border-2 border-[#d5cfc5] border-t-[#af101a] animate-spin" />
                  <span className="font-menu-bar text-[10px] uppercase tracking-widest font-bold text-[#8f6f6c]">
                    Photo Loading...
                  </span>
                  <span className="font-kr-serif text-[10px] text-[#a89d91]">
                    사진 준비 중
                  </span>
                </div>
              </div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-title-lg text-lg font-bold text-[#1b1c1a]">빵가루</h3>
                  <div className="font-body-sm text-sm text-[#5b403d] font-semibold mt-0.5">Fresh Panko</div>
                  <div className="font-body-sm text-xs text-[#585757] mt-0.5">Bột Chiên Xù Tươi Nướng Mới</div>
                </div>
                <span className="font-label-md text-xs text-[#835500] font-bold shrink-0">HOUSE BAKED</span>
              </div>
              <p className="font-body-sm text-xs text-[#5b403d] leading-relaxed">
                Custom recipe milk loaves baked in-house daily, then shredded using specialized coarse drums into delicate needle flakes that form an airy, grease-repelling golden armor.
              </p>
            </div>
          </div>

          {/* Pillar 3: Homemade Demi-Glace Sauce */}
          <div className="flex flex-col justify-between space-y-4">
            <div>
              {/* Top Image Frame - Photo Loading placeholder matching menu */}
              <div className="w-full h-44 rounded-xl overflow-hidden bg-[#f3f1ec] border border-[#eae6df] flex flex-col items-center justify-center mb-4 select-none shrink-0">
                <div className="flex flex-col items-center justify-center gap-1.5 text-[#8f6f6c]">
                  <div className="w-6 h-6 rounded-full border-2 border-[#d5cfc5] border-t-[#af101a] animate-spin" />
                  <span className="font-menu-bar text-[10px] uppercase tracking-widest font-bold text-[#8f6f6c]">
                    Photo Loading...
                  </span>
                  <span className="font-kr-serif text-[10px] text-[#a89d91]">
                    사진 준비 중
                  </span>
                </div>
              </div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-title-lg text-lg font-bold text-[#1b1c1a]">특제 소스</h3>
                  <div className="font-body-sm text-sm text-[#5b403d] font-semibold mt-0.5">Tonkatsu Sauce</div>
                  <div className="font-body-sm text-xs text-[#585757] mt-0.5">Nước Sốt Độc Quyền Trái Cây</div>
                </div>
                <span className="font-label-md text-xs text-[#af101a] font-bold shrink-0">18h SIMMER</span>
              </div>
              <p className="font-body-sm text-xs text-[#5b403d] leading-relaxed">
                Prepared without artificial thickeners. Simmered with crisp Fuji apples, sweet onions, and ripe tomatoes over gentle heat to yield a naturally harmonized sweet-savory tang.
              </p>
            </div>
          </div>

          {/* Pillar 4: Precision 0.8mm Mountain Cabbage */}
          <div className="flex flex-col justify-between space-y-4">
            <div>
              {/* Top Image Frame - Photo Loading placeholder matching menu */}
              <div className="w-full h-44 rounded-xl overflow-hidden bg-[#f3f1ec] border border-[#eae6df] flex flex-col items-center justify-center mb-4 select-none shrink-0">
                <div className="flex flex-col items-center justify-center gap-1.5 text-[#8f6f6c]">
                  <div className="w-6 h-6 rounded-full border-2 border-[#d5cfc5] border-t-[#af101a] animate-spin" />
                  <span className="font-menu-bar text-[10px] uppercase tracking-widest font-bold text-[#8f6f6c]">
                    Photo Loading...
                  </span>
                  <span className="font-kr-serif text-[10px] text-[#a89d91]">
                    사진 준비 중
                  </span>
                </div>
              </div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-title-lg text-lg font-bold text-[#1b1c1a]">양배추</h3>
                  <div className="font-body-sm text-sm text-[#5b403d] font-semibold mt-0.5">Shaved Cabbage</div>
                  <div className="font-body-sm text-xs text-[#585757] mt-0.5">Bắp Cải Tươi Ngâm Nước Đá</div>
                </div>
                <span className="font-label-md text-xs text-[#585757] font-bold shrink-0">0.8mm ICE</span>
              </div>
              <p className="font-body-sm text-xs text-[#5b403d] leading-relaxed">
                High-altitude sweet cabbage shaved to a delicate 0.8mm thickness, revitalized in filtered ice water to impart maximum crispness and balance the rich warmth of fried pork.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
