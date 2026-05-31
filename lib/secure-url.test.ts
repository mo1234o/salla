// Security tests for secure URL system
import {
  getSecureSectionUrl,
  validateSectionId,
  sanitizeUrl,
  encodeUrlComponent,
  decodeUrlComponent,
} from './secure-url'

console.log('🔒 Running Security Tests for Secure URL System\n')

// Test 1: Valid sections should work
console.log('✅ Test 1: Valid sections')
try {
  console.log('  - top:', getSecureSectionUrl('top'))
  console.log('  - contact:', getSecureSectionUrl('contact'))
  console.log('  - how:', getSecureSectionUrl('how'))
  console.log('  ✓ All valid sections work correctly\n')
} catch (error) {
  console.error('  ✗ Failed:', error)
}

// Test 2: Invalid sections should throw
console.log('✅ Test 2: Invalid sections should throw')
try {
  getSecureSectionUrl('invalid-section')
  console.error('  ✗ Should have thrown an error')
} catch (error) {
  console.log('  ✓ Invalid section rejected correctly\n')
}

// Test 3: XSS injection attempts should be sanitized
console.log('✅ Test 3: XSS injection sanitization')
const xssAttempts = [
  'javascript:alert(1)',
  'javascript:alert(document.cookie)',
  'data:text/html,<script>alert(1)</script>',
  'vbscript:msgbox(1)',
  'onload=alert(1)',
  '<script>alert(1)</script>',
  '<img src=x onerror=alert(1)>',
]

xssAttempts.forEach((attempt) => {
  const sanitized = sanitizeUrl(attempt)
  console.log(`  - "${attempt}" → "${sanitized}"`)
  if (sanitized === attempt) {
    console.error('    ✗ Not sanitized properly')
  } else {
    console.log('    ✓ Sanitized')
  }
})
console.log()

// Test 4: Secure ID validation
console.log('✅ Test 4: Secure ID validation')
const validId = 'section-a7f3b2c9d4e1f8a6b5c9d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2'
const invalidId = 'section-invalid'
console.log(`  - Valid ID: ${validateSectionId(validId) ? '✓' : '✗'}`)
console.log(`  - Invalid ID: ${validateSectionId(invalidId) ? '✗' : '✓'}\n`)

// Test 5: URL encoding/decoding
console.log('✅ Test 5: URL encoding/decoding')
const testString = 'test string with spaces & special chars!'
const encoded = encodeUrlComponent(testString)
const decoded = decodeUrlComponent(encoded)
console.log(`  - Original: "${testString}"`)
console.log(`  - Encoded: "${encoded}"`)
console.log(`  - Decoded: "${decoded}"`)
console.log(`  - Match: ${testString === decoded ? '✓' : '✗'}\n`)

console.log('🎉 All security tests completed!')
