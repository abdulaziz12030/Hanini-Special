import { CategoryGrid } from '@/components/category-grid';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { OrderForm } from '@/components/order-form';
import { ProductSection } from '@/components/product-section';
import { ReviewsSection } from '@/components/reviews-section';
import { SubscriptionGrid } from '@/components/subscription-grid';

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <section id="about" className="container-shell py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-card p-8">
            <span className="gold-badge">من نحن</span>
            <h2 className="section-title mt-4">نبذة تسويقية احترافية عن حنيني سبيشل</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              حنيني سبيشل مشروع سعودي يسعى إلى تقديم أفضل المنتجات والوجبات التي تناسب مختلف شرائح المجتمع في المملكة، عبر تجربة تجمع بين الطابع التراثي وجودة التقديم وسهولة الطلب. نعتني بالحلى والمشروبات وبوكسات الجمعات، ونطوّر كذلك اشتراك الوجبات الصحية لخدمة العملاء الباحثين عن الراحة والاستمرارية.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              تمت صياغة واجهة الموقع لتخدم البيع المباشر، الاشتراكات الشهرية، التواصل السريع عبر واتساب، واستقبال الطلبات بطريقة قابلة للتوسع والربط مع الدفع وإدارة الطلبات لاحقًا.
            </p>
          </div>
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold">ماذا يحتوي المشروع التقني؟</h3>
            <ul className="mt-5 space-y-3 leading-8 text-slate-600">
              <li>• واجهة فخمة ومتجاوبة</li>
              <li>• أقسام احترافية ومنتجات بخيارات أحجام</li>
              <li>• نموذج طلب واشتراكات شهرية</li>
              <li>• واتساب وتقييمات</li>
              <li>• لوحة تحكم لإدارة الطلبات والأسعار والمنتجات</li>
              <li>• جاهزية للنشر على Vercel والربط مع Supabase</li>
              <li>• تهيئة أولية لربط الدفع عبر Stripe/Apple Pay</li>
            </ul>
          </div>
        </div>
      </section>
      <CategoryGrid />
      <ProductSection />
      <SubscriptionGrid />
      <OrderForm />
      <ReviewsSection />
      <Footer />
    </main>
  );
}
