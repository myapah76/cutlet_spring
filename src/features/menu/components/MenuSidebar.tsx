import React from 'react';

export interface MenuCategoryItem {
  id: string;
  label: string;
  count: number;
}

interface MenuSidebarProps {
  activeCategory: string;
  categories: MenuCategoryItem[];
  onSelectCategory: (id: string) => void;
}

export const MenuSidebar: React.FC<MenuSidebarProps> = ({
  activeCategory,
  categories,
  onSelectCategory,
}) => {
  return (
    <aside className="lg:col-span-3 xl:col-span-2">
      {/* Adjusted with lg:pt-[76px] to align horizontally with the Signature dish card */}
      <div className="lg:sticky lg:top-28 pt-0 lg:pt-[76px] space-y-4">
        {/* Category Navigation - Blended with background for open spaciousness */}
        <div className="space-y-3">
          <div className="pb-1">
            <span className="font-menu-bar text-xs sm:text-sm tracking-wider text-[#1b1c1a] uppercase font-bold">
              Menu Sections
            </span>
          </div>

          <nav className="flex flex-col space-y-1.5" id="category-nav">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`group flex items-center justify-between py-2.5 px-3 rounded-none transition-all text-left cursor-pointer ${
                    isActive
                      ? 'bg-[#eae8e5]/80 text-[#af101a] font-bold border-l-2 border-[#af101a]'
                      : 'text-[#5b403d] hover:bg-[#eae8e5]/40 hover:text-[#1b1c1a]'
                  }`}
                >
                  <span className="font-menu-bar text-xs tracking-wider group-hover:translate-x-0.5 transition-transform">
                    {cat.label}
                  </span>
                  {/* Clean numeral count without round colored pill */}
                  <span
                    className={`font-price-numeral text-xs transition-colors ${
                      isActive
                        ? 'text-[#af101a] font-bold'
                        : 'text-[#8f6f6c] group-hover:text-[#1b1c1a]'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
};
