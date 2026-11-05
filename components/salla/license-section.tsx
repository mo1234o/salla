'use client'

import { Emoji3D, Emoji3DStyles } from './emoji-3d'

export function LicenseSection() {
  const details = [
    { emoji: '🏢', label: 'مقر العمل', value: 'كرياتيفا المنصورة (Creativa Mansoura)' },
    { emoji: '🏙️', label: 'المدينة', value: 'المنصورة' },
    { emoji: '📍', label: 'المحافظة', value: 'الدقهلية' },
    { emoji: '🌍', label: 'نطاق الشغل', value: 'كل محافظات الجمهورية' },
      ]

  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-white to-green-50" id="license">
      <Emoji3DStyles />
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-4">
            <Emoji3D size="text-lg">📍</Emoji3D> مقر العمل
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            مقر عملنا في <span className="text-green-600">كرياتيفا المنصورة</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            مقرنا في كرياتيفا المنصورة، محافظة الدقهلية، لكن شغلنا في كل مكان في الجمهورية، ومن محافظة لمحافظة بنجمّع وبنفرز وبنوصّل
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-green-100">
          <div className="bg-gradient-to-r from-green-800 via-green-700 to-green-500 p-6 sm:p-8">
            <div className="flex items-center justify-center gap-4 text-center">
              <Emoji3D size="text-5xl">🏢</Emoji3D>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">كرياتيفا المنصورة</h3>
                <p className="text-green-100 font-semibold">Creativa Mansoura · الدقهلية</p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 md:p-10 grid sm:grid-cols-2 gap-4 sm:gap-6">
            {details.map((d, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-green-50 border-2 border-green-100 hover:border-green-300 transition-colors">
                <div className="p-3 bg-white rounded-xl shadow-sm shrink-0">
                  <Emoji3D size="text-3xl">{d.emoji}</Emoji3D>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-0.5">{d.label}</h4>
                  <p className="text-gray-600 text-sm sm:text-base">{d.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="px-6 pb-8 text-center">
            <p className="text-gray-700 font-semibold text-sm sm:text-base">
              من المنصورة بنخدم كل محافظات الجمهورية
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
