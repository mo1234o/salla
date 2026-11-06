'use client'

import React, { useEffect, useState } from 'react'
import { Icon, IconName, Basket, ToyTeddy, ToyRocket, ToyCar, ToyRobot, Cash } from './svg-icons'

/* شاشات مشابهة لتطبيق سلة مصر (نفس الألوان والكروت والتبويبات السفلية).
   الأرقام والأسماء في الشاشات للتوضيح فقط. */

export const TOYS = [
  { name: 'دبدوب', Art: ToyTeddy, need: 'بيتعمل من المواد التي تجمعها' },
  { name: 'صاروخ', Art: ToyRocket, need: 'بيتعمل من المواد التي تجمعها' },
  { name: 'عربية', Art: ToyCar, need: 'بيتعمل من المواد التي تجمعها' },
  { name: 'روبوت', Art: ToyRobot, need: 'بيتعمل من المواد التي تجمعها' },
]

export type ScreenId = 'stores' | 'basket' | 'home' | 'camera' | 'toys' | 'track'

const GREEN = 'bg-[#2e8b57]'

function Header({ title, back }: { title: string; back?: boolean }) {
  return (
    <div className={`h-[46px] shrink-0 ${GREEN} text-white flex items-center justify-between px-4`}>
      <span className="font-extrabold text-[15px] flex items-center gap-2">
        {back && <Icon name="arrow" className="w-4 h-4 rotate-180" />}
        {title}
      </span>
      <Icon name="bell" className="w-[18px] h-[18px]" />
    </div>
  )
}

function BottomNav({ active }: { active: 'home' | 'orders' | 'points' | 'account' }) {
  const items: { id: typeof active; label: string; icon: IconName }[] = [
    { id: 'home', label: 'الرئيسية', icon: 'home' },
    { id: 'orders', label: 'طلباتي', icon: 'list' },
    { id: 'points', label: 'نقاطي', icon: 'gift' },
    { id: 'account', label: 'حسابي', icon: 'user' },
  ]
  return (
    <div className="absolute bottom-0 inset-x-0 h-[58px] bg-[#f6f6f6] border-t border-gray-200 flex items-end justify-around pb-1.5">
      {items.map((it) => {
        const on = it.id === active
        return (
          <div key={it.id} className="flex flex-col items-center w-[60px] relative">
            {on ? (
              <span className={`-mt-5 mb-0.5 w-[38px] h-[38px] rounded-full ${GREEN} text-white flex items-center justify-center shadow-md`}>
                <Icon name={it.icon} className="w-5 h-5" />
              </span>
            ) : (
              <Icon name={it.icon} className="w-5 h-5 text-gray-400 mb-0.5" />
            )}
            <span className={`text-[9.5px] font-bold ${on ? 'text-[#2e8b57]' : 'text-gray-400'}`}>{it.label}</span>
          </div>
        )
      })}
    </div>
  )
}

function Screen({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div dir="rtl" className={`relative w-full h-full flex flex-col overflow-hidden ${dark ? 'bg-slate-900' : 'bg-gradient-to-b from-white to-[#eef8f2]'}`}>
      {children}
    </div>
  )
}

function Tap() {
  return (
    <span aria-hidden="true" className="absolute -top-1.5 -left-1.5 flex h-4 w-4">
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#2e8b57] opacity-60 animate-ping" />
      <span className="relative inline-flex h-4 w-4 rounded-full bg-[#2e8b57] border-2 border-white" />
    </span>
  )
}

/* ---------- الرئيسية (زي الصورة بالظبط) ---------- */
export function HomeScreen({ onSend }: { onSend?: () => void }) {
  const tiles: { label: string; icon: IconName; hot?: boolean }[] = [
    { label: 'استبدل نقاطك', icon: 'gift' },
    { label: 'ابعت مخلفاتك', icon: 'trash', hot: true },
    { label: 'حسابك', icon: 'user' },
    { label: 'طلباتك', icon: 'list' },
  ]
  return (
    <Screen>
      <Header title="الرئيسية" />
      <div className="flex-1 overflow-hidden pb-[58px]">
        <div className="mx-3 mt-3 h-[160px] rounded-[20px] bg-gradient-to-br from-[#1b5e3b] via-[#25704a] to-[#3d9a6b] text-white relative overflow-hidden shadow-lg">
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 translate-x-6" />
          <span className="absolute top-3.5 left-3.5 w-[38px] h-[28px] rounded-md bg-gradient-to-br from-gray-100 to-gray-400 border border-gray-300" />
          <span className="absolute top-3.5 right-3.5 px-3 py-1.5 rounded-lg bg-white/15 text-[14px] font-extrabold italic tracking-wider">SALLA</span>
          <div dir="ltr" className="absolute top-[56px] left-4 text-[22px] font-bold tracking-[0.2em]">1250 0000</div>
          <div className="absolute top-[84px] left-4 text-[10px] opacity-90">120 نقطة = 12 جنيه</div>
          <div className="absolute bottom-3 left-4">
            <div className="text-[8.5px] opacity-70">صاحب الكارت</div>
            <div dir="ltr" className="text-[15px] font-extrabold italic">ADAM</div>
          </div>
          <span className="absolute bottom-4 left-[50%] px-4 py-2 rounded-full bg-white text-[#1b5e3b] text-[11px] font-extrabold shadow-md">استبدل</span>
          <div className="absolute bottom-14 left-4 text-[9px] opacity-80">من المواد التي تجمعها</div>
        </div>

        <h4 className="mx-3 mt-4 mb-2 text-[14px] font-extrabold text-gray-900">إيه اللي عايز تعمله؟</h4>
        <div className="mx-3 grid grid-cols-2 gap-2.5">
          {tiles.map((t) => {
            const Comp: React.ElementType = t.hot && onSend ? 'button' : 'div'
            return (
              <Comp
                key={t.label}
                {...(t.hot && onSend ? { onClick: onSend, type: 'button', 'aria-label': t.label } : {})}
                className={`relative h-[88px] rounded-2xl bg-white shadow-[0_4px_14px_rgba(0,0,0,.07)] flex flex-col items-center justify-center gap-2 ${t.hot ? 'ring-2 ring-[#2e8b57]/70' : ''}`}
              >
                {t.hot && <Tap />}
                <Icon name={t.icon} className="w-[26px] h-[26px] text-[#4b7a3c]" />
                <span className="text-[11px] font-extrabold text-gray-900">{t.label}</span>
              </Comp>
            )
          })}
        </div>

        <h4 className="mx-3 mt-4 mb-2 text-[14px] font-extrabold text-gray-900">آخر طلباتك</h4>
        <div className="mx-3 rounded-2xl bg-white shadow-[0_4px_14px_rgba(0,0,0,.06)] py-4 text-center text-[11px] text-gray-400">
          مفيش طلبات لسه، اعمل طلب دلوقتي!
        </div>
      </div>
      <BottomNav active="home" />
    </Screen>
  )
}

/* ---------- المتاجر (اشتري سلة) ---------- */
export function StoresScreen() {
  const stores = [
    { name: 'سوبر ماركت قريب منك', dist: 'على بعد 300 متر', icon: 'store' as IconName },
    { name: 'مكتبة قريبة منك', dist: 'على بعد 700 متر', icon: 'store' as IconName },
    { name: 'محل ألعاب قريب منك', dist: 'على بعد 1.2 كم', icon: 'store' as IconName },
  ]
  return (
    <Screen>
      <Header title="متاجر سلة" />
      <div className="flex-1 overflow-hidden pb-[58px] px-3 pt-3">
        <div className="rounded-2xl bg-gradient-to-br from-[#1b5e3b] to-[#3d9a6b] text-white p-3 flex items-center gap-3 shadow-lg">
          <Basket id="st" className="w-[72px] h-[76px] shrink-0 bg-white/90 rounded-xl p-1.5" level={0.2} />
          <div>
            <div className="font-extrabold text-[13px]">سلة للأطفال</div>
            <div className="text-[10px] opacity-90 leading-relaxed mt-0.5">سلة الطفل لتجميع المواد القابلة لإعادة التدوير، بسعر رخيص ومدعوم</div>
          </div>
        </div>
        <h4 className="mt-4 mb-2 text-[13px] font-extrabold text-gray-900">اشتريها من أقرب متجر ليك</h4>
        <div className="space-y-2">
          {stores.map((s) => (
            <div key={s.name} className="rounded-2xl bg-white shadow-[0_3px_12px_rgba(0,0,0,.06)] p-3 flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-[#e6f4ec] text-[#2e8b57] flex items-center justify-center"><Icon name={s.icon} className="w-5 h-5" /></span>
              <div className="flex-1 min-w-0">
                <div className="text-[11.5px] font-extrabold text-gray-900">{s.name}</div>
                <div className="text-[10px] text-gray-500 flex items-center gap-1 mt-0.5"><Icon name="pin" className="w-3 h-3" />{s.dist}</div>
              </div>
              <span className="px-2 py-1 rounded-full bg-[#e6f4ec] text-[#2e8b57] text-[9.5px] font-extrabold">متاح</span>
            </div>
          ))}
        </div>
      </div>
      <BottomNav active="home" />
    </Screen>
  )
}

/* ---------- سلة بتتملي ---------- */
export function BasketScreen() {
  const [lv, setLv] = useState(0.1)
  useEffect(() => {
    const t = setTimeout(() => setLv(0.85), 200)
    return () => clearTimeout(t)
  }, [])
  const pct = Math.round(lv * 100)
  return (
    <Screen>
      <Header title="سلة" />
      <div className="flex-1 overflow-hidden pb-[58px] px-3 pt-3 flex flex-col items-center">
        <div className="w-full rounded-2xl bg-white shadow-[0_4px_14px_rgba(0,0,0,.07)] p-3 flex flex-col items-center">
          <Basket id="bs" className="w-[150px] h-[158px]" level={lv} />
          <div className="w-full mt-2">
            <div className="flex justify-between text-[11px] font-extrabold text-[#1b5e3b] mb-1">
              <span>سلة بتتملي</span><span>{pct}%</span>
            </div>
            <div className="h-2.5 rounded-full bg-[#e6f4ec] overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-[#1b5e3b] to-[#4cb37b] transition-all duration-[1800ms] ease-out" style={{ width: `${pct}%` }} />
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-2.5 mt-3">
          <div className="rounded-2xl bg-white shadow-[0_3px_12px_rgba(0,0,0,.06)] p-3 flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-[#e6f4ec] text-[#2e8b57] flex items-center justify-center"><Icon name="bottle" className="w-[18px] h-[18px]" /></span>
            <div><div className="text-[14px] font-extrabold text-gray-900 leading-none">14</div><div className="text-[9.5px] text-gray-500 mt-1">قزاز</div></div>
          </div>
          <div className="rounded-2xl bg-white shadow-[0_3px_12px_rgba(0,0,0,.06)] p-3 flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-[#e6f4ec] text-[#2e8b57] flex items-center justify-center"><Icon name="can" className="w-[18px] h-[18px]" /></span>
            <div><div className="text-[14px] font-extrabold text-gray-900 leading-none">9</div><div className="text-[9.5px] text-gray-500 mt-1">كانز</div></div>
          </div>
          <div className="rounded-2xl bg-white shadow-[0_3px_12px_rgba(0,0,0,.06)] p-3 flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-[#e6f4ec] text-[#2e8b57] flex items-center justify-center"><Icon name="recycle" className="w-[18px] h-[18px]" /></span>
            <div><div className="text-[14px] font-extrabold text-gray-900 leading-none">5</div><div className="text-[9.5px] text-gray-500 mt-1">بلاستيك</div></div>
          </div>
          <div className="rounded-2xl bg-white shadow-[0_3px_12px_rgba(0,0,0,.06)] p-3 flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-[#e6f4ec] text-[#2e8b57] flex items-center justify-center"><Icon name="box" className="w-[18px] h-[18px]" /></span>
            <div><div className="text-[14px] font-extrabold text-gray-900 leading-none">3</div><div className="text-[9.5px] text-gray-500 mt-1">كرتون</div></div>
          </div>
        </div>
        <p className="mt-3 text-[10.5px] text-gray-500 text-center leading-relaxed">أول ما السلة تتملي، صوّرها وابعت الطلب من الرئيسية</p>
      </div>
      <BottomNav active="home" />
    </Screen>
  )
}

/* ---------- الكاميرا: تصوير السلة ---------- */
export function CameraScreen({ captured, onShoot, onContinue }: { captured: boolean; onShoot: () => void; onContinue: () => void }) {
  return (
    <Screen dark>
      <div className="h-[46px] shrink-0 flex items-center justify-between px-4 text-white">
        <span className="font-extrabold text-[14px]">صوّر السلة</span>
        <Icon name="bolt" className="w-4 h-4 text-white/70" />
      </div>
      <div className="relative flex-1 mx-3 rounded-2xl bg-gradient-to-b from-slate-700 to-slate-800 overflow-hidden flex items-center justify-center">
        <Basket id="cam" className="w-[190px] h-[200px]" level={0.9} />
        {['top-3 right-3 border-t-4 border-r-4', 'top-3 left-3 border-t-4 border-l-4', 'bottom-3 right-3 border-b-4 border-r-4', 'bottom-3 left-3 border-b-4 border-l-4'].map((c) => (
          <span key={c} className={`absolute w-6 h-6 rounded-sm border-[#5fd18d] ${c}`} />
        ))}
        {!captured && <span className="absolute bottom-3 text-[10px] text-white/80 bg-black/40 px-2.5 py-1 rounded-full">خلّي السلة كلها جوه الإطار</span>}
      </div>
      {!captured ? (
        <div className="h-[110px] shrink-0 flex items-center justify-center">
          <button type="button" onClick={onShoot} aria-label="صوّر" className="relative w-[58px] h-[58px] rounded-full border-4 border-white flex items-center justify-center">
            <span className="w-[42px] h-[42px] rounded-full bg-white" />
            <Tap />
          </button>
        </div>
      ) : (
        <div className="shrink-0 m-3 rounded-2xl bg-white p-3 shadow-xl">
          <div className="flex items-center gap-2 text-[#1b5e3b] font-extrabold text-[12px] mb-2">
            <Icon name="check" className="w-4 h-4" /> تم التعرّف على السلة
          </div>
          <div className="grid grid-cols-2 gap-1.5 text-center mb-2.5">
            {[['14', 'قزاز'], ['9', 'كانز'], ['5', 'بلاستيك'], ['3', 'كرتون']].map(([v, l]) => (
              <div key={l} className="rounded-xl bg-[#e6f4ec] py-1.5">
                <div className="text-[13px] font-extrabold text-[#1b5e3b] leading-none">{v}</div>
                <div className="text-[9.5px] text-gray-500 mt-0.5">{l}</div>
              </div>
            ))}
          </div>
          <div className="text-center text-[11px] font-extrabold text-[#1b5e3b] mb-2.5">~45 جنيه</div>
          <button type="button" onClick={onContinue} className={`w-full py-2 rounded-xl ${GREEN} text-white text-[12px] font-extrabold`}>كمّل واختار اللعبة</button>
        </div>
      )}
    </Screen>
  )
}

/* ---------- اختيار اللعبة ---------- */
export function ToysScreen({ toy, onPick, onConfirm }: { toy: number; onPick: (i: number) => void; onConfirm: () => void }) {
  return (
    <Screen>
      <Header title="اختار لعبتك" />
      <div className="flex-1 overflow-hidden pb-[58px] px-3 pt-3">
        <p className="text-[10.5px] text-gray-500 mb-2.5">اللعبة بتتعمل من الإزاز والبلاستيك اللي في سلتك</p>
        <div className="grid grid-cols-2 gap-2.5">
          {TOYS.map((t, i) => {
            const on = toy === i
            return (
              <button
                key={t.name} type="button" onClick={() => onPick(i)} aria-pressed={on}
                className={`relative rounded-2xl bg-white p-2.5 flex flex-col items-center shadow-[0_3px_12px_rgba(0,0,0,.07)] border-2 transition-all ${on ? 'border-[#2e8b57] scale-[1.02]' : 'border-transparent'}`}
              >
                {on && <span className={`absolute top-1.5 right-1.5 w-5 h-5 rounded-full ${GREEN} text-white flex items-center justify-center`}><Icon name="check" className="w-3.5 h-3.5" strokeWidth={2.6} /></span>}
                <t.Art className="w-[62px] h-[62px]" />
                <span className="text-[12px] font-extrabold text-gray-900 mt-1">{t.name}</span>
                <span className="text-[9px] text-gray-500">{t.need}</span>
              </button>
            )
          })}
        </div>
        <button type="button" onClick={onConfirm} className={`mt-3 w-full py-2.5 rounded-xl ${GREEN} text-white text-[12.5px] font-extrabold shadow-md`}>
          اطلب الاستبدال
        </button>
      </div>
      <BottomNav active="home" />
    </Screen>
  )
}

/* ---------- تتبع الطلب والتسليم ---------- */
export function TrackScreen({ toy }: { toy: number }) {
  const [stage, setStage] = useState(1)
  useEffect(() => {
    const t = setTimeout(() => setStage(2), 1600)
    return () => clearTimeout(t)
  }, [])
  const T = TOYS[toy]
  const stages: { label: string; icon: IconName }[] = [
    { label: 'تم استلام طلبك', icon: 'check' },
    { label: 'المندوب في الطريق ليك', icon: 'truck' },
    { label: 'استلام اللعبة والفلوس', icon: 'gift' },
  ]
  return (
    <Screen>
      <Header title="طلبك" />
      <div className="flex-1 overflow-hidden pb-[58px] px-3 pt-3">
        <div className="rounded-2xl bg-white shadow-[0_3px_12px_rgba(0,0,0,.07)] p-3 flex items-center gap-3">
          <T.Art className="w-[44px] h-[44px]" />
          <div className="flex-1">
            <div className="text-[12px] font-extrabold text-gray-900">استبدال سلة بـ {T.name}</div>
            <div className="text-[10px] text-gray-500 mt-0.5">من المواد التي تجمعها</div>
          </div>
          <span className="px-2 py-1 rounded-full bg-[#e6f4ec] text-[#2e8b57] text-[9.5px] font-extrabold">جاري</span>
        </div>

        <ol className="mt-3 rounded-2xl bg-white shadow-[0_3px_12px_rgba(0,0,0,.06)] p-3 space-y-2.5">
          {stages.map((s, i) => {
            const done = i <= stage
            return (
              <li key={s.label} className="flex items-center gap-2.5">
                <span className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-500 ${done ? `${GREEN} text-white` : 'bg-gray-100 text-gray-400'}`}>
                  <Icon name={s.icon} className="w-4 h-4" />
                </span>
                <span className={`text-[11px] font-bold ${done ? 'text-gray-900' : 'text-gray-400'}`}>{s.label}</span>
              </li>
            )
          })}
        </ol>

        <div className="mt-3 rounded-2xl bg-gradient-to-br from-[#1b5e3b] to-[#3d9a6b] text-white p-3 shadow-lg">
          <div className="text-[11px] font-extrabold mb-2">المندوب هيسلّمك</div>
          <div className="flex items-center justify-around bg-white/95 rounded-xl py-2">
            <div className="flex flex-col items-center"><T.Art className="w-[40px] h-[40px]" /><span className="text-[10px] font-extrabold text-gray-800">{T.name}</span></div>
            <span className="text-[#2e8b57] font-extrabold text-lg">+</span>
            <div className="flex flex-col items-center"><Cash className="w-[52px] h-[32px]" /><span className="text-[10px] font-extrabold text-gray-800">45 جنيه كاش</span></div>
          </div>
          <div className="text-[9.5px] opacity-90 mt-2 leading-relaxed">الفلوس هي تمن محتويات سلتك يا صغير، واللعبة هدية الاستبدال</div>
        </div>
      </div>
      <BottomNav active="orders" />
    </Screen>
  )
}

/* ---------- إطار التليفون ---------- */
export function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[250px] h-[538px] rounded-[2.2rem] border-[7px] border-gray-900 bg-gray-900 shadow-2xl overflow-hidden shrink-0">
      <span aria-hidden="true" className="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-1.5 rounded-full bg-gray-700 z-10" />
      <div className="absolute top-0 left-0 origin-top-left" style={{ width: 300, height: 666, transform: 'scale(0.7867)' }}>
        {children}
      </div>
    </div>
  )
}


