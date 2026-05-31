import Image from 'next/image'
import { Code2, Cpu, Cog } from 'lucide-react'
import { getSecureSectionUrl } from '@/lib/secure-url'

const timeline = [
  {
    icon: Cog,
    title: 'القرار',
    text: 'مهندسين قرروا إن التخرج مش نهاية الطريق، وإن مشروعهم مش مجرد ورق يتركن على الرف.',
  },
  {
    icon: Code2,
    title: 'التطوير',
    text: 'أيام وليالي من الشغل وكتابة الأكواد وتصميم واجهات عشان نطلع بأحسن تجربة مستخدم في تطبيق سلة.',
  },
  {
    icon: Cpu,
    title: 'النتيجة',
    text: 'تطبيق ذكي متكامل بيوصل بين الناس اللي عايزة تحافظ على البيئة وتستفيد في نفس الوقت.',
  },
]

export function Story() {
  return (
    <section id={getSecureSectionUrl('story').replace('#', '')} className="border-y border-border bg-secondary text-secondary-foreground overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div className="relative" style={{ perspective: '1000px' }}>
          <div className="relative transition-all duration-700 hover:rotate-y-3 hover:rotate-x-2 hover:scale-105 hover:shadow-2xl" style={{ transformStyle: 'preserve-3d' }}>
            <span className="font-heading text-sm font-bold uppercase tracking-wide text-primary">
              الحكاية
            </span>
            <h2 className="mt-3 font-heading text-3xl font-black text-balance sm:text-4xl">
              من فكرة لمشروع حقيقي في إيدينا
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-secondary-foreground/85">
              مكنّاش لوحدنا، والحلم كبر وبقى مسنود. تطبيق متكامل بيسهل على كل الناس
              التخلص الذكي من العبوات البلاستيك ويضيف قيمة حقيقية لحياتهم.
            </p>

            <ul className="mt-8 space-y-5">
              {timeline.map((t) => (
                <li key={t.title} className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform duration-300 hover:scale-110 hover:rotate-12">
                    <t.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold">{t.title}</h3>
                    <p className="text-secondary-foreground/80">{t.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4" style={{ perspective: '1000px' }}>
          <div className="relative transition-all duration-700 hover:rotate-y-6 hover:rotate-x-3 hover:scale-105 hover:shadow-2xl" style={{ transformStyle: 'preserve-3d' }}>
            <Image
              src="/salla/mostafa.jpg"
              alt="مصطفى الجيزاوي مؤسس تطبيق سلة أثناء عرض المشروع - تطبيق إعادة تدوير مصري"
              width={400}
              height={500}
              className="h-full w-full rounded-2xl object-cover shadow-lg"
            />
          </div>
          <div className="grid gap-4">
            <div className="relative transition-all duration-700 hover:rotate-y-6 hover:rotate-x-3 hover:scale-105 hover:shadow-2xl" style={{ transformStyle: 'preserve-3d' }}>
              <Image
                src="/salla/img-3.jpg"
                alt="سامي عوض ومصطفى الجيزاوي مؤسسي تطبيق سلة أثناء البرزنتيشن في هالت برايز"
                width={400}
                height={240}
                className="h-full w-full rounded-2xl object-cover shadow-lg"
              />
            </div>
            <div className="relative transition-all duration-700 hover:rotate-y-6 hover:rotate-x-3 hover:scale-105 hover:shadow-2xl" style={{ transformStyle: 'preserve-3d' }}>
              <Image
                src="/salla/img-2.jpg"
                alt="عرض فكرة تطبيق سلة في هالت برايز - مسابقة ريادة الأعمال العالمية"
                width={400}
                height={240}
                className="h-full w-full rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
