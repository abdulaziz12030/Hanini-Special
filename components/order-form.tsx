'use client';

import { FormEvent, useMemo, useState } from 'react';
import { products, subscriptions } from '@/lib/data';
import { currency } from '@/lib/utils';

export function OrderForm() {
  const productsWithOptions = products.filter((item) => item.variants || item.basePrice);
  const [productId, setProductId] = useState(productsWithOptions[0]?.id ?? '');
  const [variantLabel, setVariantLabel] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [subscriptionId, setSubscriptionId] = useState('');
  const [message, setMessage] = useState('');

  const activeProduct = useMemo(() => products.find((item) => item.id === productId), [productId]);
  const activePrice = useMemo(() => {
    if (!activeProduct) return 0;
    if (activeProduct.variants?.length) {
      const selected = activeProduct.variants.find((item) => item.label === variantLabel) ?? activeProduct.variants[0];
      return selected.price;
    }
    return activeProduct.basePrice ?? 0;
  }, [activeProduct, variantLabel]);

  const total = activePrice * quantity;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage('تم تجهيز نموذج الطلب مبدئيًا. عند ربط Supabase وStripe سيتم حفظ الطلب والدفع مباشرة.');
  }

  return (
    <section id="order" className="container-shell py-16 md:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-card p-8">
          <span className="gold-badge">نموذج الطلب</span>
          <h2 className="section-title mt-4">اطلب منتجًا أو اشترك شهريًا من نفس الواجهة</h2>
          <p className="mt-4 leading-8 text-slate-600">
            هذا النموذج مصمم ليكون مرنًا: طلب مباشر للمنتجات، أو إضافة اشتراك شهري، أو تخصيص ملاحظات العميل قبل تأكيد الطلب.
          </p>
          <div className="mt-8 rounded-[1.5rem] bg-brand-background p-6 text-white">
            <p className="text-sm text-white/70">الإجمالي الحالي</p>
            <p className="mt-2 text-4xl font-black text-brand-gold">{currency.format(total)}</p>
            <p className="mt-4 text-sm text-white/70">سيتم لاحقًا احتساب التوصيل والخصومات والاشتراكات من خلال قاعدة البيانات.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass-card space-y-5 p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-semibold">الاسم</span>
              <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="اسم العميل" />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-semibold">رقم الجوال</span>
              <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="05xxxxxxxx" />
            </label>
          </div>

          <label className="space-y-2 block">
            <span className="text-sm font-semibold">المنتج</span>
            <select
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none"
              value={productId}
              onChange={(event) => {
                setProductId(event.target.value);
                const selected = products.find((item) => item.id === event.target.value);
                setVariantLabel(selected?.variants?.[0]?.label ?? '');
              }}
            >
              {productsWithOptions.map((item) => (
                <option key={item.id} value={item.id}>{item.name}</option>
              ))}
            </select>
          </label>

          {activeProduct?.variants?.length ? (
            <label className="space-y-2 block">
              <span className="text-sm font-semibold">الحجم</span>
              <select
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none"
                value={variantLabel || activeProduct.variants[0]?.label}
                onChange={(event) => setVariantLabel(event.target.value)}
              >
                {activeProduct.variants.map((variant) => (
                  <option key={variant.label} value={variant.label}>{variant.label} — {currency.format(variant.price)}</option>
                ))}
              </select>
            </label>
          ) : null}

          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-semibold">الكمية</span>
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={(event) => setQuantity(Number(event.target.value))}
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-semibold">الاشتراك الشهري</span>
              <select className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none" value={subscriptionId} onChange={(event) => setSubscriptionId(event.target.value)}>
                <option value="">بدون اشتراك</option>
                {subscriptions.map((subscription) => (
                  <option key={subscription.id} value={subscription.id}>{subscription.title}</option>
                ))}
              </select>
            </label>
          </div>

          <label className="space-y-2 block">
            <span className="text-sm font-semibold">ملاحظات الطلب أو الوجبات المختارة</span>
            <textarea rows={5} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="اكتب هنا المنتجات أو الوجبات الصحية التي ترغب باختيارها..." />
          </label>

          <div className="flex flex-wrap items-center justify-between gap-4 rounded-[1.5rem] bg-slate-50 px-5 py-4">
            <div>
              <p className="text-sm text-slate-500">الإجمالي الحالي</p>
              <p className="text-2xl font-black text-brand-gold">{currency.format(total)}</p>
            </div>
            <button className="rounded-full bg-brand-background px-6 py-3 font-bold text-white" type="submit">
              تأكيد الطلب
            </button>
          </div>

          {subscriptionId ? (
            <p className="text-sm text-brand-gold">تم اختيار اشتراك شهري ضمن الطلب. يمكن ربطه لاحقًا بخصم تلقائي وجدولة متكررة.</p>
          ) : null}
          {message ? <p className="text-sm text-emerald-600">{message}</p> : null}
        </form>
      </div>
    </section>
  );
}
