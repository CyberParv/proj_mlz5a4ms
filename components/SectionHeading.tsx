import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  headline?: string
  subheadline?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  headline = 'Section Title',
  subheadline = '',
  align = 'left',
}: Partial<SectionHeadingProps>) {
  return (
    <div className={cn('space-y-3', align === 'center' && 'text-center')}>
      <div className="text-xs uppercase tracking-[0.3em] text-white/60">Lumen Collective</div>
      <h2 className="text-2xl md:text-4xl font-light tracking-[0.2em] text-white">{headline}</h2>
      {subheadline && <p className="max-w-2xl text-sm text-white/70">{subheadline}</p>}
    </div>
  )
}
