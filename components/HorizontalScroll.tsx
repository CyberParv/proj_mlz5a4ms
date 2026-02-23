'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ScrollItem {
  id: string
  title: string
  imageSrc: string
}

interface HorizontalScrollProps {
  items?: ScrollItem[]
}

export default function HorizontalScroll({
  items = [
    { id: '1', title: 'Studio North', imageSrc: '/images/hero.jpg' },
    { id: '2', title: 'Analog Lab', imageSrc: '/images/gallery.jpg' },
    { id: '3', title: 'Light Room', imageSrc: '/images/about.jpg' },
    { id: '4', title: 'Design Suite', imageSrc: '/images/team.jpg' },
  ],
}: Partial<HorizontalScrollProps>) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [dragging, setDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    setDragging(true)
    setStartX(e.pageX - containerRef.current.offsetLeft)
    setScrollLeft(containerRef.current.scrollLeft)
  }

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dragging || !containerRef.current) return
    const x = e.pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * 1.3
    containerRef.current.scrollLeft = scrollLeft - walk
  }

  const onMouseUp = () => setDragging(false)

  return (
    <div
      ref={containerRef}
      className={cn(
        'flex gap-4 overflow-x-auto pb-4',
        dragging ? 'cursor-grabbing' : 'cursor-grab'
      )}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseUp}
      onMouseUp={onMouseUp}
    >
      {items.map((item) => (
        <div key={item.id} className="min-w-[260px] md:min-w-[320px]">
          <div className="relative overflow-hidden rounded-sm">
            <Image
              src={item.imageSrc}
              alt={item.title}
              width={900}
              height={600}
              unoptimized
              className="h-52 w-full object-cover transition duration-700 hover:scale-[1.02]"
            />
          </div>
          <div className="mt-3 text-xs uppercase tracking-[0.3em] text-white/70">
            {item.title}
          </div>
        </div>
      ))}
    </div>
  )
}
