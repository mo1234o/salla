'use client'

import Image from 'next/image'
import { Linkedin, Facebook, Youtube } from 'lucide-react'
import { getSecureSectionUrl } from '@/lib/secure-url'

const founders = [
  {
    name: 'سامي عوض',
    role: 'مهندس ومؤسس مشارك',
    img: '/salla/sami.jpg',
    social: [
      { icon: Linkedin, href: 'https://www.linkedin.com/in/samy-awad-samy', label: 'LinkedIn' },
      { icon: Facebook, href: 'https://www.facebook.com/samy.awad.9638', label: 'Facebook' },
    ],
  },
  {
    name: 'مصطفى الجيزاوي',
    role: 'مهندس مؤسس',
    img: '/salla/mostafa.jpg',
    social: [
      { icon: Linkedin, href: 'https://www.linkedin.com/in/mostafa-algezawy-5142a0307', label: 'LinkedIn' },
      { icon: Facebook, href: 'https://www.facebook.com/mostafa.algezawy.2025/', label: 'Facebook' },
      { icon: Youtube, href: 'https://www.youtube.com/@mostafa_algezawy', label: 'YouTube' },
    ],
  },
]

export function Team() {
  return (
    <section id={getSecureSectionUrl('team').replace('#', '')} className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-2xl text-center">
        <span className="font-heading text-sm font-bold uppercase tracking-wide text-primary">
          المؤسسين
        </span>
        <h2 className="mt-3 font-heading text-3xl font-black text-foreground text-balance sm:text-4xl">
          اتنين مهندسين قالوا "مابدهاش"
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          ورا "سلة" عقلين قرروا يحوّلوا فكرة تخرجهم لحاجة حقيقية تنفع البلد.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
        {founders.map((f) => (
          <div
            key={f.name}
            className="group relative"
            style={{ perspective: '1000px' }}
          >
            {/* Image Card */}
            <div
              className="relative overflow-hidden rounded-[2.5rem] border-[6px] border-border bg-card shadow-xl transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative aspect-[3/4] w-full">
                <Image 
                  src={f.img} 
                  alt={`${f.name} - ${f.role} مؤسس تطبيق سلة - تطبيق إعادة تدوير مصري`} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-y-6" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              
              {/* Name and Role */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center sm:p-8 translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                <h3 className="font-heading text-2xl font-black text-white drop-shadow-lg sm:text-3xl">
                  {f.name}
                </h3>
                <p className="mt-2 text-base font-bold text-primary drop-shadow-md">
                  {f.role}
                </p>
              </div>
            </div>

            {/* 3D Social Media Links Under Image */}
            <div
              className="mt-6 flex justify-center gap-4 transition-all duration-500 group-hover:translate-z-10"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {f.social.map((social, index) => (
                <div
                  key={social.label}
                  className="transition-all duration-500"
                  style={{
                    transform: `rotateY(${index * 15 - 15}deg) translateZ(${20 + index * 10}px)`,
                  }}
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-all duration-300 hover:scale-125 hover:bg-primary/90 hover:rotate-12 hover:shadow-2xl hover:ring-4 hover:ring-primary/50"
                  >
                    <social.icon className="size-6" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
