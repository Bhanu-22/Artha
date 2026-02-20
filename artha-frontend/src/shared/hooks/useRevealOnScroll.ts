import { useEffect, useRef, useState } from 'react'

type UseRevealOnScrollOptions = {
  threshold?: number
  root?: Element | Document | null
  rootMargin?: string
}

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

function hasIntersectionObserverSupport(): boolean {
  if (typeof window === 'undefined') {
    return false
  }

  return typeof window.IntersectionObserver !== 'undefined'
}

function getInitialReducedMotionPreference(): boolean {
  if (typeof window === 'undefined') {
    return false
  }

  return window.matchMedia(REDUCED_MOTION_QUERY).matches
}

export function useRevealOnScroll<T extends HTMLElement>({
  threshold = 0.15,
  root = null,
  rootMargin = '0px 0px -10% 0px',
}: UseRevealOnScrollOptions = {}) {
  const ref = useRef<T | null>(null)
  const initialReducedMotionPreference = getInitialReducedMotionPreference()
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(
    initialReducedMotionPreference,
  )
  const [isVisible, setIsVisible] = useState<boolean>(
    initialReducedMotionPreference || !hasIntersectionObserverSupport(),
  )

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY)

    const handleMotionPreferenceChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)

      if (event.matches) {
        setIsVisible(true)
      }
    }

    mediaQuery.addEventListener('change', handleMotionPreferenceChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMotionPreferenceChange)
    }
  }, [])

  useEffect(() => {
    if (prefersReducedMotion || isVisible) {
      return
    }

    const node = ref.current
    if (!node) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (!entry?.isIntersecting) {
          return
        }

        setIsVisible(true)
        observer.disconnect()
      },
      {
        threshold,
        root,
        rootMargin,
      },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [isVisible, prefersReducedMotion, root, rootMargin, threshold])

  return { ref, isVisible, prefersReducedMotion }
}
