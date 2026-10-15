export type DishCategory = 'japanese' | 'korean' | 'curry' | 'noodles' | 'addons' | 'sauces' | 'drinks';

export interface MenuSizeOption {
  label: string;
  price: number;
}

export interface MenuItem {
  id: string;
  nameEn: string;
  nameKr: string;
  nameKrSubtitle?: string;
  nameJp?: string;
  nameVi?: string;
  category: DishCategory;
  price: number; // in thousands VND, e.g. 200 = 200.000 VND
  priceFormatted?: string;
  prepTimeMinutes?: number;
  image: string;
  altText: string;
  descriptionEn: string;
  descriptionKr: string;
  descriptionVi?: string;
  descriptionJp?: string;
  portionEn?: string;
  portionVi?: string;
  portionKr?: string;
  portionJp?: string;
  tags?: string[];
  dishTypes: string[]; // for filtering: 'pork', 'chicken', 'cheese', 'spicy', 'noodles', 'drinks'
  isBestSeller?: boolean;
  isChefSignature?: boolean;
  isLimited?: boolean;
  isSpicy?: boolean;
  spiceLevel?: number; // 1, 2, 3
  spiceNote?: string;
  sizes?: MenuSizeOption[];
  sauceOptions?: string[];
  subBullet1?: string;
  subBullet2?: string;
  features?: string[];
}
