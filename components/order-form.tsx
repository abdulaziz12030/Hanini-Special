'use client';

import { useState } from 'react';

export function OrderForm() {
  const [sent, setSent] = useState(false);

  return (
    <section id="order" className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-[0.3em] text-brand-gold">نموذج الطلب</p>
            <h2 className="mt-4 text-4xl font-bold">أرسل طلبك بسهولة</h2>
            <p className="mt-4 text-white/70">هذا نموذج استعراضي جاهز للواجهة، ويمكن لاحقًا ربطه بقاعدة بيانات أو واتساب أو لوحة تحكم.</p>
          </div>

          <form
            className="mt-8 grid gap-4 md:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <input className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none" placeholder="الاسم" />
            <input className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none" placeholder="رقم الجوال" />
            <input className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none md:col-span-2" placeholder="الخدمة المطلوبة" />
            <textarea className="min-h-32 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none md:col-span-2" placeholder="التفاصيل أو اختيارات الوجبات الصحية" />
            <button className="md:col-span-2 rounded-2xl bg-brand-gold px-4 py-3 font-bold text-black">إرسال الطلب</button>
          </form>

          {sent ? <p className="mt-4 text-center text-brand-gold">تم استلام النموذج الاستعراضي بنجاح.</p> : null}
        </div>
      </div>
    </section>
  );
}
