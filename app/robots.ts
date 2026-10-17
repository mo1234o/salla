import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/private/', '/static/', '/.well-known/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/private/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/private/'],
      },
      {
        userAgent: 'Slurp',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/private/'],
      },
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/private/'],
      },
      {
        userAgent: 'Baiduspider',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/private/'],
      },
      {
        userAgent: 'Yandexbot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/private/'],
      },
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
      },
      {
        userAgent: 'Twitterbot',
        allow: '/',
      },
      {
        userAgent: 'LinkedInBot',
        allow: '/',
      },
      {
        userAgent: 'Pinterest',
        allow: '/',
      },
      {
        userAgent: 'WhatsApp',
        allow: '/',
      },
    ],
    sitemap: 'https://sallaegy.vercel.app/sitemap.xml',
    host: 'https://sallaegy.vercel.app',
  }
}
