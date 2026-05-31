import { PackageOpen, ScanLine, Scale, Wallet } from 'lucide-react'
import { getSecureSectionUrl } from '@/lib/secure-url'

const steps = [
  {
    icon: PackageOpen,
    title: 'حمّل تطبيق سلة',
    text: 'نزل التطبيق من جوجل بلاي وابدأ رحلتك في الحفاظ على البيئة.',
  },
  {
    icon: ScanLine,
    title: 'صوّر المخلفات',
    text: 'استخدم التطبيق لتصوير المخلفات - ألمنيوم، بلاستيك، نحاس، إلكترونيات، حديد، كرتون، ورق - وتحديد نوعها.',
  },
  {
    icon: Scale,
    title: 'سلم المخلفات',
    text: 'سلم المخلفات في أقرب نقطة تجميع أو من خلال مندوب سلة.',
  },
  {
    icon: Wallet,
    title: 'استلم مكافأتك',
    text: 'رصيدك ونقطك هتنزل في المحفظة وتقدر تستفيد بيهم فورا.',
  },
]

export function HowItWorks() {
  return (
    <section id={getSecureSectionUrl('how').replace('#', '')} className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24 overflow-hidden">
      <div className="mx-auto grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <span className="font-heading text-sm font-bold uppercase tracking-wide text-primary">
            إزاي بتشتغل
          </span>
          <h2 className="mt-3 font-heading text-3xl font-black text-foreground text-balance sm:text-4xl">
            تطبيق ذكي يلم اللي بيترمى.. ويطلع منه قيمة
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            تطبيق "سلة" بيخليك تحافظ على البيئة وتستفيد من المخلفات بكل سهولة ومن موبايلك.
          </p>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="relative rounded-2xl border border-border bg-card p-6 shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <span className="absolute left-4 top-4 font-heading text-4xl font-black text-primary/10">
                  {i + 1}
                </span>
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <s.icon className="size-5" />
                </span>
                <h3 className="mt-3 font-heading text-lg font-bold text-secondary">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
        
        <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:ml-auto" style={{ perspective: '1000px' }}>
          <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-tr from-primary/30 to-secondary/20 blur-2xl animate-pulse" />
          <div 
            className="overflow-hidden rounded-3xl border-2 border-border bg-card shadow-2xl transition-all duration-500 hover:rotate-x-4 hover:rotate-y-4 hover:scale-105 hover:shadow-2xl"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <img
              src="/salla/download.gif"
              alt="كيفية عمل تطبيق سلة"
              className="w-full h-auto object-contain"
              style={{ objectPosition: 'center -10%', transform: 'translateZ(30px)' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
