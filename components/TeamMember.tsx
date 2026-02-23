import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Linkedin } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TeamMemberProps {
  name?: string
  role?: string
  bio?: string
  imageSrc?: string
  instagramUrl?: string
  linkedinUrl?: string
}

export default function TeamMember({
  name = 'Noah Blake',
  role = 'Founder & Lead Photographer',
  bio = 'Noah blends fine-art storytelling with commercial precision, crafting luminous narratives for global brands.',
  imageSrc = '/images/team.jpg',
  instagramUrl = 'https://instagram.com',
  linkedinUrl = 'https://linkedin.com',
}: Partial<TeamMemberProps>) {
  return (
    <div className={cn('group overflow-hidden rounded-sm bg-black/30 text-white transition duration-500 hover:bg-black/40')}>
      <Image
        src={imageSrc}
        alt={name}
        width={800}
        height={600}
        unoptimized
        className="h-72 w-full object-cover transition duration-700 group-hover:scale-[1.02]"
      />
      <div className="p-5">
        <div className="text-sm uppercase tracking-[0.3em] text-white/70">{role}</div>
        <div className="mt-2 text-lg">{name}</div>
        <p className="mt-3 text-sm text-white/70">{bio}</p>
        <div className="mt-4 flex items-center gap-4 text-white/70">
          <Link href={instagramUrl} aria-label="Instagram" className="hover:text-white">
            <Instagram className="h-4 w-4" />
          </Link>
          <Link href={linkedinUrl} aria-label="LinkedIn" className="hover:text-white">
            <Linkedin className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
