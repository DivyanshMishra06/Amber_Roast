import { useEffect, useRef } from 'react'

/**
 * Wraps children in an element that fades + slides in when it enters the viewport.
 * @param {string}  as      - HTML tag to render (default 'div')
 * @param {string}  className
 * @param {number}  delay   - additional ms delay after intersection fires
 */
export default function Reveal({ children, as: Tag = 'div', className = '', delay = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay)
          io.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [delay])

  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()}>
      {children}
    </Tag>
  )
}
