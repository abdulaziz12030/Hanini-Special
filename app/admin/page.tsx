import Link from 'next/link';
import { AdminOverview } from '@/components/admin-overview';

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-10">
      <div className="container-shell space-y-8">
        <div className="flex flex-col gap-4 rounded-[2rem] bg-brand-background p-8 text-white md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-brand-gold">لوحة التحكم</p>
            <h1 className="mt-2 text-3xl font-black">إدارة حنيني سبيشل</h1>
            <p className="mt-3 max-w-2xl text-white/75">
              هذه صفحة إدارة أولية لتسهيل قبول الطلبات، تعديل الأسعار، تغيير حالة الطلب، وإضافة الأقسام والمنتجات. عند ربط Supabase سيتم جلب البيانات الفعلية مباشرة.
            </p>
          </div>
          <Link href="/" className="rounded-full bg-white px-5 py-3 font-bold text-black">العودة للموقع</Link>
        </div>
        <AdminOverview />
      </div>
    </main>
  );
}
