import { categories } from '@/lib/data';

export function CategoryGrid() {
  return (
    <section id="categories" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold tracking-[0.3em] text-brand-gold">
            أقسامنا
          </p>
          <h2 className="mt-4 text-4xl font-bold text-white">
            أقسام مصممة لتجربة ضيافة متكاملة
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            من الحلويات الشعبية والمشروبات الدافئة إلى بوكسات الجمعات
            والاشتراكات، نقدم لك تجربة مرتبة وفاخرة تناسب مختلف الأذواق.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
                <span className="rounded-full bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold">
                  قسم مميز
                </span>
              </div>

              <p className="text-base leading-8 text-white/75">
                {category.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
