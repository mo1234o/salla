import { SiteHeader } from '@/components/salla/site-header'
import { Hero } from '@/components/salla/hero'
import { Problem } from '@/components/salla/problem'
import { HowItWorks } from '@/components/salla/how-it-works'
import { SectionWrapper } from '@/components/salla/section-wrapper'
import { StructuredData } from '@/components/seo/structured-data'
import { LicenseSection } from '@/components/salla/license-section'
import { NewHowItWorks } from '@/components/salla/new-how-it-works'
import { SaltiKids } from '@/components/salla/salti-kids'
import dynamic from 'next/dynamic'

const PromoBanner = dynamic(() => import('@/components/salla/promo-banner').then(mod => ({ default: mod.PromoBanner })), {
  loading: () => <div className="h-64 animate-pulse bg-muted/50" />,
})

const Story = dynamic(() => import('@/components/salla/story').then(mod => ({ default: mod.Story })), {
  loading: () => <div className="h-96 animate-pulse bg-muted/50" />,
})

const Team = dynamic(() => import('@/components/salla/team').then(mod => ({ default: mod.Team })), {
  loading: () => <div className="h-96 animate-pulse bg-muted/50" />,
})

const Supporters = dynamic(() => import('@/components/salla/supporters').then(mod => ({ default: mod.Supporters })), {
  loading: () => <div className="h-96 animate-pulse bg-muted/50" />,
})

const PartnersSection = dynamic(() => import('@/components/salla/partners-section').then(mod => ({ default: mod.PartnersSection })), {
  loading: () => <div className="h-96 animate-pulse bg-muted/50" />,
})

const Gallery = dynamic(() => import('@/components/salla/gallery').then(mod => ({ default: mod.Gallery })), {
  loading: () => <div className="h-[500px] animate-pulse bg-muted/50" />,
})

const TukTukSection = dynamic(() => import('@/components/salla/tuktuk-section').then(mod => ({ default: mod.TukTukSection })), {
  loading: () => <div className="h-96 animate-pulse bg-muted/50" />,
})

const VideosSection = dynamic(() => import('@/components/salla/videos-section').then(mod => ({ default: mod.VideosSection })), {
  loading: () => <div className="h-96 animate-pulse bg-muted/50" />,
})

const FooterCta = dynamic(() => import('@/components/salla/footer-cta').then(mod => ({ default: mod.FooterCta })), {
  loading: () => <div className="h-48 animate-pulse bg-muted/50" />,
})

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <StructuredData />
      <SiteHeader />
      <main>
        <SectionWrapper>
          <Hero />
        </SectionWrapper>
        <PromoBanner />
        <SectionWrapper>
          <PartnersSection />
        </SectionWrapper>
        <SectionWrapper>
          <LicenseSection />
        </SectionWrapper>
        {/* Test section to verify files */}
        <SectionWrapper>
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-200">
            <h3 className="text-2xl font-black text-gray-900 mb-4">التحقق من الملفات</h3>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-gray-900 mb-2">ملف الترخيص:</p>
                <a href="/license.pdf" target="_blank" className="text-blue-600 underline">/license.pdf</a>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">لوجو سلتي:</p>
                <img src="/salti-logo.png" alt="سلتي" className="w-32 h-32 border-2 border-gray-300 rounded-lg" />
              </div>
            </div>
          </div>
        </SectionWrapper>
        <SectionWrapper>
          <NewHowItWorks />
        </SectionWrapper>
        <SectionWrapper>
          <SaltiKids />
        </SectionWrapper>
        <SectionWrapper>
          <Problem />
        </SectionWrapper>
        <SectionWrapper>
          <HowItWorks />
        </SectionWrapper>
        <SectionWrapper>
          <Story />
        </SectionWrapper>
        <SectionWrapper>
          <Team />
        </SectionWrapper>
        <SectionWrapper>
          <Supporters />
        </SectionWrapper>
        <SectionWrapper>
          <Gallery />
        </SectionWrapper>
        <SectionWrapper>
          <TukTukSection />
        </SectionWrapper>
        <SectionWrapper>
          <VideosSection />
        </SectionWrapper>
        <SectionWrapper>
          <FooterCta />
        </SectionWrapper>
      </main>
    </div>
  )
}
