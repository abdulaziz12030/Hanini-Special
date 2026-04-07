'use client';

import { MessageCircleMore } from 'lucide-react';

export default function FloatingWhatsApp() {
  const phone = '966500000000';
  const message = encodeURIComponent('السلام عليكم، أرغب في الاستفسار عن طلب خاص من حنيني سبشل.');

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="تواصل واتساب"
      className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition hover:-translate-y-1"
    >
      <MessageCircleMore className="h-7 w-7" />
    </a>
  );
}
