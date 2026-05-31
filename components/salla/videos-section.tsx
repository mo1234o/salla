'use client'

import React from 'react'
import { Play, Tv, Award } from 'lucide-react'
import { getSecureSectionUrl } from '@/lib/secure-url'

const videos = [
  {
    src: '/salla/videos/watn-digital.mp4',
    title: 'لقاء تلفزيوني مع قناة وطن رقمي',
    description: 'حوار خاص مع تطبيق سلة - تطبيق إعادة تدوير مصري',
    icon: Tv,
    thumbnail: '/salla/videos/thumbnails/watn-digital.png'
  },
  {
    src: '/salla/videos/silicon-waha-pitch.mp4',
    title: 'Waha Connect 4th edition',
    description: 'Pitch at Silicon Waha - Honored by Dr. Rifaat Hegazy - تطبيق إعادة تدوير مصري',
    icon: Award,
    thumbnail: '/salla/videos/thumbnails/silicon-waha.png'
  }
]

export function VideosSection() {
  return (
    <section id={getSecureSectionUrl('videos').replace('#', '')} className="relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-foreground text-balance mb-6">
            <span className="text-primary">سلة</span> في الإعلام
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            شاهدنا في الإعلام والتكريم من أكبر الجهات
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative rounded-2xl border-4 border-card bg-card shadow-xl overflow-hidden group"
            >
              <div className="relative aspect-video">
                <video
                  src={video.src}
                  poster={video.thumbnail}
                  controls
                  className="w-full h-full"
                  style={{
                    objectFit: index === 1 ? 'contain' : 'cover',
                    objectPosition: 'center center',
                    backgroundColor: index === 1 ? '#000' : 'transparent'
                  }}
                >
                  <track kind="captions" srcLang="ar" label="Arabic captions" />
                </video>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
                    <video.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {video.title}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
