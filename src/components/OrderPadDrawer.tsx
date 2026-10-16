import React, { useState } from 'react';
import { CartItem, OrderDetails } from '../types';

interface OrderPadDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, newQty: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const OrderPadDrawer: React.FC<OrderPadDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [tableNote, setTableNote] = useState<string>('');
  const [activeOrder, setActiveOrder] = useState<OrderDetails | null>(null);
  const [orderCookingStep, setOrderCookingStep] = useState<number>(1);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  // 8% VAT calculated
  const vat = Math.round(subtotal * 0.08);
  const grandTotal = subtotal + vat;

  const handleSendToKitchen = () => {
    if (cartItems.length === 0) return;

    const newOrder: OrderDetails = {
      orderId: `CS-${Math.floor(1000 + Math.random() * 9000)}`,
      tableNumber: 'Table 04',
      items: [...cartItems],
      subtotal,
      vat,
      total: grandTotal,
      status: 'cooking',
      placedAt: new Date(),
      estimatedMinutes: 18,
      specialInstructions: tableNote.trim() || undefined,
    };

    setActiveOrder(newOrder);
    setOrderCookingStep(1);

    // Simulate progress in kitchen
    setTimeout(() => setOrderCookingStep(2), 4000);
  };

  const handleResetForNewOrder = () => {
    setActiveOrder(null);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-[#eae8e5]">
          {/* Drawer Header */}
          <div className="p-5 border-b border-[#eae8e5] bg-[#f5f3f0] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#af101a] text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">receipt_long</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-headline-lg text-lg font-bold text-[#1b1c1a]">
                    Atelier Order Pad
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-[#1b1c1a] text-white font-bold uppercase">
                    Table 04
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#585757] mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Kitchen Live • 15–20 min wait</span>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white text-[#585757] hover:text-[#1b1c1a] hover:bg-[#eae8e5] flex items-center justify-center transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {activeOrder ? (
              /* Active Placed Order Screen */
              <div className="space-y-6 py-4 animate-fade-in">
                <div className="text-center p-6 bg-[#f5f3f0] rounded-2xl border border-[#eae8e5] space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#ffdad6] text-[#af101a] mx-auto flex items-center justify-center">
                    <span className="material-symbols-outlined text-[32px]">soup_kitchen</span>
                  </div>
                  <div>
                    <span className="font-label-md text-xs uppercase text-[#af101a] tracking-widest font-bold">
                      Order Sent to Fryer Station
                    </span>
                    <h4 className="font-headline-lg text-2xl font-bold text-[#1b1c1a] mt-1">
                      Order #{activeOrder.orderId}
                    </h4>
                    <span className="font-body-sm text-xs text-[#585757]">
                      Table 04 • Placed at {activeOrder.placedAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>

                  {/* Frying Timer status */}
                  <div className="p-3 bg-white rounded-xl border border-[#eae8e5] space-y-2 text-left">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#1b1c1a]">Estimated Fresh Frying:</span>
                      <span className="font-price-numeral text-base text-[#af101a] font-extrabold">
                        ~{activeOrder.estimatedMinutes} Mins
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-[#eae8e5] rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-[#af101a] h-full transition-all duration-1000"
                        style={{ width: orderCookingStep === 1 ? '35%' : '75%' }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-[10px] text-[#585757] font-semibold">
                      <span className={orderCookingStep >= 1 ? 'text-[#af101a] font-bold' : ''}>
                        1. Inspected &amp; Panko Coated
                      </span>
                      <span className={orderCookingStep >= 2 ? 'text-[#af101a] font-bold' : ''}>
                        2. Dual-Temp Frying
                      </span>
                    </div>
                  </div>
                </div>

                {/* Ticket Receipt Item Breakdown */}
                <div className="space-y-2 border-t border-b border-[#eae8e5] py-4">
                  <span className="font-label-md text-xs uppercase tracking-wider text-[#1b1c1a] font-bold block">
                    Kitchen Order Ticket:
                  </span>
                  {activeOrder.items.map((item) => (
                    <div key={item.id} className="flex justify-between text-xs py-1">
                      <div>
                        <span className="font-bold text-[#1b1c1a]">
                          {item.quantity}x {item.menuItem.nameEn}
                        </span>
                        {item.options.size && (
                          <span className="text-[#585757] block text-[11px]">
                            Size: {item.options.size}
                          </span>
                        )}
                        {item.options.sauceSeparately && (
                          <span className="text-[#af101a] block text-[11px] font-semibold">
                            Sauce on side (따로)
                          </span>
                        )}
                        {item.options.addons && item.options.addons.length > 0 && (
                          <span className="text-[#835500] block text-[11px]">
                            + {item.options.addons.map((a) => a.name).join(', ')}
                          </span>
                        )}
                      </div>
                      <span className="font-price-numeral font-bold text-[#1b1c1a]">
                        {item.unitPrice * item.quantity}.000 VND
                      </span>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-[#eae8e5] flex justify-between text-xs font-bold text-[#1b1c1a]">
                    <span>Total (8% VAT included):</span>
                    <span className="text-[#af101a] font-price-numeral text-sm">
                      {activeOrder.total}.000 VND
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleResetForNewOrder}
                  className="w-full py-3 bg-[#1b1c1a] text-white hover:bg-[#af101a] font-label-md text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer font-bold"
                >
                  Start Another Order / Close Pad
                </button>
              </div>
            ) : cartItems.length === 0 ? (
              /* Empty Cart Screen */
              <div className="py-16 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#f5f3f0] text-[#585757] mx-auto flex items-center justify-center">
                  <span className="material-symbols-outlined text-[32px]">dinner_dining</span>
                </div>
                <h4 className="font-headline-lg text-lg text-[#1b1c1a] font-bold">
                  Order Pad Is Empty
                </h4>
                <p className="font-body-sm text-xs text-[#585757] max-w-xs mx-auto">
                  Select your desired precision cutlets, retro tonkatsu sets, noodles, or artisanal drinks from the Menu Atelier.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-5 py-2 bg-[#1b1c1a] text-white rounded-lg text-xs font-label-md uppercase tracking-wider hover:bg-[#af101a] transition-colors cursor-pointer"
                >
                  Browse Menu Atelier
                </button>
              </div>
            ) : (
              /* Cart Items List */
              <div className="space-y-4">
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 bg-[#f5f3f0] rounded-xl border border-[#eae8e5] space-y-2 hover:border-[#8f6f6c]/40 transition-colors"
                    >
                      <div className="flex gap-3">
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-[#efeeeb] shrink-0 border border-[#eae8e5] flex items-center justify-center">
                          {item.menuItem.image && item.menuItem.image.startsWith('/images/menu/') ? (
                            <img
                              src={item.menuItem.image}
                              alt={item.menuItem.altText}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="material-symbols-outlined text-xl text-[#c2bfb8] opacity-50 select-none">restaurant</span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <h5 className="font-title-md text-xs font-bold text-[#1b1c1a] truncate">
                              {item.menuItem.nameEn}
                            </h5>
                            <button
                              onClick={() => onRemoveItem(item.id)}
                              className="text-[#585757] hover:text-[#ba1a1a] transition-colors cursor-pointer"
                              title="Remove item"
                            >
                              <span className="material-symbols-outlined text-[16px]">delete</span>
                            </button>
                          </div>
                          <span className="font-body-sm text-[11px] text-[#af101a] font-semibold block">
                            {item.menuItem.nameKr}
                          </span>

                          {/* Options badges */}
                          <div className="flex flex-wrap gap-1 mt-1 text-[10px]">
                            {item.options.size && (
                              <span className="px-1.5 py-0.5 bg-white rounded border border-[#eae8e5] text-[#585757] font-semibold">
                                Size {item.options.size}
                              </span>
                            )}
                            {item.options.sauceSeparately && (
                              <span className="px-1.5 py-0.5 bg-[#ffdad6] rounded text-[#af101a] font-bold">
                                Sauce on side
                              </span>
                            )}
                            {item.options.sauceVariant && (
                              <span className="px-1.5 py-0.5 bg-white rounded border border-[#eae8e5] text-[#585757]">
                                {item.options.sauceVariant}
                              </span>
                            )}
                            {item.options.addons &&
                              item.options.addons.map((a) => (
                                <span
                                  key={a.name}
                                  className="px-1.5 py-0.5 bg-[#ffddb4] rounded text-[#633f00] font-semibold"
                                >
                                  +{a.name}
                                </span>
                              ))}
                          </div>
                        </div>
                      </div>

                      {/* Quantity & Subtotal for item */}
                      <div className="pt-2 border-t border-[#eae8e5] flex items-center justify-between">
                        <div className="flex items-center border border-[#eae8e5] rounded bg-white">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-0.5 text-xs font-bold text-[#1b1c1a] hover:bg-[#f5f3f0] cursor-pointer"
                          >
                            -
                          </button>
                          <span className="px-2 py-0.5 font-price-numeral text-xs font-bold text-[#1b1c1a]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-0.5 text-xs font-bold text-[#1b1c1a] hover:bg-[#f5f3f0] cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                        <span className="font-price-numeral text-sm font-extrabold text-[#af101a]">
                          {item.unitPrice * item.quantity}.000 VND
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Table Notes / Remarks */}
                <div className="space-y-1.5 pt-2">
                  <label className="font-label-md text-xs text-[#585757] font-semibold uppercase block">
                    Table 04 Notes &amp; Allergies:
                  </label>
                  <textarea
                    rows={2}
                    value={tableNote}
                    onChange={(e) => setTableNote(e.target.value)}
                    placeholder="e.g. Please bring drinks first, extra cabbage dressing..."
                    className="w-full p-2.5 text-xs bg-[#f5f3f0] border border-[#eae8e5] rounded-lg focus:outline-none focus:border-[#af101a] text-[#1b1c1a]"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Drawer Footer with Financial Billing Summary */}
          {!activeOrder && cartItems.length > 0 && (
            <div className="p-5 border-t border-[#eae8e5] bg-[#f5f3f0] space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#585757]">
                  <span>Subtotal:</span>
                  <span className="font-price-numeral font-bold text-[#1b1c1a]">
                    {subtotal}.000 VND
                  </span>
                </div>
                <div className="flex justify-between text-[#585757]">
                  <span>VAT (8% inclusive billing policy):</span>
                  <span className="font-price-numeral font-bold text-[#1b1c1a]">
                    {vat}.000 VND
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#1b1c1a] pt-2 border-t border-[#eae8e5]">
                  <span>Total Amount:</span>
                  <span className="font-price-numeral text-lg text-[#af101a] font-extrabold">
                    {grandTotal}.000 VND
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={onClearCart}
                  className="px-3 py-3 border border-[#eae8e5] text-[#585757] hover:bg-[#eae8e5] rounded-xl text-xs font-label-md uppercase transition-colors cursor-pointer"
                >
                  Clear
                </button>
                <button
                  onClick={handleSendToKitchen}
                  className="flex-1 py-3 bg-[#af101a] hover:bg-[#d32f2f] text-white font-label-lg text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer font-bold"
                >
                  <span className="material-symbols-outlined text-[18px]">soup_kitchen</span>
                  <span>Send Order to Kitchen Atelier</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
