import { categories } from '@/lib/data';

export function CategoryGrid() {
  return (
    <section id="categories" className="container-shell py-16 md:py-24">
      <div className="mb-10 max-w-2xl">
        <span className="gold-badge">الأقسام</span>
        <h2 className="section-title mt-4">تقسيمات تسويقية مرتبة تخدم البيع والاشتراك والطلب السريع</h2>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          تم تصميم بنية الموقع لتعرض خدمات حنيني سبيشل بشكل واضح: الحلويات، المشروبات، بوكسات الجمعات، واشتراك الوجبات الصحية.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {categories.map((category) => (
          <article key={category.id} className="glass-card p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
                <p className="mt-2 text-brand-gold">{category.pricingHint}</p>
              </div>
              <span className="rounded-full bg-brand-gold/10 px-4 py-2 text-sm font-semibold text-brand-gold">
                {category.shortDescription}
              </span>
            </div>
            <p className="mt-5 leading-8 text-slate-600">{category.longDescription}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
