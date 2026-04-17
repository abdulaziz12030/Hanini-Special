const stats = [
  { label: 'طلبات اليوم', value: '18' },
  { label: 'طلبات قيد التنفيذ', value: '7' },
  { label: 'اشتراكات نشطة', value: '24' },
  { label: 'منتجات قابلة للتعديل', value: '12' }
];

const orders = [
  { id: 'ORD-1042', customer: 'سارة العتيبي', total: '179 ريال', status: 'جديد' },
  { id: 'ORD-1041', customer: 'محمد الحربي', total: '349 ريال', status: 'مدفوع' },
  { id: 'ORD-1040', customer: 'أم نايف', total: '42 ريال', status: 'قيد التجهيز' }
];

export function AdminOverview() {
  return (
    <div className="space-y-8">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="glass-card p-6">
            <p className="text-sm text-slate-500">{stat.label}</p>
            <p className="mt-3 text-3xl font-black text-brand-gold">{stat.value}</p>
          </div>
        ))}
      </section>

      <section className="glass-card p-8">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">إدارة الطلبات</h2>
            <p className="text-sm text-slate-500">يمكن من هنا قبول الطلبات وتغيير حالتها بعد ربط البيانات الحقيقية.</p>
          </div>
          <button className="rounded-full bg-brand-background px-5 py-3 text-sm font-bold text-white">إضافة منتج جديد</button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-right text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-slate-500">
                <th className="py-3">رقم الطلب</th>
                <th className="py-3">العميل</th>
                <th className="py-3">الإجمالي</th>
                <th className="py-3">الحالة</th>
                <th className="py-3">إجراء</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-slate-50">
                  <td className="py-4 font-semibold">{order.id}</td>
                  <td className="py-4">{order.customer}</td>
                  <td className="py-4">{order.total}</td>
                  <td className="py-4">
                    <span className="rounded-full bg-brand-gold/10 px-3 py-1 text-brand-gold">{order.status}</span>
                  </td>
                  <td className="py-4">
                    <button className="rounded-full border border-slate-200 px-4 py-2">تعديل</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
