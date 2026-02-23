'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavItem {
  label: string
  href: string
}

interface NavbarProps {
  logoText?: string
  items?: NavItem[]
}

export default function Navbar({
  logoText = 'Lumen Collective',
  items = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
}: Partial<NavbarProps>) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-colors duration-500',
        scrolled ? 'bg-black/90 backdrop-blur border-b border-white/10' : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="text-sm tracking-[0.3em] uppercase text-white font-light">
          {logoText}
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-[0.3em] text-white/80 hover:text-white transition"
            >
              {item.label}
            </Link>
          ))}
          <Button variant="outline" className="rounded-none border-white/60 text-white hover:bg-white hover:text-black">
            Book a Session
          </Button>
        </nav>
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="md:hidden text-white"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black text-white">
          <div className="flex items-center justify-between px-4 py-5">
            <span className="text-sm tracking-[0.3em] uppercase">{logoText}</span>
            <button aria-label="Close menu" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex h-[calc(100vh-80px)] flex-col items-center justify-center gap-8">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg uppercase tracking-[0.3em] text-white/80 hover:text-white transition"
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="outline"
              className="rounded-none border-white/60 text-white hover:bg-white hover:text-black"
            >
              Book a Session
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
