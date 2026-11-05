import { SiteHeader } from '@/components/salla/site-header'
import { Hero } from '@/components/salla/hero'
import { Problem } from '@/components/salla/problem'
import { HowItWorks } from '@/components/salla/how-it-works'
import { SectionWrapper } from '@/components/salla/section-wrapper'
import { StructuredData } from '@/components/seo/structured-data'
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
