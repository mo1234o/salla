'use client'

import { useState } from 'react'
import { Emoji3D, Emoji3DStyles } from './emoji-3d'

// غيّر الرقم برقم واتساب الشركة بالصيغة الدولية بدون + أو أصفار (مثال: 201000000000)
const WHATSAPP_NUMBER = '201203062905'

const features = [
  { emoji: '🚚', title: 'التزام بمواعيد التسليم', text: 'شحنتك توصلك في ميعادها' },
  { emoji: '✅', title: 'جودة وفرز نظيف', text: 'خامة نقية ومفرزة بعناية' },
  { emoji: '📦', title: 'انتظام في التوريد', text: 'كميات ثابتة تعتمد عليها في شغلك' },
]

const scale = [
  { label: '1 كيلو', note: 'تبدأ من هنا' },
  { label: 'مئات الكيلوات', note: 'للورش والمنشآت' },
  { label: 'أطنان', note: 'للمصانع والشركات' },
]

export function SupplySection() {
  const [name, setName] = useState('')
  const [material, setMaterial] = useState('بلاستيك')
  const [quantity, setQuantity] = useState('')
  const [phone, setPhone] = useState('')

  const open = (text: string) => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    open(
      `طلب توريد من موقع سلة\nالاسم / الشركة: ${name}\nنوع المادة: ${material}\nالكمية التقريبية: ${quantity}\nرقم التواصل: ${phone}`
    )
  }

  const field =
    'w-full rounded-xl border-2 border-green-100 bg-white px-4 py-3 text-sm sm:text-base text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:outline-none transition-colors'

  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-white via-green-50 to-white" id="supply">
      <Emoji3DStyles />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* النص */}
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-5">
            <Emoji3D size="text-lg">🏭</Emoji3D> للمصانع والشركات
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-5">
            من الكيلو للأطنان.. <span className="text-green-600">بنكفي احتياجات شغلك</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-3">
            عندك مصنع أو شركة أو منشأة بتعتمد في شغلها على الزجاجات البلاستيكية أو الكانز؟ إحنا بنوفر لك الكميات اللي محتاجها.
          </p>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
            اطلب الكمية اللي ناقصاك، من أول 1 كيلو لحد أطنان، وهتوصلك لحد عندك بأعلى جودة وأفضل سعر، مع ضمان الجودة والالتزام بمواعيد التسليم.
          </p>

          {/* مقياس الكمية */}
          <div className="mb-8">
            <div className="h-3 rounded-full bg-gradient-to-l from-green-800 via-green-500 to-green-200" />
            <div className="grid grid-cols-3 gap-2 mt-3">
              {scale.map((s, i) => (
                <div key={i} className={i === 0 ? 'text-right' : i === 1 ? 'text-center' : 'text-left'}>
                  <p className="font-black text-gray-900 text-sm sm:text-base">{s.label}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{s.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-3">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 border-2 border-green-100 shadow-sm">
                <Emoji3D size="text-3xl" float={false}>{f.emoji}</Emoji3D>
                <h3 className="font-black text-gray-900 text-sm sm:text-base mt-2 mb-1">{f.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* الفورم */}
        <form onSubmit={submit} id="order-form" className="bg-white rounded-3xl shadow-2xl border-2 border-green-100 overflow-hidden">
          <div className="bg-gradient-to-r from-green-800 to-green-600 px-6 py-5 flex items-center gap-3">
            <Emoji3D size="text-3xl">📦</Emoji3D>
            <div>
              <h3 className="text-white font-black text-lg sm:text-xl">اطلب شحنتك</h3>
              <p className="text-green-100 text-xs sm:text-sm">املا البيانات وهنكمل معاك على واتساب</p>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-4">
            <div>
              <label htmlFor="sup-name" className="block text-sm font-bold text-gray-800 mb-1">الاسم / اسم الشركة</label>
              <input id="sup-name" required value={name} onChange={(e) => setName(e.target.value)} className={field} placeholder="مثال: شركة النيل للبلاستيك" />
            </div>

            <div>
              <span className="block text-sm font-bold text-gray-800 mb-2">نوع المادة المطلوبة</span>
              <div className="grid grid-cols-3 gap-2">
                {['بلاستيك', 'كانز', 'الاتنين'].map((m) => (
                  <button
                    type="button"
                    key={m}
                    onClick={() => setMaterial(m)}
                    className={`py-3 rounded-xl font-bold text-sm sm:text-base border-2 transition-all ${
                      material === m ? 'bg-green-600 text-white border-green-600 shadow-md' : 'bg-white text-gray-700 border-green-100 hover:border-green-300'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="sup-qty" className="block text-sm font-bold text-gray-800 mb-1">الكمية التقريبية</label>
              <input id="sup-qty" required value={quantity} onChange={(e) => setQuantity(e.target.value)} className={field} placeholder="مثال: 500 كيلو، 3 طن" />
            </div>

            <div>
              <label htmlFor="sup-phone" className="block text-sm font-bold text-gray-800 mb-1">رقم التواصل</label>
              <input id="sup-phone" required type="tel" inputMode="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={field} placeholder="01xxxxxxxxx" dir="ltr" style={{ textAlign: 'right' }} />
            </div>

            <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-green-700 to-green-500 text-white font-black text-base sm:text-lg shadow-lg hover:scale-[1.02] transition-transform">
              اطلب شحنتك
            </button>
            <button
              type="button"
              onClick={() => open('أهلاً سلة، أريد الاستفسار عن توريد كمية من البلاستيك أو الكانز لمصنعي')}
              className="w-full py-3 rounded-xl bg-white text-green-700 font-bold text-sm sm:text-base border-2 border-green-200 hover:border-green-400 transition-colors"
            >
              تواصل معنا للتوريد
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
