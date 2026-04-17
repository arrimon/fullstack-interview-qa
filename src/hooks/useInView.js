import { useEffect, useRef, useState } from 'react'

function useInView(options = {}) {
  const elementRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = elementRef.current

    if (!element || isInView) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.12,
        ...options,
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [isInView, options])

  return { elementRef, isInView }
}

export default useInView
