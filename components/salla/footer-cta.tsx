import { Mail, Recycle, Facebook, Linkedin, Smartphone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from './logo'
import { getSecureSectionUrl } from '@/lib/secure-url'

export function FooterCta() {
  return (
    <>
      <section id={getSecureSectionUrl('contact').replace('#', '')} className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-14 text-center text-primary-foreground shadow-lg sm:px-12 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
          <Recycle className="absolute -left-6 -top-6 size-40 text-primary-foreground/10" />
          <Recycle className="absolute -bottom-8 -right-8 size-48 text-primary-foreground/10" />
          <h2 className="relative font-heading text-3xl font-black text-balance sm:text-4xl">
            "سلة" جت عشان تلم الليلة وتظبط المنظومة
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-pretty text-lg text-primary-foreground/90">
            عايز "سلة" في منطقتك أو حابب تدعم الفكرة؟ اتواصل معانا.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="rounded-full px-7 text-base font-bold"
            >
              <a href="mailto:salla.wahdaa@gmail.com">
                <Mail className="size-4" />
                salla.wahdaa@gmail.com
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-primary-foreground/30 px-7 text-base font-bold text-primary hover:bg-primary-foreground/10 hover:scale-110 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <a href="tel:01203062905" dir="ltr">
                012 0306 2905
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-gradient-to-b from-card to-primary/5">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="flex flex-col gap-4">
              <Logo />
              <p className="text-sm text-muted-foreground">
                النظافة أسلوب حياة مربح لجيبك.. ولايق ببلدنا.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-col gap-4">
              <h3 className="font-heading font-bold text-foreground">تابعنا على</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.facebook.com/SallaEgypt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                  <span>فيسبوك</span>
                </a>
                <a
                  href="https://eg.linkedin.com/company/salla-egypt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://www.tiktok.com/@salla.egypt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Smartphone className="w-5 h-5" />
                  <span>تيك توك</span>
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-4">
              <h3 className="font-heading font-bold text-foreground">تواصل معنا</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:salla.wahdaa@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>salla.wahdaa@gmail.com</span>
                </a>
                <a
                  href="tel:01203062905"
                  dir="ltr"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Smartphone className="w-5 h-5" />
                  <span>012 0306 2905</span>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} سلة — صُنع في مصر
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
