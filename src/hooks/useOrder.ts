import { useState } from 'react';
import { OrderDetails } from '@/types';
import { orderService } from '@/services/order.service';
import { useCartStore } from '@/stores/cart.store';

export function useOrder() {
  const [activeOrder, setActiveOrder] = useState<OrderDetails | null>(null);
  const [cookingStep, setCookingStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { cartItems, clearCart } = useCartStore();

  const submitOrder = async (specialInstructions?: string) => {
    if (cartItems.length === 0) return null;

    setIsSubmitting(true);
    setError(null);
    try {
      const order = await orderService.createOrder(cartItems, specialInstructions);
      setActiveOrder(order);
      setCookingStep(1);

      // Simulate step progression
      setTimeout(() => setCookingStep(2), 4000);
      return order;
    } catch (err: any) {
      setError(err?.message || 'Failed to submit order to kitchen');
      return null;
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetOrder = () => {
    setActiveOrder(null);
    setCookingStep(1);
    clearCart();
  };

  return {
    activeOrder,
    cookingStep,
    isSubmitting,
    error,
    submitOrder,
    resetOrder,
  };
}
