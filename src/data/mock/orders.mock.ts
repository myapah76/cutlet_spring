import { CartItem, OrderDetails } from '@/types';
import { MOCK_MENU_ITEMS } from './menu.mock';

export const INITIAL_MOCK_CART: CartItem[] = [
  {
    id: 'spring-signature-set-init',
    menuItem: MOCK_MENU_ITEMS[0],
    quantity: 1,
    unitPrice: 275,
    options: {
      sauceSeparately: true,
    },
  },
];

export const MOCK_ORDERS: OrderDetails[] = [
  {
    orderId: 'CS-8821',
    tableNumber: 'Table 04',
    items: INITIAL_MOCK_CART,
    subtotal: 275,
    vat: 22,
    total: 297,
    status: 'cooking',
    placedAt: new Date(Date.now() - 1000 * 60 * 8), // 8 mins ago
    estimatedMinutes: 18,
    specialInstructions: 'Extra crunchy cabbage salad please',
  },
];
