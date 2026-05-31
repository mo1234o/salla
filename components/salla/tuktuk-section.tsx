'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Bike, X } from 'lucide-react'
import { getSecureSectionUrl } from '@/lib/secure-url'

const tukTuks = [
  {
    src: '/salla/tuktuk-blue.png',
    alt: 'توك توك سلة أزرق - أسطول جمع العبوات البلاستيكية - تطبيق إعادة تدوير مصري',
  },
  {
    src: '/salla/tuktuk-orange.png',
    alt: 'توك توك سلة برتقالي - أسطول جمع العبوات البلاستيكية - تطبيق إعادة تدوير مصري',
  },
  {
    src: '/salla/tuktuk-green.png',
    alt: 'توك توك سلة أخضر - أسطول جمع العبوات البلاستيكية - تطبيق إعادة تدوير مصري',
  },
  {
    src: '/salla/tuktuk-red.png',
    alt: 'توك توك سلة أحمر - أسطول جمع العبوات البلاستيكية - تطبيق إعادة تدوير مصري',
  }
]

export function TukTukSection() {
  const [activeImage, setActiveImage] = useState<string | null>(null)

  return (
    <section id={getSecureSectionUrl('tuktuk').replace('#', '')} className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-secondary/10 py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 mb-6">
            <Bike className="w-5 h-5 text-primary" />
            <span className="text-sm font-bold text-primary">سلة لو كان عندها توك توك</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-foreground text-balance mb-6">
            <span className="text-primary">توك توك</span> سلة
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            تخيل لو سلة كان عندها أسطول من التوك توك
          </p>
        </div>

        {/* Simple Grid Display */}
        <div className="grid grid-cols-2 gap-4">
          {tukTuks.map((tuk, index) => {
            const rotations = [-8, 5, -6, 10]
            return (
              <div
                key={index}
                className="relative rounded-xl border-4 border-card bg-card shadow-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setActiveImage(tuk.src)}
                style={{ transform: `rotate(${rotations[index]}deg)` }}
              >
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={tuk.src}
                    alt={tuk.alt}
                    fill
                    loading="lazy"
                    className="object-contain bg-muted"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Image Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl w-full transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-4 -right-4 flex size-10 items-center justify-center rounded-full bg-white text-black shadow-xl hover:bg-gray-100 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={activeImage}
                alt="توك توك سلة - أسطول جمع العبوات البلاستيكية - تطبيق إعادة تدوير مصري"
                fill
                className="object-contain bg-muted"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
