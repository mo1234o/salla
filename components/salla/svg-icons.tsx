'use client'

import React from 'react'

/* =====================================================================
   مكتبة أيقونات SVG خاصة بسلة (من غير إيموجي ومن غير مكتبات خارجية)
   - <Icon name="truck" className="w-6 h-6 text-green-600" />
   - <IconTile name="gift" /> مربع متدرج أخضر بأيقونة بيضا
   - الرسومات الملونة (ألعاب، سلة، كاش) تحت في آخر الملف
   ===================================================================== */

const F = { fill: 'currentColor', fillOpacity: 0.16 } as const

const PATHS = {
  robot: (
    <>
      <rect x="4" y="8" width="16" height="11" rx="3.5" {...F} />
      <path d="M12 4v4" /><circle cx="12" cy="3.4" r="1.2" fill="currentColor" />
      <circle cx="9" cy="13" r="1.3" fill="currentColor" stroke="none" /><circle cx="15" cy="13" r="1.3" fill="currentColor" stroke="none" />
      <path d="M9.5 16.3h5M2 12v4M22 12v4" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-9.500l-4.500 3.500V17H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" {...F} />
      <circle cx="8" cy="11" r="1" fill="currentColor" stroke="none" /><circle cx="12" cy="11" r="1" fill="currentColor" stroke="none" /><circle cx="16" cy="11" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  home: (
    <>
      <path d="M5.500 10v9.500h13V10l-6.500-5.500z" {...F} />
      <path d="M3 11.500 12 4l9 7.500M10 19.500v-5h4v5" />
    </>
  ),
  graduation: (
    <>
      <path d="M2 9l10-5 10 5-10 5z" {...F} />
      <path d="M6 11.500V16c0 1.500 2.700 3 6 3s6-1.500 6-3v-4.500M22 9v6" />
    </>
  ),
  building: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1.500" {...F} />
      <path d="M9 7.500h1.500M13.500 7.500H15M9 11.500h1.500M13.500 11.500H15M10 21v-4h4v4" />
    </>
  ),
  rocket: (
    <>
      <path d="M12 2.500c3.500 2.500 5 6 5 10l-2 3H9l-2-3c0-4 1.500-7.500 5-10z" {...F} />
      <circle cx="12" cy="9.500" r="1.800" />
      <path d="M7 13l-3 3 1 3 3-2M17 13l3 3-1 3-3-2M10.500 18.500 12 22l1.500-3.500" />
    </>
  ),
  bag: (
    <>
      <path d="M5 8h14l-1 12H6z" {...F} />
      <path d="M9 8V6.500a3 3 0 0 1 6 0V8" />
    </>
  ),
  recycle: (
    <>
      <g id="r1"><path d="M12 4A8 8 0 0 1 18.930 8M19.160 4.400 18.930 8 15.700 6.400" /></g>
      <g transform="rotate(120 12 12)"><path d="M12 4A8 8 0 0 1 18.930 8M19.160 4.400 18.930 8 15.700 6.400" /></g>
      <g transform="rotate(240 12 12)"><path d="M12 4A8 8 0 0 1 18.930 8M19.160 4.400 18.930 8 15.700 6.400" /></g>
    </>
  ),
  phone: (
    <>
      <rect x="6.500" y="2" width="11" height="20" rx="2.800" {...F} />
      <path d="M10.500 18.500h3" />
    </>
  ),
  gamepad: (
    <>
      <path d="M7 7h10a5 5 0 0 1 4.900 6l-.6 3a2.800 2.800 0 0 1-5 1L15 15H9l-1.300 2a2.800 2.800 0 0 1-5-1l-.6-3A5 5 0 0 1 7 7z" {...F} />
      <path d="M8 10v4M6 12h4" /><circle cx="15.500" cy="11" r=".9" fill="currentColor" /><circle cx="17.800" cy="13" r=".9" fill="currentColor" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" {...F} />
      <path d="M3 12h18M12 3c2.500 2.500 3.800 5.500 3.800 9S14.500 18.500 12 21c-2.500-2.500-3.800-5.500-3.800-9S9.500 5.500 12 3z" />
    </>
  ),
  piggy: (
    <>
      <path d="M4.500 12.500C4.500 9 7.500 6.500 11.500 6.500c1.300 0 2.500.3 3.500.8L18.500 5.500l-.7 3.200c1.200.9 2 2.200 2 3.800 0 2.200-1.500 4-3.500 4.800V20h-3v-1.500h-4V20H7v-3c-1.600-1.100-2.500-2.700-2.500-4.500z" {...F} />
      <path d="M9.500 9.500h3" /><circle cx="16" cy="11.500" r=".8" fill="currentColor" stroke="none" />
      <path d="M20 12.500h1.500" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" {...F} /><circle cx="12" cy="12" r="5.200" /><circle cx="12" cy="12" r="1.600" fill="currentColor" />
    </>
  ),
  gift: (
    <>
      <rect x="3" y="8" width="18" height="4" rx="1" {...F} />
      <path d="M4.500 12h15v8.500h-15zM12 8v12.500" />
      <path d="M12 8c-.8-2.800-5-3.300-5-1 0 1.200 2.300 1 5 1zm0 0c.8-2.800 5-3.300 5-1 0 1.200-2.300 1-5 1z" />
    </>
  ),
  smile: (
    <>
      <circle cx="12" cy="12" r="9" {...F} />
      <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" /><circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" />
      <path d="M8.500 14c1 1.600 2.200 2.300 3.500 2.300s2.500-.7 3.500-2.300" />
    </>
  ),
  sprout: (
    <>
      <path d="M12 21v-8M8 21h8" />
      <path d="M12 13c0-4-3-6.500-7-6.500 0 4 2.500 6.500 7 6.500z" {...F} />
      <path d="M12 11c0-3.500 2.500-6 7-6 0 3.500-2.500 6-7 6z" {...F} />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6 7-11.500a7 7 0 0 0-14 0C5 15 12 21 12 21z" {...F} />
      <circle cx="12" cy="9.500" r="2.500" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" {...F} /><path d="M8 12.300l3 3 5-6" />
    </>
  ),
  city: (
    <>
      <rect x="3" y="10" width="6" height="11" {...F} /><rect x="9" y="3" width="7" height="18" {...F} /><rect x="16" y="8" width="5" height="13" {...F} />
      <path d="M11.500 7h2M11.500 11h2M11.500 15h2M5 14h2M5 17.500h2M17.500 12h2M17.500 15.500h2M2 21h20" />
    </>
  ),
  factory: (
    <>
      <path d="M3 21V10l6 4v-4l6 4V5h5v16z" {...F} />
      <path d="M7 18h1.500M11.500 18H13M16.500 18H18M16.500 9h1.500" />
    </>
  ),
  truck: (
    <>
      <rect x="2" y="6.500" width="12" height="9.500" rx="1.500" {...F} />
      <path d="M14 10h4l3 3.200V16h-7z" {...F} />
      <circle cx="7" cy="18" r="2" fill="#fff" /><circle cx="17" cy="18" r="2" fill="#fff" />
    </>
  ),
  package: (
    <>
      <path d="M3.500 7.500 12 3l8.500 4.500v9L12 21l-8.500-4.500z" {...F} />
      <path d="M3.500 7.500 12 12l8.500-4.500M12 12v9" />
    </>
  ),
  refresh: (
    <>
      <path d="M20 12a8 8 0 0 0-14-5.300M6 3v4h4M4 12a8 8 0 0 0 14 5.300M18 21v-4h-4" />
    </>
  ),
  wallet: (
    <>
      <rect x="3" y="6" width="18" height="14" rx="3" {...F} />
      <path d="M4.500 6V5.200A1.700 1.700 0 0 1 6.200 3.500H17" /><circle cx="16.500" cy="13" r="1.300" fill="currentColor" stroke="none" />
    </>
  ),
  camera: (
    <>
      <path d="M4 8h3l1.500-2.500h7L17 8h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" {...F} />
      <circle cx="12" cy="13.500" r="3.500" />
    </>
  ),
  bell: (
    <>
      <path d="M6 16v-5a6 6 0 0 1 12 0v5l1.500 2h-15z" {...F} /><path d="M10 21h4" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" {...F} /><path d="M4.500 20.500c0-4 3.500-6.500 7.500-6.500s7.500 2.500 7.500 6.500" />
    </>
  ),
  list: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2.500" {...F} />
      <path d="M8 8h.01M8 12h.01M8 16h.01M11.500 8H16M11.500 12H16M11.500 16H16" strokeWidth={2.200} />
    </>
  ),
  trash: (
    <>
      <path d="M6 7l1 13h10l1-13z" {...F} /><path d="M4 7h16M9 7V4.500h6V7M10 11v6M14 11v6" />
    </>
  ),
  store: (
    <>
      <path d="M5 12v8h14v-8" {...F} />
      <path d="M3 9l1.500-5h15L21 9a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0zM10 20v-4h4v4" />
    </>
  ),
  qr: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M14 14h3v3h-3zM19 14h2M14 19h2M18 18h3v3h-3z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" {...F} /><path d="M12 7v5l3 2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 4.500-3.300 8-8 9-4.700-1-8-4.500-8-9V6z" {...F} /><path d="M8.500 12l2.500 2.500 4.500-5" />
    </>
  ),
  scale: (
    <>
      <path d="M12 4v16M7 20h10M5 7h14" />
      <path d="M5 7l-2.500 6a3 3 0 0 0 5 0zM19 7l-2.500 6a3 3 0 0 0 5 0z" {...F} />
    </>
  ),
  coins: (
    <>
      <ellipse cx="9" cy="7" rx="6" ry="3" {...F} />
      <path d="M3 7v4c0 1.700 2.700 3 6 3s6-1.300 6-3V7M3 11v4c0 1.700 2.700 3 6 3M15 12.500c3 .2 6 1.200 6 2.800v3.200c0 1.700-2.700 3-6 3s-6-1.300-6-3" />
    </>
  ),
  chevron: <path d="M14.500 6l-6 6 6 6" />,
  arrow: <path d="M19 12H5M11 6l-6 6 6 6" />,
  star: <path d="M12 3l2.700 5.600 6.100.8-4.500 4.200 1.100 6.100L12 16.800 6.600 19.700l1.100-6.100L3.200 9.400l6.100-.8z" {...F} />,
  bottle: (
    <>
      <path d="M10 2.500h4v2.500l1.500 2.500c.3.500.5 1 .5 1.600V20a1.500 1.500 0 0 1-1.500 1.500h-5A1.500 1.500 0 0 1 8 20V9.100c0-.6.200-1.100.5-1.600L10 5z" {...F} />
      <path d="M8 13h8" />
    </>
  ),
  can: (
    <>
      <path d="M7 5h10v14.500a1.500 1.500 0 0 1-1.500 1.500h-7A1.500 1.500 0 0 1 7 19.500z" {...F} />
      <ellipse cx="12" cy="5" rx="5" ry="1.600" /><path d="M7 10h10" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M12 3a9 9 0 0 0-7.800 13.500L3 21l4.600-1.200A9 9 0 1 0 12 3z" {...F} />
      <path d="M9 8.500c0 3.500 3 6.500 6.500 6.500l1-1.600-2.200-1-1 .8c-1.100-.5-2-1.400-2.500-2.500l.8-1-1-2.200z" />
    </>
  ),
  bolt: <path d="M13 2.500 5 13.500h6l-1 8 8-11h-6z" {...F} />,
} as const

export type IconName = keyof typeof PATHS

export function Icon({
  name, className = 'w-6 h-6', strokeWidth = 1.8,
}: { name: IconName; className?: string; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"
      className={`shrink-0 ${className}`}
    >
      {PATHS[name]}
    </svg>
  )
}

/** مربع أخضر متدرج بأيقونة بيضا */
export function IconTile({
  name, className = 'w-12 h-12', iconClassName = 'w-6 h-6', rounded = 'rounded-2xl',
}: { name: IconName; className?: string; iconClassName?: string; rounded?: string }) {
  return (
    <span aria-hidden="true" className={`inline-flex shrink-0 items-center justify-center bg-gradient-to-br from-green-700 to-green-500 text-white shadow-md ${rounded} ${className}`}>
      <Icon name={name} className={iconClassName} strokeWidth={1.9} />
    </span>
  )
}

/** مربع فاتح بأيقونة خضرا (للكروت الفاتحة) */
export function IconBadge({
  name, className = 'w-12 h-12', iconClassName = 'w-6 h-6', rounded = 'rounded-2xl',
}: { name: IconName; className?: string; iconClassName?: string; rounded?: string }) {
  return (
    <span aria-hidden="true" className={`inline-flex shrink-0 items-center justify-center bg-green-100 text-green-700 border border-green-200 ${rounded} ${className}`}>
      <Icon name={name} className={iconClassName} />
    </span>
  )
}

/* =====================================================================
   رسومات ملونة (SVG) - ألعاب وسلة وكاش
   ===================================================================== */
type P = { className?: string }

export function ToyTeddy({ className }: P) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <circle cx="15" cy="14" r="7.500" fill="#a86a35" /><circle cx="49" cy="14" r="7.500" fill="#a86a35" />
      <circle cx="15" cy="14" r="3.600" fill="#edc08f" /><circle cx="49" cy="14" r="3.600" fill="#edc08f" />
      <ellipse cx="32" cy="47" rx="13.500" ry="14" fill="#c4803f" /><ellipse cx="32" cy="49" rx="8" ry="9.500" fill="#f2d3a6" />
      <ellipse cx="15" cy="44" rx="4.800" ry="8" transform="rotate(25 15 44)" fill="#b87436" /><ellipse cx="49" cy="44" rx="4.800" ry="8" transform="rotate(-25 49 44)" fill="#b87436" />
      <ellipse cx="22" cy="60" rx="6.500" ry="4" fill="#b87436" /><ellipse cx="42" cy="60" rx="6.500" ry="4" fill="#b87436" />
      <circle cx="32" cy="22" r="15.500" fill="#c4803f" />
      <ellipse cx="32" cy="27.500" rx="6.500" ry="5" fill="#f2d3a6" /><ellipse cx="32" cy="25.500" rx="2.400" ry="1.700" fill="#3b2412" />
      <circle cx="25.500" cy="19" r="2" fill="#3b2412" /><circle cx="38.500" cy="19" r="2" fill="#3b2412" />
      <path d="M29.500 29.500q2.500 2.200 5 0" stroke="#3b2412" strokeWidth="1.500" strokeLinecap="round" />
      <path d="M25 36.500l7 2.500-7 2.500z" fill="#16a34a" /><path d="M39 36.500l-7 2.500 7 2.500z" fill="#16a34a" /><circle cx="32" cy="39" r="2.200" fill="#15803d" />
    </svg>
  )
}

export function ToyRocket({ className }: P) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <path d="M32 3c9.500 7 14 17 14 29v8H18v-8C18 20 22.500 10 32 3z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.500" />
      <path d="M32 3c5.500 4 9 9.500 11 16H21c2-6.500 5.500-12 11-16z" fill="#ef4444" />
      <circle cx="32" cy="29" r="6.500" fill="#3b82f6" stroke="#e2e8f0" strokeWidth="2.500" /><circle cx="30" cy="27" r="1.600" fill="#bfdbfe" />
      <path d="M18 33l-9 11v9l9-5z" fill="#16a34a" /><path d="M46 33l9 11v9l-9-5z" fill="#16a34a" />
      <path d="M24 40h16l-3 8H27z" fill="#94a3b8" />
      <path d="M32 62c-4.500-4-5.500-8.500-4.500-13h9c1 4.500 0 9-4.500 13z" fill="#f59e0b" /><path d="M32 58c-1.800-2-2.300-4-1.800-6h3.600c.5 2 0 4-1.800 6z" fill="#fde68a" />
    </svg>
  )
}

export function ToyCar({ className }: P) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <path d="M5 42l4-11c1.200-3.200 4-5 7.500-5H34c3 0 5.500 1.400 7.200 3.800L46 36h8c3.500 0 6 2.700 6 6v5H5z" fill="#ef4444" />
      <path d="M15.500 30h12v7H11.500z" fill="#dbeafe" /><path d="M31 30h6.500c1 0 2 .6 2.700 1.500L43 37H31z" fill="#dbeafe" />
      <rect x="5" y="42" width="55" height="6" rx="3" fill="#b91c1c" />
      <circle cx="18" cy="49" r="7.500" fill="#0f172a" /><circle cx="18" cy="49" r="3.200" fill="#cbd5e1" />
      <circle cx="47" cy="49" r="7.500" fill="#0f172a" /><circle cx="47" cy="49" r="3.200" fill="#cbd5e1" />
      <circle cx="57" cy="41" r="2" fill="#fde047" /><circle cx="7.500" cy="41" r="1.600" fill="#fecaca" />
    </svg>
  )
}

export function ToyRobot({ className }: P) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <path d="M32 8v6" stroke="#15803d" strokeWidth="3" strokeLinecap="round" /><circle cx="32" cy="6" r="3.500" fill="#f59e0b" />
      <rect x="13" y="14" width="38" height="25" rx="9" fill="#3b82f6" />
      <circle cx="24" cy="26" r="5" fill="#fff" /><circle cx="40" cy="26" r="5" fill="#fff" />
      <circle cx="24.500" cy="26.500" r="2.200" fill="#0f172a" /><circle cx="40.500" cy="26.500" r="2.200" fill="#0f172a" />
      <path d="M26 33h12" stroke="#bfdbfe" strokeWidth="2" strokeLinecap="round" />
      <rect x="18" y="41" width="28" height="16" rx="6" fill="#22c55e" /><rect x="26" y="45" width="12" height="7" rx="2" fill="#bbf7d0" />
      <rect x="5" y="42" width="9" height="14" rx="4.500" fill="#60a5fa" /><rect x="50" y="42" width="9" height="14" rx="4.500" fill="#60a5fa" />
      <rect x="21" y="57" width="9" height="5.500" rx="2.700" fill="#15803d" /><rect x="34" y="57" width="9" height="5.500" rx="2.700" fill="#15803d" />
    </svg>
  )
}

export function Cash({ className }: P) {
  return (
    <svg viewBox="0 0 64 40" className={className} fill="none" aria-hidden="true">
      <rect x="1.500" y="1.500" width="61" height="37" rx="6" fill="#16a34a" stroke="#14532d" strokeWidth="2" />
      <rect x="6.500" y="6.500" width="51" height="27" rx="4" stroke="#bbf7d0" strokeWidth="1.500" strokeDasharray="3 3" />
      <circle cx="32" cy="20" r="9" fill="#bbf7d0" /><circle cx="32" cy="20" r="4.500" fill="#16a34a" />
      <circle cx="12" cy="20" r="2.500" fill="#bbf7d0" /><circle cx="52" cy="20" r="2.500" fill="#bbf7d0" />
    </svg>
  )
}

export function Coin({ className }: P) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="18" fill="#fbbf24" stroke="#b45309" strokeWidth="2" />
      <circle cx="20" cy="20" r="12.500" stroke="#fde68a" strokeWidth="2" />
      <path d="M20 12v16M15.500 16.500c0-1.800 2-3 4.500-3s4.500 1.200 4.500 3c0 4-9 2.200-9 6.500 0 1.800 2 3 4.500 3s4.500-1.200 4.500-3" stroke="#b45309" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function BottleShape({ x, y, h = 30, cap = '#2563eb' }: { x: number; y: number; h?: number; cap?: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="2.500" y="0" width="5" height="3.200" rx="1" fill={cap} />
      <path d={`M3 3.200h4v3c1.500 1.500 3 3 3 5.500V${h - 3}a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V11.700C0 9.200 1.500 7.700 3 6.200z`} fill="#bfe3ff" stroke="#60a5fa" strokeWidth="1" />
      <path d={`M2.500 12v${h - 18}`} stroke="#fff" strokeWidth="1.400" strokeLinecap="round" opacity=".8" />
    </g>
  )
}

function CanShape({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="0" y="0" width="11" height="18" rx="2" fill="#ef4444" />
      <rect x="0" y="6" width="11" height="5" fill="#fff" opacity=".85" />
      <rect x="0" y="0" width="11" height="2.500" rx="1" fill="#cbd5e1" />
    </g>
  )
}

/** سلتي: level من 0 لـ 1 بيحدد مستوى الامتلاء (بتتحرك بنعومة) */
export function Basket({ className, level = 1, id = 'bk' }: P & { level?: number; id?: string }) {
  const lv = Math.max(0, Math.min(1, level))
  return (
    <svg viewBox="0 0 80 84" className={className} fill="none" aria-hidden="true">
      <defs>
        <clipPath id={`${id}-clip`}><path d="M12 28h56l-6.500 44h-43z" /></clipPath>
      </defs>
      <ellipse cx="40" cy="79" rx="26" ry="3" fill="#0f172a" opacity=".10" />
      <path d="M8 24h64l-8 52H16z" fill="#e2e8f0" />
      <g clipPath={`url(#${id}-clip)`}>
        <g style={{ transform: `translateY(${(1 - lv) * 48}px)`, transition: 'transform 1.8s cubic-bezier(.22,.8,.3,1)' }}>
          <rect x="10" y="22" width="60" height="60" fill="#dbeafe" opacity=".55" />
          <BottleShape x={14} y={10} h={34} /><BottleShape x={25} y={8} h={36} cap="#16a34a" /><BottleShape x={36} y={12} h={32} />
          <CanShape x={48} y={24} /><BottleShape x={58} y={9} h={35} />
          <BottleShape x={18} y={30} h={34} /><BottleShape x={30} y={32} h={32} /><CanShape x={42} y={36} /><BottleShape x={53} y={30} h={34} cap="#16a34a" />
          <BottleShape x={14} y={52} h={30} /><BottleShape x={26} y={50} h={32} /><BottleShape x={38} y={52} h={30} /><CanShape x={50} y={56} />
        </g>
      </g>
      <path d="M8 24h64l-8 52H16z" stroke="#94a3b8" strokeWidth="2" strokeLinejoin="round" />
      <path d="M7 22h66v6H7z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.500" strokeLinejoin="round" />
      <path d="M11.500 38h57M12.800 50h54.400M14 62h52" stroke="#94a3b8" strokeWidth="3.500" strokeLinecap="round" opacity=".9" />
    </svg>
  )
}

export { BottleShape, CanShape }
