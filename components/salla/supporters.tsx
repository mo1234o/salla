'use client'

import Image from 'next/image'
import { Trophy, Building2, GraduationCap, Cpu, Award } from 'lucide-react'
import { getSecureSectionUrl } from '@/lib/secure-url'

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

export function Supporters() {
  return (
    <>
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scrollLeft 40s linear infinite;
        }
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
      <section id={getSecureSectionUrl('supporters').replace('#', '')} className="border-y border-border bg-gradient-to-b from-muted/30 to-background overflow-hidden relative">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">

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
              <div className="hidden md:flex flex-wrap justify-center gap-8 lg:gap-10">
                {supporters.map((s, index) => {
                  const isLarge = s.size === 'large'
                  return (
                    <div
                      key={s.sub}
                      className={`relative transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer group ${
                        isLarge ? 'w-[280px] lg:w-[300px]' : 'w-[220px] lg:w-[240px]'
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
                      <div className="relative rounded-[1.5rem] border-[3px] border-background bg-card p-5 shadow-xl">
                        <div className="flex flex-col items-center gap-3 text-center">
                          <span className={`flex ${isLarge ? 'h-24' : 'h-20'} w-full items-center justify-center rounded-xl bg-white p-3 shadow-inner`}>
                            <img
                              src={s.logo}
                              alt={`${s.name} - ${s.sub} داعم تطبيق سلة - تطبيق إعادة تدوير مصري`}
                              className="max-h-full max-w-full object-contain"
                            />
                          </span>
                          <div>
                            <p className={`font-heading font-bold text-secondary leading-tight ${isLarge ? 'text-[16px] lg:text-[18px]' : 'text-[14px] lg:text-[15px]'}`}>
                              {s.name}
                            </p>
                            <p className="mt-1 font-mono text-[11px] lg:text-xs font-semibold tracking-wider text-muted-foreground/70 uppercase">
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

              {/* Tablet: Smaller Grid */}
              <div className="hidden sm:flex md:hidden flex-wrap justify-center gap-6">
                {supporters.map((s, index) => {
                  const isLarge = s.size === 'large'
                  return (
                    <div
                      key={s.sub}
                      className={`relative transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer group ${
                        isLarge ? 'w-[260px]' : 'w-[200px]'
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

              {/* Mobile: Animated Horizontal Scroll */}
              <div className="sm:hidden relative overflow-hidden">
                <div className="flex gap-5 animate-scroll-left">
                  {[...supporters, ...supporters].map((s, index) => {
                    const isLarge = s.size === 'large'
                    return (
                      <div
                        key={`${s.sub}-${index}`}
                        className={`relative flex-shrink-0 transition-all duration-300 hover:scale-105 cursor-pointer group ${
                          isLarge ? 'w-[240px]' : 'w-[190px]'
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
