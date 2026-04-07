'use client';

import { useMemo, useState } from 'react';

const defaultState = {
  name: '',
  phone: '',
  occasion: 'حفلة منزلية',
  guests: '20',
  date: '',
  city: 'الرياض',
  sweets: ['ميني تشيزكيك'],
  packaging: 'تغليف فاخر',
  budget: 'من 300 إلى 700 ريال',
  notes: ''
};

const sweetOptions = ['ميني تشيزكيك', 'تارت فواكه', 'كيك مناسبات', 'بوكس ضيافة', 'حلويات مشكلة'];

export default function OrderForm() {
  const [form, setForm] = useState(defaultState);

  const whatsappLink = useMemo(() => {
    const message = `السلام عليكم، أرغب في تنفيذ طلب خاص من حنيني سبشل.%0A
الاسم: ${form.name}%0A
رقم الجوال: ${form.phone}%0A
المناسبة: ${form.occasion}%0A
عدد الضيوف: ${form.guests}%0A
التاريخ: ${form.date || 'يحدد لاحقًا'}%0A
المدينة: ${form.city}%0A
الأصناف المطلوبة: ${form.sweets.join('، ')}%0A
نوع التغليف: ${form.packaging}%0A
الميزانية: ${form.budget}%0A
ملاحظات إضافية: ${form.notes || 'لا يوجد'}`;

    return `https://wa.me/966500000000?text=${message}`;
  }, [form]);

  const toggleSweet = (value: string) => {
    setForm((current) => ({
      ...current,
      sweets: current.sweets.includes(value)
        ? current.sweets.filter((item) => item !== value)
        : [...current.sweets, value]
    }));
  };

  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-card md:p-8">
      <div className="mb-6">
        <p className="mb-2 text-sm font-bold text-brand-700">نموذج الطلب الخاص</p>
        <h3 className="text-2xl font-extrabold text-ink">صمّم طلب مناسبتك بخيارات مرنة</h3>
        <p className="mt-3 text-sm leading-8 text-slate-600">
          هذا النموذج الأولي يحول بيانات العميل مباشرة إلى رسالة واتساب مرتبة، ويمكن لاحقًا ربطه بقاعدة بيانات أو Sanity أو نموذج إرسال فعلي.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="field">
          <span>الاسم</span>
          <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="اسم العميل" />
        </label>
        <label className="field">
          <span>رقم الجوال</span>
          <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="05xxxxxxxx" />
        </label>
        <label className="field">
          <span>نوع المناسبة</span>
          <select value={form.occasion} onChange={(e) => setForm({ ...form, occasion: e.target.value })}>
            <option>حفلة منزلية</option>
            <option>تخرج</option>
            <option>مواليد</option>
            <option>زواج</option>
            <option>استقبال ضيوف</option>
            <option>هدية خاصة</option>
          </select>
        </label>
        <label className="field">
          <span>عدد الضيوف</span>
          <input value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} placeholder="مثال: 30" />
        </label>
        <label className="field">
          <span>تاريخ التسليم</span>
          <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
        </label>
        <label className="field">
          <span>المدينة</span>
          <input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} placeholder="الرياض" />
        </label>
      </div>

      <div className="mt-5">
        <span className="mb-3 block text-sm font-bold text-slate-700">اختيار الأصناف</span>
        <div className="flex flex-wrap gap-3">
          {sweetOptions.map((item) => {
            const active = form.sweets.includes(item);
            return (
              <button
                key={item}
                type="button"
                onClick={() => toggleSweet(item)}
                className={`rounded-full border px-4 py-2 text-sm font-bold transition ${active ? 'border-brand-700 bg-brand-700 text-white' : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-brand-200 hover:bg-brand-50'}`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <label className="field">
          <span>نوع التغليف</span>
          <select value={form.packaging} onChange={(e) => setForm({ ...form, packaging: e.target.value })}>
            <option>تغليف فاخر</option>
            <option>تغليف بسيط</option>
            <option>بوكس هدية</option>
            <option>ضيافة مناسبة كبيرة</option>
          </select>
        </label>
        <label className="field">
          <span>الميزانية التقديرية</span>
          <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}>
            <option>أقل من 300 ريال</option>
            <option>من 300 إلى 700 ريال</option>
            <option>من 700 إلى 1500 ريال</option>
            <option>أكثر من 1500 ريال</option>
          </select>
        </label>
      </div>

      <label className="field mt-5">
        <span>ملاحظات إضافية</span>
        <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} rows={5} placeholder="أضف تفاصيل النكهة أو الألوان أو شكل التقديم..." />
      </label>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5">
          إرسال الطلب عبر واتساب
        </a>
        <button type="button" onClick={() => setForm(defaultState)} className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50">
          إعادة تعيين النموذج
        </button>
      </div>
    </div>
  );
}
