'use client'

import React, { useState } from 'react'

// صور Fluent Emoji 3D (Microsoft, MIT) - حطها في public/emoji
const BASE = '/emoji'

const FILES: Record<string, string> = {
  '🤖': 'robot', '💬': 'speech-balloon', '🏠': 'house', '🎓': 'graduation-cap',
  '🧸': 'teddy-bear', '🏢': 'office-building', '👋': 'waving-hand',
  '👇': 'backhand-index-pointing-down', '💸': 'money-with-wings',
  '🤭': 'face-with-hand-over-mouth', '😉': 'winking-face', '👏': 'clapping-hands',
  '💰': 'money-bag', '🎮': 'video-game', '🛍': 'shopping-bags', '♻': 'recycling-symbol',
  '📱': 'mobile-phone', '🥳': 'partying-face', '🚀': 'rocket',
  '🌍': 'globe-showing-europe-africa', '🐷': 'pig-face', '🎯': 'bullseye',
  '🎁': 'wrapped-gift', '😌': 'relieved-face', '🌱': 'seedling', '📍': 'round-pushpin',
  '🚚': 'delivery-truck', '🏭': 'factory', '📦': 'package',
  '🏙': 'cityscape', '✅': 'check-mark-button', '🔄': 'counterclockwise-arrows-button',
}

// بيتحط مرة واحدة جوه كل قسم (للحركة الخفيفة بس)
export function Emoji3DStyles() {
  return (
    <style>{`
      .e3d-img{display:inline-block;width:1em;height:1em;vertical-align:-0.15em;filter:drop-shadow(0 4px 4px rgba(21,128,61,.25))}
      .e3d-float{animation:e3dFloat 3s ease-in-out infinite}
      @keyframes e3dFloat{0%,100%{translate:0 0}50%{translate:0 -3px}}
      @media (prefers-reduced-motion: reduce){.e3d-float{animation:none}}
    `}</style>
  )
}

export function Emoji3D({ children, size = 'text-2xl', float = true }: { children: React.ReactNode; size?: string; float?: boolean }) {
  const [failed, setFailed] = useState(false)
  const ch = String(children).replace(/\uFE0F/g, '')
  const file = FILES[ch]

  if (!file || failed) {
    return <span role="img" aria-hidden="true" className={size}>{children}</span>
  }
  return (
    <span className={size} aria-hidden="true">
      <img
        src={`${BASE}/${file}.png`}
        alt=""
        draggable={false}
        className={`e3d-img ${float ? 'e3d-float' : ''}`}
        onError={() => setFailed(true)}
      />
    </span>
  )
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
