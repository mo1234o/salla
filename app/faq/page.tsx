import { SiteHeader } from '@/components/salla/site-header'
import { FooterCta } from '@/components/salla/footer-cta'
import { StructuredData } from '@/components/seo/structured-data'
import { ChevronDown, HelpCircle, Truck, Factory, MessageCircle, CreditCard, Smartphone, Car, Building2 } from 'lucide-react'
import { useState } from 'react'
import Head from 'next/head'

const faqCategories = [
  {
    title: 'الشريك الجامع',
    subtitle: 'أصحاب المنازل والمحلات والمصانع',
    icon: Truck,
    questions: [
      {
        q: 'كيف أحصل على البونص (الـ 100 جنيه الإضافية) المذكور في الموقع؟',
        a: 'البونص يُضاف تلقائياً إلى محفظتك داخل التطبيق كمكافأة تشجيعية بعد إتمام المشتري لعملية الشراء منك وتقييمها، ويمكنك سحبه كاش مع رصيدك الأصلي أو استبداله بقسائم شراء عند وصوله للحد الأدنى للسحب.'
      },
      {
        q: 'هل يوجد حد أدنى لوزن أو كمية المخلفات؟',
        a: 'نعم، يُفضل أن تكون الكمية هي نفس الكمية التي قمت بتحديدها ووصفها بدقة على التطبيق، وذلك لضمان أن مشتري البيكيا يأتي إليك ويأخذها منك فوراً دون أي تأخير أو اعتذار.'
      },
      {
        q: 'كيف يتم تحديد أسعار المخلفات؟',
        a: 'الأسعار لا نحددها نحن كإدارة للتطبيق، بل يحددها المشتري نفسه؛ لأن سعر السوق متغير لحظياً، ويختلف من منطقة لأخرى ومن محافظة لأخرى بناءً على العرض والطلب ونقص الموارد في كل مكان.'
      },
      {
        q: 'ما هي المدن والمحافظات المتاح فيها الخدمة حالياً؟',
        a: 'نحن موجودون في كل مكان في مصر، ويمكنك طلب الخدمة وتوصيلك بأقرب مشتري أينما كان موقعك.'
      },
      {
        q: 'كيف يتم تصوير الخامات؟',
        a: 'يُفضل فرز الخامات وتصوير كل نوع على حدة (البلاستيك في صورة، والكرتون في صورة) لمساعدة المشتري على تقييم الحمولة وتجهيز سيارته، لكن يمكنك رفع صورة إجمالية واضحة توضح حجم الكمية المركونة لديك.'
      }
    ]
  },
  {
    title: 'الشريك المشتري',
    subtitle: 'أصحاب التروسيكلات والسيارات',
    icon: Car,
    questions: [
      {
        q: 'ما هو نظام الاشتراكات والرسوم المادية لظهور الأوردرات لي؟',
        a: 'الخدمة تكون مجانية تماماً في أول شهر، ويُتاح لك فيها رؤية مكانه في كل محافظة بحد أقصى 30 أوردر فقط. بعد انتهاء الشهر الأول، يتحول النظام إلى اشتراكات مدفوعة لظهور الأوردرات حسب اختيارك للباقة كالتالي:',
        details: [
          'الباقة اليومية: يتم احتساب 20 جنيهاً على الأوردر الواحد، وميزتها أنك أنت من تختار الأوردر بنفسك وتكون على علم مسبق بما ستذهب لأخذه بالتحديد.',
          'الباقة الأسبوعية: تعرض لك 40 أوردر، وتقف قيمة الأوردر الواحد عليك بـ 17 جنيهاً فقط، وتكون الأوردرات عشوائية (راندوم) ما بين كميات كبيرة وصغيرة.',
          'الباقة الشهرية: تعرض لك 150 أوردر، وتقف قيمة الأوردر الواحد عليك بـ 15 جنيهاً فقط، وتكون الأوردرات أيضاً عشوائية (راندوم) ما بين كميات كبيرة وصغيرة.'
        ]
      },
      {
        q: 'كيف يضمن التطبيق مصداقية العميل (الجامع)؟',
        a: 'يعتمد التطبيق على نظام تصوير إجباري للخامات وتحديد الموقع بدقة عبر الـ GPS قبل إرسال الطلب لك، كما يتم تقييم العملاء وحظر الحسابات التي تقوم بعمل طلبات وهمية.'
      },
      {
        q: 'ما هو النطاق الجغرافي (المنطقة) المسموح لي بتغطيته؟',
        a: 'التطبيق يتيح لك تحديد "نطاق عملك الحالي" (مثلاً في محيط 2 كم إلى 5 كم)، ولن تظهر لك إلا الطلبات التي تقع في طريقك أو الشوارع القريبة منك تماماً لتوفير وقتك وبنزين مركبتك.'
      },
      {
        q: 'كيف أحصل على الـ 100 جنيه البونص الخاصة بي كمشتري؟',
        a: 'يتم إنزال البونص في حسابك بالتطبيق بمجرد تأكيد العميل لاستلامه المبلغ وتأكيدك لشراء الخامات، وتعمل هذه المكافأة كدعم مباشر لتغطية تكاليف الوقود وزيادة هامش ربحك اليومي.'
      },
      {
        q: 'ما هي شروط الانضمام؟ ولماذا تطلبون صورة البطاقة الشخصية؟',
        a: 'يشترط التطبيق رفع صورة بطاقة الرقم القومي (سارية) وصورة للمركبة؛ وطلب صورة البطاقة في المقام الأول هو لحمايتك أنت شخصياً كمشتري قبل حماية الشخص أو العميل الذي تذهب إليه، ولضمان توثيق المعاملات بأمان كامل للطرفين.'
      }
    ]
  },
  {
    title: 'المصانع والشركات',
    subtitle: 'قطاع الأعمال B2B',
    icon: Factory,
    questions: [
      {
        q: 'هل يوفر التطبيق حلولاً للمصانع والشركات الكبرى أو الناشئة؟',
        a: 'في حالة البيع: المصانع والشركات الكبرى يمكنها بيع مخلفاتها للتطبيق عادي جداً وبنفس الطريقة المتبعة بدون أي خلاف أو تعقيد.',
        details: [
          'في حالة الشراء: المصانع والشركات الناشئة التي يقوم نشاطها على إعادة تدوير البلاستيك والكانز، يمكنها أخذ الكميات التي تحتاجها من أي ماكينة متوفرة لدينا، أو الحصول عليها بناءً على عقد مبرم بيننا يحدد الكمية المطلوبة.',
          'الجودة والتكلفة: نضمن للمصانع تسليم خامات مفروزة تماماً ونقية بنسبة 100% بدون أي مخلفات ملوثة لها، والأهم أن الاستلام يتم مباشرة وبدون أي عمولة خارجية من تاجر أو وسيط.'
        ]
      }
    ]
  },
  {
    title: 'أسئلة تقنية وعامة',
    subtitle: 'عن التطبيق والاستخدام',
    icon: Smartphone,
    questions: [
      {
        q: 'كيف يمكنني سحب الأموال أو الأرباح من التطبيق؟',
        a: 'يوفر التطبيق خيارات سحب رقمية سريعة ومتنوعة تناسب الجميع؛ على رأسها المحافظ الإلكترونية (مثل فودافون كاش، أورنج كاش، اتصالات كاش، وواي بلس)، بالإضافة إلى إمكانية التحويل عبر تطبيق "أنستا باي" أو الحسابات البنكية.'
      },
      {
        q: 'ما هي أنواع المخلفات الإلكترونية المقبولة؟',
        a: 'يتم قبول جميع الأجهزة الإلكترونية والكهربائية القديمة أو التالفة، بما في ذلك: الهواتف المحمولة، الشواحن، الكابلات، لوحات الكمبيوتر (البوردة)، الراديو، الشاشات، والأجهزة المنزلية الصغيرة.'
      },
      {
        q: 'هل الماكينات الذكية (RVM) متوفرة في الشوارع حالياً؟',
        a: 'الماكينات في مرحلة التطوير الفني والتقني المتقدم بالتعاون مع خبراء الميكاترونكس، ويتم التخطيط لإنزال النسخمة التجريبية الأولى منها في الأماكن العامة الحيوية، والجامعات، ومراكز الشباب قريباً جداً.'
      }
    ]
  }
]

export default function FAQPage() {
  const [openCategory, setOpenCategory] = useState<number | null>(null)
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap" rel="stylesheet" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white" style={{ fontFamily: 'Tajawal, system-ui, sans-serif' }}>
      <StructuredData />
      <SiteHeader />
      <main className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 text-green-700 px-5 py-2 text-sm font-bold mb-6">
              <HelpCircle className="w-5 h-5" />
              الأسئلة والاستفسارات
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              لديك سؤال؟ <span className="text-green-600">نحن هنا للمساعدة</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              اكتشف الإجابات على الأسئلة الشائعة حول تطبيق سلة وخدمات إعادة التدوير
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {faqCategories.map((category, catIndex) => {
              const Icon = category.icon
              const isCatOpen = openCategory === catIndex

              return (
                <div key={catIndex} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                  {/* Category Header */}
                  <button
                    onClick={() => setOpenCategory(isCatOpen ? null : catIndex)}
                    className="w-full flex items-center justify-between p-6 sm:p-8 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <h2 className="text-xl sm:text-2xl font-black text-gray-900">{category.title}</h2>
                        {category.subtitle && (
                          <p className="text-sm sm:text-base text-gray-500 mt-1 font-medium">{category.subtitle}</p>
                        )}
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-7 h-7 text-gray-500 transition-transform flex-shrink-0 ${isCatOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Questions */}
                  {isCatOpen && (
                    <div className="border-t border-gray-100 p-6 sm:p-8 space-y-4 bg-gray-50/50">
                      {category.questions.map((item, qIndex) => {
                        const isQOpen = openQuestion === qIndex
                        return (
                          <div key={qIndex} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
                            <button
                              onClick={() => setOpenQuestion(isQOpen ? null : qIndex)}
                              className="w-full flex items-center justify-between p-5 sm:p-6 text-right hover:bg-gray-50 transition-colors"
                            >
                              <span className="font-bold text-gray-900 flex-1 pr-4 text-base sm:text-lg leading-relaxed">{item.q}</span>
                              <ChevronDown
                                className={`w-6 h-6 text-green-600 transition-transform flex-shrink-0 ${isQOpen ? 'rotate-180' : ''}`}
                              />
                            </button>
                            {isQOpen && (
                              <div className="p-5 sm:p-6 bg-gradient-to-br from-green-50 to-white border-t border-gray-200">
                                <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-medium mb-4">{item.a}</p>
                                {item.details && (
                                  <ul className="space-y-3 mt-4">
                                    {item.details.map((detail, dIndex) => (
                                      <li key={dIndex} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                                        <span className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                                        <span className="text-base sm:text-lg">{detail}</span>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 bg-gradient-to-r from-green-600 via-green-700 to-green-800 rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-black mb-4">لم تجد إجابتك؟</h3>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              فريق خدمة العملاء جاهز لمساعدتك. تواصل معنا عبر واتساب وسنرد عليك في أسرع وقت.
            </p>
            <a
              href="https://wa.me/201203062905"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-green-700 px-8 py-4 rounded-2xl font-black text-lg hover:bg-green-50 transition-all hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              تواصل معنا عبر واتساب
            </a>
          </div>
        </div>
      </main>
      <FooterCta />
    </div>
    </>
  )
}
