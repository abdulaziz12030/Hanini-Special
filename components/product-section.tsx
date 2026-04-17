import { products } from '@/lib/data';
import { ProductCard } from '@/components/product-card';

export function ProductSection() {
  return (
    <section id="products" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold tracking-[0.3em] text-brand-gold">
            منتجاتنا
          </p>
          <h2 className="mt-4 text-4xl font-bold text-white">
            تشكيلات مختارة بذوق سعودي أصيل
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            اختر من الحلويات والمشروبات والبوكسات مع خيارات أحجام وأسعار
            متنوعة تناسب ذوقك ومناسبتك.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
