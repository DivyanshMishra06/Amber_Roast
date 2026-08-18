import { useEffect, useRef } from 'react'

export default function Hero() {
  const contentRef = useRef(null)

  // Stagger-animate hero children on mount (they're immediately in viewport)
  useEffect(() => {
    const els = contentRef.current?.querySelectorAll('.reveal') ?? []
    els.forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 140 + 80)
    })
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero__bg" />
      <div className="hero__overlay" />

      <div className="hero__content container" ref={contentRef}>
        <div className="hero__chip reveal">
          <span className="hero__chip-dot" />
          Est. 2013 &nbsp;·&nbsp; Portland, OR &nbsp;·&nbsp; Open Today
        </div>
        <p className="hero__tagline reveal">Artisan Coffee · Fresh Pastries · Good Vibes</p>
        <h1 className="hero__title reveal">
          Wake Up &amp;<br />Smell the Roast
        </h1>
        <p className="hero__sub reveal">
          Hand-crafted espresso drinks, locally sourced single-origin beans, and a cozy corner
          that feels like home — every single day.
        </p>
        <div className="hero__actions reveal">
          <a href="#menu"    className="btn btn--primary">Explore Menu</a>
          <a href="#contact" className="btn btn--outline">Reserve a Table</a>
        </div>
      </div>

      {/* Floating info card */}
      <div className="hero__info-card">
        <div className="hero__info-item">
          <span className="hero__info-icon">📍</span>
          <div>
            <strong>142 Maple Street</strong>
            <small>Downtown Portland</small>
          </div>
        </div>
        <div className="hero__info-divider" />
        <div className="hero__info-item">
          <span className="hero__info-icon">🕐</span>
          <div>
            <strong>Open Today</strong>
            <small>7:00 AM – 8:00 PM</small>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
