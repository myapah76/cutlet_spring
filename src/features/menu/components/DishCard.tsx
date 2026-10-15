import React from 'react';
import { MenuItem } from '@/types';

interface DishCardProps {
  item: MenuItem;
  onSelectItem?: (item: MenuItem, initialOptions?: any) => void;
  isFeatured?: boolean;
}

export const DishCard: React.FC<DishCardProps> = ({ item, isFeatured }) => {
  return (
    <div
      className={`flex flex-col h-full pb-4 ${
        isFeatured ? 'col-span-1 md:col-span-2' : ''
      }`}
    >
      {/* Top Header Group: Image Frame + Titles & Price (prevents title drift from sibling height stretch) */}
      <div className="space-y-4">
        {/* Top Image Frame (Image hidden, layout frame preserved) */}
        <div
          className={`relative w-full ${
            isFeatured ? 'h-64 sm:h-80' : 'h-48 sm:h-56'
          } rounded-xl overflow-hidden bg-[#efeeeb] group flex items-center justify-center shrink-0`}
        >
          <div className="flex items-center justify-center text-[#c2bfb8] select-none">
            <span className="material-symbols-outlined text-3xl sm:text-4xl opacity-40">restaurant</span>
          </div>

          {item.isChefSignature && (
            <div className="absolute top-3 left-3 bg-[#af101a] text-white font-label-md text-xs uppercase px-3 py-1 rounded tracking-wider font-bold shadow">
              Chef Signature
            </div>
          )}
          {item.isBestSeller && !item.isChefSignature && (
            <div className="absolute top-3 left-3 bg-[#feae2c] text-[#291800] font-label-md text-xs uppercase px-3 py-1 rounded tracking-wider font-bold shadow">
              Best Seller
            </div>
          )}
          {item.isLimited && (
            <div className="absolute top-3 right-3 bg-[#1b1c1a] text-white font-label-md text-[10px] uppercase px-2.5 py-1 rounded font-bold shadow">
              Limited Daily Batch
            </div>
          )}
          {item.prepTimeMinutes && (
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#1b1c1a] shadow-xs flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-[#835500]">schedule</span>
              <span>{item.prepTimeMinutes} min prep</span>
            </div>
          )}
        </div>

        {/* Title, Subtitles, Portion, Big Red Price (Order: Hàn -> Anh -> Việt -> Nhật) */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-[#eae8e5]/70">
          <div className="space-y-1">
            {/* 1. Korean Primary Title */}
            {item.nameKr && (
              <div>
                <h3 className={`font-kr-serif ${isFeatured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'} text-[#1b1c1a] font-black tracking-tight leading-snug`}>
                  {item.nameKr}
                </h3>
                {item.nameKrSubtitle && (
                  <div className="text-xs text-[#585757] font-semibold tracking-normal mt-0.5">
                    {item.nameKrSubtitle}
                  </div>
                )}
              </div>
            )}

            {/* 2. English Subtitle */}
            {item.nameEn && (
              <div className={`font-menu-title ${isFeatured ? 'text-base sm:text-lg' : 'text-sm sm:text-base'} text-[#1b1c1a] font-bold tracking-tight uppercase leading-snug`}>
                {item.nameEn}
              </div>
            )}

            {/* 3. Vietnamese Subtitle (on its own line, no bullet) */}
            {item.nameVi && (
              <div className="font-body-md text-xs sm:text-sm text-[#8f6f6c] font-medium italic">
                {item.nameVi}
              </div>
            )}

            {/* 4. Japanese Subtitle (on its own line, no bullet) */}
            {item.nameJp && (
              <div className="font-jp-serif text-xs text-[#585757]">
                {item.nameJp}
              </div>
            )}
          </div>

          {/* Portions & Big Red Price */}
          <div className="flex items-baseline sm:items-end justify-between sm:justify-end gap-5 shrink-0">
            {(item.portionEn || item.portionVi) && (
              <div className="text-left sm:text-right text-xs text-[#585757] leading-tight font-medium">
                {item.portionEn && <div className="font-semibold text-[#1b1c1a]">{item.portionEn}</div>}
                {item.portionVi && <div className="text-[11px] text-[#585757]">{item.portionVi}</div>}
              </div>
            )}
            <div className="text-right">
              {item.sizes && item.sizes.length > 0 ? (
                <div className="flex flex-col items-end gap-1.5">
                  {item.sizes.map((s, idx) => (
                    <div key={idx} className="flex items-center gap-2 font-bold">
                      {s.label === 'S' || s.label === 'L' ? (
                        <span className="w-5 h-5 rounded-full bg-[#feae2c] text-[#291800] text-[11px] font-black flex items-center justify-center shadow-xs">
                          {s.label}
                        </span>
                      ) : (
                        <span className="text-xs text-[#585757] font-semibold">{s.label}</span>
                      )}
                      <span className="font-price-numeral text-2xl sm:text-3xl text-[#af101a] font-black leading-none">
                        {s.price}.
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <span className={`font-price-numeral ${isFeatured ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'} text-[#af101a] font-black tracking-tight leading-none`}>
                    {item.price}.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 4-Language Description: Hàn -> Anh -> Việt -> Nhật (Hidden on mobile/phone) */}
      {isFeatured ? (
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed pt-3">
          {item.descriptionKr && (
            <div className="font-kr-serif text-[#1b1c1a] text-xs leading-relaxed text-left">
              {item.descriptionKr}
            </div>
          )}
          {item.descriptionEn && (
            <div className="font-body-md text-[#2b2b2b] text-xs leading-relaxed text-left">
              {item.descriptionEn}
            </div>
          )}
          {item.descriptionVi && (
            <div className="font-body-md text-[#2b2b2b] text-xs leading-relaxed text-left">
              {item.descriptionVi}
            </div>
          )}
          {item.descriptionJp && (
            <div className="font-jp-serif text-[#1b1c1a] text-xs leading-relaxed text-left">
              {item.descriptionJp}
            </div>
          )}
        </div>
      ) : (
        <div className="hidden md:block space-y-1.5 text-xs leading-relaxed pt-3">
          {item.descriptionKr && (
            <div className="font-kr-serif text-[#1b1c1a] text-xs leading-relaxed text-left">
              {item.descriptionKr}
            </div>
          )}
          {item.descriptionEn && (
            <div className="font-body-md text-[#2b2b2b] text-xs leading-relaxed text-left">
              {item.descriptionEn}
            </div>
          )}
          {item.descriptionVi && (
            <div className="font-body-md text-[#585757] text-xs leading-relaxed text-left italic">
              {item.descriptionVi}
            </div>
          )}
          {item.descriptionJp && (
            <div className="font-jp-serif text-[#585757] text-xs leading-relaxed text-left">
              {item.descriptionJp}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
