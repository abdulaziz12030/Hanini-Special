import Image from 'next/image';
import { brand, whatsappUrl } from '@/lib/data';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-background bg-hero text-white">
      <div className="container-shell grid gap-10 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
        <div className="space-y-6">
          <span className="gold-badge border-brand-gold/30 bg-brand-gold/15 text-brand-gold">{brand.tagline}</span>
          <div className="space-y-4">
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              ضيافة سعودية فاخرة<br />
              بطابع حديث وتجربة طلب ذكية
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-white/80">{brand.description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#order" className="rounded-full bg-brand-gold px-6 py-3 font-bold text-black transition hover:opacity-90">
              ابدأ الطلب الآن
            </a>
            <a href={whatsappUrl} target="_blank" className="rounded-full border border-white/20 px-6 py-3 font-bold text-white transition hover:bg-white/10">
              تواصل واتساب
            </a>
          </div>
          <div className="grid gap-4 pt-6 text-sm text-white/75 sm:grid-cols-3">
            <div className="glass-card border-white/10 bg-white/5 p-4 text-center text-white">
              <p className="text-2xl font-black text-brand-gold">4+</p>
              <p>أقسام رئيسية</p>
            </div>
            <div className="glass-card border-white/10 bg-white/5 p-4 text-center text-white">
              <p className="text-2xl font-black text-brand-gold">5</p>
              <p>خطط اشتراك</p>
            </div>
            <div className="glass-card border-white/10 bg-white/5 p-4 text-center text-white">
              <p className="text-2xl font-black text-brand-gold">لوحة</p>
              <p>تحكم لإدارة الطلبات</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="glass-card bg-white/10 p-6">
            <Image
              src="/brand/logo-wordmark.jpg"
              alt="Hanini Special"
              width={800}
              height={400}
              className="w-full rounded-[1.5rem] bg-white object-cover p-6"
            />
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.5rem] bg-black/40 p-5">
                <h3 className="mb-2 font-bold text-brand-gold">اشتراك الوجبات الصحية</h3>
                <p className="text-sm text-white/75">يمكن للعميل اختيار الوجبات وتغيير الخطة بسهولة من لوحة الحساب.</p>
              </div>
              <div className="rounded-[1.5rem] bg-black/40 p-5">
                <h3 className="mb-2 font-bold text-brand-gold">خيارات الأحجام</h3>
                <p className="text-sm text-white/75">المنتجات التي تدعم المقاسات تغيّر السعر تلقائيًا حسب الحجم المحدد.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
