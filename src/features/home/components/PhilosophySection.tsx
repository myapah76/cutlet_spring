import React from 'react';

export const PhilosophySection: React.FC = () => {
  return (
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
  );
};
