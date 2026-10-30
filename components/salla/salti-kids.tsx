'use client'

import { useState } from 'react'
import { Baby, ShoppingBag, Phone, Camera, Gift, Gamepad2, PiggyBank, GraduationCap, Recycle, Sparkles } from 'lucide-react'

export function SaltiKids() {
  const [activeStep, setActiveStep] = useState(0)

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
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: <Phone className="w-16 h-16" />,
      title: 'افتح التطبيق',
      description: 'يفتح التيلفون، يا ست الكل أو يا سيد الناس، يصور ويبعث أوردر',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: <Gamepad2 className="w-16 h-16" />,
      title: 'اختار اللعبة',
      description: 'يختار اللعبة اللي عايزها - واللعبة بتتعمل من القزايز بتاعته دي!',
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-50'
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
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50" id="salti-kids">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 rounded-full text-sm font-bold mb-4">
            بيزنس موديل جديد
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">سلتي</span> للأطفال
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
              className={`cursor-pointer rounded-3xl p-6 transition-all hover:scale-105 border-2 ${
                activeStep === index
                  ? `${step.bgColor} border-pink-300 shadow-2xl scale-105`
                  : 'bg-white border-gray-200 hover:border-pink-200 shadow-lg'
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`p-4 rounded-2xl mb-4 ${step.bgColor}`}>
                  <div className={`text-transparent bg-clip-text bg-gradient-to-br ${step.color}`}>
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Active Step Detail */}
        <div className={`rounded-3xl p-8 sm:p-12 border-4 ${steps[activeStep].bgColor} border-pink-300 shadow-2xl mb-12`}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className={`p-8 rounded-3xl ${steps[activeStep].bgColor} flex-shrink-0`}>
              <div className={`text-transparent bg-clip-text bg-gradient-to-br ${steps[activeStep].color}`}>
                {steps[activeStep].icon}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">{steps[activeStep].title}</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">{steps[activeStep].description}</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-gray-700 border-2 border-pink-200">
                  سهل وبسيط
                </span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-gray-700 border-2 border-purple-200">
                  تعليمي
                </span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-gray-700 border-2 border-blue-200">
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
              <div key={index} className="bg-white rounded-2xl p-4 sm:p-6 text-center shadow-lg border-2 border-pink-100 hover:border-pink-300 transition-all hover:scale-105">
                <div className="p-3 bg-pink-100 rounded-xl mx-auto mb-3 w-fit">
                  <div className="text-pink-600">{benefit.icon}</div>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-gray-700">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black mb-4">يا ست الكل، يا سيد الناس!</h3>
          <p className="text-base sm:text-lg mb-6 max-w-2xl mx-auto opacity-95">
            ميتعبكيش! ابنك هيشوف الفلوس واللعبة والجوائز وهيحب يشترك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-pink-600 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition-all">
              اعرف ازاي تحصل على سلتي
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-pink-600 transition-all">
              شوف الألعاب المتاحة
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
