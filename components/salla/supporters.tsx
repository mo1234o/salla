'use client'

import Image from 'next/image'
import { Trophy, Building2, GraduationCap, Cpu, Award } from 'lucide-react'
import { getSecureSectionUrl } from '@/lib/secure-url'
import { useState } from 'react'

const supporters = [
  { icon: Building2, logo: '/salla/supporters/بريد-الاستثمار.jpg', name: 'البريد للاستثمار', sub: 'BREI', size: 'large' },
  { icon: Cpu, logo: '/salla/supporters/silicon-waha.png', name: 'سيليكون واحة', sub: 'Silicon Waha', size: 'normal' },
  { icon: Cpu, logo: '/salla/supporters/itida.png', name: 'ITIDA', sub: 'ITIDA', size: 'normal' },
  { icon: Award, logo: '/salla/supporters/eme.png', name: 'EME', sub: 'EME', size: 'normal' },
  { icon: GraduationCap, logo: '/salla/iti.svg', name: 'معهد تكنولوجيا المعلومات', sub: 'ITI', size: 'normal' },
  { icon: Building2, logo: '/salla/dtu.jpg', name: 'جامعة الدلتا التكنولوجية', sub: 'DTU', size: 'normal' },
  { icon: Cpu, logo: '/salla/nti.png', name: 'المعهد القومي للاتصالات', sub: 'NTI', size: 'normal' },
  { icon: Award, logo: '/salla/hult-prize.jpg', name: 'هالت برايز', sub: 'Hult Prize', size: 'normal' },
  { icon: Building2, logo: '/salla/supporters/simplex.webp', name: 'Simplex', sub: 'SIMPLEX', size: 'normal' },
]

const achievementImages = [
  { src: '/salla/impact-makers-win.jpg', title: 'المركز الأول - Impact Makers', desc: 'مسابقة نُعيد.. نُبدع.. نَبني 2026' },
  { src: '/salla/img-5.jpg', title: 'المركز الثالث - Hult Prize', desc: 'تكريم على مستوى مصر' },
  { src: '/salla/silicon-waha-top3.jpg', title: 'المركز الثالث - Silicon Waha', desc: 'Hackathon For Impact 7th Edition' },
]

export function Supporters() {
  const [currentImage, setCurrentImage] = useState(0)

  return (
    <>
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scrollLeft 30s linear infinite;
        }
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
      <section id={getSecureSectionUrl('supporters').replace('#', '')} className="border-y border-border bg-gradient-to-b from-muted/30 to-background overflow-hidden relative">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div className="relative order-last lg:order-first mx-auto w-full max-w-2xl group">
            {/* Overlapping Horizontal Images Display */}
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full">
              {achievementImages.map((img, index) => (
                <div
                  key={index}
                  className={`absolute top-0 h-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 cursor-pointer ${
                    index === 0 ? 'left-0 w-[70%] sm:w-[65%] z-10 hover:z-30 hover:scale-105 hover:shadow-[0_25px_50px_rgba(0,0,0,0.3)]' :
                    index === 1 ? 'left-[50%] sm:left-[55%] w-[70%] sm:w-[65%] z-20 hover:z-30 hover:scale-105 hover:shadow-[0_25px_50px_rgba(0,0,0,0.3)]' :
                    'left-[30%] sm:left-[35%] w-[70%] sm:w-[65%] z-30 hover:z-30 hover:scale-105 hover:shadow-[0_25px_50px_rgba(0,0,0,0.3)]'
                  }`}
                  onClick={() => setCurrentImage(index)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90 z-10" />
                  <Image
                    src={img.src}
                    alt={img.title}
                    width={800}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <p className="text-white font-bold text-sm sm:text-base drop-shadow-lg">{img.title}</p>
                    <p className="text-white/90 text-xs sm:text-sm mt-1 drop-shadow">{img.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievement Info Card */}
            <div className="mt-6 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600 rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <p className="font-heading text-xl sm:text-2xl font-black text-white mb-2">
                  {achievementImages[currentImage].title}
                </p>
                <p className="text-white/95 text-sm sm:text-base leading-relaxed">
                  {achievementImages[currentImage].desc}
                </p>
              </div>
            </div>

            {/* SEO Hidden Caption - Only visible to search engines */}
            <div className="sr-only" aria-hidden="true">
              <p>
                فريق Salla Team هو أفضل فريق إعادة تدوير في مصر، حصل على المركز الأول في مسابقة نُعيد.. نُبدع.. نَبني لإدارة المخلفات 2026.
                Impact Makers Salla Team هو الفائز رقم واحد في تدوير المخلفات وإعادة التدوير في مصر.
                فاز فريق سلة بالمركز الثالث في هاكثون فور امباكت النسخة السابعة من Silicon Waha.
                مشروع ماكينة ذكية لفرز المخلفات من الفريق الأفضل في إعادة التدوير.
              </p>
            </div>
          </div>

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-bold text-accent-foreground shadow-sm">
              <Trophy className="size-4 text-yellow-500" />
              هالت برايز — Hult Prize
            </span>
            <h2 className="mt-4 font-heading text-3xl font-black text-foreground text-balance sm:text-4xl drop-shadow-sm">
              الحلم كبر وبقى مسنود من أكبر الجهات
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              مدعومين من جهات وثقت فينا، ووصلنا بفكرة "سلة" لأبعد نقطة في منافسات
              هالت برايز العالمية وعفرنا فيها.
            </p>

            {/* Animated Supporters Display - Horizontal Scroll on Mobile */}
            <div className="mt-12 sm:mt-20 w-full">
              {/* Desktop: Grid Layout */}
              <div className="hidden sm:flex flex-wrap justify-center gap-6 sm:gap-8">
                {supporters.map((s, index) => {
                  const isLarge = s.size === 'large'
                  return (
                    <div
                      key={s.sub}
                      className={`relative transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer group ${
                        isLarge ? 'w-[240px] sm:w-[260px]' : 'w-[200px] sm:w-[220px]'
                      }`}
                    >
                      {/* Push Pin */}
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                        <div className="relative">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-red-700 shadow-lg" />
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-300" />
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-red-400 to-red-600 opacity-50" />
                        </div>
                      </div>

                      {/* Card */}
                      <div className="relative rounded-[1.5rem] border-[3px] border-background bg-card p-4 shadow-xl">
                        <div className="flex flex-col items-center gap-3 text-center">
                          <span className={`flex ${isLarge ? 'h-20' : 'h-16'} w-full items-center justify-center rounded-xl bg-white p-2 shadow-inner`}>
                            <img
                              src={s.logo}
                              alt={`${s.name} - ${s.sub} داعم تطبيق سلة - تطبيق إعادة تدوير مصري`}
                              className="max-h-full max-w-full object-contain"
                            />
                          </span>
                          <div>
                            <p className={`font-heading font-bold text-secondary leading-tight ${isLarge ? 'text-[15px] sm:text-[16px]' : 'text-[13px] sm:text-[14px]'}`}>
                              {s.name}
                            </p>
                            <p className="mt-1 font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-muted-foreground/70 uppercase">
                              {s.sub}
                            </p>
                          </div>
                        </div>
                        {/* Glossy overlay */}
                        <div className="absolute inset-0 rounded-[1.3rem] bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Mobile: Animated Horizontal Scroll */}
              <div className="sm:hidden relative overflow-hidden">
                <div className="flex gap-4 animate-scroll-left">
                  {[...supporters, ...supporters].map((s, index) => {
                    const isLarge = s.size === 'large'
                    return (
                      <div
                        key={`${s.sub}-${index}`}
                        className={`relative flex-shrink-0 transition-all duration-300 hover:scale-105 cursor-pointer group ${
                          isLarge ? 'w-[220px]' : 'w-[180px]'
                        }`}
                      >
                        {/* Push Pin */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                          <div className="relative">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-red-700 shadow-lg" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-300" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-red-400 to-red-600 opacity-50" />
                          </div>
                        </div>

                        {/* Card */}
                        <div className="relative rounded-[1.5rem] border-[3px] border-background bg-card p-4 shadow-xl">
                          <div className="flex flex-col items-center gap-3 text-center">
                            <span className={`flex ${isLarge ? 'h-20' : 'h-16'} w-full items-center justify-center rounded-xl bg-white p-2 shadow-inner`}>
                              <img
                                src={s.logo}
                                alt={`${s.name} - ${s.sub} داعم تطبيق سلة - تطبيق إعادة تدوير مصري`}
                                className="max-h-full max-w-full object-contain"
                              />
                            </span>
                            <div>
                              <p className={`font-heading font-bold text-secondary leading-tight ${isLarge ? 'text-[15px]' : 'text-[13px]'}`}>
                                {s.name}
                              </p>
                              <p className="mt-1 font-mono text-[10px] font-semibold tracking-wider text-muted-foreground/70 uppercase">
                                {s.sub}
                              </p>
                            </div>
                          </div>
                          {/* Glossy overlay */}
                          <div className="absolute inset-0 rounded-[1.3rem] bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] aspect-square bg-primary/10 blur-[100px] rounded-full pointer-events-none z-0" />
    </section>
    </>
  )
}
