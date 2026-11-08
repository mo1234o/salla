import { SiteHeader } from '@/components/salla/site-header'
import { FooterCta } from '@/components/salla/footer-cta'
import { StructuredData } from '@/components/seo/structured-data'
import { ChevronDown, HelpCircle, Phone, Mail, MessageCircle } from 'lucide-react'
import { useState } from 'react'

const faqCategories = [
  {
    title: 'عن التطبيق',
    icon: HelpCircle,
    questions: [
      {
        q: 'ما هو تطبيق سلة؟',
        a: 'تطبيق سلة هو تطبيق مصري لإعادة التدوير يتيح لك تحويل مخلفاتك من البلاستيك، الألمنيوم، النحاس، الحديد، الإلكترونيات، الكرتون، والورق إلى فلوس فورية عن طريق طلب استلام من التطبيق.'
      },
      {
        q: 'كيف أستخدم تطبيق سلة؟',
        a: 'حمّل التطبيق، سجّل حسابك، اختر نوع المادة التي تريد جمعها، ارفع صورة، حدد الكمية والموقع، وانتظر وصول جامعنا لوزن المواد واستلام الفلوس.'
      },
      {
        q: 'هل التطبيق مجاني؟',
        a: 'نعم، التطبيق مجاني تماماً. لا تدفع أي رسوم للتسجيل أو طلب الاستلام. نحن ندفع لك مقابل المخلفات!'
      },
      {
        q: 'من أين أستطيع تحميل التطبيق؟',
        a: 'التطبيق متاح على Google Play و App Store. يمكنك تحميله من المتجر المتوافق مع هاتفك.'
      }
    ]
  },
  {
    title: 'الاستلام والدفع',
    icon: Phone,
    questions: [
      {
        q: 'كم يستغرق وصول الجامع؟',
        a: 'يصل الجامع عادة خلال 30-60 دقيقة بعد الطلب، حسب موقعك وتوفر جامع في منطقتك.'
      },
      {
        q: 'كيف أحصل على الفلوس؟',
        a: 'بعد وزن المواد، يتم تحويل القيمة فوراً إلى محفظتك الرقمية في التطبيق. يمكنك سحبها أو استخدامها لشراء منتجات.'
      },
      {
        q: 'ما هي أنواع المواد المقبولة؟',
        a: 'نقبل البلاستيك (PET, HDPE)، الألمنيوم (كانز)، النحاس، الحديد، الإلكترونيات، الكرتون، والورق.'
      },
      {
        q: 'هل يوجد حد أدنى للكمية؟',
        a: 'نعم، يوجد حد أدنى للكمية لضمان كفاءة الاستلام. يظهر الحد الأدنى في التطبيق عند اختيار نوع المادة.'
      }
    ]
  },
  {
    title: 'الشركاء والموردين',
    icon: MessageCircle,
    questions: [
      {
        q: 'كيف أكون شريكاً مع سلة؟',
        a: 'يمكنك التسجيل كشريك جامع أو شريك مشتري من خلال قسم "انضم لشبكة سلة" في الموقع أو عبر نموذج واتساب المخصص للشركاء.'
      },
      {
        q: 'ما هي مزايا الشراكة مع سلة؟',
        a: 'الشركاء يحصلون على وصول مستمر للمواد المعاد تدويرها، دعم تسويقي، فرص نمو، والمشاركة في شبكة واسعة من الجامعين والمشترين.'
      },
      {
        q: 'كيف أطلب مواد من سلة كمورد؟',
        a: 'يمكنك استخدام نموذج واتساب في قسم التوريد لتحديد نوع المادة والكمية والموقع، وسيقوم فريق سلة بالتنسيق معك.'
      },
      {
        q: 'هل يوجد دعم للشركات والمصانع؟',
        a: 'نعم، نقدم خدمات مخصصة للشركات والمصانع لإدارة مخلفاتها بشكل مستدام وتحقيق أهداف الاستدامة وESG.'
      }
    ]
  },
  {
    title: 'الإنجازات والجوائز',
    icon: HelpCircle,
    questions: [
      {
        q: 'ما هي الجوائز التي حصل عليها فريق سلة؟',
        a: 'حصل فريق سلة على المركز الأول في مسابقة "نُعيد.. نُبدع.. نَبني" 2026، والمركز الثالث في Hult Prize على مستوى مصر، والمركز الثالث في Hackathon For Impact 7th Edition من Silicon Waha.'
      },
      {
        q: 'من هم شركاء سلة؟',
        a: 'نحن مدعومون من جامعة الدلتا التكنولوجية (DTU)، معهد تكنولوجيا المعلومات (ITI)، المعهد القومي للاتصالات (NTI)، Silicon Waha، البريد للاستثمار (BREI)، ITIDA، وEME.'
      },
      {
        q: 'ما هو Impact Makers Salla Team؟',
        a: 'Impact Makers Salla Team هو فريق طلابي مصري من جامعة الدلتا التكنولوجية فاز بالمركز الأول في مسابقة إعادة التدوير 2026 ويقدم أفضل حل بيئي في مصر.'
      }
    ]
  },
  {
    title: 'تواصل معنا',
    icon: Mail,
    questions: [
      {
        q: 'كيف أتواصل مع خدمة العملاء؟',
        a: 'يمكنك التواصل معنا عبر واتساب على الرقم 01203062905، أو عبر البريد الإلكتروني، أو من خلال نموذج التواصل في الموقع.'
      },
      {
        q: 'ما هي ساعات العمل؟',
        a: 'نحن نعمل من الساعة 9 صباحاً حتى 10 مساءً، 7 أيام في الأسبوع. يمكنك طلب الاستعلامات في أي وقت.'
      },
      {
        q: 'هل يوجد مكتب فرعي؟',
        a: 'مقرنا الرئيسي في كرياتيفا المنصورة، محافظة الدقهلية، لدينا ترخيص رسمي من Creative Hub Menoufia.'
      }
    ]
  }
]

export default function FAQPage() {
  const [openCategory, setOpenCategory] = useState<number | null>(null)
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <StructuredData />
      <SiteHeader />
      <main className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 text-green-700 px-4 py-1.5 text-sm font-bold mb-4">
              <HelpCircle className="w-4 h-4" />
              الأسئلة والاستفسارات
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              لديك سؤال؟ <span className="text-green-600">نحن هنا للمساعدة</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              اكتشف الإجابات على الأسئلة الشائعة حول تطبيق سلة وخدمات إعادة التدوير
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-6">
            {faqCategories.map((category, catIndex) => {
              const Icon = category.icon
              const isCatOpen = openCategory === catIndex

              return (
                <div key={catIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  {/* Category Header */}
                  <button
                    onClick={() => setOpenCategory(isCatOpen ? null : catIndex)}
                    className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-green-600" />
                      </div>
                      <h2 className="text-xl font-bold text-gray-900">{category.title}</h2>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-gray-500 transition-transform ${isCatOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Questions */}
                  {isCatOpen && (
                    <div className="border-t border-gray-100 p-6 space-y-4">
                      {category.questions.map((item, qIndex) => {
                        const isQOpen = openQuestion === qIndex
                        return (
                          <div key={qIndex} className="border border-gray-200 rounded-xl overflow-hidden">
                            <button
                              onClick={() => setOpenQuestion(isQOpen ? null : qIndex)}
                              className="w-full flex items-center justify-between p-4 text-right hover:bg-gray-50 transition-colors"
                            >
                              <span className="font-semibold text-gray-900 flex-1 pr-4">{item.q}</span>
                              <ChevronDown
                                className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${isQOpen ? 'rotate-180' : ''}`}
                              />
                            </button>
                            {isQOpen && (
                              <div className="p-4 bg-gray-50 border-t border-gray-200">
                                <p className="text-gray-700 leading-relaxed">{item.a}</p>
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
          <div className="mt-12 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">لم تجد إجابتك؟</h3>
            <p className="text-green-100 mb-6 max-w-xl mx-auto">
              فريق خدمة العملاء جاهز لمساعدتك. تواصل معنا عبر واتساب وسنرد عليك في أسرع وقت.
            </p>
            <a
              href="https://wa.me/201203062905"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-xl font-bold hover:bg-green-50 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              تواصل معنا عبر واتساب
            </a>
          </div>
        </div>
      </main>
      <FooterCta />
    </div>
  )
}
