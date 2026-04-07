import Image from 'next/image';
import Link from 'next/link';
import { allProducts, allSocialLinks, allTestimonials } from 'contentlayer/generated';
import { CakeSlice, ClipboardPenLine, Instagram, MessageCircle, Phone, ShieldCheck, Sparkles, Star, TimerReset, Truck, UtensilsCrossed } from 'lucide-react';
import BackToTop from '@/components/BackToTop';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import OrderForm from '@/components/OrderForm';
import Reveal from '@/components/Reveal';

const features = [
  { title: 'طلبات مناسبات خاصة', text: 'تنفيذ بوكسات الضيافة والحفلات والهدايا بتفاصيل مرنة تناسب المناسبة والميزانية.', icon: ClipboardPenLine },
  { title: 'حلى منزلي بطابع احترافي', text: 'تقديم يركز على الذوق والجودة والهوية البصرية مع عناية واضحة في كل تفصيلة.', icon: CakeSlice },
  { title: 'توصيل عبر المنصات', text: 'وجود رقمي متكامل مع قنوات الطلب الخارجية مثل هنقرستيشن وجاهز والمنصات الأخرى.', icon: Truck },
  { title: 'تواصل سريع وموثوق', text: 'واتساب وحسابات اجتماعية وقناة مباشرة لطلبات الإدارة والاستفسارات والتقييمات.', icon: MessageCircle }
];

const serviceHighlights = [
  { label: 'تنسيق مناسبات', icon: Sparkles },
  { label: 'بوكسات ضيافة', icon: UtensilsCrossed },
  { label: 'جودة وتغليف', icon: ShieldCheck },
  { label: 'حجز وتسليم', icon: TimerReset }
];

export default function HomePage() {
  const featuredProducts = allProducts.filter((item) => item.featured);

  return (
    <main className="bg-[#fcfbff] text-ink">
      <FloatingWhatsApp />
      <BackToTop />

      <section className="relative overflow-hidden bg-hero text-white">
        <div className="absolute inset-0 bg-[url('/images/noise.svg')] opacity-20" />
        <div className="container-grid relative min-h-screen items-center gap-10 py-16 lg:grid-cols-[1.1fr_.9fr] lg:py-24">
          <Reveal>
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur">
                حنيني سبشل • حلويات منزلية للمناسبات والطلبات الخاصة
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.35] sm:text-5xl lg:text-6xl">
                واجهة رقمية فاخرة<br />
                <span className="text-gold">تليق بطعم حنيني سبشل</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-9 text-white/85">
                نموذج أولي احترافي لمشروع أسرة منتجة يقدم الحلى المنزلي بطريقة راقية، مع استقبال الطلبات الخاصة للمناسبات، وروابط الطلب عبر المنصات، وتجربة بصرية مميزة قابلة للتطوير لاحقًا إلى لوحة إدارة أو ربط Sanity.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#order" className="rounded-full bg-white px-6 py-3 text-sm font-extrabold text-brand-800 transition hover:-translate-y-0.5">
                  اطلب مناسبتك الآن
                </a>
                <a href="#products" className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">
                  استكشف الأصناف
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {serviceHighlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Reveal key={item.label} delay={0.05 * index} className="rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                      <Icon className="mb-3 h-5 w-5 text-gold" />
                      <p className="text-sm font-bold">{item.label}</p>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gold/25 blur-3xl" />
              <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-brand-300/25 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-soft backdrop-blur">
                <div className="overflow-hidden rounded-[1.5rem] bg-white">
                  <Image src="/images/hero-dessert.svg" alt="حلويات حنيني سبشل" width={900} height={900} className="h-auto w-full" priority />
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] bg-white/95 p-4 text-ink">
                    <p className="text-sm font-bold text-brand-700">طلبات خاصة</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">نماذج مرنة للمناسبات مع تفاصيل الضيوف والتغليف والميزانية.</p>
                  </div>
                  <div className="rounded-[1.5rem] bg-white/95 p-4 text-ink">
                    <p className="text-sm font-bold text-brand-700">قنوات الطلب</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">إحالة العميل بسرعة إلى هنقرستيشن أو واتساب أو جاهز أو المنصات المرتبطة.</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-grid py-20">
        <Reveal className="mb-8 max-w-2xl">
          <p className="section-kicker">لماذا هذا النموذج مناسب لحنيني سبشل؟</p>
          <h2 className="section-title">موقع تعريفي أنيق، قابل للتطوير، ويخدم الطلبات الخاصة بوضوح</h2>
          <p className="section-text">الصفحة الرئيسية صممت لتجمع بين الهوية البصرية، وعرض المنتجات، وتوجيه العميل إلى الطلب المباشر أو الحجز الخاص أو قنوات التواصل في تجربة واحدة منسقة.</p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={0.05 * index} className="rounded-[2rem] bg-white p-6 shadow-card">
                <div className="mb-5 inline-flex rounded-2xl bg-brand-50 p-3 text-brand-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-extrabold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-8 text-slate-600">{item.text}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="products" className="container-grid py-20">
        <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <Reveal className="max-w-2xl">
            <p className="section-kicker">أصناف مختارة</p>
            <h2 className="section-title">تجربة عرض مرنة تقرأ المنتجات من ملفات JSON عبر Contentlayer</h2>
            <p className="section-text">يمكنك تعديل قائمة المنتجات بسهولة من مجلد المحتوى بدون لمس هيكل الصفحة، ثم لاحقًا استبدال المصدر بـ Sanity دون تغيير الواجهة الرئيسية.</p>
          </Reveal>
          <Reveal>
            <Link href="https://www.hungerstation.com/sa-ar" className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-brand-200 hover:bg-brand-50">
              رابط طلب هنقرستيشن الحالي
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map((item, index) => (
            <Reveal key={item.slug} delay={0.05 * index} className="overflow-hidden rounded-[2rem] bg-white shadow-card">
              <div className="relative h-64 overflow-hidden bg-sand">
                <Image src={item.image} alt={item.title} fill className="object-cover transition duration-700 hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="mb-3 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">{tag}</span>
                  ))}
                </div>
                <h3 className="text-xl font-extrabold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-8 text-slate-600">{item.description}</p>
                <div className="mt-4 flex items-center justify-between text-sm font-bold text-slate-500">
                  <span>يكفي: {item.serves}</span>
                  <span>{item.leadTime}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="order" className="bg-white py-20">
        <div className="container-grid grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <Reveal className="max-w-xl">
            <p className="section-kicker">طلب خاص للمناسبات</p>
            <h2 className="section-title">ابدأ بطلب منظم، واسمح للعميل بالتحكم في تفاصيل المناسبة</h2>
            <p className="section-text">النموذج الحالي مناسب كبداية للنشر على Vercel، ويحول بيانات العميل إلى رسالة واتساب منسقة. ويمكن لاحقًا تطويره إلى إرسال فعلي للبريد أو قاعدة بيانات أو لوحة إدارة.</p>

            <div className="mt-8 space-y-4">
              {['اختيار نوع المناسبة والعدد والتاريخ', 'تحديد الأصناف المرغوبة والتغليف والميزانية', 'إرسال الطلب مباشرة إلى واتساب بشكل مرتب'].map((step, index) => (
                <Reveal key={step} delay={0.06 * index} className="flex items-start gap-4 rounded-[1.5rem] bg-[#f7f8fc] p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-700 text-sm font-extrabold text-white">{index + 1}</div>
                  <p className="pt-1 text-sm font-bold leading-7 text-slate-700">{step}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <OrderForm />
          </Reveal>
        </div>
      </section>

      <section className="container-grid py-20">
        <Reveal className="mb-8 max-w-2xl">
          <p className="section-kicker">ماذا قالوا عن حنيني سبشل</p>
          <h2 className="section-title">انطباعات أولية قابلة للتحويل لاحقًا إلى تقييمات ديناميكية</h2>
          <p className="section-text">هذه البطاقات تُقرأ أيضًا من ملفات المحتوى، ما يجعل تحديث الشهادات سهلًا جدًا قبل ربطها بنظام إدارة حقيقي.</p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {allTestimonials.map((item, index) => (
            <Reveal key={item.slug} delay={0.05 * index} className="rounded-[2rem] bg-white p-6 shadow-card">
              <div className="mb-4 flex items-center gap-1 text-gold">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-sm leading-8 text-slate-700">“{item.text}”</p>
              <div className="mt-6 border-t border-slate-100 pt-4">
                <p className="font-extrabold text-ink">{item.name}</p>
                <p className="text-sm text-slate-500">{item.city} • {item.occasion}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-grid py-20">
        <div className="overflow-hidden rounded-[2.5rem] bg-ink px-6 py-10 text-white shadow-soft md:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center">
            <Reveal>
              <p className="section-kicker text-gold">التواصل والمتابعة</p>
              <h2 className="section-title text-white">اجمع كل القنوات المهمة في مكان واحد</h2>
              <p className="mt-4 max-w-2xl text-sm leading-8 text-white/75">
                يمكن استبدال الروابط الحالية بروابط حقيقية للمشروع، وإضافة صفحة مخصصة للشكاوى والتقييمات لاحقًا، أو ربط النماذج بقاعدة بيانات حسب الحاجة.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                <a href="https://wa.me/966500000000" className="rounded-full bg-white px-5 py-3 font-extrabold text-ink">واتساب الإدارة</a>
                <a href="tel:+966500000000" className="rounded-full border border-white/20 px-5 py-3 font-bold text-white">اتصال مباشر</a>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {allSocialLinks.map((item, index) => (
                <Reveal key={item.slug} delay={0.05 * index} className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">{item.title}</p>
                  <p className="mt-2 text-lg font-extrabold">{item.handle}</p>
                  <a href={item.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm font-bold text-gold">
                    زيارة الحساب
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="container-grid flex flex-col gap-4 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© حنيني سبشل — نموذج أولي Next.js + Contentlayer جاهز للتطوير والربط مع Sanity لاحقًا.</p>
          <div className="flex items-center gap-4">
            <Instagram className="h-5 w-5" />
            <Phone className="h-5 w-5" />
            <MessageCircle className="h-5 w-5" />
          </div>
        </div>
      </footer>
    </main>
  );
}
