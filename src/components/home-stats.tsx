
'use client'

import { useEffect, useRef, useState } from 'react'

type Stat = {
  value: number
  suffix?: string
  label: string
  decimals?: number
}

const stats: Stat[] = [
  { value: 5000, suffix: '+', label: 'طلب تم تجهيزه' },
  { value: 98, suffix: '%', label: 'رضا العملاء' },
  { value: 35, suffix: '+', label: 'منتج وخدمة' },
  { value: 4.9, label: 'متوسط التقييم', decimals: 1 }
]

function AnimatedNumber({ value, suffix = '', decimals = 0 }: { value: number; suffix?: string; decimals?: number }) {
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let frame = 0
    const duration = 1600
    const start = performance.now()

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(value * eased)
      if (progress < 1) frame = requestAnimationFrame(animate)
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [started, value])

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  )
}

export function HomeStats() {
  return (
    <section className="bg-brand-charcoal py-16 text-white">
      <div className="container-shell">
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[28px] border border-white/10 bg-white/5 px-6 py-8 text-center backdrop-blur">
              <div className="text-3xl font-bold text-brand-gold md:text-4xl">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} />
              </div>
              <div className="mt-3 text-sm text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
