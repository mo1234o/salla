import { Trash2, TrendingDown, MapPin } from 'lucide-react'
import { getSecureSectionUrl } from '@/lib/secure-url'

const points = [
  {
    icon: Trash2,
    title: 'كله بيترمى في ثانية',
    text: 'الناس أول ما تخلص من مخلفاتها - ألمنيوم، بلاستيك، نحاس، إلكترونيات، حديد، كرتون، ورق - تقوم رامياها على طول من غير ما تفكر.',
  },
  {
    icon: MapPin,
    title: 'المنظومة بايظة',
    text: 'كل حاجة بتتكب في الشارع كده وخلاص، ومفيش نظام بيلم الليلة دي كلها ولا بيرتّبها.',
  },
  {
    icon: TrendingDown,
    title: 'قيمة بتروح هدر',
    text: 'المخلفات اللي بتترمى ليها قيمة حقيقية، بس بتضيع بدل ما تتحوّل لمكسب للناس وللبلد.',
  },
]

export function Problem() {
  return (
    <section id={getSecureSectionUrl('problem').replace('#', '')} className="border-y border-border bg-muted/50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-heading text-sm font-bold uppercase tracking-wide text-primary">
            المشكلة
          </span>
          <h2 className="mt-3 font-heading text-3xl font-black text-foreground text-balance sm:text-4xl">
            حاجة بتحصل قدام عينينا كل يوم.. ومضايقانا كلنا
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            وقفنا وقلنا: طب وليه ميكونش فيه حد يلم الليلة دي كلها ويعدّل المقلوب؟
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <p.icon className="size-6" />
              </span>
              <h3 className="mt-4 font-heading text-xl font-bold text-secondary">
                {p.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
