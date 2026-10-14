# 🍱 Cutlet Spring — 봄돈까스
### Artisanal Japanese-Korean Tonkatsu Atelier Web Application

[![React](https://img.shields.io/badge/React-19.x-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646cff?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38b2ac?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Zustand](https://img.shields.io/badge/Zustand-State_Management-brown?style=flat-square)](https://github.com/pmndrs/zustand)

---

## 📖 Giới Thiệu Dự Án (Project Overview)

**Cutlet Spring (봄돈까스)** là ứng dụng web thực đơn và trải nghiệm ẩm thực cao cấp dành cho nhà hàng Tonkatsu nghệ nhân kết hợp phong cách Nhật Bản truyền thống và phong cách 경양식 (Gyeongyangsik) hoài niệm Hàn Quốc.

Dự án được xây dựng với định hướng **Editorial Magazine Layout** (bố cục tạp chí ẩm thực đương đại), tôn vinh tính thẩm mỹ tối giản, sự trang nhã của typography đa ngôn ngữ và sự tôn trọng đối với nguyên liệu ẩm thực thủ công.

Hệ thống được thiết kế theo cấu trúc **Feature-Driven Architecture** chuẩn mực, module hóa rõ ràng và chuẩn bị sẵn sàng dữ liệu mock hoàn chỉnh để sẵn sàng kết nối API thực tế trong giai đoạn tiếp theo.

---

## ✨ Tính Năng Nổi Bật (Key Features)

- 🏮 **Bố Cục Tạp Chí Ẩm Thực (Editorial Menu Layout):**
  - Giao diện thiết kế theo phong cách menu atelier cao cấp với tông màu ấm áp (`#fbf9f6`, `#af101a`, `#1b1c1a`).
  - **Món Signature:** Trải rộng toàn hàng (Full-width banner) làm tâm điểm thị giác.
  - **Món ăn chính (Main Sets):** Bố trí 2 cột song song (`grid-cols-1 md:grid-cols-2`), tối ưu hóa khả năng đọc và quan sát món ăn.
  - **Món gọi thêm (Add-ons) & Đồ uống (Drinks):** Dạng thẻ gọn gàng 4 cột (`CompactItemCard`), không chiếm diện tích nhưng vẫn đầy đủ thông tin định lượng và giá cả.

- 🌐 **Hệ Thống Đa Ngôn Ngữ Đồng Thời (Quad-Language Display):**
  - Cung cấp tên và nội dung mô tả đồng thời bằng **4 ngôn ngữ** cho từng món ăn:
    - **한국어 (Korean)** — Font serif chuyên biệt (`Noto Serif KR`).
    - **English** — Font hiện đại, thanh lịch.
    - **Tiếng Việt** — Bản dịch chuẩn xác về hương vị ẩm thực.
    - **日本語 (Japanese)** — Font thư pháp Nhật (`Noto Serif JP`).
  - Thanh chuyển đổi ngôn ngữ giao diện linh hoạt: `KR • EN • VI • JP`.

- 🧭 **Điều Hướng Thực Đơn Thông Minh (Scroll-Spy Navigation):**
  - Thanh điều hướng danh mục món ăn (Japanese Tonkatsu, Korean Retro Cutlet, Curry Rice, Noodles, Add-ons, Drinks) tự động bám dính khi cuộn (Sticky Sidebar).
  - Tự động nhận diện và làm nổi bật danh mục người dùng đang xem trong thời gian thực với hiệu ứng mượt mà (`requestAnimationFrame`).

- 🥩 **Trang Chủ Kể Chuyện Thương Hiệu (Brand Story & Culinary Philosophy):**
  - **4 Trụ Cột Nguyên Liệu Không Thỏa Hiệp:**
    1. *Thịt heo mát 120h (120h Wet-Aged Chilled Pork)* — Không đông lạnh.
    2. *Bột chiên xù tươi nướng mới (House-Baked Fresh Panko)* — Nướng và xay mỗi sớm mai.
    3. *Nước sốt độc quyền trái cây (18h Simmered Demi-Glace)* — Ninh chậm 18 giờ từ táo Fuji và cà chua.
    4. *Bắp cải ngâm nước đá 0.8mm (0.8mm Ice-Shocked Cabbage)* — Giòn ngọt cân bằng vị béo.
  - Giới thiệu đại tiệc **Spring Atelier Grand Platter (봄 시그니쳐 모둠 세트)** với bộ hình ảnh và các món ăn kèm (Banchan, Tonjiru Miso, Gạo ngọc Pearl Rice).

---

## 🏗️ Kiến Trúc Hệ Thống (Architecture & Structure)

Dự án áp dụng mô hình phân tách theo tính năng (**Feature-Driven / Modular Architecture**):

```
cutlet_spring/
├── public/                     # Static assets (Favicons, images, fonts)
├── src/
│   ├── components/             # Global & Layout components
│   │   └── layout/             # Header, Footer (Editorial Navigation)
│   ├── constants/              # Application-wide constants & configs
│   ├── data/
│   │   └── mock/               # Mock data (Menu items, reservations, articles)
│   ├── enums/                  # TypeScript enums
│   ├── features/               # Core Feature Modules
│   │   ├── home/               # Home screen feature
│   │   │   ├── components/     # HeroSection, PhilosophySection, MasterpieceSection
│   │   │   └── HomeScreen.tsx  # Orchestration screen
│   │   ├── menu/               # Menu catalog feature
│   │   │   ├── components/     # MenuSidebar, MenuSection, DishCard, CompactItemCard
│   │   │   └── MenuScreen.tsx  # Dynamic scroll-spy menu screen
│   │   ├── order/              # Ordering module (Ready for cart & checkout API)
│   │   └── reservation/        # Table booking modal & forms
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Third-party library initializations
│   ├── services/               # API service layer (Ready for Axios/Fetch)
│   ├── stores/                 # State management (Zustand: useUIStore, useMenuStore)
│   ├── types/                  # TypeScript interfaces & types
│   ├── utils/                  # Helper & formatting utilities
│   ├── App.tsx                 # Main application root
│   ├── index.css               # Global typography, color tokens & custom utilities
│   └── main.tsx                # Application entrypoint
├── .gitignore                  # Git ignore rules
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite build configuration with @ alias
```

---

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

| Công nghệ | Vai trò trong hệ thống |
| :--- | :--- |
| **React 19** | Thư viện xây dựng giao diện người dùng hiện đại, tốc độ cao. |
| **TypeScript** | Hệ thống định kiểu chặt chẽ (Strong Typing) đảm bảo an toàn mã nguồn. |
| **Vite 6** | Build tool cực nhanh, HMR tức thì và đóng gói tối ưu. |
| **Tailwind CSS v4** | Hệ thống utility classes tối ưu hoá theo tokens màu sắc và typography. |
| **Zustand** | Quản lý state gọn nhẹ cho giao diện, ngôn ngữ hiển thị và luồng người dùng. |
| **Google Fonts** | Bộ font tuyển chọn: `Newsreader`, `Noto Serif KR`, `Noto Serif JP`, `Plus Jakarta Sans`. |
| **Google Material Symbols** | Hệ thống icon tối giản tinh tế. |

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Ứng Dụng (Getting Started)

### 1. Yêu cầu môi trường
- **Node.js**: Phiên bản `>= 18.0.0`
- **npm** hoặc **yarn** / **pnpm**

### 2. Cài đặt các gói phụ thuộc
```bash
# Clone repository về máy
git clone <repository_url>
cd cutlet_spring

# Cài đặt thư viện dependencies
npm install
```

### 3. Chạy môi trường phát triển (Local Development)
```bash
npm run dev
```
Sau khi chạy lệnh, truy cập trình duyệt tại địa chỉ: **`http://localhost:3000`**

### 4. Kiểm tra TypeScript & Đóng gói sản phẩm (Build & Preview)
```bash
# Kiểm tra lỗi cú pháp và type
npx tsc --noEmit

# Đóng gói sản phẩm tối ưu (Production Build)
npm run build

# Xem thử bản build production
npm run preview
```

---

## 🔌 Kế Hoạch Tích Hợp API (API Integration Roadmap)

Hệ thống hiện tại vận hành hoàn chỉnh trên tầng dữ liệu Mock (`src/data/mock/`), sẵn sàng để cắm API Backend thực tế:
1. **Menu API (`/api/v1/menu`)**:
   - Thay thế `MENU_ITEMS` trong `src/data/mock/menu.mock.ts` bằng API Call trong `src/services/menu.service.ts`.
2. **Category & Availability API**:
   - Cập nhật số lượng món ăn và trạng thái hết hàng/mở bán hàng ngày (Daily Batch / Limited).
3. **Table Booking & Reservation API (`/api/v1/reservations`)**:
   - Kết nối form đặt bàn trong `ReservationModal` với Backend đặt chỗ thời gian thực.

---

## 📜 Giấy Phép & Bản Quyền (License)

Dự án phát triển cho **Cutlet Spring (봄돈까스)**. Mọi quyền được bảo lưu.
