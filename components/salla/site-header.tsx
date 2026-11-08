'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from './logo'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

const links = [
  { href: '#problem', label: 'المشكلة' },
  { href: '#how', label: 'إزاي بتشتغل' },
  { href: '#story', label: 'الحكاية' },
  { href: '#team', label: 'المؤسسين' },
  { href: '#supporters', label: 'الداعمين' },
  { href: '/faq', label: 'الأسئلة' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const getSectionLink = (href: string) => {
    // If on main page, use relative link for smooth scroll
    // If on other page, use absolute link to go to main page first
    if (href.startsWith('#')) {
      return pathname === '/' ? href : `/${href}`
    }
    return href
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="/" aria-label="سلة">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={getSectionLink(l.href)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-secondary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="rounded-full font-bold">
            <a href={pathname === '/' ? '#contact' : '/#contact'}>اتواصل معانا</a>
          </Button>
        </div>

        <button
          className="flex size-10 items-center justify-center rounded-lg border border-border text-secondary md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="القائمة"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={getSectionLink(l.href)}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-secondary"
              >
                {l.label}
              </a>
            ))}
            <Button asChild className="mt-2 rounded-full font-bold">
              <a href={pathname === '/' ? '#contact' : '/#contact'} onClick={() => setOpen(false)}>
                اتواصل معانا
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
