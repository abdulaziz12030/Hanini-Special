import { subscriptions } from '@/lib/data';
import { currency } from '@/lib/utils';

export function SubscriptionGrid() {
  return (
    <section id="subscriptions" className="bg-white py-16 md:py-24">
      <div className="container-shell">
        <div className="mb-10 max-w-2xl">
          <span className="gold-badge">الاشتراكات</span>
          <h2 className="section-title mt-4">اشتراكات شهرية قابلة للبيع مباشرة أو التفعيل لاحقًا</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            تم تضمين اشتراكات شهرية للحلويات والمشروبات وبوكسات الجمعات، مع قسم خاص باسم اشتراك الوجبات الصحية يتيح اختيار الوجبات.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {subscriptions.map((plan) => (
            <article key={plan.id} className="glass-card flex h-full flex-col p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold">{plan.title}</h3>
                <p className="mt-3 leading-8 text-slate-600">{plan.description}</p>
              </div>
              <p className="mb-6 text-3xl font-black text-brand-gold">{currency.format(plan.monthlyPrice)} <span className="text-base text-slate-500">/ شهريًا</span></p>
              <ul className="mb-8 space-y-3 text-sm text-slate-600">
                {plan.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
              <button className="mt-auto rounded-full bg-brand-background px-5 py-3 font-bold text-white">اشترك الآن</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
