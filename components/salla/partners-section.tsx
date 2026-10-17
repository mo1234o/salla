'use client'

import { useState, useEffect } from 'react'
import { Truck, Factory, CheckCircle, ArrowRight } from 'lucide-react'

export function PartnersSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [currentVehicle, setCurrentVehicle] = useState(0)

  const vehicles = [
    { name: 'تروسيكل', icon: '🛵', desc: 'لتوصيل الطلبات السريعة' },
    { name: 'روبابيكيا', icon: '🚗', desc: 'لنقل الكميات الكبيرة' },
    { name: 'نص نقل', icon: '🚚', desc: 'للشحن الثقيل والمصانع' },
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentVehicle((prev) => (prev + 1) % vehicles.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const roles = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'شريك جامع: اشتغل وزوّد دخلك',
      subtitle: 'لصاحب تروسيكل أو نص نقل أو عربية روبابيكيا',
      benefits: [
        'طلبات استلام جاهزة من البيوت والمحلات والشركات والمصانع في منطقتك',
        'تعرف النوع والكمية والمكان قبل ما تتحرك، فتبطّل لفّ من غير فايدة',
        'بعد فحص الاستلام ومسح كود QR، قيمة الخامة بتنزل في محفظتك'
      ],
      color: 'from-green-600 to-green-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
      iconBg: 'bg-green-100'
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: 'شريك مشتري: وفّر وقتك وبنزينك',
      subtitle: 'لتاجر خردة أو صاحب مخزن أو مصنع',
      benefits: [
        'خامات بالطن: بلاستيك PET وHDPE، ألومنيوم كانز، حديد ونحاس، كرتون، خردة إلكترونيات ومخلفات مصانع',
        'الخامة بتتجمع وتتفرز عن طريق شبكة سلة، بدل ما تلف على المخازن والبيوت بنفسك',
        'وفّر وقت اللف وتكلفة البنزين والسولار، وركّز على شغلك'
      ],
      color: 'from-blue-600 to-blue-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      iconBg: 'bg-blue-100'
    }
  ]

  const stats = [
    { value: '83%', label: 'عائد ربح للطن' },
    { value: 'كاش لحظي', label: 'في محفظتك بعد الاستلام' },
    { value: 'ميزان مصوّر', label: 'وزن واضح وشفاف' },
    { value: 'Salla Box', label: 'ماكينات فرز ذكية' }
  ]

  const materials = [
    'بلاستيك PET', 'بلاستيك HDPE', 'ألومنيوم كانز', 'حديد خردة', 
    'نحاس خردة', 'كرتون قديم', 'خردة إلكترونيات', 'مخلفات مصانع'
  ]

  const cities = [
    'الدقي', 'المهندسين', 'شبرا', 'أكتوبر', 'العاشر من رمضان', 
    'العبور', 'شبين الكوم', 'أشمون', 'قويسنا', 'الساتات', 
    'الجيزة', 'القاهرة', 'المنوفية', 'طنطا', 'المحلة'
  ]

  const steps = [
    { num: 1, title: 'نزّل التطبيق', desc: 'سلة مصر متاح على Google Play' },
    { num: 2, title: 'سجّل كشريك', desc: 'اختار: جامع بمركبتك، أو مشتري تاجر/مصنع' },
    { num: 3, title: 'استقبل الطلبات', desc: 'طلبات حسب منطقتك ونوع الخامة اللي تهمّك' },
    { num: 4, title: 'استلم وخد فلوسك', desc: 'فحص واستلام بكود QR والقيمة في المحفظة' }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-green-50 to-white" id="partners">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-4">
            انضم لشبكة سلة
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            اشتغل مع سلة <span className="text-green-600">وزوّد دخلك</span> من أول طلب
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            عندك <strong className="text-gray-900">تروسيكل</strong> أو <strong className="text-gray-900">عربية نص نقل</strong> أو <strong className="text-gray-900">عربية روبابيكيا</strong>؟ 
            أو بتشتري خردة وعايز <strong className="text-gray-900">توفّر وقت اللف وفلوس البنزين والسولار</strong>؟
            سجّل كشريك في تطبيق سلة مصر، والطلبات بتوصلك لحد عندك حسب منطقتك.
          </p>
        </div>

        {/* Animated Vehicles Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 shadow-xl border-2 border-green-100">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Vehicle Display */}
              <div className="flex-1 w-full">
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200 min-h-[300px] flex items-center justify-center relative overflow-hidden">
                  <div className="text-center">
                    <div className="text-8xl mb-4 animate-bounce" style={{ animationDuration: '2s' }}>
                      {vehicles[currentVehicle].icon}
                    </div>
                    <h3 className="text-3xl font-black text-gray-900 mb-2">
                      {vehicles[currentVehicle].name}
                    </h3>
                    <p className="text-lg text-gray-600 font-semibold">
                      {vehicles[currentVehicle].desc}
                    </p>
                  </div>
                  {/* Progress indicator */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {vehicles.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          idx === currentVehicle ? 'w-8 bg-green-600' : 'w-2 bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Vehicle Info */}
              <div className="flex-1 w-full">
                <h3 className="text-2xl font-black text-gray-900 mb-6">
                  مركبات الشركاء المتاحة
                </h3>
                <div className="space-y-4">
                  {vehicles.map((vehicle, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                        idx === currentVehicle
                          ? 'bg-green-100 border-2 border-green-500 scale-105'
                          : 'bg-white border-2 border-gray-200'
                      }`}
                    >
                      <div className="text-4xl">{vehicle.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">{vehicle.name}</h4>
                        <p className="text-sm text-gray-600">{vehicle.desc}</p>
                      </div>
                      {idx === currentVehicle && (
                        <ArrowRight className="w-6 h-6 text-green-600 animate-pulse" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Roles Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl border-2 border-green-100 hover:border-green-300 transition-all hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-4 rounded-2xl ${role.iconBg} ${role.textColor}`}>
                  {role.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-gray-900">{role.title}</h3>
                  <p className="text-gray-600 font-semibold">{role.subtitle}</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {role.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 px-6 rounded-xl font-bold text-white shadow-lg transition-all hover:scale-105 ${role.color}`}>
                {index === 0 ? 'سجّل كشريك جامع' : 'سجّل كشريك مشتري'}
              </button>
            </div>
          ))}
        </div>

        {/* Materials & Cities */}
        <div className="mb-16">
          <h3 className="text-2xl font-black text-center text-gray-900 mb-6">
            بنجمّع وبنشتري الخامات دي في مناطقك
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {materials.map((mat, i) => (
              <span key={i} className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-bold text-sm border-2 border-green-200">
                {mat}
              </span>
            ))}
            {cities.map((city, i) => (
              <span key={i} className="px-4 py-2 bg-white text-gray-700 rounded-full font-semibold text-sm border-2 border-gray-200">
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-black text-center text-gray-900 mb-8">
            تبدأ إزاي؟ أربع خطوات بس
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg border-2 border-green-100">
                <div className="w-12 h-12 mx-auto bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-black mb-4">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-green-50 rounded-2xl p-6 text-center border-2 border-green-200">
                <div className="text-3xl font-black text-green-700 mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
