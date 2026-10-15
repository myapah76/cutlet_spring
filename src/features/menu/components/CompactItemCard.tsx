import React from 'react';
import { MenuItem } from '@/types';

interface CompactItemCardProps {
  item: MenuItem;
}

export const CompactItemCard: React.FC<CompactItemCardProps> = ({ item }) => {
  return (
    <div className="flex flex-col justify-between space-y-3 h-full pb-2">
      {/* Top Image Frame (Image hidden, layout frame preserved) */}
      <div className="relative w-full h-36 sm:h-44 rounded-xl overflow-hidden bg-[#efeeeb] group shrink-0 flex items-center justify-center">
        <div className="flex items-center justify-center text-[#c2bfb8] select-none">
          <span className="material-symbols-outlined text-2xl sm:text-3xl opacity-40">restaurant</span>
        </div>
        {item.tags && item.tags.length > 0 && (
          <div className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-xs text-white font-label-md text-[10px] uppercase px-2 py-0.5 rounded font-semibold tracking-wider">
            {item.tags[0]}
          </div>
        )}
        {item.isBestSeller && (
          <div className="absolute top-2.5 right-2.5 bg-[#feae2c] text-[#291800] font-label-md text-[10px] uppercase px-2 py-0.5 rounded font-bold shadow-xs">
            Best
          </div>
        )}
      </div>

      {/* Multilingual Titles in order: Hàn -> Anh -> Việt -> Nhật */}
      <div className="space-y-1 flex-1">
        {/* 1. Korean Primary Title */}
        {item.nameKr && (
          <div>
            <h4 className="font-kr-serif text-base sm:text-lg text-[#1b1c1a] font-bold tracking-tight leading-snug">
              {item.nameKr}
            </h4>
            {item.nameKrSubtitle && (
              <div className="text-[11px] text-[#585757] font-semibold tracking-normal">
                {item.nameKrSubtitle}
              </div>
            )}
          </div>
        )}

        {/* 2. English Subtitle */}
        {item.nameEn && (
          <div className="font-menu-title text-xs sm:text-sm text-[#1b1c1a] font-bold uppercase tracking-tight">
            {item.nameEn}
          </div>
        )}

        {/* 3. Vietnamese Translation */}
        {item.nameVi && (
          <div className="font-body-md text-xs text-[#8f6f6c] italic">
            {item.nameVi}
          </div>
        )}

        {/* 4. Japanese Subtitle */}
        {item.nameJp && (
          <div className="font-jp-serif text-xs text-[#585757]">
            {item.nameJp}
          </div>
        )}
      </div>

      {/* Card Footer: Price */}
      <div className="pt-1 flex items-baseline justify-end">
        <div className="text-right">
          <span className="font-price-numeral text-2xl sm:text-3xl text-[#af101a] font-black leading-none">
            {item.price}.
          </span>
        </div>
      </div>
    </div>
  );
};
