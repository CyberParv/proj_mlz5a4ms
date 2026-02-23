'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import CategoryFilter from '@/components/CategoryFilter'

interface GalleryItem {
  id: string
  title: string
  category: string
  imageSrc: string
  width: number
  height: number
}

interface MasonryGalleryProps {
  items?: GalleryItem[]
  categories?: string[]
}

export default function MasonryGallery({
  items = [
    { id: '1', title: 'Desert Hues', category: 'Editorial', imageSrc: '/images/gallery.jpg', width: 800, height: 1200 },
    { id: '2', title: 'Studio Light', category: 'Commercial', imageSrc: '/images/hero.jpg', width: 1200, height: 900 },
    { id: '3', title: 'Motion Portrait', category: 'Portrait', imageSrc: '/images/team.jpg', width: 900, height: 1200 },
    { id: '4', title: 'Architectural Calm', category: 'Fine Art', imageSrc: '/images/about.jpg', width: 1200, height: 900 },
    { id: '5', title: 'Ocean Horizon', category: 'Editorial', imageSrc: '/images/gallery.jpg', width: 1200, height: 900 },
    { id: '6', title: 'Product Minimalism', category: 'Commercial', imageSrc: '/images/hero.jpg', width: 900, height: 1200 },
  ],
  categories = ['All', 'Editorial', 'Commercial', 'Portrait', 'Fine Art'],
}: Partial<MasonryGalleryProps>) {
  const [active, setActive] = useState(categories[0] || 'All')

  const filtered = useMemo(() => {
    if (active === 'All') return items
    return items.filter((item) => item.category === active)
  }, [active, items])

  return (
    <div className="space-y-6">
      <CategoryFilter categories={categories} active={active} onChange={setActive} />
      <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
        {filtered.map((item) => (
          <div key={item.id} className="mb-4 break-inside-avoid overflow-hidden rounded-sm group">
            <div className="relative">
              <Image
                src={item.imageSrc}
                alt={item.title}
                width={item.width}
                height={item.height}
                unoptimized
                className={cn(
                  'h-auto w-full object-cover transition duration-700',
                  'group-hover:scale-[1.02]'
                )}
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 text-white/90">
                <div className="text-xs uppercase tracking-[0.3em]">{item.category}</div>
                <div className="text-sm">{item.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
