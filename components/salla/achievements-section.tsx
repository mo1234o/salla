'use client'

import Image from 'next/image'
import { Trophy } from 'lucide-react'
import { useState } from 'react'

const achievements = [
  {
    src: '/salla/impact-makers-win.jpg',
    title: 'المركز الأول',
    subtitle: 'Impact Makers',
    desc: 'مسابقة نُعيد.. نُبدع.. نَبني 2026',
    position: 'p1',
    rank: '1st',
    color: 'from-green-500 to-green-600',
    textColor: 'text-green-700',
    baseColor: 'bg-green-500',
  },
  {
    src: '/salla/img-5.jpg',
    title: 'المركز الثالث',
    subtitle: 'Hult Prize',
    desc: 'تكريم على مستوى مصر',
    position: 'p2',
    rank: '3rd',
    color: 'from-blue-500 to-blue-600',
    textColor: 'text-blue-700',
    baseColor: 'bg-blue-500',
  },
  {
    src: '/salla/silicon-waha-top3.jpg',
    title: 'المركز الثالث',
    subtitle: 'Silicon Waha',
    desc: 'Hackathon For Impact 7th Edition',
    position: 'p3',
    rank: 'Top 3',
    color: 'from-blue-500 to-blue-600',
    textColor: 'text-blue-700',
    baseColor: 'bg-blue-500',
  },
]

export function AchievementsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <style>{`
        @keyframes rise {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
        .step-p1 {
          height: 150px;
          background: linear-gradient(180deg, #5cb848, #3f9a33);
          border-color: #3f9a33;
          color: #fff;
          animation: rise 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) both;
          animation-delay: 0.1s;
        }
        .step-p2 {
          height: 96px;
          background: #eef8e9;
          border-color: #d9ecd0;
          color: #1b6aae;
          animation: rise 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) both;
          animation-delay: 0.3s;
        }
        .step-p3 {
          height: 70px;
          background: #eef8e9;
          border-color: #d9ecd0;
          color: #1b6aae;
          animation: rise 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) both;
          animation-delay: 0.45s;
        }
        @media (max-width: 820px) {
          .step-p1 { height: 104px; }
          .step-p2 { height: 68px; }
          .step-p3 { height: 48px; }
        }
      `}</style>

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

          {/* Podium Layout */}
          <div className="flex flex-col sm:flex-row items-end justify-center gap-4 sm:gap-6 max-w-4xl mx-auto">
            {/* Position 2 (Left) */}
            <div className="flex flex-col items-center flex-1 max-w-xs order-2 sm:order-1">
              <div className="w-full bg-white rounded-[26px] p-3 sm:p-4 border border-[#d9ecd0] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                   onClick={() => setSelectedImage(achievements[1].src)}>
                <div className="overflow-hidden rounded-[16px]">
                  <Image
                    src={achievements[1].src}
                    alt={achievements[1].title}
                    width={400}
                    height={400}
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <h2 className="mt-3 text-center text-lg sm:text-xl font-extrabold text-blue-700">
                  {achievements[1].title}
                </h2>
              </div>
              <div className="step-p2 mt-3 sm:mt-4 w-full rounded-[22px_22px_0_0] flex items-center justify-center border-[#d9ecd0] border border-b-0 font-extrabold">
                <span className="text-2xl sm:text-3xl font-black">3<small className="text-sm sm:text-base ml-1 font-medium">rd</small></span>
              </div>
            </div>

            {/* Position 1 (Center - Largest) */}
            <div className="flex flex-col items-center flex-1 max-w-sm order-1 sm:order-2 z-10">
              <div className="w-full bg-white rounded-[26px] p-3 sm:p-4 border-2 border-green-500 shadow-2xl hover:shadow-[0_28px_60px_-24px_rgba(63,154,51,0.6)] transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                   onClick={() => setSelectedImage(achievements[0].src)}>
                <div className="overflow-hidden rounded-[16px]">
                  <Image
                    src={achievements[0].src}
                    alt={achievements[0].title}
                    width={500}
                    height={500}
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <h2 className="mt-3 text-center text-xl sm:text-2xl font-extrabold text-green-700">
                  {achievements[0].title}
                </h2>
              </div>
              <div className="step-p1 mt-3 sm:mt-4 w-full rounded-[22px_22px_0_0] flex items-center justify-center border-green-600 border border-b-0 font-extrabold">
                <span className="text-3xl sm:text-4xl font-black">1<small className="text-lg sm:text-xl ml-1 font-medium">st</small></span>
              </div>
            </div>

            {/* Position 3 (Right) */}
            <div className="flex flex-col items-center flex-1 max-w-xs order-3">
              <div className="w-full bg-white rounded-[26px] p-3 sm:p-4 border border-[#d9ecd0] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                   onClick={() => setSelectedImage(achievements[2].src)}>
                <div className="overflow-hidden rounded-[16px]">
                  <Image
                    src={achievements[2].src}
                    alt={achievements[2].title}
                    width={400}
                    height={400}
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <h2 className="mt-3 text-center text-lg sm:text-xl font-extrabold text-blue-700">
                  {achievements[2].title}
                </h2>
              </div>
              <div className="step-p3 mt-3 sm:mt-4 w-full rounded-[22px_22px_0_0] flex items-center justify-center border-[#d9ecd0] border border-b-0 font-extrabold">
                <span className="text-2xl sm:text-3xl font-black">Top 3</span>
              </div>
            </div>
          </div>

          {/* Base */}
          <div className="mt-0 h-1 rounded-full bg-gradient-to-r from-transparent via-green-500 to-transparent max-w-4xl mx-auto" />

          {/* Image Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-4xl w-full">
                <button
                  className="absolute -top-2 right-0 w-10 h-10 rounded-full bg-green-500 text-white text-2xl font-bold shadow-lg hover:bg-green-600 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage(null)
                  }}
                >
                  ×
                </button>
                <Image
                  src={selectedImage}
                  alt="Enlarged achievement"
                  width={1200}
                  height={1200}
                  className="w-full h-auto max-h-[86vh] object-contain rounded-[18px]"
                />
              </div>
            </div>
          )}

          {/* SEO Hidden Text */}
          <div className="sr-only" aria-hidden="true">
            <p>
              فريق Salla Team حصل على المركز الأول في مسابقة نُعيد.. نُبدع.. نَبني 2026، والمركز الثالث في Hult Prize على مستوى مصر، والمركز الثالث في Hackathon For Impact 7th Edition من Silicon Waha.
              Impact Makers Salla Team هو الفائز رقم واحد في تدوير المخلفات وإعادة التدوير في مصر.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
