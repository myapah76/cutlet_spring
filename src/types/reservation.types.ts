export type SeatingType = 'hall' | 'counter';

export interface ReservationRequest {
  guestName: string;
  phoneNumber: string;
  guestsCount: string;
  date: string;
  time: string;
  seatingType: SeatingType;
  specialRequests?: string;
}

export interface ReservationResponse {
  reservationId: string;
  guestName: string;
  phoneNumber: string;
  guestsCount: string;
  date: string;
  time: string;
  seatingType: SeatingType;
  status: 'confirmed' | 'pending' | 'cancelled';
  createdAt: string;
}
