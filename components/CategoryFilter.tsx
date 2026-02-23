'use client'

import { cn } from '@/lib/utils'

interface CategoryFilterProps {
  categories?: string[]
  active?: string
  onChange?: (category: string) => void
}

export default function CategoryFilter({
  categories = ['All', 'Editorial', 'Commercial', 'Portrait', 'Fine Art'],
  active = 'All',
  onChange = () => {},
}: Partial<CategoryFilterProps>) {
  return (
    <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.3em] text-white/70">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={cn(
            'relative pb-2 transition',
            active === cat ? 'text-white' : 'hover:text-white'
          )}
        >
          {cat}
          <span
            className={cn(
              'absolute left-0 -bottom-0.5 h-[1px] w-full bg-white transition',
              active === cat ? 'opacity-100' : 'opacity-0'
            )}
          />
        </button>
      ))}
    </div>
  )
}
