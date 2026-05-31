'use client'

import { useEffect } from 'react'

export function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'سلة',
    alternateName: 'Salla Egypt',
    url: 'https://salla-egypt.com',
    logo: 'https://salla-egypt.com/icon.png',
    description: 'تطبيق سلة بيساعدك تحافظ على البيئة وتحول المخلفات لفلوس ومكافآت في محفظتك بكل سهولة ومن موبايلك. بنجمع الألمنيوم، البلاستيك، النحاس، الإلكترونيات، الحديد، الكرتون، والورق.',
    foundingDate: '2026',
    founders: [
      {
        '@type': 'Person',
        name: 'سامي عوض',
        jobTitle: 'مهندس ومؤسس مشارك',
      },
      {
        '@type': 'Person',
        name: 'مصطفى الجيزاوي',
        jobTitle: 'مهندس ومؤسس مشارك',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+20-12-0306-2905',
      contactType: 'customer service',
      email: 'salla.wahdaa@gmail.com',
      areaServed: 'EG',
      availableLanguage: ['Arabic', 'English'],
    },
    sameAs: [
      'https://www.facebook.com/SallaEgypt/',
      'https://eg.linkedin.com/company/salla-egypt',
      'https://www.tiktok.com/@salla.egypt',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'EG',
      addressRegion: 'الدلتا',
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 30.0444,
        longitude: 31.2357,
      },
      geoRadius: '500000',
    },
    numberOfEmployees: 4,
  }

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'تطبيق سلة',
    alternateName: 'Salla Egypt',
    url: 'https://salla-egypt.com',
    description: 'تطبيق سلة بيساعدك تحافظ على البيئة وتحول المخلفات لفلوس ومكافآت في محفظتك بكل سهولة ومن موبايلك. بنجمع الألمنيوم، البلاستيك، النحاس، الإلكترونيات، الحديد، الكرتون، والورق. مشروع مصري من الدلتا تأسس عام 2026.',
    keywords: 'تطبيق سلة, إعادة تدوير, مصر, الدلتا, مخلفات, ألمنيوم, بلاستيك, نحاس, إلكترونيات, حديد, كرتون, ورق, مكافآت, حماية البيئة, تطبيق مصري, جمع القمامة, فلوس من القمامة, تطبيق بيئي, إعادة تدوير المعادن, إعادة تدوير الورق, إعادة تدوير الإلكترونيات',
    inLanguage: 'ar',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://salla-egypt.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: 'سلة',
      url: 'https://salla-egypt.com',
    },
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'سلة',
    alternateName: 'Salla Egypt',
    description: 'تطبيق سلة بيساعدك تحافظ على البيئة وتحول المخلفات لفلوس ومكافآت في محفظتك بكل سهولة ومن موبايلك. بنجمع الألمنيوم، البلاستيك، النحاس، الإلكترونيات، الحديد، الكرتون، والورق.',
    url: 'https://salla-egypt.com',
    telephone: '+20-12-0306-2905',
    email: 'salla.wahdaa@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'EG',
      addressRegion: 'الدلتا',
      addressLocality: 'مصر',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.0444,
      longitude: 31.2357,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    priceRange: '$',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 30.0444,
        longitude: 31.2357,
      },
      geoRadius: '500000',
    },
  }

  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'تطبيق سلة',
    alternateName: 'Salla App',
    operatingSystem: 'Android',
    applicationCategory: 'UtilitiesApplication',
    description: 'تطبيق سلة بيساعدك تحافظ على البيئة وتحول المخلفات لفلوس ومكافآت في محفظتك بكل سهولة ومن موبايلك. بنجمع الألمنيوم، البلاستيك، النحاس، الإلكترونيات، الحديد، الكرتون، والورق.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EGP',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '150',
    },
    downloadUrl: 'https://salla-egypt.com/salla-app-v1.1.0.apk',
    featureList: [
      'تسجيل سريع وسهل',
      'تصوير المخلفات',
      'سحب أكواد QR',
      'معرفة القيمة قبل التسليم',
      'نقاط تجميع متعددة',
      'محفظة إلكترونية',
      'مكافآت فورية',
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'ما هو تطبيق سلة؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'تطبيق سلة هو تطبيق مصري يساعدك في تحويل المخلفات إلى مكافآت مالية. يمكنك تصوير المخلفات، سحب كود QR، وتسليمها في نقاط التجميع للحصول على رصيد في محفظتك. بنجمع الألمنيوم، البلاستيك، النحاس، الإلكترونيات، الحديد، الكرتون، والورق.',
        },
      },
      {
        '@type': 'Question',
        name: 'كيف أستخدم تطبيق سلة؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'حمّل التطبيق من Google Play، سجل حسابك، صوّر المخلفات، اسحب كود QR، وسلم المخلفات في أقرب نقطة تجميع أو من خلال مندوب سلة.',
        },
      },
      {
        '@type': 'Question',
        name: 'هل التطبيق مجاني؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'نعم، تطبيق سلة مجاني بالكامل. يمكنك تحميله واستخدامه بدون أي رسوم.',
        },
      },
      {
        '@type': 'Question',
        name: 'ما هي المخلفات المقبولة؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'يقبل التطبيق المخلفات القابلة لإعادة التدوير مثل الألمنيوم، البلاستيك، النحاس، الإلكترونيات، الحديد، الكرتون، والورق.',
        },
      },
      {
        '@type': 'Question',
        name: 'كيف أحصل على مكافأتي؟',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'بعد تسليم المخلفات في نقاط التجميع، سيتم إضافة رصيدك ونقطك إلى محفظتك في التطبيق. يمكنك استخدام هذا الرصيد في شراء خدمات أو تحويله إلى نقاط.',
        },
      },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'الرئيسية',
        item: 'https://salla-egypt.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'تطبيق سلة',
        item: 'https://salla-egypt.com/#top',
      },
    ],
  }

  useEffect(() => {
    const schemas = [
      organizationSchema,
      webSiteSchema,
      localBusinessSchema,
      softwareApplicationSchema,
      faqSchema,
      breadcrumbSchema,
    ]

    schemas.forEach((schema) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.text = JSON.stringify(schema)
      document.head.appendChild(script)
    })

    return () => {
      const scripts = document.head.querySelectorAll('script[type="application/ld+json"]')
      scripts.forEach((script) => script.remove())
    }
  }, [])

  return null
}
