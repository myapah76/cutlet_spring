export const APP_CONFIG = {
  NAME: 'Cutlet Spring - 봄돈까스',
  ADDRESS: '6A Đường số 9, Thảo Điền, TP. Thủ Đức, TP. Hồ Chí Minh',
  PHONE: '090 123 4567',
  HOURS: '11:00 - 14:30 | 17:30 - 21:30',
  DEFAULT_TABLE: 'Table 04',
  VAT_RATE: 0.08, // 8% VAT
  DEFAULT_ESTIMATED_PREP_MINUTES: 18,
} as const;

export const STORAGE_KEYS = {
  CART: 'cutlet_spring_cart',
  LANGUAGE: 'cutlet_spring_lang',
} as const;
