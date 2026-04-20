
import Image from 'next/image'
import Link from 'next/link'
import { Truck, Store, UtensilsCrossed, Star, Sparkles, Clock3 } from 'lucide-react'
import { getCategories, getFeaturedProducts, getProducts, heroBanner, reviews, storeMeta } from '@/lib/catalog'
import { ProductCard } from '@/components/product-card'
import { SectionTitle } from '@/components/section-title'
import { HomeStats } from '@/components/home-stats'

const partnerItems = ['هنقرستيشن', 'جاهز', 'ذا شيفز']

export default async function HomePage() {
  const [categories, featuredProducts, allProducts] = await Promise.all([
    getCategories(),
    getFeaturedProducts(),
    getProducts()
  ])

  const spotlight = featuredProducts[0] ?? allProducts[0]

  return (
    <main>
      <section className="hero-overlay border-b border-brand-gold/10 bg-brand-cream">
        <div className="container-shell grid min-h-[86vh] items-center gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
          <div className="space-y-8">
            <div className="float-up space-y-5">
              <span className="inline-flex rounded-full border border-brand-gold/20 bg-white px-4 py-2 text-xs font-bold tracking-[0.24em] text-brand-gold">
                {heroBanner.title}
              </span>

              <h1 className="max-w-2xl text-4xl font-bold leading-tight text-brand-charcoal sm:text-5xl lg:text-6xl">
                {heroBanner.subtitle}
              </h1>

              <p className="max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
                {heroBanner.description}
              </p>
            </div>

            <div className="float-up float-delay-1 flex flex-wrap gap-4">
              <Link href="/products" className="rounded-full bg-brand-charcoal px-7 py-4 text-sm font-bold text-white transition hover:bg-brand-gold">
                اطلب الآن
              </Link>
              <a
                href={`https://wa.me/${storeMeta.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-brand-gold/35 bg-white px-7 py-4 text-sm font-bold text-brand-charcoal transition hover:border-brand-gold hover:text-brand-gold"
              >
                تواصل واتساب
              </a>
            </div>

            <div className="float-up float-delay-2 grid max-w-2xl gap-4 sm:grid-cols-3">
              <div className="shine-card rounded-[28px] border border-brand-gold/10 bg-white p-5 shadow-soft">
                <div className="mb-4 inline-flex rounded-full bg-brand-cream p-3 text-brand-gold">
                  <UtensilsCrossed className="h-5 w-5" />
                </div>
                <div className="text-lg font-bold text-brand-charcoal">نكهة مميزة</div>
                <div className="mt-2 text-sm leading-7 text-stone-600">طابع راقٍ في المذاق والتقديم.</div>
              </div>

              <div className="shine-card rounded-[28px] border border-brand-gold/10 bg-white p-5 shadow-soft">
                <div className="mb-4 inline-flex rounded-full bg-brand-cream p-3 text-brand-gold">
                  <Clock3 className="h-5 w-5" />
                </div>
                <div className="text-lg font-bold text-brand-charcoal">سرعة تنفيذ</div>
                <div className="mt-2 text-sm leading-7 text-stone-600">استجابة أسرع وتجهيز منظم.</div>
              </div>

              <div className="shine-card rounded-[28px] border border-brand-gold/10 bg-white p-5 shadow-soft">
                <div className="mb-4 inline-flex rounded-full bg-brand-cream p-3 text-brand-gold">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div className="text-lg font-bold text-brand-charcoal">هوية أنيقة</div>
                <div className="mt-2 text-sm leading-7 text-stone-600">ألوان هادئة مستلهمة من الهوية.</div>
              </div>
            </div>
          </div>

          <div className="float-up float-delay-3">
            <div className="relative overflow-hidden rounded-[36px] border border-brand-gold/15 bg-white shadow-soft">
              <div className="soft-pattern absolute inset-0 opacity-40" />
              <div className="grid min-h-[420px] items-center gap-6 p-8 sm:p-10">
                <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                  <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border border-brand-gold/20 bg-brand-cream shadow-soft sm:h-52 sm:w-52">
                    <Image src="/brand/hanini-mark.jpg" alt="Hanini mark" fill className="object-cover" />
                  </div>

                  <div className="space-y-5 text-center lg:text-right">
                    <div className="relative mx-auto h-20 w-full max-w-[330px] lg:mx-0">
                      <Image src="/brand/hanini-wordmark.jpg" alt="Hanini Special" fill className="object-contain" />
                    </div>

                    <p className="text-sm leading-8 text-stone-600 sm:text-base">
                      بنر رئيسي عريض ومتجاوب مع الجوال واللاب توب، يقدّم البراند بصورة هادئة وواضحة مع دعوة مباشرة للطلب.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                      <span className="rounded-full bg-brand-charcoal px-4 py-2 text-xs font-bold text-white">تصميم متجاوب</span>
                      <span className="rounded-full bg-brand-cream px-4 py-2 text-xs font-bold text-brand-gold">زر طلب مباشر</span>
                      <span className="rounded-full bg-brand-cream px-4 py-2 text-xs font-bold text-brand-gold">هوية هادئة</span>
                    </div>
                  </div>
                </div>

                {spotlight ? (
                  <div className="rounded-[28px] border border-brand-gold/10 bg-brand-cream/70 p-5">
                    <p className="text-xs font-bold tracking-[0.25em] text-brand-gold">منتج مميز</p>
                    <div className="mt-3 flex items-center justify-between gap-4">
                      <div>
                        <h2 className="text-xl font-bold text-brand-charcoal">{spotlight.name}</h2>
                        <p className="mt-2 text-sm text-stone-600">{spotlight.shortDescription}</p>
                      </div>
                      <Link href={`/products/${spotlight.slug}`} className="rounded-full bg-brand-charcoal px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-gold">
                        عرض المنتج
                      </Link>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeStats />

      <section id="delivery" className="py-20">
        <div className="container-shell">
          <SectionTitle
            eyebrow="خيارات مرنة"
            title="طرق الاستلام والتوصيل"
            text="خصصنا ثلاث طرق واضحة لاستلام الطلب حتى تكون التجربة أسهل وأسرع حسب ما يناسب العميل."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            <article className="shine-card rounded-[30px] border border-brand-gold/10 bg-white p-8 shadow-soft float-up">
              <div className="mb-5 inline-flex rounded-full bg-brand-cream p-4 text-brand-gold">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-brand-charcoal">توصيل خاص</h3>
              <p className="mt-4 text-sm leading-8 text-stone-600">
                توصيل مباشر للطلبية مع متابعة أدق لتجربة العميل وسرعة أفضل داخل النطاق المستهدف.
              </p>
            </article>

            <article className="shine-card rounded-[30px] border border-brand-gold/10 bg-white p-8 shadow-soft float-up float-delay-1">
              <div className="mb-5 inline-flex rounded-full bg-brand-cream p-4 text-brand-gold">
                <Store className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-brand-charcoal">استلام من الفرع</h3>
              <p className="mt-4 text-sm leading-8 text-stone-600">
                يدفع العميل أولًا ثم يتم اعتماد الطلب، وبعدها يكون الاستلام من الفرع بسهولة وفي الوقت المناسب.
              </p>
            </article>

            <article className="shine-card rounded-[30px] border border-brand-gold/10 bg-white p-8 shadow-soft float-up float-delay-2">
              <div className="mb-5 inline-flex rounded-full bg-brand-cream p-4 text-brand-gold">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-brand-charcoal">شركاء النجاح</h3>
              <p className="mt-4 text-sm leading-8 text-stone-600">
                الطلب عبر منصاتنا المساندة ليسهُل الوصول للعملاء في نطاق أوسع وبسرعة أكبر.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {partnerItems.map((item) => (
                  <span key={item} className="rounded-full border border-brand-gold/20 px-4 py-2 text-xs font-bold text-brand-gold">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-brand-sand/55 py-20">
        <div className="container-shell">
          <SectionTitle
            eyebrow="الأقسام الرئيسية"
            title="الأصناف الأكثر جذبًا في الواجهة"
            text="قسم بصري واضح لعرض المجموعات أو الأقسام الرئيسية مع صور مناسبة ونصوص قصيرة قابلة للنقر."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                href={`/collections/${category.slug}`}
                className={`shine-card rounded-[30px] border border-brand-gold/10 bg-white p-5 shadow-soft transition hover:-translate-y-1 float-up ${index === 1 ? 'float-delay-1' : index === 2 ? 'float-delay-2' : index === 3 ? 'float-delay-3' : ''}`}
              >
                <div className="relative flex aspect-[5/4] items-center justify-center overflow-hidden rounded-[24px] bg-brand-cream">
                  <Image
                    src={category.image ?? '/brand/hanini-mark.jpg'}
                    alt={category.name}
                    fill
                    className="object-contain p-5"
                  />
                </div>
                <div className="mt-5">
                  <h3 className="text-xl font-bold text-brand-charcoal">{category.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-600">{category.description}</p>
                  <p className="mt-4 text-sm font-bold text-brand-gold">اكتشف القسم</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell">
          <SectionTitle
            eyebrow="منتجات مختارة"
            title="الأكثر طلبًا حاليًا"
            text="بطاقات منتجات محسنة لتظهر الصورة كاملة بشكل مناسب للجوال والكمبيوتر مع تركيز على الوضوح وسهولة التصفح."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProducts.map((product) => (
              <div key={product.id} className="float-up">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-brand-charcoal py-20 text-white">
        <div className="container-shell">
          <SectionTitle
            eyebrow="آراء العملاء"
            title="تجارب تعكس جودة الخدمة"
            text="قسم مراجعات واضح بحركات خفيفة ونبرة راقية تدعم الثقة في البراند."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {reviews.map((review, index) => (
              <article key={review.id} className={`rounded-[30px] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur float-up ${index === 1 ? 'float-delay-1' : ''}`}>
                <p className="text-lg leading-8 text-white/90">“{review.body}”</p>
                <p className="mt-5 text-sm font-bold text-brand-gold">{review.customer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
