
import Link from 'next/link'
import { storeMeta } from '@/lib/data'

export function Footer() {
  return (
    <footer className="border-t border-brand-gold/15 bg-brand-cream py-14">
      <div className="container-shell grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-bold text-brand-charcoal">{storeMeta.name}</h3>
          <p className="mt-4 max-w-md text-sm leading-8 text-stone-600">{storeMeta.description}</p>
        </div>

        <div>
          <h4 className="text-sm font-bold text-brand-charcoal">روابط سريعة</h4>
          <div className="mt-4 space-y-3 text-sm text-stone-600">
            <Link href="/" className="block hover:text-brand-gold">الرئيسية</Link>
            <Link href="/products" className="block hover:text-brand-gold">المنتجات</Link>
            <Link href="/cart" className="block hover:text-brand-gold">السلة</Link>
            <Link href="/admin" className="block hover:text-brand-gold">لوحة التحكم</Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold text-brand-charcoal">التواصل وخيارات الطلب</h4>
          <div className="mt-4 space-y-3 text-sm text-stone-600">
            <a href={`https://wa.me/${storeMeta.whatsapp}`} target="_blank" rel="noreferrer" className="block hover:text-brand-gold">
              واتساب
            </a>
            <a href={storeMeta.instagram} target="_blank" rel="noreferrer" className="block hover:text-brand-gold">
              إنستغرام
            </a>
            <a href={storeMeta.tiktok} target="_blank" rel="noreferrer" className="block hover:text-brand-gold">
              تيك توك
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
