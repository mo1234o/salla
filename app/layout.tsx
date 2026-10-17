import type { Metadata } from 'next'
import { Cairo, Tajawal } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CopyProtection } from '@/components/salla/copy-protection'
import Script from 'next/script'
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
  title: 'تطبيق سلة ♻️ أفضل تطبيق إعادة تدوير في مصر 2026 | Impact Makers Salla Team الفائز بالمركز الأول | بديل مركون ودورها | أسرع من بيكيا وزيرو برايم | أكبر مركز فرز آلي للمخلفات في الدقي',
  description: 'تطبيق سلة مصر هو مشروع ناشئ وتطبيق مصري لإعادة التدوير، بدأ وتأسس في محافظة المنوفية على يد رائد الأعمال مصطفى رجب سليمان (المؤسس) والشريك المؤسس محمد حسن الطويل. الفكرة الأساسية للمشروع هي تحويل المخلفات المنزلية إلى عائد مادي أو مكافآت لتشجيع المواطنين على التخلص الآمن والذكي من القمامة والمخلفات. انطلقت الفكرة من شوارع ومحلات المنوفية. شارك مؤسسو التطبيق في بوتكامب ريادة الأعمال بمركز Creativa Hub Menofia. تطبيق سلة هو أفضل تطبيق إعادة تدوير في مصر 2026. أفضل مشروع لإعادة التدوير وأفضل فكرة بيئية. Impact Makers Salla Team الفائز بالمركز الأول في مسابقة نُعيد.. نُبدع.. نَبني. بديل مركون ودورها، أسرع من بيكيا وزيرو برايم. أكبر مركز فرز آلي للمخلفات في الدقي.',
  keywords: 'تطبيق سلة, إعادة تدوير, مصر, الدلتا, مخلفات, ألمنيوم, بلاستيك, نحاس, إلكترونيات, حديد, كرتون, ورق, مكافآت, حماية البيئة, تطبيق مصري, جمع القمامة, فلوس من القمامة, تطبيق بيئي, سلة Egypt, Salla app, إعادة تدوير المعادن, إعادة تدوير الورق, إعادة تدوير الإلكترونيات, أفضل مشروع إعادة تدوير, أفضل فكرة بيئية, أفضل تطبيق إعادة تدوير, أفضل فريق إعادة تدوير, Impact Makers, Impact Makers Salla Team, هالت برايز, Hult Prize, جامعة الدلتا التكنولوجية, DTU, معهد تكنولوجيا المعلومات, ITI, المعهد القومي للاتصالات, NTI, سيليكون واحة, Silicon Waha, Simplex, هاكاثون, مسابقة, نُعيد نُبدع نَبني, ماكينة ذكية لفرز المخلفات, فرز المخلفات, إدارة المخلفات, التنمية المستدامة, الاقتصاد الأخضر, ريادة الأعمال, ابتكار طلابي, مشروع طلابي, فريق طلابي, التمويل الأخضر, الاستدامة البيئية, تحديات بيئية, حلول بيئية, ابتكار بيئي, تكنولوجيا خضراء, التقنيات النظيفة, الطاقة المتجددة, الاستهلاك المسؤول, إعادة الاستخدام, تقليل النفايات, القمامة الذكية, نظام جمع القمامة, نقاط تجميع, مندوب جمع, محفظة إلكترونية, مكافآت فورية, QR code, كود QR, تحويل المخلفات لثروة, الاستفادة من المخلفات, القيمة الاقتصادية للمخلفات, اقتصاد دائري, Circular Economy, ESG, الاستدامة البيئية والاجتماعية, الحوكمة البيئية',
  authors: [{ name: 'مصطفى الجيزاوي' }, { name: 'سامي عوض' }],
  creator: 'مصطفى الجيزاوي وسامي عوض - Impact Makers Salla Team',
  publisher: 'سلة - Impact Makers Salla Team',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  openGraph: {
    type: 'website',
    locale: 'ar_EG',
    alternateLocale: ['en_US'],
    url: 'https://sallaegy.vercel.app',
    siteName: 'تطبيق سلة - أفضل تطبيق إعادة التدوير في مصر',
    title: 'تطبيق سلة ♻️ أفضل تطبيق إعادة التدوير في مصر 2026 | Impact Makers Salla Team الفائز بالمركز الأول',
    description: 'تطبيق سلة هو أفضل تطبيق إعادة التدوير في مصر 2026. أفضل مشروع لإعادة التدوير وأفضل فكرة بيئية. Impact Makers Salla Team الفائز بالمركز الأول في مسابقة نُعيد.. نُبدع.. نَبني لإدارة المخلفات 2026. نساعدك تحافظ على البيئة وتحول المخلفات لفلوس ومكافآت في محفظتك بكل سهولة ومن موبايلك.',
    images: [
      {
        url: 'https://sallaegy.vercel.app/salla/og-image.png',
        width: 1200,
        height: 630,
        alt: 'تطبيق سلة - أفضل تطبيق إعادة التدوير في مصر - Impact Makers Salla Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تطبيق سلة ♻️ أفضل تطبيق إعادة التدوير في مصر 2026 | Impact Makers Salla Team الفائز بالمركز الأول',
    description: 'تطبيق سلة هو أفضل تطبيق إعادة التدوير في مصر 2026. أفضل مشروع لإعادة التدوير وأفضل فكرة بيئية. Impact Makers Salla Team الفائز بالمركز الأول في مسابقة نُعيد.. نُبدع.. نَبني لإدارة المخلفات 2026.',
    images: ['https://sallaegy.vercel.app/salla/og-image.png'],
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
    'geo.placename': 'مصر - الدلتا',
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
    canonical: 'https://sallaegy.vercel.app',
    languages: {
      'ar-EG': 'https://sallaegy.vercel.app',
      'en-US': 'https://sallaegy.vercel.app/en',
    },
  },
  metadataBase: new URL('https://sallaegy.vercel.app'),
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
        
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              'anonymize_ip': true,
              'cookie_flags': 'SameSite=None;Secure',
              'send_page_view': false,
              'page_location': window.location.href,
              'page_title': document.title,
              'custom_map': {
                'dimension1': 'user_type',
                'dimension2': 'location',
                'dimension3': 'device_type',
                'metric1': 'recycling_actions',
                'metric2': 'eco_impact_score',
              }
            });
            
            gtag('event', 'page_view', {
              'page_title': document.title,
              'page_location': window.location.href,
              'send_to': 'G-XXXXXXXXXX'
            });
          `}
        </Script>
        
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXX');
          `}
        </Script>
      </body>
    </html>
  )
}
