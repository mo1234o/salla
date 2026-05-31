'use client'

import Image from 'next/image'
import { Recycle, Coins, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getSecureSectionUrl } from '@/lib/secure-url'

export function Hero() {
  return (
    <section id={getSecureSectionUrl('top').replace('#', '')} className="relative overflow-hidden" style={{ perspective: '1000px' }}>
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateZ(var(--tw-translate-z, 20px)) translateY(30px) rotateX(10deg);
          }
          to {
            opacity: 1;
            transform: translateZ(var(--tw-translate-z, 20px)) translateY(0px) rotateX(0deg);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateZ(10px) translateY(0px) rotateY(0deg); }
          50% { transform: translateZ(10px) translateY(-10px) rotateY(5deg); }
        }
        @keyframes rotate3d {
          0%, 100% { transform: translateZ(30px) rotateX(0deg) rotateY(0deg); }
          25% { transform: translateZ(30px) rotateX(5deg) rotateY(5deg); }
          50% { transform: translateZ(30px) rotateX(0deg) rotateY(10deg); }
          75% { transform: translateZ(30px) rotateX(-5deg) rotateY(5deg); }
        }
        @keyframes pulse3d {
          0%, 100% { transform: translateZ(25px) scale(1); }
          50% { transform: translateZ(35px) scale(1.05); }
        }
      `}</style>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-background to-background" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div className="text-center lg:text-right" style={{ transformStyle: 'preserve-3d' }}>
          <h1
            className="mt-5 font-heading text-4xl font-black leading-tight text-foreground text-balance sm:text-5xl lg:text-6xl"
            style={{ transform: 'translateZ(20px)', animation: 'fadeInUp 1s ease-out' }}
          >
            تطبيق سلة.. <span className="text-primary">أسلوب حياة</span> مربح
            لجيبك
          </h1>

          <p
            className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0"
            style={{ transform: 'translateZ(15px)', animation: 'fadeInUp 1s ease-out 0.2s' }}
          >
            تطبيق "سلة" بيساعدك تحافظ على البيئة وتحول المخلفات لفلوس ومكافآت في محفظتك.
            بنجمع الألمنيوم، البلاستيك، النحاس، الإلكترونيات، الحديد، الكرتون، والورق.
            جينا نلم الليلة ونظبط المنظومة البايظة، بخطوات بسيطة من موبايلك.
          </p>

          <div
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
            style={{ transform: 'translateZ(25px)', animation: 'fadeInUp 1s ease-out 0.4s' }}
          >
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

          <dl
            className="mt-10 grid grid-cols-3 gap-4 text-center lg:text-right"
            style={{ transform: 'translateZ(10px)', animation: 'fadeInUp 1s ease-out 0.6s' }}
          >
            {[
              { icon: Recycle, k: 'بنلم', v: 'مخلفات متنوعة' },
              { icon: Coins, k: 'بنرجّع', v: 'قيمتها فلوس' },
              { icon: Sparkles, k: 'في', v: 'ثانية واحدة' },
            ].map((s, index) => (
              <div
                key={s.v}
                className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5 p-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                style={{
                  transform: 'translateZ(5px)',
                  animation: `fadeInUp 1s ease-out ${0.6 + index * 0.1}s, float 3s ease-in-out infinite ${0.8 + index * 0.1}s`,
                }}
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

        <div className="relative mx-auto w-full max-w-md" style={{ transform: 'translateZ(30px)', animation: 'fadeInUp 1s ease-out 0.8s' }}>
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
