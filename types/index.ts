export type ProductOption = {
  label: string;
  price: number;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  category?: string;
  categoryId?: string;
  image?: string;
  badge?: string;
  options: ProductOption[];
};

export type Category = {
  id: string;
  title: string;
  blurb: string;
  pricingHint?: string;
  shortDescription?: string;
};

export type Review = {
  id: string;
  name: string;
  comment: string;
  rating: number;
};

export type SubscriptionPlan = {
  id: string;
  title: string;
  description: string;
  price: number;
  features: string[];
};
