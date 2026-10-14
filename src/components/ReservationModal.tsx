import React, { useState } from 'react';
import { Language } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const [guestName, setGuestName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [guestsCount, setGuestsCount] = useState('2');
  const [date, setDate] = useState('2025-05-18');
  const [time, setTime] = useState('18:30');
  const [seatingType, setSeatingType] = useState<'hall' | 'counter'>('counter');
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#eae8e5] p-6 sm:p-8 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#f5f3f0] hover:bg-[#eae8e5] text-[#585757] hover:text-[#1b1c1a] flex items-center justify-center transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {confirmed ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#ffdad6] text-[#af101a] mx-auto flex items-center justify-center">
              <span className="material-symbols-outlined text-[32px]">event_available</span>
            </div>
            <h3 className="font-headline-lg text-2xl font-bold text-[#1b1c1a]">
              {language === 'KR' ? '예약이 확정되었습니다' : language === 'VI' ? 'Đặt Bàn Thành Công' : 'Reservation Confirmed'}
            </h3>
            <p className="font-body-md text-xs sm:text-sm text-[#5b403d] max-w-sm mx-auto leading-relaxed">
              We look forward to welcoming you to Cutlet Spring Thảo Điền on <strong>{date} at {time}</strong> for <strong>{guestsCount} guests</strong> ({seatingType === 'counter' ? 'Chef Counter Theater' : 'Main Atelier Hall'}).
            </p>
            <div className="p-3 bg-[#f5f3f0] rounded-xl text-xs text-[#585757] space-y-1 text-left border border-[#eae8e5]">
              <div>Guest: <strong className="text-[#1b1c1a]">{guestName}</strong></div>
              <div>Phone: <strong className="text-[#1b1c1a]">{phoneNumber}</strong></div>
              <div>Address: <strong className="text-[#1b1c1a]">6A Đường số 9, Thảo Điền, TP. Thủ Đức</strong></div>
            </div>
            <button
              onClick={() => {
                setConfirmed(false);
                onClose();
              }}
              className="w-full py-3 bg-[#af101a] text-white font-label-md text-xs uppercase rounded-xl hover:bg-[#d32f2f] transition-colors cursor-pointer font-bold"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="font-label-md text-[10px] text-[#af101a] uppercase tracking-widest font-bold block">
                Atelier Table Booking
              </span>
              <h3 className="font-headline-lg text-2xl font-bold text-[#1b1c1a] mt-0.5">
                {language === 'KR' ? '봄돈까스 테이블 예약' : language === 'VI' ? 'Đặt Bàn Trực Tuyến Thảo Điền' : 'Book an Atelier Table'}
              </h3>
              <p className="font-body-sm text-xs text-[#585757] mt-1">
                Fresh batch frying protocol: Reserve your seats at the Scandinavian-Japanese dining room.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-label-md text-xs text-[#585757] font-semibold block mb-1">
                  Full Name / Tên khách
                </label>
                <input
                  required
                  type="text"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="Minh Hoàng / David"
                  className="w-full px-3 py-2 text-xs bg-[#f5f3f0] border border-[#eae8e5] rounded-lg focus:outline-none focus:border-[#af101a] text-[#1b1c1a]"
                />
              </div>
              <div>
                <label className="font-label-md text-xs text-[#585757] font-semibold block mb-1">
                  Phone / Điện thoại
                </label>
                <input
                  required
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="090 123 4567"
                  className="w-full px-3 py-2 text-xs bg-[#f5f3f0] border border-[#eae8e5] rounded-lg focus:outline-none focus:border-[#af101a] text-[#1b1c1a]"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="font-label-md text-xs text-[#585757] font-semibold block mb-1">
                  Party Size
                </label>
                <select
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-[#f5f3f0] border border-[#eae8e5] rounded-lg focus:outline-none focus:border-[#af101a] text-[#1b1c1a]"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5+">5+ Guests</option>
                </select>
              </div>
              <div>
                <label className="font-label-md text-xs text-[#585757] font-semibold block mb-1">
                  Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-2 py-2 text-xs bg-[#f5f3f0] border border-[#eae8e5] rounded-lg focus:outline-none focus:border-[#af101a] text-[#1b1c1a]"
                />
              </div>
              <div>
                <label className="font-label-md text-xs text-[#585757] font-semibold block mb-1">
                  Time
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-2 py-2 text-xs bg-[#f5f3f0] border border-[#eae8e5] rounded-lg focus:outline-none focus:border-[#af101a] text-[#1b1c1a]"
                >
                  <option value="11:30">11:30 Lunch</option>
                  <option value="12:30">12:30 Lunch</option>
                  <option value="13:30">13:30 Lunch</option>
                  <option value="17:30">17:30 Dinner</option>
                  <option value="18:30">18:30 Dinner</option>
                  <option value="19:30">19:30 Dinner</option>
                  <option value="20:30">20:30 Dinner</option>
                </select>
              </div>
            </div>

            {/* Seating preference */}
            <div>
              <label className="font-label-md text-xs text-[#585757] font-semibold block mb-1.5">
                Seating Atmosphere:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSeatingType('counter')}
                  className={`p-2.5 rounded-xl border text-left text-xs transition-colors cursor-pointer ${
                    seatingType === 'counter'
                      ? 'border-[#af101a] bg-[#ffdad6]/20 text-[#af101a] font-bold'
                      : 'border-[#eae8e5] bg-[#f5f3f0] text-[#5b403d]'
                  }`}
                >
                  <div className="font-bold">Chef Counter Theater</div>
                  <div className="text-[10px] text-[#585757]">Watch live precision frying</div>
                </button>
                <button
                  type="button"
                  onClick={() => setSeatingType('hall')}
                  className={`p-2.5 rounded-xl border text-left text-xs transition-colors cursor-pointer ${
                    seatingType === 'hall'
                      ? 'border-[#af101a] bg-[#ffdad6]/20 text-[#af101a] font-bold'
                      : 'border-[#eae8e5] bg-[#f5f3f0] text-[#5b403d]'
                  }`}
                >
                  <div className="font-bold">Main Atelier Hall</div>
                  <div className="text-[10px] text-[#585757]">Quiet light oak wood table</div>
                </button>
              </div>
            </div>

            <p className="font-body-sm text-[11px] text-[#585757] italic">
              Notice: One main dish requirement per seated guest. Fresh batch preparation requires 15-20 min window.
            </p>

            <button
              type="submit"
              className="w-full py-3 bg-[#af101a] hover:bg-[#d32f2f] text-white font-label-md text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer font-bold flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">check_circle</span>
              <span>Confirm Table Booking</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
