import { useEffect, useState } from 'react'

function useCountUp(endValue, duration = 1200) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (mediaQuery.matches) {
      setValue(endValue)
      return undefined
    }

    let animationFrameId = 0
    const startTime = performance.now()

    const tick = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = 1 - (1 - progress) ** 3

      setValue(Math.round(endValue * easedProgress))

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(tick)
      }
    }

    animationFrameId = window.requestAnimationFrame(tick)

    return () => window.cancelAnimationFrame(animationFrameId)
  }, [duration, endValue])

  return value
}

export default useCountUp
