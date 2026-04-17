import Image from 'next/image';
import Link from 'next/link';
import { brand } from '@/lib/data';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="container-shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/brand/logo-mark.jpg" alt="Hanini Special mark" width={48} height={48} className="rounded-2xl" />
          <div>
            <p className="text-sm font-semibold text-brand-gold">{brand.tagline}</p>
            <h1 className="text-lg font-bold">{brand.arabicName}</h1>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <a href="#about">من نحن</a>
          <a href="#categories">الأقسام</a>
          <a href="#subscriptions">الاشتراكات</a>
          <a href="#order">اطلب الآن</a>
          <a href="#reviews">التقييمات</a>
          <Link href="/admin" className="rounded-full border border-brand-gold/20 px-4 py-2 text-brand-gold">
            لوحة التحكم
          </Link>
        </nav>
      </div>
    </header>
  );
}
