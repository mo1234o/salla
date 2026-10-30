'use client'

import { useState } from 'react'
import { Baby, ShoppingBag, Phone, Camera, Gift, Gamepad2, PiggyBank, GraduationCap, Recycle, Sparkles, ArrowRight, Star } from 'lucide-react'

export function SaltiKids() {
  const [activeStep, setActiveStep] = useState(0)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  const steps = [
    {
      icon: <ShoppingBag className="w-16 h-16" />,
      title: 'اشتري سلتي',
      description: 'اشتري سلتي من كل المتاجر الشغالة معنا بسعر رخيص جداً',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50'
    },
    {
      icon: <Recycle className="w-16 h-16" />,
      title: 'املأ سلتي',
      description: 'ابنك يبدأ يملاها بالمخلفات البلاستيكية والقزازي',
      color: 'from-orange-500 to-amber-500',
      bgColor: 'bg-orange-50'
    },
    {
      icon: <Phone className="w-16 h-16" />,
      title: 'افتح التطبيق',
      description: 'يفتح التيلفون، يا ست الكل أو يا سيد الناس، يصور ويبعث أوردر',
      color: 'from-violet-500 to-purple-500',
      bgColor: 'bg-violet-50'
    },
    {
      icon: <Gamepad2 className="w-16 h-16" />,
      title: 'اختار اللعبة',
      description: 'يختار اللعبة اللي عايزها - واللعبة بتتعمل من القزايز بتاعته دي!',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50'
    }
  ]

  const benefits = [
    { icon: <GraduationCap />, text: 'تعليم الوعي بالبيئة' },
    { icon: <PiggyBank />, text: 'تعليم الادخار من صغير' },
    { icon: <Sparkles />, text: 'تشجيع باللعبة والفلوس' },
    { icon: <Gift />, text: 'جوايز وعروض كتير' },
    { icon: <Baby />, text: 'ميتعبكيش يا ست الكل' },
    { icon: <Recycle />, text: 'زرع الوعي في العيال' }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-rose-50 via-pink-50 to-violet-50" id="salti-kids">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 rounded-full text-sm font-bold mb-4 animate-pulse">
            بيزنس موديل جديد
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-violet-600">سلتي</span> للأطفال
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            تعليم ابنك ازاي يعمل فلوس وهو صغير - بنزرع الوعي بالمحافظة على البيئة ونشجعه بلعبة وفلوس وجوايز
          </p>
        </div>

        {/* Main Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              onClick={() => setActiveStep(index)}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
              className={`cursor-pointer rounded-3xl p-6 transition-all duration-300 border-2 ${
                activeStep === index
                  ? `${step.bgColor} border-rose-300 shadow-2xl scale-105`
                  : 'bg-white border-gray-200 hover:border-pink-300 shadow-lg hover:scale-102'
              } ${hoveredStep === index ? 'scale-102' : ''}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`p-4 rounded-2xl mb-4 ${step.bgColor} transition-transform duration-300 ${hoveredStep === index ? 'scale-110 rotate-12' : ''}`}>
                  <div className={`text-transparent bg-clip-text bg-gradient-to-br ${step.color}`}>
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
                {activeStep === index && (
                  <ArrowRight className="w-6 h-6 text-rose-600 mt-2 animate-bounce" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Active Step Detail */}
        <div className={`rounded-3xl p-8 sm:p-12 border-4 ${steps[activeStep].bgColor} border-rose-300 shadow-2xl mb-12`}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className={`p-8 rounded-3xl ${steps[activeStep].bgColor} flex-shrink-0 animate-pulse`}>
              <div className={`text-transparent bg-clip-text bg-gradient-to-br ${steps[activeStep].color}`}>
                {steps[activeStep].icon}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">{steps[activeStep].title}</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">{steps[activeStep].description}</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-gray-700 border-2 border-rose-200 hover:border-rose-400 transition-colors cursor-pointer hover:scale-105">
                  سهل وبسيط
                </span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-gray-700 border-2 border-orange-200 hover:border-orange-400 transition-colors cursor-pointer hover:scale-105">
                  تعليمي
                </span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-gray-700 border-2 border-violet-200 hover:border-violet-400 transition-colors cursor-pointer hover:scale-105">
                  ممتع
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-black text-center text-gray-900 mb-8">
            المميزات اللي يتعلمها ابنك
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 sm:p-6 text-center shadow-lg border-2 border-rose-100 hover:border-rose-300 transition-all hover:scale-105 cursor-pointer">
                <div className="p-3 bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl mx-auto mb-3 w-fit">
                  <div className="text-rose-600">{benefit.icon}</div>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-gray-700">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-violet-600 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black mb-4">يا ست الكل، يا سيد الناس!</h3>
          <p className="text-base sm:text-lg mb-6 max-w-2xl mx-auto opacity-95">
            ميتعبكيش! ابنك هيشوف الفلوس واللعبة والجوائز وهيحب يشترك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-rose-600 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl flex items-center justify-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              اعرف ازاي تحصل على سلتي
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-rose-600 transition-all duration-300 flex items-center justify-center gap-2">
              <Gamepad2 className="w-5 h-5" />
              شوف الألعاب المتاحة
            </button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-300 text-yellow-300 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
