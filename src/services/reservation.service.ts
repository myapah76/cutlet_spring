import { apiClient } from '@/lib/api-client';
import { USE_MOCK_DATA, API_ENDPOINTS } from '@/constants/api.constants';
import { ReservationRequest, ReservationResponse } from '@/types';
import { delay } from '@/utils/delay';

export const reservationService = {
  /**
   * Book a table at the atelier
   */
  async createReservation(data: ReservationRequest): Promise<ReservationResponse> {
    if (USE_MOCK_DATA) {
      await delay(350); // Simulate API network latency
      const mockResponse: ReservationResponse = {
        reservationId: `RES-${Math.floor(1000 + Math.random() * 9000)}`,
        guestName: data.guestName,
        phoneNumber: data.phoneNumber,
        guestsCount: data.guestsCount,
        date: data.date,
        time: data.time,
        seatingType: data.seatingType,
        status: 'confirmed',
        createdAt: new Date().toISOString(),
      };
      return mockResponse;
    }

    const response = await apiClient.post<ReservationResponse>(
      API_ENDPOINTS.RESERVATIONS.CREATE,
      data
    );
    return response.data;
  },
};
