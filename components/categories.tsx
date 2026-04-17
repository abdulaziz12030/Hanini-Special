import { categories } from '@/lib/data';

export function Categories() {
  return (
    <section id="categories" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold tracking-[0.3em] text-brand-gold">الأقسام</p>
          <h2 className="mt-4 text-4xl font-bold">تقسيمات احترافية تخدم جميع احتياجات الضيافة</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <div key={category.id} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              <p className="mt-4 leading-8 text-white/75">{category.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
