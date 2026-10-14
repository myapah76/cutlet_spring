import { create } from 'zustand';
import { PageView, Language, MenuItem } from '@/types';

interface UIState {
  currentView: PageView;
  language: Language;
  isOrderPadOpen: boolean;
  isReservationOpen: boolean;
  selectedItemForModal: MenuItem | null;
  modalInitialOptions: any | null;

  setCurrentView: (view: PageView) => void;
  setLanguage: (lang: Language) => void;
  openOrderPad: () => void;
  closeOrderPad: () => void;
  openReservation: () => void;
  closeReservation: () => void;
  openItemDetail: (item: MenuItem, initialOptions?: any) => void;
  closeItemDetail: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  currentView: 'menu',
  language: 'EN',
  isOrderPadOpen: false,
  isReservationOpen: false,
  selectedItemForModal: null,
  modalInitialOptions: null,

  setCurrentView: (view) => {
    set({ currentView: view });
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },

  setLanguage: (language) => set({ language }),

  openOrderPad: () => set({ isOrderPadOpen: true }),
  closeOrderPad: () => set({ isOrderPadOpen: false }),

  openReservation: () => set({ isReservationOpen: true }),
  closeReservation: () => set({ isReservationOpen: false }),

  openItemDetail: (item, initialOptions = null) =>
    set({
      selectedItemForModal: item,
      modalInitialOptions: initialOptions,
    }),

  closeItemDetail: () =>
    set({
      selectedItemForModal: null,
      modalInitialOptions: null,
    }),
}));
