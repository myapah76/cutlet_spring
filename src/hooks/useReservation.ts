import { useState } from 'react';
import { ReservationRequest, ReservationResponse } from '@/types';
import { reservationService } from '@/services/reservation.service';

export function useReservation() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [confirmedReservation, setConfirmedReservation] = useState<ReservationResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const bookTable = async (data: ReservationRequest): Promise<ReservationResponse | null> => {
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await reservationService.createReservation(data);
      setConfirmedReservation(response);
      return response;
    } catch (err: any) {
      setError(err?.message || 'Failed to complete reservation');
      return null;
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetReservation = () => {
    setConfirmedReservation(null);
    setError(null);
  };

  return {
    isSubmitting,
    confirmedReservation,
    error,
    bookTable,
    resetReservation,
  };
}
