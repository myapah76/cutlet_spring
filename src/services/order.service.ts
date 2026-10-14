import { apiClient } from '@/lib/api-client';
import { USE_MOCK_DATA, API_ENDPOINTS } from '@/constants/api.constants';
import { APP_CONFIG } from '@/constants/app.constants';
import { OrderDetails, CartItem, CreateOrderRequest } from '@/types';
import { delay } from '@/utils/delay';

export const orderService = {
  /**
   * Submit an order to the kitchen
   */
  async createOrder(
    cartItems: CartItem[],
    specialInstructions?: string,
    tableNumber: string = APP_CONFIG.DEFAULT_TABLE
  ): Promise<OrderDetails> {
    const subtotal = cartItems.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
    const vat = Math.round(subtotal * APP_CONFIG.VAT_RATE);
    const total = subtotal + vat;

    if (USE_MOCK_DATA) {
      await delay(400); // Simulate network latency
      const mockOrder: OrderDetails = {
        orderId: `CS-${Math.floor(1000 + Math.random() * 9000)}`,
        tableNumber,
        items: [...cartItems],
        subtotal,
        vat,
        total,
        status: 'cooking',
        placedAt: new Date(),
        estimatedMinutes: APP_CONFIG.DEFAULT_ESTIMATED_PREP_MINUTES,
        specialInstructions: specialInstructions?.trim() || undefined,
      };
      return mockOrder;
    }

    const payload: CreateOrderRequest = {
      tableNumber,
      items: cartItems.map((c) => ({
        menuItemId: c.menuItem.id,
        quantity: c.quantity,
        options: c.options,
        unitPrice: c.unitPrice,
      })),
      specialInstructions,
    };

    const response = await apiClient.post<OrderDetails>(API_ENDPOINTS.ORDERS.CREATE, payload);
    return response.data;
  },

  /**
   * Retrieve order status by ID
   */
  async getOrderById(orderId: string): Promise<OrderDetails | null> {
    if (USE_MOCK_DATA) {
      await delay(150);
      return null;
    }

    const response = await apiClient.get<OrderDetails>(API_ENDPOINTS.ORDERS.DETAIL(orderId));
    return response.data;
  },
};
