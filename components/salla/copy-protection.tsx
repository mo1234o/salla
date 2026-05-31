'use client'

import { useEffect } from 'react'

export function CopyProtection() {
  useEffect(() => {
    // Prevent text selection
    const preventSelection = (e: Event) => {
      e.preventDefault()
    }

    // Prevent context menu
    const preventContextMenu = (e: Event) => {
      e.preventDefault()
    }

    // Prevent copy
    const preventCopy = (e: ClipboardEvent) => {
      e.preventDefault()
    }

    // Prevent cut
    const preventCut = (e: ClipboardEvent) => {
      e.preventDefault()
    }

    // Prevent print
    const preventPrint = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'p') {
        e.preventDefault()
      }
    }

    // Prevent save
    const preventSave = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault()
      }
    }

    // Add event listeners
    document.addEventListener('selectstart', preventSelection)
    document.addEventListener('contextmenu', preventContextMenu)
    document.addEventListener('copy', preventCopy)
    document.addEventListener('cut', preventCut)
    document.addEventListener('keydown', preventPrint)
    document.addEventListener('keydown', preventSave)

    // Prevent image dragging
    const images = document.querySelectorAll('img')
    images.forEach(img => {
      img.addEventListener('dragstart', preventSelection)
      img.addEventListener('contextmenu', preventContextMenu)
    })

    // Cleanup
    return () => {
      document.removeEventListener('selectstart', preventSelection)
      document.removeEventListener('contextmenu', preventContextMenu)
      document.removeEventListener('copy', preventCopy)
      document.removeEventListener('cut', preventCut)
      document.removeEventListener('keydown', preventPrint)
      document.removeEventListener('keydown', preventSave)

      images.forEach(img => {
        img.removeEventListener('dragstart', preventSelection)
        img.removeEventListener('contextmenu', preventContextMenu)
      })
    }
  }, [])

  return null
}
