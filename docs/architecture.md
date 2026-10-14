# Cutlet Spring Frontend Architecture

This project architecture has been restructured based on the modular, domain-driven standards of `MoodCafe-FE`.

```
src/
  ├── components/
  │   └── layout/              # Shared cross-cutting layout (Header, Footer)
  ├── constants/               # System & API constants, endpoint mappings, config
  ├── enums/                   # Enum definitions (Language, PageView, OrderStatus)
  ├── types/                   # TypeScript interfaces (API, Menu, Order, Reservation)
  ├── lib/                     # Axios instance, API client wrappers, utilities
  ├── services/                # API Service Layer with Mock Data Fallback
  │   ├── menu.service.ts
  │   ├── order.service.ts
  │   └── reservation.service.ts
  ├── stores/                  # Zustand global state (Cart, UI, Navigation)
  ├── hooks/                   # Custom business hooks (useMenu, useOrder, useReservation)
  ├── features/                # Domain-specific feature modules
  │   ├── home/                # Landing showcase, chef philosophy, reviews
  │   ├── menu/                # Menu catalog, dish filters, ItemDetailModal
  │   ├── order/               # OrderPad drawer, kitchen ticket tracker
  │   └── reservation/         # Atelier table reservation booking modal
  ├── data/
  │   └── mock/                # Pre-made mock data fixtures
  ├── utils/                   # Formatting helpers (currency, delay, classes)
  ├── App.tsx                  # Clean orchestrator component
  └── main.tsx
```

---

## Pre-Made Mock Layer vs Real API Integration

### How Mock Mode Works Now
By default, the application runs entirely on pre-made mock data with realistic simulated network delay.

- Controlled via `.env`:
  ```bash
  VITE_USE_MOCK=true
  VITE_API_BASE_URL=http://localhost:8080/api
  ```
- All service methods (`src/services/*.ts`) inspect `USE_MOCK_DATA`. When `true`, they return simulated responses matching the backend API schema (`ApiResponse<T>`).

### How to Attach Actual Backend API
When your backend (e.g., Spring Boot) is ready:
1. Open `.env` and change:
   ```bash
   VITE_USE_MOCK=false
   VITE_API_BASE_URL=http://localhost:8080/api
   ```
2. The services in `src/services/` will automatically switch from mock fixtures to live HTTP calls via `apiClient` (`src/lib/axios.ts`).
3. **No UI components need to be modified** because the UI only consumes services, hooks, and stores!
