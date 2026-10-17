export function StructuredDataSchemas() {
  const schemas = [
    // NewsArticle Schema
    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": "تطبيق سلة - أفضل تطبيق إعادة تدوير في مصر 2026",
      "description": "تطبيق سلة هو أفضل تطبيق إعادة تدوير في مصر 2026. Impact Makers Salla Team الفائز بالمركز الأول في مسابقة نُعيد.. نُبدع.. نَبني.",
      "image": "https://sallaegy.vercel.app/salla/og-image.png",
      "author": {
        "@type": "Organization",
        "name": "سلة - Impact Makers Salla Team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "سلة",
        "logo": {
          "@type": "ImageObject",
          "url": "https://sallaegy.vercel.app/icon.png"
        }
      },
      "datePublished": "2026-01-01",
      "dateModified": new Date().toISOString(),
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://sallaegy.vercel.app"
      }
    },
    // FAQ Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "ما هو تطبيق سلة؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "تطبيق سلة هو أفضل تطبيق إعادة تدوير في مصر 2026. يساعدك تحويل المخلفات لفلوس ومكافآت في محفظتك بكل سهولة من موبايلك."
          }
        },
        {
          "@type": "Question",
          "name": "كيف أستخدم تطبيق سلة؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "قم بتحميل التطبيق، حدد نوع وكمية المخلفات لديك، وسيقوم مندوبنا باستلامها وتحويل قيمتها فوراً إلى محفظتك الإلكترونية."
          }
        },
        {
          "@type": "Question",
          "name": "ما هي المواد التي يقبلها التطبيق؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "نقبل البلاستيك، الألمنيوم، النحاس، الإلكترونيات، الحديد، الكرتون، والورق."
          }
        },
        {
          "@type": "Question",
          "name": "هل التطبيق مجاني؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "نعم، التطبيق مجاني بالكامل. تحصل على مكافآت مقابل المخلفات التي تبيعها."
          }
        },
        {
          "@type": "Question",
          "name": "ما هي مناطق التغطية؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "نغطي جميع محافظات مصر مع التركيز على القاهرة، الجيزة، الدلتا، والمنوفية."
          }
        }
      ]
    },
    // HowTo Schema
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "كيف تستخدم تطبيق سلة لإعادة التدوير؟",
      "description": "دليل خطوة بخطوة لاستخدام تطبيق سلة لإعادة التدوير وتحويل المخلفات لفلوس",
      "step": [
        {
          "@type": "HowToStep",
          "name": "تحميل التطبيق",
          "text": "قم بتحميل تطبيق سلة من Google Play"
        },
        {
          "@type": "HowToStep",
          "name": "التسجيل",
          "text": "سجل حساب جديد في التطبيق"
        },
        {
          "@type": "HowToStep",
          "name": "تحديد المخلفات",
          "text": "حدد نوع وكمية المخلفات لديك"
        },
        {
          "@type": "HowToStep",
          "name": "طلب الاستلام",
          "text": "اطلب مندوب لاستلام المخلفات"
        },
        {
          "@type": "HowToStep",
          "name": "استلام",
          "text": "سيقوم المندوب باستلام المخلفات وفحصها"
        },
        {
          "@type": "HowToStep",
          "name": "استلام المكافأة",
          "text": "ستحصل على قيمة المخلفات فوراً في محفظتك"
        }
      ]
    },
    // SoftwareApplication Schema
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "تطبيق سلة",
      "operatingSystem": "Android, iOS",
      "applicationCategory": "UtilitiesApplication",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "1000+",
        "bestRating": "5",
        "worstRating": "1"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "EGP"
      },
      "featureList": [
        "إعادة تدوير المخلفات",
        "جمع من المنزل",
        "مكافآت فورية",
        "محفظة إلكترونية",
        "تتبع الطلبات",
        "تاريخ المعاملات"
      ]
    },
    // LocalBusiness Schema
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "سلة - إعادة التدوير",
      "image": "https://sallaegy.vercel.app/icon.png",
      "telephone": "+20-12-0306-2905",
      "email": "salla.wahdaa@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "EG",
        "addressRegion": "الدلتا",
        "addressLocality": "المنوفية"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 30.0444,
        "longitude": 31.2357
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "22:00"
      },
      "priceRange": "$$"
    },
    // Organization Schema
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "سلة",
      "url": "https://sallaegy.vercel.app",
      "logo": "https://sallaegy.vercel.app/icon.png",
      "sameAs": [
        "https://www.facebook.com/SallaEgypt/",
        "https://eg.linkedin.com/company/salla-egypt",
        "https://www.tiktok.com/@salla.egypt"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+20-12-0306-2905",
        "contactType": "customer service",
        "email": "salla.wahdaa@gmail.com",
        "areaServed": "EG",
        "availableLanguage": ["Arabic", "English"]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "1000+"
      }
    },
    // Event Schema
    {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "مسابقة نُعيد.. نُبدع.. نَبني لإدارة المخلفات 2026",
      "startDate": "2026-01-01",
      "endDate": "2026-12-31",
      "location": {
        "@type": "Place",
        "name": "مصر",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "EG"
        }
      },
      "image": "https://sallaegy.vercel.app/salla/impact-makers-win.jpg",
      "description": "فاز فريق Impact Makers Salla Team بالمركز الأول في مسابقة نُعيد.. نُبدع.. نَبني لإدارة المخلفات بالجامعات 2026",
      "organizer": {
        "@type": "Organization",
        "name": "سلة - Impact Makers Salla Team"
      },
      "performer": {
        "@type": "Organization",
        "name": "Impact Makers Salla Team"
      }
    },
    // WebSite Schema
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "تطبيق سلة - أفضل تطبيق إعادة التدوير في مصر",
      "url": "https://sallaegy.vercel.app",
      "description": "تطبيق سلة هو أفضل تطبيق إعادة التدوير في مصر 2026. Impact Makers Salla Team الفائز بالمركز الأول في مسابقة نُعيد.. نُبدع.. نَبني.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://sallaegy.vercel.app/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "publisher": {
        "@type": "Organization",
        "name": "سلة",
        "url": "https://sallaegy.vercel.app"
      }
    },
    // Product Schema with Reviews
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "تطبيق سلة",
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "مستخدم سعيد"
          },
          "reviewBody": "أفضل تطبيق إعادة تدوير في مصر! سهل الاستخدام والاستلام سريع جداً."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "مستخدم مقتنع"
          },
          "reviewBody": "مكافآت فورية وممتازة. أحول المخلفات لفلوس بسهولة."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "مستخدم راضي"
          },
          "reviewBody": "خدمة عملاء ممتازة والمندوبين محترفين."
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1000+"
      }
    },
    // BreadcrumbList Schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "الرئيسية",
          "item": "https://sallaegy.vercel.app"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "إعادة التدوير",
          "item": "https://sallaegy.vercel.app/#recycling"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "المشروع",
          "item": "https://sallaegy.vercel.app/#project"
        }
      ]
    },
    // Service Schema
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "خدمة إعادة التدوير - تطبيق سلة",
      "description": "خدمة شاملة لإعادة تدوير المخلفات في مصر",
      "provider": {
        "@type": "Organization",
        "name": "سلة",
        "url": "https://sallaegy.vercel.app"
      },
      "areaServed": [
        {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 30.0444,
            "longitude": 31.2357
          },
          "geoRadius": "500000"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "خدمات إعادة التدوير",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "إعادة تدوير البلاستيك"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "إعادة تدوير الألمنيوم"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "إعادة تدوير الإلكترونيات"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "إعادة تدوير الكرتون والورق"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "إعادة تدوير النحاس والحديد"
            }
          }
        ]
      }
    },
    // Place Schema
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "مركز فرز المخلفات في الدقي",
      "description": "أكبر مركز فرز آلي للمخلفات في الدقي",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "EG",
        "addressRegion": "القاهرة",
        "addressLocality": "الدقي"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 30.0444,
        "longitude": 31.2357
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "500+"
      }
    },
    // VideoObject Schema
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "تطبيق سلة - أفضل تطبيق إعادة التدوير في مصر",
      "description": "تعرف على تطبيق سلة - أفضل تطبيق إعادة التدوير في مصر 2026",
      "thumbnailUrl": "https://sallaegy.vercel.app/salla/og-image.png",
      "uploadDate": "2026-01-01",
      "duration": "PT2M30S"
    },
    // JobPosting Schema
    {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      "title": "مندوب إعادة تدوير",
      "description": "نبحث عن مندوبين لإعادة التدوير في مختلف مناطق مصر",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "سلة",
        "url": "https://sallaegy.vercel.app"
      },
      "employmentType": "FULL_TIME",
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "EG"
        }
      },
      "salary": {
        "@type": "MonetaryAmount",
        "currency": "EGP",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": 3000,
          "maxValue": 8000,
          "unitText": "شهرياً"
        }
      }
    },
    // Course Schema
    {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "دورة إعادة التدوير مع سلة",
      "description": "تعلم كيفية إعادة التدوير بشكل صحيح وفعال",
      "provider": {
        "@type": "Organization",
        "name": "سلة"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "EGP",
        "availability": "https://schema.org/InStock"
      }
    },
    // EducationalOrganization Schema
    {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "سلة - أكاديمية إعادة التدوير",
      "description": "منصة تعليمية عن إعادة التدوير وحماية البيئة",
      "url": "https://sallaegy.vercel.app",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "EG",
        "addressRegion": "الدلتا"
      }
    },
    // ItemList Schema
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "قائمة خدمات إعادة التدوير",
      "description": "قائمة شاملة بجميع خدمات إعادة التدوير المتاحة في تطبيق سلة",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "إعادة تدوير البلاستيك",
          "url": "https://sallaegy.vercel.app/#plastic"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "إعادة تدوير الألمنيوم",
          "url": "https://sallaegy.vercel.app/#aluminum"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "إعادة تدوير الإلكترونيات",
          "url": "https://sallaegy.vercel.app/#electronics"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "إعادة تدوير الكرتون والورق",
          "url": "https://sallaegy.vercel.app/#paper"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "إعادة تدوير النحاس والحديد",
          "url": "https://sallaegy.vercel.app/#metal"
        }
      ]
    },
    // CollectionPage Schema
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "خدمات إعادة التدوير - تطبيق سلة",
      "description": "خدمات إعادة التدوير الشاملة التي يقدمها تطبيق سلة في مصر",
      "hasPart": [
        {
          "@type": "Service",
          "name": "إعادة تدوير البلاستيك",
          "description": "جمع وإعادة تدوير البلاستيك PET و HDPE"
        },
        {
          "@type": "Service",
          "name": "إعادة تدوير الألمنيوم",
          "description": "جمع وإعادة تدوير الألمنيوم والكانز"
        },
        {
          "@type": "Service",
          "name": "إعادة تدوير الإلكترونيات",
          "description": "جمع وإعادة تدوير الإلكترونيات القديمة"
        },
        {
          "@type": "Service",
          "name": "إعادة تدوير الكرتون والورق",
          "description": "جمع وإعادة تدوير الكرتون والورق"
        },
        {
          "@type": "Service",
          "name": "إعادة تدوير النحاس والحديد",
          "description": "جمع وإعادة تدوير النحاس والحديد"
        }
      ]
    }
  ]

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}
    </>
  )
}
