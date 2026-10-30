'use client'

import { useState } from 'react'
import { Award, Building2, MapPin, FileText, ShieldCheck, Star } from 'lucide-react'

export function LicenseSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [clickedBadge, setClickedBadge] = useState(false)

  useState(() => {
    setIsVisible(true)
  })

  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50" id="license">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-full text-sm font-bold mb-4 animate-pulse">
            ترخيص رسمي
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600">ترخيص مقر العمل</span> المعتمد
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نحن فخورون بحصولنا على ترخيص مقر العمل الرسمي من كرياتيفا المنصورة، محافظة الدقهلية
          </p>
        </div>

        {/* License Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-amber-200 hover:border-orange-300 transition-all duration-300">
          {/* Decorative Header */}
          <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 p-6 sm:p-8">
            <div className="flex items-center justify-center gap-4">
              <Award className="w-12 h-12 sm:w-16 sm:h-16 text-white animate-bounce" style={{ animationDuration: '2s' }} />
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-black text-white">ترخيص مقر العمل</h3>
                <p className="text-amber-100 font-semibold">Creative Hub Menoufia</p>
              </div>
              <Award className="w-12 h-12 sm:w-16 sm:h-16 text-white animate-bounce" style={{ animationDuration: '2s' }} />
            </div>
          </div>

          {/* License Content */}
          <div className="p-6 sm:p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {/* License Details */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-4 group hover:scale-105 transition-transform duration-300">
                  <div className="p-3 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex-shrink-0 group-hover:from-amber-200 group-hover:to-orange-200 transition-colors">
                    <Building2 className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg sm:text-xl mb-1">الجهة المانحة</h4>
                    <p className="text-gray-600 text-sm sm:text-base">كرياتيفا المنصورة</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group hover:scale-105 transition-transform duration-300">
                  <div className="p-3 bg-gradient-to-br from-orange-100 to-rose-100 rounded-xl flex-shrink-0 group-hover:from-orange-200 group-hover:to-rose-200 transition-colors">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg sm:text-xl mb-1">المحافظة</h4>
                    <p className="text-gray-600 text-sm sm:text-base">محافظة الدقهلية</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group hover:scale-105 transition-transform duration-300">
                  <div className="p-3 bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl flex-shrink-0 group-hover:from-rose-200 group-hover:to-pink-200 transition-colors">
                    <FileText className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg sm:text-xl mb-1">نوع الترخيص</h4>
                    <p className="text-gray-600 text-sm sm:text-base">ترخيص مقر العمل الرسمي</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group hover:scale-105 transition-transform duration-300">
                  <div className="p-3 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex-shrink-0 group-hover:from-pink-200 group-hover:to-purple-200 transition-colors">
                    <ShieldCheck className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg sm:text-xl mb-1">الحالة</h4>
                    <p className="text-gray-600 text-sm sm:text-base">نشط ومعتمد</p>
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div className="flex items-center justify-center">
                <div
                  className="relative cursor-pointer"
                  onClick={() => setClickedBadge(!clickedBadge)}
                >
                  <div
                    className={`w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${
                      clickedBadge ? 'scale-110 rotate-180' : 'hover:scale-105'
                    }`}
                  >
                    <div className="text-center text-white">
                      <Award className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-2 animate-spin" style={{ animationDuration: '10s' }} />
                      <p className="text-xl sm:text-2xl font-black">مرخص رسمياً</p>
                      <p className="text-sm sm:text-base font-semibold opacity-90">Creative Hub</p>
                      <div className="flex items-center justify-center gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-400 to-amber-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <span className="text-white font-black text-sm sm:text-base">✓</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Message */}
            <div className="mt-8 pt-6 border-t-2 border-amber-100 text-center">
              <p className="text-gray-700 font-semibold text-sm sm:text-base mb-4">
                هذا الترخيص يعكس التزامنا بالمعايير المهنية وجودة الخدمات المقدمة
              </p>
              <a
                href="/license.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-bold shadow-lg hover:scale-105 transition-all duration-300"
              >
                <FileText className="w-5 h-5" />
                عرض ترخيص مقر العمل
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
