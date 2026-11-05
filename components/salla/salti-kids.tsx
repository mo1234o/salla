'use client'

import { useState, useEffect } from 'react'
import { Icon, IconBadge, IconName, ToyTeddy, ToyRocket, ToyCar, ToyRobot } from './svg-icons'
import {
  PhoneFrame, StoresScreen, BasketScreen, HomeScreen, CameraScreen, ToysScreen, TrackScreen,
} from './app-screens'

const steps: { icon: IconName; title: string; description: string }[] = [
  { icon: 'bag', title: 'اشتري سلتي', description: 'من أي متجر شغال معانا، بسعر رخيص جدًا ومدعوم' },
  { icon: 'recycle', title: 'املأ سلتي', description: 'ابنك يبدأ يملّاها بالإزاز والمخلفات البلاستيكية' },
  { icon: 'phone', title: 'افتح التطبيق وصوّر السلة', description: 'لما تتملي، افتح التطبيق، صوّر السلة وابعت الطلب' },
  { icon: 'gamepad', title: 'اختار اللعبة', description: 'ابنك يختار يبدّل السلة بلعبة إيه من التطبيق' },
  { icon: 'truck', title: 'المندوب يوصلك', description: 'يسلّمه اللعبة ويديله فلوس اللي في السلة نفسها' },
]

const benefits: { icon: IconName; text: string }[] = [
  { icon: 'globe', text: 'تعليم الوعي بالبيئة' },
  { icon: 'piggy', text: 'تعليم الادخار من صغير' },
  { icon: 'target', text: 'تشجيع باللعبة والفلوس' },
  { icon: 'gift', text: 'جوايز وعروض كتير' },
  { icon: 'smile', text: 'مش هيتعبك يا ست الكل' },
  { icon: 'sprout', text: 'زرع الوعي في العيال' },
]

const showcase = [
  { name: 'دبدوب', Art: ToyTeddy }, { name: 'صاروخ', Art: ToyRocket },
  { name: 'عربية', Art: ToyCar }, { name: 'روبوت', Art: ToyRobot },
]

function Boy({ className = '' }: { className?: string }) {
  const [err, setErr] = useState(false)
  if (err) return <div className={`${className} flex items-center justify-center`}><ToyTeddy className="w-32 h-32" /></div>
  return <img src="/salti-logo.png" alt="سلتي للأطفال" draggable={false} className={`object-contain ${className}`} onError={() => setErr(true)} />
}

export function SaltiKids() {
  const [activeStep, setActiveStep] = useState(0)
  const [phase, setPhase] = useState<'home' | 'camera' | 'captured'>('home')
  const [toy, setToy] = useState(0)

  // خطوة "افتح التطبيق": الرئيسية ثم الكاميرا ثم التصوير (تلقائي، وتقدر تضغط بنفسك)
  useEffect(() => {
    if (activeStep !== 2) return
    setPhase('home')
    const t1 = setTimeout(() => setPhase('camera'), 2200)
    const t2 = setTimeout(() => setPhase((p) => (p === 'camera' ? 'captured' : p)), 4600)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [activeStep])

  const next = () => setActiveStep((s) => Math.min(s + 1, steps.length - 1))

  const screen = (() => {
    switch (activeStep) {
      case 0: return <StoresScreen />
      case 1: return <BasketScreen />
      case 2:
        if (phase === 'home') return <HomeScreen onSend={() => setPhase('camera')} />
        return <CameraScreen captured={phase === 'captured'} onShoot={() => setPhase('captured')} onContinue={next} />
      case 3: return <ToysScreen toy={toy} onPick={setToy} onConfirm={next} />
      default: return <TrackScreen toy={toy} />
    }
  })()

  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-white via-green-50 to-white" id="salti-kids">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-4">
            <Icon name="rocket" className="w-5 h-5" /> بيزنس موديل جديد
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            <span className="text-green-600">سلتي</span> للأطفال
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            علّم ابنك إزاي يعمل فلوس وهو صغير. بنزرع الوعي بالمحافظة على البيئة ونشجعه بلعبة وفلوس وجوايز
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-12">
          <div className="flex flex-col gap-3">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                aria-current={activeStep === index ? 'step' : undefined}
                className={`flex items-center gap-4 rounded-2xl p-4 text-right border-2 transition-all duration-300 ${
                  activeStep === index ? 'bg-white border-green-500 shadow-xl' : 'bg-white/70 border-green-100 hover:border-green-300'
                }`}
              >
                <span className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center font-black text-sm ${activeStep === index ? 'bg-green-600 text-white' : 'bg-green-100 text-green-700'}`}>
                  {index + 1}
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block text-lg font-black text-gray-900">{step.title}</span>
                  <span className="block text-sm text-gray-600 leading-relaxed">{step.description}</span>
                </span>
                <IconBadge name={step.icon} className="w-12 h-12" />
              </button>
            ))}
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-green-100 via-green-50 to-white border-4 border-green-200 shadow-xl p-5 sm:p-6 flex flex-col items-center">
            <div className="flex items-end justify-center gap-6 w-full">
              <Boy className="hidden sm:block h-72 w-auto" />
              <div key={`${activeStep}-${activeStep === 2 ? phase : ''}`}>
                <PhoneFrame>{screen}</PhoneFrame>
              </div>
            </div>
            <div className="mt-4 w-full flex items-center justify-between gap-3">
              <p className="text-xs text-gray-500">شاشات توضيحية من تطبيق سلة مصر</p>
              {activeStep < steps.length - 1 && (
                <button
                  onClick={next}
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-green-700 to-green-500 text-white font-bold text-sm shadow-md hover:scale-105 transition-transform"
                >
                  الخطوة اللي بعدها
                </button>
              )}
            </div>
          </div>
        </div>

        {/* الألعاب */}
        <div id="kids-toys" className="mb-12 rounded-3xl bg-white border-2 border-green-100 shadow-lg p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-black text-center text-gray-900 mb-2">ألعاب بتتعمل من الإزاز بتاعك</h3>
          <p className="text-center text-gray-600 mb-6 text-sm sm:text-base">كل ما السلة تتملي، يختار لعبة جديدة</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {showcase.map((t) => (
              <div key={t.name} className="rounded-2xl bg-gradient-to-b from-green-50 to-white border-2 border-green-100 p-4 flex flex-col items-center">
                <t.Art className="w-24 h-24" />
                <span className="mt-2 font-black text-gray-800">{t.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-black text-center text-gray-900 mb-8">اللي هيتعلمه ابنك</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 sm:p-6 text-center shadow-lg border-2 border-green-100 hover:border-green-300 transition-colors flex flex-col items-center">
                <IconBadge name={b.icon} className="w-14 h-14 mb-3" iconClassName="w-7 h-7" />
                <p className="text-xs sm:text-sm font-semibold text-gray-700">{b.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-800 via-green-700 to-green-500 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black mb-4">يا ست الكل.. يا سيد الناس!</h3>
          <p className="text-base sm:text-lg mb-6 max-w-2xl mx-auto opacity-95">
            ابنك هيشوف الفلوس واللعبة والجوايز وهيحب يشترك، ومش هيتعبك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#salti-kids" onClick={() => setActiveStep(0)} className="px-8 py-4 bg-white text-green-700 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              <Icon name="bag" className="w-6 h-6" /> اعرف إزاي تجيب سلتي
            </a>
            <a href="#kids-toys" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-green-700 transition-all duration-300 flex items-center justify-center gap-2">
              <Icon name="gamepad" className="w-6 h-6" /> شوف الألعاب المتاحة
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
