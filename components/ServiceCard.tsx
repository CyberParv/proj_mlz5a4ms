import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  title?: string
  description?: string
  priceText?: string
  imageSrc?: string
}

export default function ServiceCard({
  title = 'Editorial Campaigns',
  description = 'Full-service creative production for magazines, lookbooks, and cultural features with sculpted light.',
  priceText = 'Starting at $4,500',
  imageSrc = '/images/hero.jpg',
}: Partial<ServiceCardProps>) {
  return (
    <div className={cn('relative overflow-hidden rounded-sm group cursor-pointer')}>
      <Image
        src={imageSrc}
        alt={title}
        width={1200}
        height={900}
        unoptimized
        className="h-80 w-full object-cover transition duration-700 group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-6 left-6 right-6 text-white">
        <div className="text-xs uppercase tracking-[0.3em] text-white/70">{priceText}</div>
        <div className="mt-2 text-lg">{title}</div>
        <p className="mt-2 max-w-sm text-sm text-white/70 opacity-0 transition duration-500 group-hover:opacity-100">
          {description}
        </p>
      </div>
    </div>
  )
}
