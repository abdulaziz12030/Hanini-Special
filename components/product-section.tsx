import { products } from '@/lib/data';
import { ProductCard } from './product-card';

export function ProductSection() {
  return (
    <section className="container-shell py-16 md:py-24">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="gold-badge">المنتجات</span>
          <h2 className="section-title mt-4">عرض المنتجات مع تحديث السعر حسب الحجم</h2>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-slate-600">
          الهيكل الحالي يدعم رفع الصور لاحقًا داخل المسارات المخصصة في مجلد المنتجات، مع بقاء البطاقات والأسعار جاهزة للعمل مباشرة.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
