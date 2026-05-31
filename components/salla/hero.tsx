import Image from 'next/image'
import { Recycle, Coins, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getSecureSectionUrl } from '@/lib/secure-url'

export function Hero() {
  return (
    <section id={getSecureSectionUrl('top').replace('#', '')} className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-background to-background" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div className="text-center lg:text-right">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-bold text-secondary">
            <Sparkles className="size-4 text-primary" />
            مشروع مصري بالكامل
          </span>

          <h1 className="mt-5 font-heading text-4xl font-black leading-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
            تطبيق سلة.. <span className="text-primary">أسلوب حياة</span> مربح
            لجيبك
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0">
            تطبيق "سلة" بيساعدك تحافظ على البيئة وتحول المخلفات لفلوس ومكافآت في محفظتك.
            بنجمع الألمنيوم، البلاستيك، النحاس، الإلكترونيات، الحديد، الكرتون، والورق.
            جينا نلم الليلة ونظبط المنظومة البايظة، بخطوات بسيطة من موبايلك.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a href="/salla-app-v1.1.0.apk" download className="transition-transform hover:scale-105">
              <img src="https://play.google.com/intl/en_us/badges/static/images/badges/ar_badge_web_generic.png" alt="احصل عليه من Google Play" className="h-[68px] w-auto" />
            </a>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-secondary/30 px-7 text-base font-bold text-secondary h-[48px]"
            >
              <a href={getSecureSectionUrl('how')}>اعرف بتشتغل إزاي</a>
            </Button>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 text-center lg:text-right">
            {[
              { icon: Recycle, k: 'بنلم', v: 'مخلفات متنوعة' },
              { icon: Coins, k: 'بنرجّع', v: 'قيمتها فلوس' },
              { icon: Sparkles, k: 'في', v: 'ثانية واحدة' },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5 p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              >
                <s.icon className="mx-auto size-6 text-primary lg:mr-0" />
                <dt className="mt-2 font-heading text-lg font-bold text-secondary">
                  {s.k}
                </dt>
                <dd className="text-sm text-muted-foreground">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-primary/20 to-secondary/15 blur-2xl" />
          <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-lg transition-transform duration-300 hover:scale-105">
            <Image
              src="/salla/app-screens/04.jpeg"
              alt="شاشة تطبيق سلة تظهر كيفية سحب كود QR للمخلفات - تطبيق إعادة تدوير مصري للألمنيوم، البلاستيك، النحاس، الإلكترونيات، الحديد، الكرتون، والورق"
              width={640}
              height={760}
              priority
              loading="eager"
              className="h-full w-full object-cover"
              style={{ objectPosition: 'center -25%' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
