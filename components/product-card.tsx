'use client';

type ProductOption = {
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

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
      <div className="flex h-56 items-center justify-center bg-gradient-to-br from-brand-dark to-black text-white/40">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-sm">صورة المنتج ستضاف لاحقًا</span>
        )}
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold text-white">{product.name}</h3>
            <p className="mt-1 text-sm text-white/50">
              {product.category || product.categoryId || 'منتج مميز'}
            </p>
          </div>

          {product.badge ? (
            <span className="rounded-full bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold">
              {product.badge}
            </span>
          ) : null}
        </div>

        <p className="text-sm leading-7 text-white/75">{product.description}</p>

        <div className="mt-5 space-y-2">
          {product.options.map((option) => (
            <div
              key={option.label}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
            >
              <span className="text-sm text-white/80">{option.label}</span>
              <span className="font-semibold text-brand-gold">
                {option.price} ر.س
              </span>
            </div>
          ))}
        </div>

        <button className="mt-6 w-full rounded-2xl bg-brand-gold px-4 py-3 font-semibold text-black transition hover:opacity-90">
          أضف إلى الطلب
        </button>
      </div>
    </div>
  );
}
