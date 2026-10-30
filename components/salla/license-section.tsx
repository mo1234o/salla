'use client'

import { useState } from 'react'
import { Award, Building2, MapPin, FileText } from 'lucide-react'

export function LicenseSection() {
  const [isVisible, setIsVisible] = useState(false)

  useState(() => {
    setIsVisible(true)
  })

  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50" id="license">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold mb-4">
            ترخيص رسمي
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            <span className="text-emerald-600">ترخيص مقر العمل</span> المعتمد
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نحن فخورون بحصولنا على ترخيص مقر العمل الرسمي من كرياتيفا المنصورة، محافظة الدقهلية
          </p>
        </div>

        {/* License Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-emerald-200">
          {/* Decorative Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-6 sm:p-8">
            <div className="flex items-center justify-center gap-4">
              <Award className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-black text-white">ترخيص مقر العمل</h3>
                <p className="text-emerald-100 font-semibold">Creative Hub Menoufia</p>
              </div>
              <Award className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
            </div>
          </div>

          {/* License Content */}
          <div className="p-6 sm:p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {/* License Details */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-100 rounded-xl flex-shrink-0">
                    <Building2 className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg sm:text-xl mb-1">الجهة المانحة</h4>
                    <p className="text-gray-600 text-sm sm:text-base">كرياتيفا المنصورة</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 rounded-xl flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg sm:text-xl mb-1">المحافظة</h4>
                    <p className="text-gray-600 text-sm sm:text-base">محافظة الدقهلية</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-100 rounded-xl flex-shrink-0">
                    <FileText className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg sm:text-xl mb-1">نوع الترخيص</h4>
                    <p className="text-gray-600 text-sm sm:text-base">ترخيص مقر العمل الرسمي</p>
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center shadow-2xl">
                    <div className="text-center text-white">
                      <Award className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-2" />
                      <p className="text-xl sm:text-2xl font-black">مرخص رسمياً</p>
                      <p className="text-sm sm:text-base font-semibold opacity-90">Creative Hub</p>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-black text-sm sm:text-base">✓</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Message */}
            <div className="mt-8 pt-6 border-t-2 border-emerald-100 text-center">
              <p className="text-gray-700 font-semibold text-sm sm:text-base">
                هذا الترخيص يعكس التزامنا بالمعايير المهنية وجودة الخدمات المقدمة
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
