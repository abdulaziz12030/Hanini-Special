import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'حنيني سبيشل | Hanini Special',
  description: 'واجهة استعراضية فاخرة لمشروع حنيني سبيشل',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
