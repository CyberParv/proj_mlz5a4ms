'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LightboxItem {
  id: string
  title: string
  caption: string
  imageSrc: string
  width: number
  height: number
}

interface LightboxProps {
  items?: LightboxItem[]
  startIndex?: number
  isOpen?: boolean
  onClose?: () => void
}

export default function Lightbox({
  items = [],
  startIndex = 0,
  isOpen = false,
  onClose = () => {},
}: Partial<LightboxProps>) {
  const [index, setIndex] = useState(startIndex)

  useEffect(() => {
    setIndex(startIndex)
  }, [startIndex])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setIndex((prev) => (prev + 1) % items.length)
      if (e.key === 'ArrowLeft') setIndex((prev) => (prev - 1 + items.length) % items.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, items.length, onClose])

  if (!isOpen || items.length === 0) return null

  const current = items[index]

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 text-white">
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute right-6 top-6 text-white/70 hover:text-white"
      >
        <X className="h-6 w-6" />
      </button>
      <button
        aria-label="Previous"
        onClick={() => setIndex((prev) => (prev - 1 + items.length) % items.length)}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        aria-label="Next"
        onClick={() => setIndex((prev) => (prev + 1) % items.length)}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      <div className="flex w-full max-w-5xl flex-col items-center gap-6 px-4">
        <div className="relative w-full">
          <Image
            src={current.imageSrc}
            alt={current.title}
            width={current.width}
            height={current.height}
            unoptimized
            className={cn('w-full max-h-[70vh] object-contain')}
          />
        </div>
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-white/70">
            {index + 1} / {items.length}
          </div>
          <div className="text-lg">{current.title}</div>
          <div className="text-sm text-white/70">{current.caption}</div>
        </div>
      </div>
    </div>
  )
}
