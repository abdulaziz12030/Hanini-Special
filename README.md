# Hanini Special

واجهة Next.js عربية لمشروع **حنيني سبيشل** تشمل:

- واجهة فخمة ومتجاوبة
- أقسام احترافية
- نموذج طلب
- اشتراكات شهرية
- واتساب
- تقييمات
- لوحة تحكم أولية لإدارة الطلبات والمنتجات
- جاهزية للنشر على Vercel
- تهيئة للربط مع Supabase
- تهيئة أولية للدفع عبر Stripe مع قابلية إظهار Apple Pay بعد استكمال الإعدادات

## التشغيل المحلي

```bash
npm install
npm run dev
```

## متغيرات البيئة

انسخ `.env.example` إلى `.env.local` ثم أضف القيم:

```bash
cp .env.example .env.local
```

## صور المنتجات

ضع صورك لاحقًا داخل المسار:

- `public/products/hanini-special.jpg`
- `public/products/royal-gasht.jpg`
- `public/products/fattet-tamer.jpg`
- `public/products/saudi-coffee.jpg`
- `public/products/qishr-coffee.jpg`
- `public/products/karak-tea.jpg`
- `public/products/gathering-box-2.jpg`
- `public/products/gathering-box-3.jpg`

حاليًا تم ترك بطاقات عرض أنيقة تعمل حتى قبل رفع الصور.

## Supabase

1. أنشئ مشروع Supabase جديدًا.
2. نفّذ ملف `sql/schema.sql` داخل SQL Editor.
3. أضف `NEXT_PUBLIC_SUPABASE_URL` و`NEXT_PUBLIC_SUPABASE_ANON_KEY` و`SUPABASE_SERVICE_ROLE_KEY`.
4. يمكنك بعد ذلك ربط الصفحات واللوحة بالبيانات الفعلية.

Supabase يوفّر Next.js Quickstart رسميًا، مع إعداد App Router وCookie-based Auth. citeturn0search1turn0search7

## Vercel

1. ارفع المشروع إلى GitHub.
2. استورد المستودع في Vercel.
3. أضف متغيرات البيئة نفسها داخل إعدادات المشروع في Vercel.
4. نفّذ النشر.

توثيق Vercel يوضح أن متغيرات البيئة تُدار من إعدادات المشروع وتُستخدم عبر بيئات التطوير والمعاينة والإنتاج. citeturn0search2turn0search5

## Apple Pay والدفع

المشروع يحتوي على مسار API أولي للدفع باستخدام Stripe Checkout. لإظهار Apple Pay فعليًا ستحتاج إلى:

1. إضافة مفاتيح Stripe.
2. تسجيل النطاق الذي سيعرض وسيلة الدفع.
3. إكمال إعداد Apple Pay على Stripe.

توثيق Stripe يذكر أن Apple Pay متاح على الويب، وأن النطاقات التي تعرض زر Apple Pay يجب تسجيلها، كما أن Stripe يدعم التحقق الخاص بالتاجر ضمن إعداداته. citeturn0search0turn0search3turn0search6

## ملاحظات مهمة

- ربط **Apple Pay مباشرة دون Stripe أو مزود دفع مناسب** غير مكتمل في هذا القالب؛ تم تجهيز المشروع ليكون Stripe-ready.
- لوحة التحكم الحالية واجهة عملية أولية، ويمكن تطويرها إلى CRUD كامل بعد ربط Supabase Auth وصلاحيات الأدمن.
- عند رغبتك، أضف صور المنتجات في المسارات المحددة وسيتحدّث العرض مباشرة.
