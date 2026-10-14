import React from 'react';

interface MenuSectionProps {
  id: string;
  titleEn: string;
  subtitleKr: string;
  note?: string;
  children: React.ReactNode;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  id,
  titleEn,
  subtitleKr,
  note,
  children,
}) => {
  return (
    <section className="space-y-6 scroll-mt-28" id={id}>
      <div className="pb-2 border-b border-[#eae8e5] flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <h2 className="font-menu-bar text-2xl sm:text-3xl text-[#1b1c1a] tracking-tight">
            {titleEn}
          </h2>
          <p className="font-kr-serif text-xs text-[#5b403d] mt-0.5">
            {subtitleKr}
          </p>
        </div>
        {note && (
          <span className="text-[11px] text-[#585757] italic">
            {note}
          </span>
        )}
      </div>

      {children}
    </section>
  );
};
