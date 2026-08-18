import { useState, useEffect, useRef } from 'react'

/**
 * Animates a number from 0 → target when the returned ref enters the viewport.
 */
export default function useCounter(target, duration = 1800) {
  const [count, setCount]   = useState(0)
  const startedRef          = useRef(false)
  const ref                 = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true
          const start = performance.now()
          const tick  = (now) => {
            const t     = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - t, 4) // ease-out quart
            setCount(Math.round(eased * target))
            if (t < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          io.unobserve(el)
        }
      },
      { threshold: 0.35 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target, duration])

  return { count, ref }
}
