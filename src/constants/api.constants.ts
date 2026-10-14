export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

export const USE_MOCK_DATA =
  import.meta.env.VITE_USE_MOCK !== 'false';

export const API_ENDPOINTS = {
  MENU: {
    LIST: '/menu',
    DETAIL: (id: string) => `/menu/${id}`,
    CATEGORIES: '/menu/categories',
    FEATURED: '/menu/featured',
  },
  ORDERS: {
    CREATE: '/orders',
    DETAIL: (id: string) => `/orders/${id}`,
    STATUS: (id: string) => `/orders/${id}/status`,
  },
  RESERVATIONS: {
    CREATE: '/reservations',
    CHECK_SLOTS: '/reservations/slots',
  },
} as const;
