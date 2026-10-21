import React from 'react';
import { Language } from '@/types';

interface IngredientItem {
  id: string;
  nameKr: string;
  nameEn: string;
  nameVi: string;
  nameJp: string;
  descEn: string;
  descVi: string;
}

const INGREDIENTS_DATA: IngredientItem[] = [
  {
    id: 'chilled-pork',
    nameKr: '냉장육',
    nameEn: 'Chilled Pork',
    nameVi: 'Thịt Heo Mát',
    nameJp: 'チルドポーク',
    descEn:
      'We serve fresh chilled pork that has never been frozen. Our owner personally trims and inspects each cut of pork, removing any pieces that do not meet our standards. The pork is then chilled and aged for 120 hours to achieve better tenderness and flavor.',
    descVi:
      'Chúng tôi sử dụng thịt heo mát tươi, chưa từng qua đông lạnh. Chủ quán trực tiếp sơ chế và kiểm tra từng miếng thịt, loại bỏ những phần không đạt tiêu chuẩn. Sau đó, thịt được ủ mát trong 120h để đạt độ mềm và hương vị tốt hơn.',
  },
  {
    id: 'breadcrumbs',
    nameKr: '빵가루',
    nameEn: 'Breadcrumbs',
    nameVi: 'Bột Chiên Xù',
    nameJp: 'パン粉',
    descEn:
      'House-baked bread, made fresh every morning, is turned into our signature breadcrumbs for a crispy, light, and non-greasy coating.',
    descVi:
      'Chúng tôi tự nướng bánh mì mới mỗi sáng và xay thành loại bột chiên xù đặc trưng của quán. Lớp áo chiên nhờ vậy giòn rụm, nhẹ và không ngấy mỡ.',
  },
  {
    id: 'tonkatsu-sauce-dressing',
    nameKr: '돈카츠 소스 & 드레싱',
    nameEn: 'Tonkatsu Sauce & Dressing',
    nameVi: 'Sốt Tonkatsu & Dressing',
    nameJp: 'とんかつソース & ドレッシング',
    descEn:
      'Our tonkatsu sauce and dressing are all homemade based on our original recipes. We use plenty of fresh fruits and vegetables to create a rich, balanced flavor.',
    descVi:
      'Sốt tonkatsu và dressing đều được chúng tôi tự làm theo công thức riêng. Chúng tôi dùng nhiều trái cây và rau củ tươi để tạo nên hương vị đậm đà, cân bằng.',
  },
  {
    id: 'cabbage',
    nameKr: '양배추',
    nameEn: 'Cabbage',
    nameVi: 'Bắp Cải',
    nameJp: 'キャベツ',
    descEn:
      'We serve freshly sliced cabbage prepared every morning.',
    descVi:
      'Chúng tôi phục vụ bắp cải tươi được bào mới mỗi sáng.',
  },
];

interface PhilosophySectionProps {
  language?: Language;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({
  language = 'VI',
}) => {
  const isVietnamesePrimary = language === 'VI';

  return (
    <section className="w-full py-16 lg:py-24 border-b border-[#eae8e5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#eae8e5]">
          <div>
            <div className="font-label-md text-xs uppercase tracking-widest text-[#af101a] font-bold mb-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#af101a]" />
              봄돈까스의 원재료
            </div>
            <h2 className="font-headline-lg text-3xl lg:text-4xl text-[#1b1c1a] font-bold tracking-tight">
              INGREDIENTS / NGUYÊN LIỆU
            </h2>
          </div>
          <div className="font-menu-bar text-xs uppercase tracking-widest text-[#8f6f6c] font-bold mt-2 md:mt-0">
            Cutlet Spring Menu
          </div>
        </div>

        {/* 4 Ingredients Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {INGREDIENTS_DATA.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between space-y-4"
            >
              <div>
                {/* Top Image Frame - Photo Loading placeholder matching menu */}
                <div className="w-full h-44 rounded-xl overflow-hidden bg-[#f3f1ec] border border-[#eae6df] flex flex-col items-center justify-center mb-4 select-none shrink-0">
                  <div className="flex flex-col items-center justify-center gap-1.5 text-[#8f6f6c]">
                    <div className="w-6 h-6 rounded-full border-2 border-[#d5cfc5] border-t-[#af101a] animate-spin" />
                    <span className="font-menu-bar text-[10px] uppercase tracking-widest font-bold text-[#8f6f6c]">
                      Photo Loading...
                    </span>
                    <span className="font-kr-serif text-[10px] text-[#a89d91]">
                      사진 준비 중
                    </span>
                  </div>
                </div>

                {/* Multilingual Titles: Korean -> English -> Vietnamese -> Japanese */}
                <div className="space-y-1 mb-3 pb-2.5 border-b border-[#eae8e5]/80">
                  <h3 className="font-kr-serif text-lg font-bold text-[#1b1c1a] leading-tight">
                    {item.nameKr}
                  </h3>
                  <div className="font-menu-title text-sm font-bold text-[#1b1c1a] uppercase tracking-wide">
                    {item.nameEn}
                  </div>
                  <div className="font-body-md text-xs sm:text-sm text-[#8f6f6c] font-medium italic">
                    {item.nameVi}
                  </div>
                  <div className="font-jp-serif text-xs text-[#585757]">
                    {item.nameJp}
                  </div>
                </div>

                {/* Exact Descriptions from Menu */}
                <div className="space-y-2.5 text-xs sm:text-[13px] leading-relaxed">
                  {isVietnamesePrimary ? (
                    <>
                      <p className="font-body-md text-[#1b1c1a] leading-relaxed">
                        {item.descVi}
                      </p>
                      <p className="font-body-md text-[#585757] italic border-t border-[#eae8e5]/60 pt-2.5 leading-relaxed">
                        {item.descEn}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="font-body-md text-[#1b1c1a] leading-relaxed">
                        {item.descEn}
                      </p>
                      <p className="font-body-md text-[#585757] italic border-t border-[#eae8e5]/60 pt-2.5 leading-relaxed">
                        {item.descVi}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
