import { MenuItem } from './menu.types';

export interface OrderItemOption {
  size?: string;
  sauceSeparately?: boolean;
  sauceVariant?: string;
  addons?: {
    name: string;
    price: number;
  }[];
  specialNote?: string;
}

export interface CartItem {
  id: string; // unique item id + options hash
  menuItem: MenuItem;
  quantity: number;
  unitPrice: number;
  options: OrderItemOption;
}

export interface OrderDetails {
  orderId: string;
  tableNumber: string;
  items: CartItem[];
  subtotal: number;
  vat: number;
  total: number;
  status: 'pending' | 'cooking' | 'served' | 'cancelled';
  placedAt: Date;
  estimatedMinutes: number;
  specialInstructions?: string;
}

export interface CreateOrderRequest {
  tableNumber: string;
  items: {
    menuItemId: string;
    quantity: number;
    options: OrderItemOption;
    unitPrice: number;
  }[];
  specialInstructions?: string;
}
