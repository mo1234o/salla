'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from './logo'
import { Button } from '@/components/ui/button'
import { getSecureSectionUrl } from '@/lib/secure-url'

const links = [
  { href: getSecureSectionUrl('problem'), label: 'المشكلة' },
  { href: getSecureSectionUrl('how'), label: 'إزاي بتشتغل' },
  { href: getSecureSectionUrl('story'), label: 'الحكاية' },
  { href: getSecureSectionUrl('team'), label: 'المؤسسين' },
  { href: getSecureSectionUrl('supporters'), label: 'الداعمين' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href={getSecureSectionUrl('top')} aria-label="سلة">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-secondary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="rounded-full font-bold">
            <a href={getSecureSectionUrl('contact')}>اتواصل معانا</a>
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
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-secondary"
              >
                {l.label}
              </a>
            ))}
            <Button asChild className="mt-2 rounded-full font-bold">
              <a href={getSecureSectionUrl('contact')} onClick={() => setOpen(false)}>
                اتواصل معانا
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
