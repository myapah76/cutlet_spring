import React from 'react';
import { MenuItem } from '@/types';

interface CompactItemCardProps {
  item: MenuItem;
}

export const CompactItemCard: React.FC<CompactItemCardProps> = ({ item }) => {
  return (
    <div className="flex flex-col justify-between space-y-3 h-full pb-2">
      {/* Top Image Frame */}
      <div className="relative w-full h-36 sm:h-44 rounded-xl overflow-hidden bg-[#efeeeb] group shrink-0">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          alt={item.altText || item.nameEn}
          src={item.image}
        />
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

      {/* Multilingual Titles (Names Only) */}
      <div className="space-y-1 flex-1">
        {/* English Primary Title */}
        <h4 className="font-menu-title text-base sm:text-lg text-[#1b1c1a] font-bold tracking-tight uppercase leading-snug">
          {item.nameEn}
        </h4>

        {/* Korean Subtitle */}
        <div className="font-kr-serif text-xs sm:text-sm text-[#1b1c1a] font-bold">
          {item.nameKr}
        </div>

        {/* Japanese Subtitle */}
        {item.nameJp && (
          <div className="font-jp-serif text-xs text-[#585757]">
            {item.nameJp}
          </div>
        )}

        {/* Vietnamese Translation */}
        <div className="font-body-md text-xs text-[#8f6f6c] italic">
          {item.nameVi}
        </div>
      </div>

      {/* Card Footer: Price */}
      <div className="pt-1 flex items-baseline justify-end">
        <div className="text-right">
          <span className="font-price-numeral text-2xl sm:text-3xl text-[#af101a] font-black leading-none">
            {item.price}
          </span>
          <span className="text-xs text-[#1b1c1a] font-semibold ml-1">.000₫</span>
        </div>
      </div>
    </div>
  );
};
