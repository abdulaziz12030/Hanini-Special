export type ProductOption = {
  label: string;
  price: number;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  category: string;
  badge?: string;
  image?: string;
  options: ProductOption[];
};

export type Category = {
  id: string;
  title: string;
  blurb: string;
};

export type Review = {
  id: string;
  name: string;
  comment: string;
};

export type SubscriptionPlan = {
  id: string;
  title: string;
  description: string;
  price: number;
  features: string[];
};
