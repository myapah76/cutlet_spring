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
  const mobileNavRef = React.useRef<HTMLDivElement>(null);

  // Auto-scroll active category tab into view on mobile
  React.useEffect(() => {
    if (!mobileNavRef.current) return;
    const activeTab = document.getElementById(`mobile-tab-${activeCategory}`);
    if (activeTab) {
      activeTab.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [activeCategory]);

  return (
    <>
      {/* MOBILE & TABLET (< lg): Sticky Horizontal Category Nav Bar */}
      <div className="lg:hidden sticky top-14 sm:top-20 z-30 bg-[#fbf9f6]/95 backdrop-blur-md border-b border-[#eae8e5] -mx-4 px-4 sm:-mx-6 sm:px-6 py-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
        <div
          ref={mobileNavRef}
          className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`mobile-tab-${cat.id}`}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs whitespace-nowrap rounded-none transition-all cursor-pointer shrink-0 font-menu-bar tracking-wider ${
                  isActive
                    ? 'bg-[#1b1c1a] text-white font-bold shadow-xs'
                    : 'bg-[#f5f3f0] text-[#5b403d] border border-[#eae8e5] hover:bg-[#eae8e5] hover:text-[#1b1c1a]'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`font-price-numeral text-[11px] font-bold ${
                    isActive ? 'text-[#feae2c]' : 'text-[#8f6f6c]'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* DESKTOP (lg+): Sticky Vertical Left Sidebar */}
      <aside className="hidden lg:block lg:col-span-3 xl:col-span-2">
        <div className="lg:sticky lg:top-28 pt-0 lg:pt-[76px] space-y-4">
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
    </>
  );
};
