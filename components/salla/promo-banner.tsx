'use client'

import Image from 'next/image'
import { getSecureSectionUrl } from '@/lib/secure-url'

export function PromoBanner() {
  return (
    <section id={getSecureSectionUrl('promo').replace('#', '')} className="border-y border-border bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 overflow-hidden">
      <style jsx global>{`
        @keyframes float-1 {
          0%, 100% { transform: translateZ(20px) translateY(0px) rotateY(-5deg); }
          50% { transform: translateZ(20px) translateY(-10px) rotateY(-5deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateZ(25px) translateY(0px) rotateY(-3deg); }
          50% { transform: translateZ(25px) translateY(-10px) rotateY(-3deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateZ(30px) translateY(0px) rotateY(-1deg); }
          50% { transform: translateZ(30px) translateY(-10px) rotateY(-1deg); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateZ(15px) translateY(10px); }
          to { opacity: 1; transform: translateZ(15px) translateY(0px); }
        }
        @keyframes pulse-btn {
          0%, 100% { transform: translateZ(35px) rotateX(5deg) scale(1); }
          50% { transform: translateZ(35px) rotateX(5deg) scale(1.05); }
        }
      `}</style>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16" style={{ perspective: '1500px' }}>
        <div
          className="relative overflow-hidden rounded-3xl border-2 border-primary/20 bg-card shadow-2xl"
          style={{ transformStyle: 'preserve-3d', transform: 'rotateX(5deg) rotateY(-5deg)' }}
        >
          <div className="grid items-center gap-8 md:grid-cols-2">
            {/* Image */}
            <div
              className="relative aspect-[16/9] w-full overflow-hidden rounded-l-3xl"
              style={{ transform: 'translateZ(30px)' }}
            >
              <Image
                src="/salla/promo-banner.png"
                alt="تطبيق سلة - جمع بيع اكسب من بيتك"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Text Content */}
            <div
              className="p-8 md:p-12"
              style={{ transform: 'translateZ(50px)' }}
            >
              <h2
                className="font-heading text-4xl font-black text-primary text-balance sm:text-5xl lg:text-6xl"
                style={{ animation: 'float-1 3s ease-in-out infinite' }}
              >
                جمع
              </h2>
              <h2
                className="mt-2 font-heading text-4xl font-black text-foreground text-balance sm:text-5xl lg:text-6xl"
                style={{ animation: 'float-2 3s ease-in-out infinite 0.5s' }}
              >
                بيع
              </h2>
              <h2
                className="mt-2 font-heading text-4xl font-black text-secondary text-balance sm:text-5xl lg:text-6xl"
                style={{ animation: 'float-3 3s ease-in-out infinite 1s' }}
              >
                اكسب من بيتك
              </h2>
              <p
                className="mt-6 text-lg leading-relaxed text-muted-foreground"
                style={{ 
                  transform: 'translateZ(15px)',
                  animation: 'fade-in 1s ease-out'
                }}
              >
                مع تطبيق سلة، تقدر تحول المخلفات لفلوس ومكافآت من غير ما تخرج من بيتك.
              </p>
              <a
                href="/salla-app-v1.1.0.apk"
                download
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-xl transition-all duration-300 hover:scale-110 hover:bg-primary/90 hover:shadow-2xl"
                style={{ animation: 'pulse-btn 2s ease-in-out infinite' }}
              >
                حمّل التطبيق الآن
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
