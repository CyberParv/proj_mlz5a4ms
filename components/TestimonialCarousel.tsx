'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
}

interface TestimonialCarouselProps {
  testimonials?: Testimonial[]
  intervalMs?: number
}

export default function TestimonialCarousel({
  testimonials = [
    {
      quote: 'Lumen Collective captured the essence of our brand with precision and soul. The final imagery elevated our entire campaign.',
      name: 'Ava Nguyen',
      role: 'Creative Director',
      company: 'Northshore Atelier',
    },
    {
      quote: 'Every frame feels intentional. The team delivered a commercial series that felt cinematic yet intimate.',
      name: 'Marcus Hill',
      role: 'Marketing Lead',
      company: 'Solstice Apparel',
    },
    {
      quote: 'A seamless experience from concept to delivery. Their artistry is unmatched in the industry.',
      name: 'Elena Rossi',
      role: 'Founder',
      company: 'Linea Studio',
    },
  ],
  intervalMs = 6000,
}: Partial<TestimonialCarouselProps>) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, intervalMs)
    return () => clearInterval(timer)
  }, [intervalMs, testimonials.length])

  return (
    <div className="relative mx-auto max-w-3xl text-center text-white">
      <div className="min-h-[180px]">
        {testimonials.map((t, i) => (
          <div
            key={t.name + i}
            className={cn(
              'transition-opacity duration-700',
              i === index ? 'opacity-100' : 'opacity-0 absolute inset-0'
            )}
          >
            <p className="text-lg font-light leading-relaxed">“{t.quote}”</p>
            <div className="mt-6 text-xs uppercase tracking-[0.3em] text-white/70">
              {t.name} · {t.role}, {t.company}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center gap-3">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={cn(
              'h-1.5 w-6 transition',
              i === index ? 'bg-white' : 'bg-white/30 hover:bg-white/60'
            )}
            aria-label={'Go to testimonial ' + (i + 1)}
          />
        ))}
      </div>
    </div>
  )
}
