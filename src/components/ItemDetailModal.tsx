import React, { useState } from 'react';
import { MenuItem, OrderItemOption } from '@/types';

interface ItemDetailModalProps {
  item: MenuItem;
  onClose: () => void;
  onAddToCart: (item: MenuItem, quantity: number, options: OrderItemOption, unitPrice: number) => void;
  initialOptions?: Partial<OrderItemOption & { priceOverride?: number }>;
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({
  item,
  onClose,
  onAddToCart,
  initialOptions,
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<string>(
    initialOptions?.size || (item.sizes ? item.sizes[0].label : '')
  );
  const [sauceSeparately, setSauceSeparately] = useState<boolean>(
    initialOptions?.sauceSeparately || false
  );
  const [selectedSauceVariant, setSelectedSauceVariant] = useState<string>(
    item.sauceOptions ? item.sauceOptions[0] : ''
  );
  const [selectedAddons, setSelectedAddons] = useState<{ name: string; price: number }[]>([]);
  const [specialNote, setSpecialNote] = useState<string>('');

  // Available add-ons for main dishes
  const addonOptions = [
    { name: 'Extra Tenderloin 1pc (안심 추가)', price: 90 },
    { name: 'Extra Cheese Katsu 1pc (치즈카츠 추가)', price: 120 },
    { name: 'King Tiger Shrimp 1pc (왕새우튀김)', price: 70 },
    { name: 'Curry Sauce Bowl (수제 카레 추가)', price: 90 },
  ];

  // Calculate unit price based on options
  let basePrice = item.price;
  if (item.sizes && selectedSize) {
    const sizeObj = item.sizes.find((s) => s.label === selectedSize);
    if (sizeObj) basePrice = sizeObj.price;
  }
  if (item.id === 'cheese-bomb-katsu') {
    if (selectedSauceVariant.includes('Spicy') || selectedSauceVariant.includes('Dual')) {
      basePrice = 270;
    } else {
      basePrice = 260;
    }
  }

  const addonsTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0);
  const finalUnitPrice = basePrice + addonsTotal;
  const grandTotal = finalUnitPrice * quantity;

  const toggleAddon = (addon: { name: string; price: number }) => {
    if (selectedAddons.some((a) => a.name === addon.name)) {
      setSelectedAddons(selectedAddons.filter((a) => a.name !== addon.name));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  const handleConfirm = () => {
    onAddToCart(
      item,
      quantity,
      {
        size: selectedSize || undefined,
        sauceSeparately,
        sauceVariant: selectedSauceVariant || undefined,
        addons: selectedAddons,
        specialNote: specialNote.trim() || undefined,
      },
      finalUnitPrice
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div
        className="relative w-full max-w-xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-[#eae8e5] overflow-y-auto flex flex-col animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md shadow text-[#1b1c1a] hover:bg-[#af101a] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Modal Hero Image */}
        <div className="relative w-full h-56 sm:h-64 bg-[#efeeeb] shrink-0">
          <img
            src={item.image}
            alt={item.altText}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute bottom-3 left-4 right-4 text-white">
            <span className="font-label-md text-[10px] tracking-widest uppercase bg-[#af101a] text-white px-2.5 py-0.5 rounded font-bold">
              {item.category.toUpperCase()} ATELIER
            </span>
            <h3 className="font-menu-title text-2xl font-bold mt-1 text-white leading-tight tracking-wide uppercase">
              {item.nameEn}
            </h3>
            <span className="font-kr-serif text-sm text-[#ffb955] font-semibold block mt-0.5">
              {item.nameKr}
            </span>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 space-y-5">
          {/* Multilingual 4-Language descriptions without labels */}
          <div className="space-y-3 bg-[#fbf9f6] p-4 rounded-xl border border-[#eae8e5] text-xs">
            <p className="font-kr-serif text-[#1b1c1a] leading-relaxed text-justify">{item.descriptionKr}</p>
            <p className="font-body-md text-[#2b2b2b] leading-relaxed text-justify pt-2.5 border-t border-[#efeeeb]">{item.descriptionEn}</p>
            <p className="font-body-md text-[#2b2b2b] leading-relaxed text-justify pt-2.5 border-t border-[#efeeeb]">{item.descriptionVi || item.descriptionEn}</p>
            <p className="font-jp-serif text-[#1b1c1a] leading-relaxed text-justify pt-2.5 border-t border-[#efeeeb]">{item.descriptionJp || item.descriptionEn}</p>
          </div>

          {/* Sizing options if present */}
          {item.sizes && item.sizes.length > 0 && (
            <div className="space-y-2">
              <label className="font-label-md text-xs uppercase tracking-wider text-[#1b1c1a] font-bold block">
                Select Portion Size:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {item.sizes.map((s) => (
                  <button
                    key={s.label}
                    onClick={() => setSelectedSize(s.label)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedSize === s.label
                        ? 'border-[#af101a] bg-[#ffdad6]/20 text-[#af101a] font-bold'
                        : 'border-[#eae8e5] bg-[#f5f3f0] text-[#1b1c1a]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs">{s.label}</span>
                      <span className="text-xs font-extrabold">{s.price}.000 VND</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Sauce Options if present */}
          {item.sauceOptions && item.sauceOptions.length > 0 && (
            <div className="space-y-2">
              <label className="font-label-md text-xs uppercase tracking-wider text-[#1b1c1a] font-bold block">
                Select Sauce Craft Style:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {item.sauceOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSelectedSauceVariant(opt)}
                    className={`p-2.5 rounded-lg border text-xs text-center transition-all cursor-pointer ${
                      selectedSauceVariant === opt
                        ? 'border-[#af101a] bg-[#ffdad6]/25 text-[#af101a] font-bold'
                        : 'border-[#eae8e5] bg-[#f5f3f0] text-[#5b403d]'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Kitchen Rule: Sauce Separately toggle */}
          {item.category !== 'drinks' && item.category !== 'addons' && (
            <div className="p-3 bg-[#f5f3f0] rounded-xl border border-[#eae8e5] flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-title-md text-xs text-[#1b1c1a] font-bold">
                  Sauce Served Separately (소스 따로 / Sốt để riêng)
                </span>
                <span className="font-body-sm text-[11px] text-[#585757]">
                  Preserves maximum crunchiness for dip-lovers
                </span>
              </div>
              <input
                type="checkbox"
                checked={sauceSeparately}
                onChange={(e) => setSauceSeparately(e.target.checked)}
                className="w-5 h-5 rounded text-[#af101a] focus:ring-0 cursor-pointer accent-[#af101a]"
              />
            </div>
          )}

          {/* Optional Add-ons (Only for main dishes) */}
          {item.category !== 'addons' && item.category !== 'drinks' && (
            <div className="space-y-2">
              <label className="font-label-md text-xs uppercase tracking-wider text-[#1b1c1a] font-bold block">
                Craft Add-ons (Optional):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {addonOptions.map((addon) => {
                  const isChecked = selectedAddons.some((a) => a.name === addon.name);
                  return (
                    <button
                      key={addon.name}
                      onClick={() => toggleAddon(addon)}
                      className={`p-2.5 rounded-lg border text-left flex items-center justify-between text-xs transition-colors cursor-pointer ${
                        isChecked
                          ? 'border-[#af101a] bg-[#ffdad6]/20 text-[#af101a] font-bold'
                          : 'border-[#eae8e5] bg-white text-[#5b403d] hover:bg-[#f5f3f0]'
                      }`}
                    >
                      <span className="truncate">{addon.name}</span>
                      <span className="font-bold ml-1">+{addon.price}k</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Special Kitchen Notes */}
          <div className="space-y-1.5">
            <label className="font-label-md text-xs uppercase tracking-wider text-[#585757] font-semibold block">
              Kitchen Instructions / Yêu cầu đặc biệt:
            </label>
            <input
              type="text"
              value={specialNote}
              onChange={(e) => setSpecialNote(e.target.value)}
              placeholder="e.g. Extra cabbage, less spicy, no wasabi..."
              className="w-full px-3 py-2 text-xs bg-[#f5f3f0] border border-[#eae8e5] rounded-lg focus:outline-none focus:border-[#af101a] text-[#1b1c1a]"
            />
          </div>

          {/* Quantity Selector & Grand Total */}
          <div className="pt-3 border-t border-[#eae8e5] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-label-md text-xs uppercase text-[#585757] font-bold">
                Quantity:
              </span>
              <div className="flex items-center border border-[#eae8e5] rounded-lg bg-white overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 text-sm font-bold text-[#1b1c1a] hover:bg-[#f5f3f0] cursor-pointer"
                >
                  -
                </button>
                <span className="px-3 py-1 font-price-numeral text-sm font-bold text-[#1b1c1a]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 text-sm font-bold text-[#1b1c1a] hover:bg-[#f5f3f0] cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            <div className="text-right">
              <span className="font-price-numeral text-2xl text-[#af101a] font-extrabold">
                {grandTotal}.000
              </span>
              <span className="font-label-md text-xs text-[#585757] ml-1">VND</span>
            </div>
          </div>

          {/* Confirm Button */}
          <button
            onClick={handleConfirm}
            className="w-full py-3.5 bg-[#af101a] hover:bg-[#d32f2f] text-white font-label-lg text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer font-bold"
          >
            <span className="material-symbols-outlined text-[18px]">receipt_long</span>
            <span>Add to Table 04 Order Pad</span>
          </button>
        </div>
      </div>
    </div>
  );
};
