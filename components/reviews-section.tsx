import { reviews } from '@/lib/data';

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-white py-16 md:py-24">
      <div className="container-shell">
        <div className="mb-10 max-w-2xl">
          <span className="gold-badge">التقييمات</span>
          <h2 className="section-title mt-4">قسم تقييمات يرفع الثقة ويعزز قرار الشراء</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.id} className="glass-card p-8">
              <div className="mb-4 text-brand-gold">{'★'.repeat(review.rating)}</div>
              <p className="leading-8 text-slate-600">{review.text}</p>
              <div className="mt-6 border-t border-slate-100 pt-4">
                <h3 className="font-bold">{review.name}</h3>
                <p className="text-sm text-slate-500">{review.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
