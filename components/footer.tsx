export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="container-shell flex flex-col gap-4 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} حنيني سبيشل — صُنع بحب في السعودية.</p>
        <p>جاهز للنشر على Vercel والربط مع Supabase وStripe/Apple Pay.</p>
      </div>
    </footer>
  );
}
