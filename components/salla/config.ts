// رقم واتساب سلة (الصيغة الدولية بدون + أو أصفار): 01203062905
export const WHATSAPP_NUMBER = '201203062905'
export const WHATSAPP_DISPLAY = '01203062905'

export function whatsappLink(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}
