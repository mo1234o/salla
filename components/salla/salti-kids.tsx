'use client'

import { useState, useEffect } from 'react'
import { Emoji3D, Emoji3DStyles } from './emoji-3d'

const steps = [
  { emoji: '🛍️', title: 'اشتري سلتي', description: 'اشتري سلتي من كل المتاجر الشغالة معانا بسعر رخيص جدًا' },
  { emoji: '♻️', title: 'املأ سلتي', description: 'ابنك يبدأ يملّاها بالمخلفات البلاستيكية والقزاز' },
  { emoji: '📱', title: 'افتح التطبيق', description: 'افتحي التليفون يا ست الكل، أو افتح يا سيد الناس، وصوّر وابعت أوردر' },
  { emoji: '🎮', title: 'اختار اللعبة', description: 'يختار اللعبة اللي عايزها، واللعبة بتتعمل من القزاز بتاعه!' },
]

const toys = [
  { emoji: '🧸', name: 'دبدوب' },
  { emoji: '🚀', name: 'صاروخ' },
  { emoji: '🎮', name: 'جيمز' },
]

const benefits = [
  { emoji: '🌍', text: 'تعليم الوعي بالبيئة' },
  { emoji: '🐷', text: 'تعليم الادخار من صغير' },
  { emoji: '🎯', text: 'تشجيع باللعبة والفلوس' },
  { emoji: '🎁', text: 'جوايز وعروض كتير' },
  { emoji: '😌', text: 'مش هيتعبك يا ست الكل' },
  { emoji: '🌱', text: 'زرع الوعي في العيال' },
]

function Boy({ className = '' }: { className?: string }) {
  const [err, setErr] = useState(false)
  if (err) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <Emoji3D size="text-8xl">🧸</Emoji3D>
      </div>
    )
  }
  return <img src="/salti-logo.png" alt="سلتي للأطفال" draggable={false} className={`object-contain ${className}`} onError={() => setErr(true)} />
}

function Tag({ emoji, children, className = '' }: { emoji: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`absolute bg-white rounded-2xl shadow-lg border-2 border-green-200 px-3 py-2 flex items-center gap-2 ${className}`}>
      <Emoji3D size="text-xl" float={false}>{emoji}</Emoji3D>
      <span className="font-black text-green-700 text-xs sm:text-sm">{children}</span>
    </div>
  )
}

// 1) اشتري سلتي
function SceneBuy() {
  return (
    <div className="relative h-full flex items-end justify-center">
      <Tag emoji="🛍️" className="top-0 right-0">سعر رخيص ومدعوم</Tag>
      <Tag emoji="📍" className="bottom-4 left-0">من المتاجر الشغالة معانا</Tag>
      <Boy className="h-full" />
    </div>
  )
}

// 2) املأ سلتي (الشريط بيتملي لما المشهد يظهر)
function SceneFill() {
  const [fill, setFill] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => setFill(85), 150)
    return () => clearTimeout(t)
  }, [])
  return (
    <div className="relative h-full flex flex-col items-center">
      <div className="flex-1 min-h-0 w-full flex items-end justify-center relative">
        <Tag emoji="♻️" className="top-0 right-0">بلاستيك وقزاز</Tag>
        <Boy className="h-full" />
      </div>
      <div className="w-full mt-3">
        <div className="flex justify-between text-xs sm:text-sm font-bold text-green-800 mb-1">
          <span>سلتي بتتملي</span>
          <span>{fill}%</span>
        </div>
        <div className="h-4 rounded-full bg-green-100 border-2 border-green-200 overflow-hidden">
          <div className="h-full rounded-full bg-gradient-to-r from-green-700 to-green-400 transition-all duration-[2000ms] ease-out" style={{ width: `${fill}%` }} />
        </div>
      </div>
    </div>
  )
}

// 3) افتح التطبيق: التليفون بيصوّر الولد وسلته
function SceneApp() {
  const [sent, setSent] = useState(false)
  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-44 sm:w-52 rounded-[2rem] border-[7px] border-gray-900 bg-white shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-green-800 to-green-600 text-white text-center font-black text-sm py-2">سلتي</div>
        <div className="relative bg-green-50 h-40 sm:h-48 flex items-end justify-center overflow-hidden">
          <Boy className="h-[88%]" />
          {['top-2 right-2 border-t-4 border-r-4', 'top-2 left-2 border-t-4 border-l-4', 'bottom-2 right-2 border-b-4 border-r-4', 'bottom-2 left-2 border-b-4 border-l-4'].map((c) => (
            <span key={c} className={`absolute w-5 h-5 border-green-600 rounded-sm ${c}`} />
          ))}
        </div>
        <div className="p-3">
          <button
            onClick={() => setSent(true)}
            className="w-full py-2 rounded-xl bg-gradient-to-r from-green-700 to-green-500 text-white font-bold text-sm flex items-center justify-center gap-1"
          >
            {sent ? (<><Emoji3D size="text-base" float={false}>✅</Emoji3D> اتبعت الأوردر</>) : 'ابعت أوردر'}
          </button>
        </div>
      </div>
    </div>
  )
}

// 4) اختار اللعبة
function SceneToy() {
  const [toy, setToy] = useState(0)
  return (
    <div className="h-full flex flex-col sm:flex-row items-center justify-center gap-4">
      <Boy className="h-40 sm:h-full sm:max-h-[20rem]" />
      <div className="flex-1 w-full max-w-sm">
        <p className="font-black text-gray-900 text-center mb-3">اختار لعبتك</p>
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {toys.map((t, i) => (
            <button
              key={i}
              onClick={() => setToy(i)}
              className={`rounded-2xl p-3 text-center border-2 transition-all duration-300 ${
                toy === i ? 'bg-white border-green-500 shadow-xl scale-105' : 'bg-white/70 border-green-100 hover:border-green-300'
              }`}
            >
              <Emoji3D size="text-4xl" float={false}>{t.emoji}</Emoji3D>
              <span className="block text-xs sm:text-sm font-bold text-gray-700 mt-1">{t.name}</span>
            </button>
          ))}
        </div>
        <p className="text-xs sm:text-sm text-green-800 font-bold text-center mt-3">
          بتتعمل من القزاز والبلاستيك بتاعك أنت!
        </p>
      </div>
    </div>
  )
}

export function SaltiKids() {
  const [activeStep, setActiveStep] = useState(0)
  const scenes = [SceneBuy, SceneFill, SceneApp, SceneToy]
  const Scene = scenes[activeStep]

  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-white via-green-50 to-white" id="salti-kids">
      <Emoji3DStyles />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-4">
            <Emoji3D size="text-lg">🚀</Emoji3D> بيزنس موديل جديد
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            <span className="text-green-600">سلتي</span> للأطفال
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            علّم ابنك إزاي يعمل فلوس وهو صغير. بنزرع الوعي بالمحافظة على البيئة ونشجعه بلعبة وفلوس وجوايز
          </p>
        </div>

        {/* Steps + scene */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-stretch mb-12">
          <div className="flex flex-col gap-3">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`flex items-center gap-4 rounded-2xl p-4 text-right border-2 transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-white border-green-500 shadow-xl'
                    : 'bg-white/70 border-green-100 hover:border-green-300'
                }`}
              >
                <span className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center font-black text-sm ${activeStep === index ? 'bg-green-600 text-white' : 'bg-green-100 text-green-700'}`}>
                  {index + 1}
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block text-lg font-black text-gray-900">{step.title}</span>
                  <span className="block text-sm text-gray-600 leading-relaxed">{step.description}</span>
                </span>
                <Emoji3D size="text-4xl" float={false}>{step.emoji}</Emoji3D>
              </button>
            ))}
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-green-100 via-green-50 to-white border-4 border-green-200 shadow-xl p-5 sm:p-6 h-[26rem] sm:h-[30rem] flex flex-col">
            <div className="flex-1 min-h-0" key={activeStep}>
              <Scene />
            </div>
            {activeStep < steps.length - 1 && (
              <button
                onClick={() => setActiveStep(activeStep + 1)}
                className="mt-4 self-end px-5 py-2 rounded-full bg-gradient-to-r from-green-700 to-green-500 text-white font-bold text-sm shadow-md hover:scale-105 transition-transform"
              >
                الخطوة اللي بعدها
              </button>
            )}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-black text-center text-gray-900 mb-8">اللي هيتعلمه ابنك</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 sm:p-6 text-center shadow-lg border-2 border-green-100 hover:border-green-300 transition-colors">
                <div className="mb-3"><Emoji3D size="text-4xl">{b.emoji}</Emoji3D></div>
                <p className="text-xs sm:text-sm font-semibold text-gray-700">{b.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-800 via-green-700 to-green-500 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black mb-4">يا ست الكل.. يا سيد الناس!</h3>
          <p className="text-base sm:text-lg mb-6 max-w-2xl mx-auto opacity-95">
            ابنك هيشوف الفلوس واللعبة والجوايز وهيحب يشترك، ومش هيتعبك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-green-700 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              <Emoji3D size="text-xl" float={false}>🛍️</Emoji3D> اعرف إزاي تجيب سلتي
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-green-700 transition-all duration-300 flex items-center justify-center gap-2">
              <Emoji3D size="text-xl" float={false}>🎮</Emoji3D> شوف الألعاب المتاحة
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
