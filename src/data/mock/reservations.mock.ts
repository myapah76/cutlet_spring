import { ReservationResponse } from '@/types';

export const MOCK_RESERVATIONS: ReservationResponse[] = [
  {
    reservationId: 'RES-5012',
    guestName: 'Minh Hoàng',
    phoneNumber: '090 123 4567',
    guestsCount: '2',
    date: '2026-10-18',
    time: '18:30',
    seatingType: 'counter',
    status: 'confirmed',
    createdAt: new Date().toISOString(),
  },
];
