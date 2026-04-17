'use client';

import { useState } from 'react';
import { products } from '@/lib/data';

export function Products() {
  const [selected, setSelected] = useState<Record<string, number>>({});

  return (
    <section id="products" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold tracking-[0.3em] text-brand-gold">المنتجات</p>
          <h2 className="mt-4 text-4xl font-bold">منتجات مع خيارات أحجام وأسعار تتغير تلقائيًا</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => {
            const currentIndex = selected[product.id] ?? 0;
            const currentOption = product.options[currentIndex];

            return (
              <div key={product.id} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
                <div className="flex h-52 items-center justify-center bg-gradient-to-br from-black to-brand-dark text-sm text-white/40">
                  صورة المنتج ستضاف لاحقًا
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold">{product.name}</h3>
                      <p className="mt-1 text-sm text-brand-gold">{product.category}</p>
                    </div>
                    {product.badge ? (
                      <span className="rounded-full bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold">
                        {product.badge}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-white/75">{product.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {product.options.map((option, index) => (
                      <button
                        key={option.label}
                        onClick={() => setSelected((prev) => ({ ...prev, [product.id]: index }))}
                        className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                          currentIndex === index
                            ? 'bg-brand-gold text-black'
                            : 'border border-white/10 bg-black/20 text-white'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                    <p className="text-sm text-white/60">السعر الحالي</p>
                    <p className="mt-1 text-2xl font-black text-brand-gold">{currentOption.price} ر.س</p>
                  </div>

                  <button className="mt-6 w-full rounded-2xl bg-brand-gold px-4 py-3 font-bold text-black">
                    أضف إلى الطلب
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
