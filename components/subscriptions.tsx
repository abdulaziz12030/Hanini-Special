import { subscriptions } from '@/lib/data';

export function Subscriptions() {
  return (
    <section id="subscriptions" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold tracking-[0.3em] text-brand-gold">الاشتراكات</p>
          <h2 className="mt-4 text-4xl font-bold">باقات شهرية مرنة ومصممة للاحتياج اليومي والأسبوعي</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {subscriptions.map((plan) => (
            <div key={plan.id} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-2xl font-bold">{plan.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/75">{plan.description}</p>
              <p className="mt-5 text-3xl font-black text-brand-gold">{plan.price} ر.س</p>
              <ul className="mt-5 space-y-3 text-sm text-white/75">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-2xl border border-brand-gold/40 px-4 py-3 font-bold text-brand-gold">
                اشترك الآن
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
