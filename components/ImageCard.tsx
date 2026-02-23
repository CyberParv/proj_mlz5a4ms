import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ImageCardProps {
  title?: string
  imageSrc?: string
  width?: number
  height?: number
}

export default function ImageCard({
  title = 'Project Title',
  imageSrc = '/images/gallery.jpg',
  width = 900,
  height = 1200,
}: Partial<ImageCardProps>) {
  return (
    <div className={cn('relative overflow-hidden rounded-sm group cursor-pointer')}>
      <Image
        src={imageSrc}
        alt={title}
        width={width}
        height={height}
        unoptimized
        className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="absolute bottom-4 left-4 text-white opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="text-xs uppercase tracking-[0.3em]">Project</div>
        <div className="text-sm">{title}</div>
      </div>
    </div>
  )
}
