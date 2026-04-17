import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'حنيني سبيشل', description: 'واجهة احترافية لمشروع حنيني سبيشل' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ar" dir="rtl"><body>{children}</body></html>; }
