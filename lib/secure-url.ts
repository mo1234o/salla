// Secure section mapping with encrypted IDs
const SECTION_MAPPING: Record<string, string> = {
  top: 'section-a7f3b2c9d4e1f8a6b5c9d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2',
  contact: 'section-b8e4c3d0e5f2a9b7c6d0e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3',
  how: 'section-c9f5d4e1f6a3b8c7d1e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5',
  problem: 'section-d0a6e5f2a7b9c8d2e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7',
  story: 'section-e1b7f6a3b8c0d9e3f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8',
  team: 'section-f2c8a7b4c9d1e0f4a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9',
  supporters: 'section-a3d9b8c5d0e2f1a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1',
  gallery: 'section-b4e0c9d6e1f3b2a9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2',
  tuktuk: 'section-c5f1d0e7f2a4b3a0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3',
  videos: 'section-d6e2e1f8a3b4c1b0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b4',
  promo: 'section-e7f3f2a9b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3',
}

// Whitelist of allowed section names
const ALLOWED_SECTIONS = Object.keys(SECTION_MAPPING)

// Regex to validate secure ID format (case-insensitive, 64 hex chars)
const SECURE_ID_REGEX = /^section-[a-f0-9]{64}$/i

export function getSecureSectionUrl(section: string): string {
  // Validate section name against whitelist
  if (!ALLOWED_SECTIONS.includes(section)) {
    throw new Error(`Invalid section: ${section}`)
  }

  const secureId = SECTION_MAPPING[section]
  if (!secureId) {
    throw new Error(`Secure ID not found for section: ${section}`)
  }

  // Validate the secure ID format (basic check)
  if (!secureId.startsWith('section-') || secureId.length < 20) {
    throw new Error(`Invalid secure ID format for section: ${section}`)
  }

  return `#${secureId}`
}

export function validateSectionId(id: string): boolean {
  // Validate that the ID matches our secure format
  if (!SECURE_ID_REGEX.test(id)) {
    return false
  }

  // Validate that the ID is in our mapping
  return Object.values(SECTION_MAPPING).includes(id)
}

export function sanitizeUrl(url: string): string {
  // Remove any potentially dangerous characters
  return url
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/data:/gi, '')
    .replace(/vbscript:/gi, '')
    .replace(/on\w+=/gi, '')
}

export function encodeUrlComponent(component: string): string {
  return encodeURIComponent(component)
}

export function decodeUrlComponent(component: string): string {
  try {
    return decodeURIComponent(component)
  } catch {
    return component
  }
}
