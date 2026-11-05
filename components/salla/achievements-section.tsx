'use client'

import Image from 'next/image'
import { Trophy, Award, Star } from 'lucide-react'

const achievements = [
  {
    src: '/salla/impact-makers-win.jpg',
    title: 'المركز الأول',
    subtitle: 'Impact Makers',
    desc: 'مسابقة نُعيد.. نُبدع.. نَبني 2026',
    icon: Trophy,
    color: 'from-yellow-500 to-amber-500',
    position: 'top'
  },
  {
    src: '/salla/img-5.jpg',
    title: 'المركز الثالث',
    subtitle: 'Hult Prize',
    desc: 'تكريم على مستوى مصر',
    icon: Award,
    color: 'from-blue-500 to-indigo-500',
    position: 'middle'
  },
  {
    src: '/salla/silicon-waha-top3.jpg',
    title: 'المركز الثالث',
    subtitle: 'Silicon Waha',
    desc: 'Hackathon For Impact 7th Edition',
    icon: Star,
    color: 'from-green-500 to-emerald-500',
    position: 'bottom'
  },
]

export function AchievementsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white" id="achievements">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 text-yellow-700 px-4 py-1.5 text-sm font-bold mb-4">
            <Trophy className="w-4 h-4" />
            إنجازاتنا
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            مراكز <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600">متقدمة</span> في مسابقات عالمية
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            فاز فريق سلة بمواقع متقدمة في مسابقات عالمية ومحلية، وهذا دليل على التزامنا بالتميز والابتكار
          </p>
        </div>

        {/* Pyramid/Triangle Layout */}
        <div className="flex flex-col items-center gap-6 md:gap-8">
          {/* Top Achievement - Largest */}
          <div className="relative group">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-yellow-400/40 via-amber-500/30 to-yellow-600/40 blur-2xl transition-all duration-700 group-hover:blur-3xl group-hover:scale-110 opacity-70" />
            <div className="relative overflow-hidden rounded-[2rem] border-[8px] border-transparent bg-gradient-to-br from-yellow-500 via-amber-400 to-yellow-600 shadow-2xl transition-all duration-700 hover:!-translate-y-4 hover:shadow-[0_20px_50px_rgba(234,179,8,0.5)]">
              <div className="absolute inset-0 rounded-[2rem] border-[2px] border-black/20" />
              <Image
                src={achievements[0].src}
                alt={achievements[0].title}
                width={800}
                height={800}
                className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
              <div className="absolute top-4 right-4">
                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                  <achievements[0].icon className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl sm:text-2xl font-black text-gray-900">{achievements[0].title}</h3>
              <p className="text-sm sm:text-base font-semibold text-yellow-600">{achievements[0].subtitle}</p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">{achievements[0].desc}</p>
            </div>
          </div>

          {/* Middle Row - Two Cards */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12 w-full">
            {achievements.slice(1).map((achievement, index) => (
              <div key={achievement.title} className="relative group flex-1 max-w-xs">
                <div className="absolute -inset-4 rounded-[1.5rem] bg-gradient-to-tr from-blue-400/40 via-indigo-500/30 to-green-500/40 blur-xl transition-all duration-700 group-hover:blur-2xl group-hover:scale-110 opacity-70" />
                <div className="relative overflow-hidden rounded-[1.5rem] border-[6px] border-transparent bg-gradient-to-br from-blue-500 via-indigo-500 to-green-500 shadow-xl transition-all duration-700 hover:!-translate-y-3 hover:shadow-[0_15px_40px_rgba(59,130,246,0.5)]">
                  <div className="absolute inset-0 rounded-[1.5rem] border-[2px] border-black/20" />
                  <Image
                    src={achievement.src}
                    alt={achievement.title}
                    width={400}
                    height={400}
                    className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                  <div className="absolute top-3 right-3">
                    <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                      <achievement.icon className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <h3 className="text-lg sm:text-xl font-black text-gray-900">{achievement.title}</h3>
                  <p className="text-xs sm:text-sm font-semibold text-blue-600">{achievement.subtitle}</p>
                  <p className="text-xs text-gray-600 mt-1">{achievement.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Hidden Text */}
        <div className="sr-only" aria-hidden="true">
          <p>
            فريق Salla Team حصل على المركز الأول في مسابقة نُعيد.. نُبدع.. نَبني 2026، والمركز الثالث في Hult Prize على مستوى مصر، والمركز الثالث في Hackathon For Impact 7th Edition من Silicon Waha.
            Impact Makers Salla Team هو الفائز رقم واحد في تدوير المخلفات وإعادة التدوير في مصر.
          </p>
        </div>
      </div>
    </section>
  )
}
