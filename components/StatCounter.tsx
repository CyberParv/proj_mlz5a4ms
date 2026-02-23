'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface StatCounterProps {
  label?: string
  value?: number
  suffix?: string
  durationMs?: number
}

export default function StatCounter({
  label = 'Projects Delivered',
  value = 240,
  suffix = '+',
  durationMs = 1500,
}: Partial<StatCounterProps>) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    const start = Date.now()
    const tick = () => {
      const progress = Math.min((Date.now() - start) / durationMs, 1)
      setCount(Math.floor(progress * value))
      if (progress < 1) requestAnimationFrame(tick)
    }
    tick()
  }, [visible, value, durationMs])

  return (
    <div ref={ref} className="text-white">
      <div className={cn('text-3xl font-light tracking-[0.2em]')}>
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-xs uppercase tracking-[0.3em] text-white/60">{label}</div>
    </div>
  )
}
