'use client'

import React, { useState } from 'react'
import {
  Bot, MessageCircle, Home, GraduationCap, ToyBrick, Building2, Rocket, ShoppingBag, Recycle,
  Smartphone, Gamepad2, Globe, PiggyBank, Target, Gift, Smile, Sprout, MapPin, CheckCircle2,
  Building, Factory, Truck, Package, RefreshCw, Wallet, WavingHand, Hand, MoneyWithWings,
  FaceWithHandOverMouth, WinkingFace, ClappingHands, MoneyBag, PartyPopper, RelievedFace,
  Seedling, Pin, DeliveryTruck, City, CheckCircle, RotateCcw, ShieldCheck, FileText, Award,
} from 'lucide-react'

// أيقونات SVG (lucide) بدل إيموجي الكيبورد. بنكتب الرمز جوه <Icon> وهو بيرسم الـ SVG
const ICONS: Record<string, React.ElementType> = {
  '🤖': Bot, '💬': MessageCircle, '🏠': Home, '🎓': GraduationCap, '🧸': ToyBrick, '🏢': Building2,
  '🚀': Rocket, '🛍': ShoppingBag, '🛍️': ShoppingBag, '♻': Recycle, '📱': Smartphone, '🎮': Gamepad2, '🌍': Globe,
  '🐷': PiggyBank, '🎯': Target, '🎁': Gift, '😌': RelievedFace, '🌱': Seedling, '📍': Pin,
  '✅': CheckCircle, '🏙': City, '🏭': Factory, '🚚': DeliveryTruck, '📦': Package, '🔄': RotateCcw, '💰': MoneyBag,
  '👋': WavingHand, '👇': Hand, '💸': MoneyWithWings, '🤭': FaceWithHandOverMouth, '😉': WinkingFace,
  '👏': ClappingHands, '🥳': PartyPopper, '🏅': Award, '📄': FileText, '🛡️': ShieldCheck,
}

type Tone = 'brand' | 'white' | 'current'

// بيتحط مرة واحدة جوه كل قسم (للحركة الخفيفة بس)
export function Emoji3DStyles() {
  return (
    <style>{`
      .e3d-img{display:inline-block;width:1em;height:1em;vertical-align:-0.15em}
      .e3d-float{animation:e3dFloat 3s ease-in-out infinite}
      @keyframes e3dFloat{0%,100%{translate:0 0}50%{translate:0 -3px}}
      @media (prefers-reduced-motion: reduce){.e3d-float{animation:none}}
    `}</style>
  )
}

export function Emoji3D({ children, size = 'text-2xl', float = true }: { children: React.ReactNode; size?: string; float?: boolean }) {
  const ch = String(children).replace(/\uFE0F/g, '')
  const C = ICONS[ch]

  if (!C) {
    return <span role="img" aria-hidden="true" className={size}>{children}</span>
  }

  const svg = <C aria-hidden="true" strokeWidth={1.8} style={{ width: '1em', height: '1em' }} />
  const className = `${size} inline-flex shrink-0 align-middle leading-none ${float ? 'e3d-float' : ''}`

  return <span aria-hidden="true" className={className}>{svg}</span>
}

// بيحوّل أي إيموجي جوه النص لصورة 3D
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\p{Extended_Pictographic}\uFE0F?)/gu)
  return (
    <>
      {parts.map((p, i) =>
        /\p{Extended_Pictographic}/u.test(p) ? (
          <Emoji3D key={i} size="text-xl" float={false}>{p}</Emoji3D>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  )
}
