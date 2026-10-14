import React, { useState, useMemo, useEffect, useRef } from 'react';
import { MenuItem, Language, CartItem } from '@/types';
import { MENU_ITEMS } from '@/data';
import {
  DishCard,
  CompactItemCard,
  MenuSidebar,
  MenuSection,
} from '@/features/menu/components';

interface MenuScreenProps {
  language?: Language;
  onSelectItem?: (item: MenuItem, initialOptions?: any) => void;
  cartItems?: CartItem[];
  onOpenOrderPad?: () => void;
}

export const MenuScreen: React.FC<MenuScreenProps> = () => {
  const [activeCategory, setActiveCategory] = useState<string>('cat-japanese');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const isClickScrolling = useRef(false);

  // Group items by category
  const japaneseItems = useMemo(
    () => MENU_ITEMS.filter((i) => i.category === 'japanese'),
    []
  );
  const koreanItems = useMemo(
    () => MENU_ITEMS.filter((i) => i.category === 'korean'),
    []
  );
  const curryItems = useMemo(
    () => MENU_ITEMS.filter((i) => i.category === 'curry'),
    []
  );
  const noodleItems = useMemo(
    () => MENU_ITEMS.filter((i) => i.category === 'noodles'),
    []
  );
  const addonItems = useMemo(
    () => MENU_ITEMS.filter((i) => i.category === 'addons'),
    []
  );
  const drinkItems = useMemo(
    () => MENU_ITEMS.filter((i) => i.category === 'drinks'),
    []
  );

  // Scroll-spy: seamlessly tracks current viewing section as user scrolls
  useEffect(() => {
    const sectionIds = [
      'cat-japanese',
      'cat-korean',
      'cat-curry',
      'cat-noodles',
      'cat-addons',
      'cat-drinks',
    ];

    let ticking = false;

    const handleScroll = () => {
      if (isClickScrolling.current) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;
          const fullHeight = document.documentElement.scrollHeight;

          // If scrolled near bottom of page, highlight the last section
          if (scrollY + windowHeight >= fullHeight - 80) {
            setActiveCategory('cat-drinks');
            ticking = false;
            return;
          }

          // Search sections from bottom to top
          const threshold = 130;
          for (let i = sectionIds.length - 1; i >= 0; i--) {
            const el = document.getElementById(sectionIds[i]);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= threshold) {
                setActiveCategory(sectionIds[i]);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Search filter across all 4 languages
  const matchesFilter = (item: MenuItem): boolean => {
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const match =
        item.nameEn.toLowerCase().includes(q) ||
        item.nameKr.toLowerCase().includes(q) ||
        item.nameVi.toLowerCase().includes(q) ||
        (item.nameJp && item.nameJp.toLowerCase().includes(q)) ||
        item.descriptionEn.toLowerCase().includes(q) ||
        item.descriptionKr.toLowerCase().includes(q) ||
        (item.descriptionVi && item.descriptionVi.toLowerCase().includes(q)) ||
        (item.descriptionJp && item.descriptionJp.toLowerCase().includes(q));
      if (!match) return false;
    }
    return true;
  };

  const scrollToCategory = (catId: string) => {
    setActiveCategory(catId);
    isClickScrolling.current = true;
    const elem = document.getElementById(catId);
    if (elem) {
      const yOffset = -90;
      const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  };

  const categories = [
    { id: 'cat-japanese', label: 'Japanese Tonkatsu', count: japaneseItems.length },
    { id: 'cat-korean', label: 'Korean Retro Cutlet', count: koreanItems.length },
    { id: 'cat-curry', label: 'Curry Rice & Cutlet', count: curryItems.length },
    { id: 'cat-noodles', label: 'Noodles & Soba', count: noodleItems.length },
    { id: 'cat-addons', label: 'Add-ons & Sauces', count: addonItems.length },
    { id: 'cat-drinks', label: 'Drinks & Artisanal Beer', count: drinkItems.length },
  ];

  return (
    <div className="flex flex-col w-full pb-16">
      {/* Main Body Grid: Sticky Left Category Index & Right Food Spreads */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* LEFT SIDEBAR: Sticky Category Navigation */}
          <MenuSidebar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            activeCategory={activeCategory}
            categories={categories}
            onSelectCategory={scrollToCategory}
          />

          {/* RIGHT MAIN CONTENT: The Dish Catalog */}
          <main className="lg:col-span-9 space-y-14">
            {/* 01. JAPANESE TONKATSU */}
            <MenuSection
              id="cat-japanese"
              titleEn="Japanese Tonkatsu"
              subtitleKr="일본식 정통 카츠 • Deep golden coarse panko fried at precision dual temperatures"
              note="All sets include cabbage, miso broth, pickles & pearl rice"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {japaneseItems.filter(matchesFilter).map((item) => (
                  <DishCard
                    key={item.id}
                    item={item}
                    isFeatured={item.isChefSignature}
                  />
                ))}
              </div>
            </MenuSection>

            {/* 02. KOREAN RETRO CUTLET */}
            <MenuSection
              id="cat-korean"
              titleEn="Korean Retro Cutlet"
              subtitleKr="경양식 돈까스 • 1980s Retro Seoul style thin-pounded crispy pork cutlets"
              note="Served with homemade cream corn soup, rice & spicy kimchi"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {koreanItems.filter(matchesFilter).map((item) => (
                  <DishCard
                    key={item.id}
                    item={item}
                  />
                ))}
              </div>
            </MenuSection>

            {/* 03. CURRY RICE */}
            <MenuSection
              id="cat-curry"
              titleEn="Curry Rice & Cutlet"
              subtitleKr="수제 카레라이스 • 48-hour slow-simmered caramelized onion Japanese spiced curry"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {curryItems.filter(matchesFilter).map((item) => (
                  <DishCard
                    key={item.id}
                    item={item}
                  />
                ))}
              </div>
            </MenuSection>

            {/* 04. NOODLES & SOBA */}
            <MenuSection
              id="cat-noodles"
              titleEn="Noodles & Soba"
              subtitleKr="면 요리 • Chilled buckwheat soba & Sanuki udon with savory bonito dashi broth"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {noodleItems.filter(matchesFilter).map((item) => (
                  <DishCard
                    key={item.id}
                    item={item}
                  />
                ))}
              </div>
            </MenuSection>

            {/* 05. ADD-ONS & SAUCES */}
            <MenuSection
              id="cat-addons"
              titleEn="Add-ons & Sauces"
              subtitleKr="사이드 및 추가 메뉴 • Individual katsu pieces, artisan sauces & accompaniments"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {addonItems.filter(matchesFilter).map((item) => (
                  <CompactItemCard
                    key={item.id}
                    item={item}
                  />
                ))}
              </div>
            </MenuSection>

            {/* 06. DRINKS & ARTISANAL BEER */}
            <MenuSection
              id="cat-drinks"
              titleEn="Drinks & Artisanal Beer"
              subtitleKr="음료 및 주류 • Craft beer, chilled sakes, Japanese sodas & mineral waters"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {drinkItems.filter(matchesFilter).map((item) => (
                  <CompactItemCard
                    key={item.id}
                    item={item}
                  />
                ))}
              </div>
            </MenuSection>
          </main>
        </div>
      </div>
    </div>
  );
};
