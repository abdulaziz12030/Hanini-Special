
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types'

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-brand-gold/15 bg-white shadow-soft transition duration-300 hover:-translate-y-1">
      <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-brand-cream">
        <Image src={product.image} alt={product.name} fill className="object-contain p-5 transition duration-500 group-hover:scale-105" />
      </div>
      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand-gold">{product.category}</p>
          <h3 className="line-clamp-2 text-lg font-bold text-brand-charcoal">{product.name}</h3>
          <p className="line-clamp-2 text-sm leading-7 text-stone-600">{product.shortDescription}</p>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-brand-charcoal">{product.price} ر.س</span>
            {product.compareAtPrice ? (
              <span className="mr-2 text-sm text-stone-400 line-through">{product.compareAtPrice} ر.س</span>
            ) : null}
          </div>
          <span className="text-xs text-stone-500">★ {product.rating}</span>
        </div>

        <Link
          href={`/products/${product.slug}`}
          className="block rounded-full bg-brand-charcoal px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-gold"
        >
          عرض المنتج
        </Link>
      </div>
    </article>
  )
}
