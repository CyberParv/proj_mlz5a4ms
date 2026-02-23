import Link from 'next/link'
import { Instagram, Twitter, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FooterLink {
  label: string
  href: string
}

interface FooterProps {
  logoText?: string
  links?: FooterLink[]
  copyright?: string
}

export default function Footer({
  logoText = 'Lumen Collective',
  links = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ],
  copyright = '© 2024 Lumen Collective. All rights reserved.',
}: Partial<FooterProps>) {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-white/80">{logoText}</div>
            <p className="mt-3 max-w-sm text-sm text-white/60">
              Fine-art and commercial photography studio crafting luminous stories for bold brands and visionary clients.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.3em] text-white/70">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white transition">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4 text-white/70">
            <Link href="https://instagram.com" aria-label="Instagram" className="hover:text-white">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://twitter.com" aria-label="Twitter" className="hover:text-white">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="mailto:hello@lumencollective.com" aria-label="Email" className="hover:text-white">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className={cn('mt-10 text-xs text-white/50', 'tracking-[0.2em] uppercase')}>
          {copyright}
        </div>
      </div>
    </footer>
  )
}
