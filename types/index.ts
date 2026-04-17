export type ProductVariant = {
  label: string;
  price: number;
  size: 'small' | 'medium' | 'large';
};

export type Product = {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  image: string;
  featured?: boolean;
  variants?: ProductVariant[];
  basePrice?: number;
  tags?: string[];
};

export type Category = {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  pricingHint: string;
};

export type SubscriptionPlan = {
  id: string;
  title: string;
  description: string;
  monthlyPrice: number;
  bullets: string[];
};

export type Review = {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
};

export type OrderItem = {
  productId: string;
  productName: string;
  variantLabel?: string;
  quantity: number;
  unitPrice: number;
};
