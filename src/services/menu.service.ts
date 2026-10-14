import { apiClient } from '@/lib/api-client';
import { USE_MOCK_DATA, API_ENDPOINTS } from '@/constants/api.constants';
import { MenuItem, ApiResponse } from '@/types';
import { MOCK_MENU_ITEMS } from '@/data/mock/menu.mock';
import { delay } from '@/utils/delay';

export const menuService = {
  /**
   * Fetch all menu items, optionally filtered by category
   */
  async getMenuItems(category?: string): Promise<MenuItem[]> {
    if (USE_MOCK_DATA) {
      await delay(150);
      if (!category || category === 'all') {
        return MOCK_MENU_ITEMS;
      }
      return MOCK_MENU_ITEMS.filter((item) => item.category === category);
    }

    const response = await apiClient.get<MenuItem[]>(API_ENDPOINTS.MENU.LIST, {
      params: category && category !== 'all' ? { category } : undefined,
    });
    return response.data;
  },

  /**
   * Fetch a single menu item by ID
   */
  async getMenuItemById(id: string): Promise<MenuItem | null> {
    if (USE_MOCK_DATA) {
      await delay(100);
      const found = MOCK_MENU_ITEMS.find((item) => item.id === id);
      return found || null;
    }

    const response = await apiClient.get<MenuItem>(API_ENDPOINTS.MENU.DETAIL(id));
    return response.data;
  },

  /**
   * Fetch chef signature & best seller items
   */
  async getFeaturedItems(): Promise<MenuItem[]> {
    if (USE_MOCK_DATA) {
      await delay(100);
      return MOCK_MENU_ITEMS.filter((item) => item.isChefSignature || item.isBestSeller);
    }

    const response = await apiClient.get<MenuItem[]>(API_ENDPOINTS.MENU.FEATURED);
    return response.data;
  },
};
