'use client'

import Image from 'next/image'
import { Trophy, Building2, GraduationCap, Cpu, Award } from 'lucide-react'
import { getSecureSectionUrl } from '@/lib/secure-url'

const supporters = [
  { icon: GraduationCap, logo: '/salla/iti.svg', name: 'معهد تكنولوجيا المعلومات', sub: 'ITI' },
  { icon: Building2, logo: '/salla/dtu.jpg', name: 'جامعة الدلتا التكنولوجية', sub: 'DTU' },
  { icon: Cpu, logo: '/salla/nti.png', name: 'المعهد القومي للاتصالات', sub: 'NTI' },
  { icon: Award, logo: '/salla/hult-prize.jpg', name: 'هالت برايز', sub: 'Hult Prize' },
  { icon: Cpu, logo: '/salla/silicon-waha.jpg', name: 'سيليكون واحة', sub: 'Silicon Waha' },
  { icon: Building2, logo: '/salla/supporters/simplex.webp', name: 'Simplex', sub: 'SIMPLEX' },
]

export function Supporters() {
  return (
    <section id={getSecureSectionUrl('supporters').replace('#', '')} className="border-y border-border bg-gradient-to-b from-muted/30 to-background overflow-hidden relative">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          <div className="relative order-last lg:order-first mx-auto w-full max-w-md group">
            <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-primary/40 to-secondary/30 blur-2xl transition-all duration-700 group-hover:blur-3xl group-hover:scale-110 opacity-70" />
            <div className="relative overflow-hidden rounded-[2.5rem] border-[8px] border-card bg-card shadow-2xl transition-all duration-700 hover:!-translate-y-4 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <Image
                src="/salla/img-5.jpg"
                alt="تكريم تطبيق سلة بالمركز الثالث في هالت برايز على مستوى مصر - تطبيق إعادة تدوير مصري"
                width={900}
                height={900}
                className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90" />
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

            {/* 3D Horizontal Supporters Display */}
            <div className="mt-12 sm:mt-20 w-full">
              <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                {supporters.map((s, index) => {
                  return (
                    <div
                      key={s.sub}
                      className="relative w-[200px] sm:w-[220px] transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer group"
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
                          <span className="flex h-16 w-full items-center justify-center rounded-xl bg-white p-2 shadow-inner">
                            <img
                              src={s.logo}
                              alt={`${s.name} - ${s.sub} داعم تطبيق سلة - تطبيق إعادة تدوير مصري`}
                              className="max-h-full max-w-full object-contain"
                            />
                          </span>
                          <div>
                            <p className="font-heading text-[13px] sm:text-[14px] font-bold text-secondary leading-tight">
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
            </div>
          </div>
        </div>
      </div>
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] aspect-square bg-primary/10 blur-[100px] rounded-full pointer-events-none z-0" />
    </section>
  )
}
