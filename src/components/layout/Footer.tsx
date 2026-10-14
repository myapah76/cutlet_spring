import React from 'react';
import { PageView } from '@/types';

interface FooterProps {
  setCurrentView: (view: PageView) => void;
  onOpenReservation?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentView, onOpenReservation }) => {
  return (
    <footer className="w-full bg-[#f5f3f0] border-t border-[#e4e2df] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Col */}
          <div className="space-y-3">
            <div className="flex items-baseline gap-2">
              <span className="font-headline-lg text-xl font-bold text-[#1b1c1a]">봄돈까스</span>
              <span className="font-label-lg text-xs tracking-wider uppercase text-[#1b1c1a]">
                CUTLET SPRING
              </span>
            </div>
            <p className="font-body-sm text-xs text-[#585757] leading-relaxed">
              An artisanal Japanese-Korean Tonkatsu atelier crafting precision-fried golden cutlets with heritage culinary discipline.
            </p>
            <div className="pt-2 flex items-center gap-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-[#eae8e5] text-[#5b403d] uppercase tracking-wider">
                Est. 2021
              </span>
            </div>
          </div>

          {/* Notice & Policy */}
          <div className="space-y-3">
            <span className="font-label-lg text-xs uppercase tracking-widest text-[#1b1c1a] font-bold block">
              Notice &amp; Policy
            </span>
            <ul className="font-body-sm text-xs text-[#5b403d] space-y-2">
              <li className="flex items-start gap-1.5">
                <span className="text-[#af101a]">•</span>
                <span>One main dish requirement per seated guest</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#af101a]">•</span>
                <span>8% VAT inclusive billing policy</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#af101a]">•</span>
                <span>Fresh batch preparation (15-20 min window)</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#af101a]">•</span>
                <span>Takeout packaging retains crispness up to 30 mins</span>
              </li>
            </ul>
          </div>

          {/* Atelier Location */}
          <div className="space-y-3">
            <span className="font-label-lg text-xs uppercase tracking-widest text-[#1b1c1a] font-bold block">
              Atelier Location
            </span>
            <p className="font-body-sm text-xs text-[#5b403d] leading-relaxed">
              6A Đường số 9, Phường Thảo Điền,<br />
              TP. Thủ Đức, TP. Hồ Chí Minh
            </p>
            <div className="pt-2 p-2.5 bg-[#eae8e5]/70 rounded-lg space-y-1">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#1b1c1a]">
                <span className="material-symbols-outlined text-[14px] text-[#af101a]">wifi</span>
                <span>In-House Guest WiFi</span>
              </div>
              <span className="font-body-sm text-[11px] text-[#585757] block">
                SSID: <strong className="text-[#1b1c1a]">Cutlet spring</strong>
              </span>
              <span className="font-body-sm text-[11px] text-[#585757] block">
                PW: <strong className="text-[#1b1c1a]">01530153</strong>
              </span>
            </div>
          </div>

          {/* Gourmet Inquiries */}
          <div className="space-y-3">
            <span className="font-label-lg text-xs uppercase tracking-widest text-[#1b1c1a] font-bold block">
              Gourmet Inquiries
            </span>
            <p className="font-body-sm text-xs text-[#5b403d] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px] text-[#af101a]">phone</span>
              <span>Direct Line: 039 376 2717</span>
            </p>
            <p className="font-body-sm text-xs text-[#5b403d] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px] text-[#835500]">mail</span>
              <span>Concierge: atelier@cutletspring.com</span>
            </p>
            <p className="font-body-sm text-xs text-[#5b403d] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px] text-[#585757]">schedule</span>
              <span>Service Hours: 11:00 - 21:30 (Daily)</span>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#e4e2df] flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-xs text-[#585757]">
          <div className="flex items-center gap-2">
            <span>© 2025 CUTLET SPRING Atelier. All Rights Reserved.</span>
            <span>•</span>
            <span>Thảo Điền Dining Quarter</span>
          </div>
          <div className="flex items-center gap-6 font-label-md text-xs uppercase tracking-wider">
            <button
              onClick={() => {
                setCurrentView('menu');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-[#5b403d] hover:text-[#1b1c1a] transition-colors cursor-pointer"
            >
              Seasonal Cutlets
            </button>
            <button
              onClick={() => {
                setCurrentView('about-us');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-[#5b403d] hover:text-[#1b1c1a] transition-colors cursor-pointer"
            >
              Artisanship &amp; Philosophy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
