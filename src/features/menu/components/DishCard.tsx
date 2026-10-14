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
      className={`bg-white rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow border border-[#eae8e5] flex flex-col justify-between space-y-4 ${
        isFeatured ? 'col-span-1 md:col-span-2' : ''
      }`}
    >
      {/* Top Image Frame */}
      <div
        className={`relative w-full ${
          isFeatured ? 'h-64 sm:h-80' : 'h-48 sm:h-56'
        } rounded-xl overflow-hidden bg-[#efeeeb] group`}
      >
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          alt={item.altText || item.nameEn}
          src={item.image}
        />
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
          <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#1b1c1a] border border-[#eae8e5] flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px] text-[#835500]">schedule</span>
            <span>{item.prepTimeMinutes} min prep</span>
          </div>
        )}
      </div>

      {/* Title, Subtitles, Portion, Big Red Price */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-[#eae8e5]">
        <div className="space-y-1">
          <h3 className={`font-menu-title ${isFeatured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'} text-[#1b1c1a] font-bold tracking-tight uppercase leading-snug`}>
            {item.nameEn}
          </h3>
          <div className="flex flex-wrap items-baseline gap-2 pt-0.5">
            <span className="font-kr-serif text-base sm:text-lg text-[#1b1c1a] font-bold">
              {item.nameKr}
            </span>
            {item.nameJp && (
              <span className="font-jp-serif text-xs text-[#585757]">
                • {item.nameJp}
              </span>
            )}
          </div>
        </div>

        {/* Portions & Big Red Price */}
        <div className="flex items-baseline sm:items-end justify-between sm:justify-end gap-5 shrink-0">
          <div className="text-left sm:text-right text-xs text-[#585757] leading-tight font-medium">
            <div className="font-semibold text-[#1b1c1a]">{item.portionEn || 'Set for 1 person'}</div>
            <div className="text-[11px] text-[#585757]">{item.portionVi || 'Set dành cho 1 người'}</div>
          </div>
          <div className="text-right">
            <span className={`font-price-numeral ${isFeatured ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'} text-[#af101a] font-black tracking-tight leading-none`}>
              {item.price}
            </span>
          </div>
        </div>
      </div>

      {/* 4-Language Description Columns without labels matching physical menu */}
      <div className={`grid ${isFeatured ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6' : 'grid-cols-1 sm:grid-cols-2 gap-4'} text-xs leading-relaxed border-b border-[#eae8e5] pb-4 pt-1`}>
        {/* Column 1: Korean */}
        <div className="font-kr-serif text-[#1b1c1a] text-xs leading-relaxed text-left">
          {item.descriptionKr}
        </div>

        {/* Column 2: English */}
        <div className="font-body-md text-[#2b2b2b] text-xs leading-relaxed text-left">
          {item.descriptionEn}
        </div>

        {/* Column 3: Vietnamese */}
        <div className="font-body-md text-[#2b2b2b] text-xs leading-relaxed text-left">
          {item.descriptionVi || item.descriptionEn}
        </div>

        {/* Column 4: Japanese */}
        <div className="font-jp-serif text-[#1b1c1a] text-xs leading-relaxed text-left">
          {item.descriptionJp || item.descriptionEn}
        </div>
      </div>


      {/* Card Footer: VAT note */}
      <div className="flex items-center justify-between pt-1">
        <span className="text-[11px] text-[#585757] italic">
          Prices do not include VAT 8% • CUTLET SPRING MENU
        </span>
      </div>
    </div>
  );
};
