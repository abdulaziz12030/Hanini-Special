export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-2xl font-bold text-brand-gold">حنيني سبيشل</a>
        <nav className="hidden gap-6 text-sm text-white/75 md:flex">
          <a href="#about">من نحن</a>
          <a href="#categories">الأقسام</a>
          <a href="#products">المنتجات</a>
          <a href="#subscriptions">الاشتراكات</a>
          <a href="#reviews">التقييمات</a>
          <a href="#order">اطلب الآن</a>
        </nav>
      </div>
    </header>
  );
}
