
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, ShoppingBag, Shield, X } from 'lucide-react'
import { useState } from 'react'
import { storeMeta } from '@/lib/data'

const navItems = [
  { label: 'الرئيسية', href: '/' },
  { label: 'المنتجات', href: '/products' },
  { label: 'طرق التوصيل', href: '#delivery' },
  { label: 'آراء العملاء', href: '#reviews' }
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-brand-gold/15 bg-brand-cream/90 backdrop-blur">
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            className="rounded-full border border-brand-gold/30 bg-white p-2 text-brand-charcoal lg:hidden"
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="فتح القائمة"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-full bg-white shadow-soft">
              <Image src="/brand/hanini-mark.jpg" alt={storeMeta.name} fill className="object-cover" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-brand-charcoal">{storeMeta.name}</p>
              <p className="text-xs tracking-[0.2em] text-brand-gold">{storeMeta.englishName}</p>
            </div>
          </Link>
        </div>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-brand-charcoal transition hover:text-brand-gold">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/admin" className="hidden rounded-full border border-brand-gold/30 bg-white px-4 py-2 text-sm font-semibold text-brand-charcoal transition hover:border-brand-gold hover:text-brand-gold sm:inline-flex">
            <Shield className="ml-2 h-4 w-4" />
            لوحة التحكم
          </Link>
          <Link href="/cart" className="relative rounded-full bg-brand-charcoal p-3 text-white transition hover:opacity-90">
            <ShoppingBag className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {open ? (
        <div className="border-t border-brand-gold/15 bg-white lg:hidden">
          <div className="container-shell grid gap-2 py-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-2xl px-4 py-3 text-sm font-semibold text-brand-charcoal hover:bg-brand-cream" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/admin" className="rounded-2xl bg-brand-charcoal px-4 py-3 text-sm font-semibold text-white" onClick={() => setOpen(false)}>
              لوحة التحكم
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
