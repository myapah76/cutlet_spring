import React from 'react';

export interface MenuCategoryItem {
  id: string;
  label: string;
  count: number;
}

interface MenuSidebarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeCategory: string;
  categories: MenuCategoryItem[];
  onSelectCategory: (id: string) => void;
}

export const MenuSidebar: React.FC<MenuSidebarProps> = ({
  searchQuery,
  onSearchChange,
  activeCategory,
  categories,
  onSelectCategory,
}) => {
  return (
    <aside className="lg:col-span-3">
      <div className="lg:sticky lg:top-28 space-y-5">
        {/* Search Bar */}
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#585757]">
            <span className="material-symbols-outlined text-[18px]">search</span>
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search in 4 languages..."
            className="w-full pl-9 pr-3 py-2.5 text-xs bg-white border border-[#eae8e5] rounded-xl focus:outline-none focus:border-[#af101a] text-[#1b1c1a] placeholder-[#8f6f6c] shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#585757] hover:text-[#1b1c1a] cursor-pointer"
              aria-label="Clear search"
            >
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          )}
        </div>

        {/* Category Navigation Links with font-menu-bar */}
        <div className="bg-white rounded-2xl p-5 shadow-xs border border-[#eae8e5] space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-[#eae8e5]">
            <span className="font-menu-bar text-xs tracking-wider text-[#1b1c1a]">
              Menu Sections
            </span>
            <span className="font-body-sm text-[11px] text-[#585757]">{categories.length} Categories</span>
          </div>
          <nav className="flex flex-col space-y-1" id="category-nav">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`group flex items-center justify-between p-2.5 rounded-xl transition-all text-left cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#f5f3f0] text-[#af101a] font-bold shadow-xs'
                    : 'text-[#5b403d] hover:bg-[#f5f3f0] hover:text-[#1b1c1a]'
                }`}
              >
                <span className="font-menu-bar text-xs tracking-wider group-hover:translate-x-1 transition-transform">
                  {cat.label}
                </span>
                <span
                  className={`font-label-md text-[11px] px-2 py-0.5 rounded-full font-bold ${
                    activeCategory === cat.id
                      ? 'bg-[#ffdad6] text-[#af101a]'
                      : 'bg-[#eae8e5] text-[#585757]'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
};
