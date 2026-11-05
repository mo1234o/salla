'use client'

import { Icon, IconBadge, IconName, Coin } from './svg-icons'
import { whatsappLink, WHATSAPP_DISPLAY } from './config'

// رسالة التسجيل: بتتفتح على واتساب سلة والشخص بيكتب بياناته (الاسم، العنوان، بيجمع إيه)
// البيانات دي لجمع المعلومات بس
const COLLECTOR_MSG =
  'أهلاً سلة، عايز أسجّل كشريك جامع.\n\nالاسم:\nالعنوان:\nعندي إيه بجمعه (بلاستيك / كانز / كرتون / حديد / بيكيا / غيره):'
const BUYER_MSG =
  'أهلاً سلة، عايز أسجّل كشريك مشتري.\n\nالاسم:\nالعنوان / المنطقة اللي بشتغل فيها:\nنوع المركبة (تروسيكل / نص نقل / عربية):\nبشتري إيه (بلاستيك / كانز / كرتون / حديد / بيكيا / غيره):'

export function PartnersSection() {
  const roles: {
    icon: IconName; title: string; subtitle: string; benefits: string[]
    color: string; textColor: string; button: string; msg: string
  }[] = [
    {
      icon: 'home',
      title: 'شريك جامع: صوّر اللي عندك وبيعه',
      subtitle: 'لصاحب بيت أو مصنع أو شركة أو محل',
      benefits: [
        'عندك بيكيا أو كراتين أو بلاستيك أو حديد مركون؟ صوّره من التطبيق وحدد مكانك',
        'بنوصّلك بأقرب مشتري، من غير ما تستنى حد يلف عليك ولا تدوّر على حد',
        'لو المشتري اشترى منك بـ 100 جنيه، بنزوّدلك 100 جنيه زيها على التطبيق',
      ],
      color: 'from-green-700 to-green-500',
      textColor: 'text-green-700',
      button: 'سجّل كشريك جامع',
      msg: COLLECTOR_MSG,
    },
    {
      icon: 'truck',
      title: 'شريك مشتري: وفّر وقتك وبنزينك',
      subtitle: 'لصاحب تروسيكل أو نص نقل أو عربية روبابيكيا',
      benefits: [
        'بدل ما تلف الشوارع والبيوت تدوّر على خامة، بنوصّلك للجامع على طول',
        'تعرف النوع والكمية والمكان قبل ما تتحرك، فتبطّل لفّ من غير فايدة',
        'وفّر وقت اللف وتكلفة البنزين والسولار، وركّز على شغلك',
      ],
      color: 'from-emerald-700 to-green-500',
      textColor: 'text-emerald-700',
      button: 'سجّل كشريك مشتري',
      msg: BUYER_MSG,
    },
  ]

  const stats = [
    { value: '83%', label: 'عائد ربح للطن' },
    { value: 'كاش لحظي', label: 'في محفظتك بعد الاستلام' },
    { value: 'ميزان مصوّر', label: 'وزن واضح وشفاف' },
    { value: 'Salla Box', label: 'ماكينات فرز ذكية' },
  ]

  const materials = [
    'بلاستيك PET', 'بلاستيك HDPE', 'ألومنيوم كانز', 'حديد خردة',
    'نحاس خردة', 'كرتون قديم', 'خردة إلكترونيات', 'مخلفات مصانع', 'بيكيا',
  ]

  const governorates = [
    'القاهرة', 'الجيزة', 'الإسكندرية', 'القليوبية', 'الدقهلية', 'الشرقية',
    'المنوفية', 'الغربية', 'كفر الشيخ', 'البحيرة', 'دمياط', 'بورسعيد',
    'الإسماعيلية', 'السويس', 'شمال سيناء', 'جنوب سيناء', 'الفيوم', 'بني سويف',
    'المنيا', 'أسيوط', 'سوهاج', 'قنا', 'الأقصر', 'أسوان',
    'البحر الأحمر', 'الوادي الجديد', 'مطروح',
  ]

  const steps = [
    { num: 1, title: 'ابعتلنا على واتساب', desc: `رقمنا ${WHATSAPP_DISPLAY}، والتسجيل بيبدأ برسالة` },
    { num: 2, title: 'اكتب بياناتك', desc: 'اسمك وعنوانك وبتجمع أو بتشتري إيه' },
    { num: 3, title: 'نزّل التطبيق', desc: 'سلة مصر متاحة على Google Play' },
    { num: 4, title: 'ابدأ الشغل', desc: 'صوّر وبيع، أو استلم الطلبات حسب منطقتك' },
  ]

  return (
    <section className="py-12 px-4 sm:px-6 bg-gradient-to-b from-green-50 to-white" id="partners">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4">
            انضم لشبكة سلة
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
            اشتغل مع سلة <span className="text-green-600">وزوّد دخلك</span> من أول طلب
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            في بيتك أو مصنعك أو شركتك حاجات مركونة؟ <strong className="text-gray-900">صوّرها</strong> ونوصّلك بمشتري.
            وعندك <strong className="text-gray-900">تروسيكل أو عربية</strong>؟ بنوصّلك بالجامع على طول بدل اللف في الشوارع.
          </p>
        </div>

        {/* مكافأة المطابقة */}
        <div className="mb-8 sm:mb-12 rounded-3xl bg-gradient-to-r from-green-800 via-green-700 to-green-500 text-white p-5 sm:p-8 shadow-2xl flex flex-col sm:flex-row items-center gap-5 sm:gap-8">
          <div className="flex items-center gap-2 shrink-0" aria-hidden="true">
            <div className="flex flex-col items-center"><Coin className="w-14 h-14 sm:w-16 sm:h-16" /><span className="font-black text-lg mt-1">100</span></div>
            <Icon name="coins" className="w-7 h-7 text-green-100" />
            <div className="flex flex-col items-center"><Coin className="w-14 h-14 sm:w-16 sm:h-16" /><span className="font-black text-lg mt-1">+ 100</span></div>
          </div>
          <div className="text-center sm:text-right">
            <h3 className="text-xl sm:text-2xl font-black mb-1">بعت بـ 100؟ هنديك 100 زيها</h3>
            <p className="text-green-50 text-sm sm:text-base leading-relaxed">
              الجامع كل ما يبيع للمشتري بـ 100 جنيه، بنزوّدله 100 جنيه زيها على التطبيق، وهكذا مع كل عملية بيع.
            </p>
          </div>
        </div>

        {/* الأدوار */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
          {roles.map((role, index) => (
            <div key={index} className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border-2 border-green-100 hover:border-green-300 transition-all flex flex-col">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <IconBadge name={role.icon} className="w-14 h-14" iconClassName="w-8 h-8" />
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900">{role.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 font-semibold">{role.subtitle}</p>
                </div>
              </div>
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-1">
                {role.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-gray-700">
                    <Icon name="check" className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink(role.msg)} target="_blank" rel="noopener noreferrer"
                className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-bold text-white shadow-lg transition-all hover:scale-[1.02] text-sm sm:text-base bg-gradient-to-r ${role.color} flex items-center justify-center gap-2`}
              >
                <Icon name="whatsapp" className="w-5 h-5" /> {role.button}
              </a>
            </div>
          ))}
        </div>

        {/* الخامات والمحافظات */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-black text-center text-gray-900 mb-4 sm:mb-6">
            بنجمّع وبنشتري الخامات دي في كل محافظات الجمهورية
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {materials.map((mat, i) => (
              <span key={i} className="px-2 sm:px-3 py-1 sm:py-2 bg-green-100 text-green-700 rounded-full font-bold text-xs sm:text-sm border-2 border-green-200">{mat}</span>
            ))}
            {governorates.map((city, i) => (
              <span key={i} className="px-2 sm:px-3 py-1 sm:py-2 bg-white text-gray-700 rounded-full font-semibold text-xs sm:text-sm border-2 border-gray-200">{city}</span>
            ))}
          </div>
        </div>

        {/* الخطوات */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-black text-center text-gray-900 mb-6 sm:mb-8">تبدأ إزاي؟ أربع خطوات بس</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
            {steps.map((step) => (
              <div key={step.num} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg border-2 border-green-100">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto bg-green-600 text-white rounded-full flex items-center justify-center text-lg sm:text-xl font-black mb-3 sm:mb-4">{step.num}</div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1 sm:mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-green-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center border-2 border-green-200">
                <div className="text-xl sm:text-2xl md:text-3xl font-black text-green-700 mb-0.5 sm:mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm font-semibold text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
