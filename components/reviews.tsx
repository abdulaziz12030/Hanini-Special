import { reviews } from '@/lib/data';

export function Reviews() {
  return (
    <section id="reviews" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold tracking-[0.3em] text-brand-gold">التقييمات</p>
          <h2 className="mt-4 text-4xl font-bold">آراء تعكس جودة التجربة</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.id} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="leading-8 text-white/80">“{review.comment}”</p>
              <p className="mt-5 font-bold text-brand-gold">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
