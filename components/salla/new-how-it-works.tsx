'use client'

import { useState } from 'react'
import { Smartphone, Trash2, FlaskConical, Recycle, Sparkles, DollarSign, Gift, Gamepad2, Camera, Package, ArrowRight } from 'lucide-react'

export function NewHowItWorks() {
  const [activeMethod, setActiveMethod] = useState(0)
  const [hoveredMethod, setHoveredMethod] = useState<number | null>(null)

  const methods = [
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'عندك مخلفات؟',
      subtitle: 'اه طب كويس!',
      description: 'جمع كل نوع لوحده، حمل التطبيق، صوره، حدد مكانك، واحنا نجيلك!',
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      steps: [
        'اجمع المخلفات حسب النوع (بلاستيك، كانز، كرتون، إلخ)',
        'حمّل تطبيق سلة على موبايلك',
        'صور المخلفات وحدد المكان',
        'احنا نجيلك ونجمعها من عندك'
      ]
    },
    {
      icon: <Trash2 className="w-12 h-12" />,
      title: 'عندك زبالة؟',
      subtitle: 'نفس الحاجة كدا!',
      description: 'مش لازم تزود نفسك، احنا نجيلك ونجمعها من عندك بكاش لحظي.',
      color: 'from-violet-500 to-purple-500',
      bgColor: 'bg-violet-50',
      borderColor: 'border-violet-200',
      steps: [
        'عندك زبالة كتير؟',
        'موبايلك وحدك كفاية',
        'نجيلك في أي وقت',
        'نقدرها لك فوراً في المحفظة'
      ]
    },
    {
      icon: <FlaskConical className="w-12 h-12" />,
      title: 'في الجامعة؟',
      subtitle: 'خلصت قزازة؟',
      description: 'معلش لو رميتها، بتعبيط! حطها في Salla Box وخد فلوس وعروض وخصومات!',
      color: 'from-fuchsia-500 to-pink-500',
      bgColor: 'bg-fuchsia-50',
      borderColor: 'border-fuchsia-200',
      steps: [
        'خلصت قزازة مية أو كنزاية؟',
        'لا ترميها في الزبالة',
        'حطها في ماكينة Salla Box',
        'اخد فلوس، عروض، وخصومات كتير'
      ]
    },
    {
      icon: <Gamepad2 className="w-12 h-12" />,
      title: 'سلتي للأطفال',
      subtitle: 'تعليمهم الادخار!',
      description: 'تعليم ابنك ازاي يعمل فلوس وهو صغير - يشتري سلتي، يملؤها بالمخلفات، ويختار لعبة!',
      color: 'from-rose-500 to-orange-500',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-200',
      steps: [
        'اشتري سلتي من المتاجر الشغالة معنا',
        'ابنك يملؤها بالمخلفات البلاستيكية والقزازي',
        'يفتح التطبيق، يصور، ويبعث أوردر',
        'يختار اللعبة اللي عايزها (مصنوعة من القزايز)'
      ]
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50" id="new-how-it-works">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-bold mb-4 animate-pulse">
            طرق جديدة
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            4 طرق <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">مبتكرة</span> للاستفادة من المخلفات
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            اختر الطريقة اللي تناسبك، واحنا نوفرلك أسهل وأسرع طريقة لتحويل المخلفات لفلوس
          </p>
        </div>

        {/* Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {methods.map((method, index) => (
            <div
              key={index}
              onClick={() => setActiveMethod(index)}
              onMouseEnter={() => setHoveredMethod(index)}
              onMouseLeave={() => setHoveredMethod(null)}
              className={`cursor-pointer rounded-3xl p-6 sm:p-8 transition-all duration-300 border-2 ${
                activeMethod === index
                  ? `${method.bgColor} ${method.borderColor} shadow-2xl scale-105`
                  : 'bg-white border-gray-200 hover:border-purple-300 shadow-lg hover:scale-102'
              } ${hoveredMethod === index ? 'scale-102' : ''}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-xl ${method.bgColor} ${method.borderColor} flex-shrink-0 transition-transform duration-300 ${hoveredMethod === index ? 'scale-110 rotate-12' : ''}`}>
                  <div className={`text-transparent bg-clip-text bg-gradient-to-br ${method.color}`}>
                    {method.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-1">{method.title}</h3>
                  <p className="text-sm sm:text-base font-semibold text-gray-600">{method.subtitle}</p>
                </div>
                {activeMethod === index && (
                  <ArrowRight className="w-6 h-6 text-purple-600 animate-bounce" />
                )}
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">{method.description}</p>
              <div className="flex flex-wrap gap-2">
                {method.steps.slice(0, 2).map((step, i) => (
                  <span key={i} className="text-xs sm:text-sm px-3 py-1 bg-white rounded-full border-2 border-gray-200">
                    {step}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Active Method Details */}
        <div className={`rounded-3xl p-6 sm:p-8 md:p-12 border-4 ${methods[activeMethod].bgColor} ${methods[activeMethod].borderColor} shadow-2xl`}>
          <div className="flex items-center gap-4 mb-8">
            <div className={`p-4 rounded-2xl ${methods[activeMethod].bgColor} ${methods[activeMethod].borderColor} animate-pulse`}>
              {methods[activeMethod].icon}
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900">{methods[activeMethod].title}</h3>
              <p className="text-base sm:text-lg font-semibold text-gray-600">{methods[activeMethod].subtitle}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {methods[activeMethod].steps.map((step, index) => (
              <div key={index} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0 bg-gradient-to-br ${methods[activeMethod].color}`}>
                  {index + 1}
                </div>
                <p className="text-sm sm:text-base text-gray-700 font-semibold">{step}</p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="mt-8 pt-6 border-t-2 border-gray-200">
            <h4 className="text-xl font-black text-gray-900 mb-4">المميزات</h4>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border-2 border-indigo-200 hover:border-indigo-400 transition-colors duration-300 cursor-pointer hover:scale-105">
                <DollarSign className="w-5 h-5 text-indigo-600" />
                <span className="text-sm font-semibold text-gray-700">كاش لحظي</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border-2 border-purple-200 hover:border-purple-400 transition-colors duration-300 cursor-pointer hover:scale-105">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-semibold text-gray-700">عروض وخصومات</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border-2 border-pink-200 hover:border-pink-400 transition-colors duration-300 cursor-pointer hover:scale-105">
                <Gift className="w-5 h-5 text-pink-600" />
                <span className="text-sm font-semibold text-gray-700">جوائز</span>
              </div>
              {activeMethod === 3 && (
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border-2 border-orange-200 hover:border-orange-400 transition-colors duration-300 cursor-pointer hover:scale-105">
                  <Gamepad2 className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-semibold text-gray-700">تعليم وتطوير المهارات</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
