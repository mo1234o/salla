import type { Metadata } from 'next'
import { Cairo, Tajawal } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CopyProtection } from '@/components/salla/copy-protection'
import './globals.css'

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  weight: ['400', '600', '700', '800', '900'],
  display: 'swap',
})

const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  variable: '--font-tajawal',
  weight: ['400', '500', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'تطبيق سلة ♻️ حوّل مخلفاتك لثروة بضغطة زر! | تطبيق إعادة تدوير مصري',
  description: 'تطبيق سلة بيساعدك تحافظ على البيئة وتحول المخلفات لفلوس ومكافآت في محفظتك بكل سهولة ومن موبايلك. بنجمع الألمنيوم، البلاستيك، النحاس، الإلكترونيات، الحديد، الكرتون، والورق.',
  keywords: 'تطبيق سلة, إعادة تدوير, مصر, الدلتا, مخلفات, ألمنيوم, بلاستيك, نحاس, إلكترونيات, حديد, كرتون, ورق, مكافآت, حماية البيئة, تطبيق مصري, جمع القمامة, فلوس من القمامة, تطبيق بيئي, سلة Egypt, Salla app, إعادة تدوير المعادن, إعادة تدوير الورق, إعادة تدوير الإلكترونيات',
  authors: [{ name: 'سامي عوض' }, { name: 'مصطفى الجيزاوي' }],
  creator: 'سامي عوض ومصطفى الجيزاوي',
  publisher: 'سلة',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  openGraph: {
    type: 'website',
    locale: 'ar_EG',
    alternateLocale: ['en_US'],
    url: 'https://salla-kzzj8o1w6-mos-projects-f327af6a.vercel.app',
    siteName: 'تطبيق سلة',
    title: 'تطبيق سلة ♻️ حوّل مخلفاتك لثروة بضغطة زر!',
    description: 'تطبيق سلة بيساعدك تحافظ على البيئة وتحول المخلفات لفلوس ومكافآت في محفظتك بكل سهولة ومن موبايلك. بنجمع الألمنيوم، البلاستيك، النحاس، الإلكترونيات، الحديد، الكرتون، والورق.',
    images: [
      {
        url: '/salla/og-image.png',
        width: 1200,
        height: 630,
        alt: 'تطبيق سلة - حوّل مخلفاتك لثروة',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تطبيق سلة ♻️ حوّل مخلفاتك لثروة بضغطة زر!',
    description: 'تطبيق سلة بيساعدك تحافظ على البيئة وتحول المخلفات لفلوس ومكافآت في محفظتك بكل سهولة ومن موبايلك. بنجمع الألمنيوم، البلاستيك، النحاس، الإلكترونيات، الحديد، الكرتون، والورق.',
    images: ['/salla/og-image.png'],
    creator: '@salla_egypt',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'Environment',
  classification: 'Recycling Application',
  referrer: 'origin-when-cross-origin',
  other: {
    'geo.region': 'EG',
    'geo.placename': 'مصر',
    'geo.position': '30.0444;31.2357',
    'ICBM': '30.0444, 31.2357',
    'theme-color': '#22c55e',
    'msapplication-TileColor': '#22c55e',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'سلة',
    'mobile-web-app-capable': 'yes',
    'application-name': 'سلة',
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://salla-kzzj8o1w6-mos-projects-f327af6a.vercel.app',
    languages: {
      'ar-EG': 'https://salla-kzzj8o1w6-mos-projects-f327af6a.vercel.app',
      'en-US': 'https://salla-kzzj8o1w6-mos-projects-f327af6a.vercel.app/en',
    },
  },
  metadataBase: new URL('https://salla-kzzj8o1w6-mos-projects-f327af6a.vercel.app'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className="bg-background">
      <body className={`${cairo.variable} ${tajawal.variable} font-sans antialiased`}>
        <CopyProtection />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
