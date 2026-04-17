'use client';

import { useMemo, useState } from 'react';
import { Product } from '@/types';
import { currency } from '@/lib/utils';

export function ProductCard({ product }: { product: Product }) {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

  const activePrice = useMemo(() => {
    if (product.variants?.length) return product.variants[selectedVariantIndex]?.price ?? 0;
    return product.basePrice ?? 0;
  }, [product, selectedVariantIndex]);

  return (
    <div className="glass-card overflow-hidden">
      <div className="h-56 bg-gradient-to-br from-brand-gold/15 via-white to-brand-gold/10" />
      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">{product.description}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-500">السعر</p>
            <p className="text-lg font-black text-brand-gold">{currency.format(activePrice)}</p>
          </div>
        </div>

        {product.variants?.length ? (
          <div className="flex flex-wrap gap-2">
            {product.variants.map((variant, index) => (
              <button
                key={variant.label}
                type="button"
                onClick={() => setSelectedVariantIndex(index)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  index === selectedVariantIndex ? 'bg-brand-gold text-black' : 'bg-slate-100 text-slate-700'
                }`}
              >
                {variant.label}
              </button>
            ))}
          </div>
        ) : null}

        <button className="w-full rounded-full bg-brand-background px-5 py-3 text-sm font-bold text-white transition hover:opacity-95">
          أضف إلى الطلب
        </button>
      </div>
    </div>
  );
}
