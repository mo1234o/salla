'use client'

import { useState, useEffect } from 'react'
import { Icon, IconBadge, IconName } from './svg-icons'

type Option = { label: string; reply: string[]; list?: string[]; outro?: string }
type Scenario = { tab: string; icon: IconName; title: string; intro: string[]; question: string; options: Option[] }

const scenarios: Scenario[] = [
  {
    tab: 'في البيت',
    icon: 'home',
    title: 'فرز من المنبع والتخلص السريع',
    intro: ['يا هلا بيك يا سيد الناس ويا ست الكل في تطبيق سلة (Salla) من قلب كرياتيفا المنصورة بمحافظة الدقهلية. قولنا كده..'],
    question: 'عندك مخلفات صلبة أو زبالة في البيت وعاوز تخلص منها وتكسب؟',
    options: [
      {
        label: 'آه، عندي ومحتار فيها',
        reply: ['طب كويس جدًا! الموضوع بسيط خالص: جمّع كل نوع لوحده (بلاستيك، كانز، ورق)، وحمّل التطبيق، وصوّر المخلفات، وحدد مكانك على الخريطة.. وإحنا هنجيلك لحد باب البيت في أي مكان في الجمهورية نوزن ونستلم ونحوّلك المكافآت والفلوس فورًا!'],
      },
    ],
  },
  {
    tab: 'في الشارع والجامعة',
    icon: 'graduation',
    title: 'ماكينات الشارع والجامعات (Salla Box)',
    intro: ['طب ركّز معايا في دي.. لو إنت في الجامعة أو ماشي في أي شارع في مصر، وخلصت إزازة المية أو علبة الكانز..'],
    question: 'هل رميتها في الأرض؟',
    options: [
      {
        label: 'آه.. رميتها معلش',
        reply: ['يا عم ما تعملهاش بقا! كده بتضيّع ثروة وبتضر بلدنا. ما تحطهم في ماكينة Salla Box الذكية المنتشرة حواليك، وتاخد فلوس كاش وعروض وخصومات كتيرة جدًا من المتاجر اللي شغالة معانا، وتستفيد بالاتنين مع بعض! نظافة وجيبك عمران'],
      },
      {
        label: 'لأ، مستني صندوق',
        reply: ['برافو عليك! حطها في ماكينة Salla Box وخد فلوسك وعروضك على طول'],
      },
    ],
  },
]

function Bot({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-end gap-2 sm:gap-3">
      <div className="w-10 h-10 shrink-0 rounded-full bg-green-100 border-2 border-green-200 flex items-center justify-center">
        <Icon name="robot" className="w-6 h-6 text-green-700" />
      </div>
      <div className="max-w-[88%] bg-white border-2 border-green-100 rounded-2xl rounded-br-sm px-4 py-3 shadow-md text-sm sm:text-base text-gray-800 leading-relaxed">
        {children}
      </div>
    </div>
  )
}

function Typing() {
  return (
    <Bot>
      <div className="flex gap-1 py-1" aria-label="سلة بيكتب">
        {[0, 1, 2].map((i) => (
          <span key={i} className="w-2 h-2 rounded-full bg-green-500 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
        ))}
      </div>
    </Bot>
  )
}

export function NewHowItWorks() {
  const [active, setActive] = useState<number | null>(null)
  const [choice, setChoice] = useState<number | null>(null)
  const [typing, setTyping] = useState(false)

  const sc = active !== null ? scenarios[active] : null
  const picked = sc && choice !== null ? sc.options[choice] : null

  // "سلة بيكتب..." بعد اختيار الموقف وبعد اختيار الإجابة
  useEffect(() => {
    if (active === null) return
    setTyping(true)
    const t = setTimeout(() => setTyping(false), choice === null ? 700 : 900)
    return () => clearTimeout(t)
  }, [active, choice])

  const pickScenario = (i: number) => {
    setActive(i)
    setChoice(null)
  }
  const backToMenu = () => {
    setActive(null)
    setChoice(null)
    setTyping(false)
  }

  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-green-50 to-white" id="new-how-it-works">
            <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-4">
            <Icon name="chat" className="w-5 h-5" /> اتكلم مع سلة
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            3 مواقف.. وسلة <span className="text-green-600">هيقولك تعمل إيه</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            ابدأ الشات، واختار الموقف اللي يشبهك، وهتعرف أسهل طريقة تحوّل بيها المخلفات لفلوس
          </p>
        </div>

        {/* Chat card */}
        <div className="bg-white rounded-3xl shadow-2xl border-2 border-green-100 overflow-hidden">
          <div className="bg-gradient-to-r from-green-800 to-green-600 px-5 py-4 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <Icon name="robot" className="w-7 h-7 text-white" />
            </div>
            <div className="min-w-0">
              <h3 className="text-white font-black text-base sm:text-lg">سلة</h3>
              <p className="text-green-100 text-xs sm:text-sm truncate">{sc ? sc.title : 'مساعدك لتحويل المخلفات لفلوس'}</p>
            </div>
            <span className="mr-auto flex items-center gap-1 text-xs text-green-100">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" /> متصل
            </span>
          </div>

          <div className="p-4 sm:p-6 space-y-4 bg-gradient-to-b from-green-50/60 to-white min-h-[24rem]">
            {/* بداية المحادثة: اختيار الموقف */}
            <Bot>
              أهلاً بيك في سلة. أنا هنا أساعدك تحوّل مخلفاتك لفلوس وتحافظ على البيئة.
              <p className="mt-2 font-black text-gray-900">
                حابب نتكلم في أنهي موقف؟
              </p>
            </Bot>

            {sc === null ? (
              <div className="grid gap-3 pt-1">
                {scenarios.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => pickScenario(i)}
                    className="w-full flex items-center gap-4 p-4 rounded-2xl bg-white border-2 border-green-200 shadow-md hover:border-green-500 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-right"
                  >
                    <span className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-green-100 to-green-50 border-2 border-green-200 flex items-center justify-center">
                      <Icon name={s.icon} className="w-8 h-8 text-green-700" />
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block font-black text-gray-900 text-base sm:text-lg">{s.tab}</span>
                      <span className="block text-gray-600 text-xs sm:text-sm">{s.title}</span>
                    </span>
                    <Icon name="chevron" className="w-6 h-6 text-green-600" strokeWidth={2.4} />
                  </button>
                ))}
              </div>
            ) : (
              <>
                <div className="flex justify-end">
                  <div className="flex items-center gap-2 px-5 py-3 rounded-2xl rounded-bl-sm bg-green-600 text-white font-bold text-sm sm:text-base shadow-md">
                    <Icon name={sc.icon} className="w-5 h-5" /> {sc.tab}
                  </div>
                </div>

                {typing && picked === null ? (
                  <Typing />
                ) : (
                  <>
                    {sc.intro.map((m, i) => (
                      <Bot key={i}>{m}</Bot>
                    ))}
                    <Bot>
                      <span className="font-black text-gray-900">&quot;{sc.question}&quot;</span>
                    </Bot>

                    {picked === null ? (
                      <div className="flex flex-wrap gap-2 sm:gap-3 justify-end pt-2">
                        {sc.options.map((o, i) => (
                          <button
                            key={i}
                            onClick={() => setChoice(i)}
                            className="px-5 py-3 rounded-2xl rounded-bl-sm bg-gradient-to-r from-green-700 to-green-500 text-white font-bold text-sm sm:text-base shadow-lg hover:scale-105 transition-transform duration-300"
                          >
                            {o.label}
                          </button>
                        ))}
                        <button
                          onClick={backToMenu}
                          className="px-4 py-3 rounded-2xl bg-white border-2 border-green-200 text-green-700 font-bold text-sm hover:border-green-400 transition-colors"
                        >
                          غيّر الموقف
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="flex justify-end">
                          <div className="px-5 py-3 rounded-2xl rounded-bl-sm bg-green-600 text-white font-bold text-sm sm:text-base shadow-md">{picked.label}</div>
                        </div>

                        {typing ? (
                          <Typing />
                        ) : (
                          <>
                            {picked.reply.map((m, i) => (
                              <Bot key={i}>{m}</Bot>
                            ))}
                            {picked.list && (
                              <Bot>
                                <ol className="space-y-3">
                                  {picked.list.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                      <span className="w-7 h-7 shrink-0 rounded-full bg-green-600 text-white font-black text-sm flex items-center justify-center">{i + 1}</span>
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ol>
                              </Bot>
                            )}
                            {picked.outro && (
                              <Bot>{picked.outro}</Bot>
                            )}
                            <div className="flex flex-wrap gap-2 justify-end pt-2">
                              {sc.options.length > 1 && (
                                <button
                                  onClick={() => setChoice(null)}
                                  className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-white border-2 border-green-200 text-green-700 font-bold text-sm hover:border-green-400 transition-colors"
                                >
                                  <Icon name="refresh" className="w-4 h-4" /> جرّب إجابة تانية
                                </button>
                              )}
                              <button
                                onClick={backToMenu}
                                className="px-4 py-2 rounded-full bg-gradient-to-r from-green-700 to-green-500 text-white font-bold text-sm shadow-md hover:scale-105 transition-transform"
                              >
                                اتكلم في موقف تاني
                              </button>
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
