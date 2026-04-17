export function Hero() {
  return (
    <section id="top" className="border-b border-white/10 bg-gradient-to-b from-black to-brand-dark">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold tracking-[0.35em] text-brand-gold">صُنع بحب في السعودية</p>
          <h1 className="mt-5 text-5xl font-black leading-tight md:text-6xl">حنيني سبيشل</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            مشروع سعودي يقدم تجربة ضيافة متكاملة تجمع بين أصالة المذاق وجودة التقديم،
            من الحلويات والمشروبات إلى بوكسات الجمعات والاشتراكات الشهرية بلمسة تسويقية فاخرة.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#order" className="rounded-2xl bg-brand-gold px-6 py-3 font-bold text-black">اطلب الآن</a>
            <a href="#subscriptions" className="rounded-2xl border border-white/15 px-6 py-3 font-bold text-white">الاشتراكات</a>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
          <div className="rounded-[1.5rem] border border-dashed border-brand-gold/40 bg-black/20 p-10 text-center">
            <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-gold">
              Hanini Special
            </div>
            <p className="mt-6 text-white/70">أضف صور المنتجات لاحقًا داخل مجلد <span dir="ltr">public/</span> بسهولة.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
