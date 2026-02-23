'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoItem {
  name: string
  imageSrc: string
}

interface LogoMarqueeProps {
  logos?: LogoItem[]
}

export default function LogoMarquee({
  logos = [
    { name: 'Solstice', imageSrc: '/images/gallery.jpg' },
    { name: 'Linea', imageSrc: '/images/about.jpg' },
    { name: 'Northshore', imageSrc: '/images/team.jpg' },
    { name: 'Drift', imageSrc: '/images/hero.jpg' },
    { name: 'Atelier', imageSrc: '/images/gallery.jpg' },
  ],
}: Partial<LogoMarqueeProps>) {
  const loop = [...logos, ...logos]

  return (
    <div className="overflow-hidden border-y border-white/10 bg-black py-6">
      <div className="relative flex gap-8 animate-marquee items-center hover:[animation-play-state:paused]">
        {loop.map((logo, index) => (
          <div key={logo.name + index} className="flex items-center gap-3 opacity-70 hover:opacity-100 transition">
            <Image
              src={logo.imageSrc}
              alt={logo.name}
              width={120}
              height={60}
              unoptimized
              className={cn('h-8 w-auto object-contain grayscale hover:grayscale-0 transition')}
            />
            <span className="text-xs uppercase tracking-[0.3em] text-white/70">{logo.name}</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        .animate-marquee {
          width: max-content;
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}
