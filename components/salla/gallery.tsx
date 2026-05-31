'use client'

import React from 'react'
import Image from 'next/image'
import { CheckCircle, CreditCard, ArrowRightLeft, ScanLine, FileText, MapPin } from 'lucide-react'
import { getSecureSectionUrl } from '@/lib/secure-url'

const galleryItems = [
  {
    src: '/salla/app-screens/01.jpeg',
    alt: 'شاشة تسجيل حساب جديد في تطبيق سلة - تطبيق إعادة تدوير مصري',
    style: { transform: 'translateX(0px) translateY(0px)', zIndex: 60 },
    opacity: 'opacity-100',
    tooltip: 'سجل بسرعة',
    icon: CheckCircle,
    tooltipPos: 'right-[-6rem] md:right-[-8rem] top-1/4'
  },
  {
    src: '/salla/app-screens/02.jpeg',
    alt: 'شاشة عرض الإشعارات في تطبيق سلة - تطبيق إعادة تدوير مصري',
    style: { transform: 'translateX(160px) translateY(0px)', zIndex: 50 },
    opacity: 'opacity-90',
    tooltip: 'شوف اشعاراتك اول باول',
    icon: CreditCard,
    tooltipPos: 'right-[-4rem] md:right-[-6rem] bottom-1/4'
  },
  {
    src: '/salla/app-screens/03.jpeg',
    alt: 'شاشة إضافة محفظة أو انستا باي في تطبيق سلة - تطبيق إعادة تدوير مصري',
    style: { transform: 'translateX(-160px) translateY(0px)', zIndex: 40 },
    opacity: 'opacity-90',
    tooltip: 'ضيف محفظتك او انستا باي',
    icon: ArrowRightLeft,
    tooltipPos: 'left-[-4rem] md:left-[-6rem] top-1/3'
  },
  {
    src: '/salla/app-screens/05.jpeg',
    alt: 'شاشة اختيار الخدمات في تطبيق سلة - تطبيق إعادة تدوير مصري',
    style: { transform: 'translateX(320px) translateY(-40px)', zIndex: 30 },
    opacity: 'opacity-75',
    tooltip: 'اختار العاوز تعمله',
    icon: ScanLine,
    tooltipPos: 'right-[-3rem] top-10'
  },
  {
    src: '/salla/app-screens/06.jpeg',
    alt: 'شاشة تتبع تفاصيل الطلبات في تطبيق سلة - تطبيق إعادة تدوير مصري',
    style: { transform: 'translateX(-320px) translateY(-40px)', zIndex: 20 },
    opacity: 'opacity-75',
    tooltip: 'تابع تفاصيل كل طلب',
    icon: FileText,
    tooltipPos: 'left-[-3rem] bottom-10'
  },
  {
    src: '/salla/app-screens/07.jpeg',
    alt: 'شاشة معرفة قيمة العبوات قبل وصول مندوب سلة - تطبيق إعادة تدوير مصري',
    style: { transform: 'translateX(0px) translateY(-80px)', zIndex: 10 },
    opacity: 'opacity-50',
    tooltip: 'اعرف هتكسب كام قبل ما نجيلك',
    icon: MapPin,
    tooltipPos: 'top-[-3rem] left-1/2 -translate-x-1/2'
  },
]

export function Gallery() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null)

  return (
    <section id={getSecureSectionUrl('gallery').replace('#', '')} className="relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background mx-auto w-full px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-2xl text-center relative z-20">
        <span className="font-heading text-sm font-bold uppercase tracking-wide text-primary shadow-sm">
          جولة جوه أبلكيشن سلة
        </span>
        <h2 className="mt-3 font-heading text-3xl font-black text-foreground text-balance sm:text-4xl drop-shadow-sm">
          أناقة ووضوح في كل شاشة
        </h2>
      </div>

      <div className="mt-4 sm:mt-6 w-full h-[500px] md:h-[700px] lg:h-[800px] flex items-center justify-center relative">
        <div
          className="relative w-full max-w-[260px] md:max-w-[300px] flex items-center justify-center scale-[0.6] sm:scale-75 lg:scale-100"
        >
          {galleryItems.map((item, idx) => (
            <div
              key={item.src}
              className={`absolute top-0 left-0 w-full aspect-[9/19] rounded-[2.5rem] border-[8px] border-card bg-card shadow-xl transition-all duration-300 cursor-pointer ${item.opacity}`}
              style={{
                ...item.style,
                transform: activeIndex === idx ? 'translateY(-100px) scale(1.2)' : item.style.transform,
                zIndex: activeIndex === idx ? 100 : item.style.zIndex,
                opacity: activeIndex === idx ? 1 : parseFloat(item.opacity.replace('opacity-', '')) / 100
              }}
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
            >
              {/* Phone Content */}
              <div className="relative w-full h-full overflow-hidden rounded-[2rem] bg-muted">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  className="object-cover"
                  style={{ objectPosition: 'center -12%' }}
                />

                {/* Glossy Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
              </div>

              {/* Tooltip / Call-out label */}
              <div
                className={`absolute ${item.tooltipPos} w-max max-w-[180px] bg-background/95 backdrop-blur border border-border rounded-xl p-3 shadow-lg transition-all duration-300 hover:scale-110 flex items-center gap-3 z-50`}
              >
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="size-4" />
                </div>
                <span className="font-heading text-sm font-bold text-foreground">
                  {item.tooltip}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-primary/5 blur-3xl rounded-full pointer-events-none z-0" />
    </section>
  )
}
