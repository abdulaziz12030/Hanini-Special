import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';

const cairo = Cairo({ subsets: ['arabic', 'latin'], weight: ['400', '500', '600', '700', '800'] });

export const metadata: Metadata = {
  title: 'حنيني سبشل | حلويات منزلية للمناسبات والطلبات الخاصة',
  description: 'نموذج أولي احترافي لمشروع حنيني سبشل لعرض المنتجات واستقبال الطلبات الخاصة للمناسبات والتواصل مع العملاء.',
  metadataBase: new URL('https://example.com')
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>{children}</body>
    </html>
  );
}
