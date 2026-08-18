import { useState, useCallback } from 'react'
import { NAV_LINKS } from '../data/siteData'

function scrollTo(id) {
  if (id === 'home') { window.scrollTo({ top: 0, behavior: 'smooth' }); return }
  const el = document.getElementById(id)
  if (!el) return
  // Use the real height of the fixed wrapper (bar + nav), falls back to nav height
  const headerH = document.querySelector('.site-top')?.offsetHeight
    || parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10)
    || 76
  window.scrollTo({ top: el.offsetTop - headerH, behavior: 'smooth' })
}

export default function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false)

  const close = useCallback(() => {
    setOpen(false)
    document.body.style.overflow = ''
  }, [])

  const toggle = () => {
    const next = !open
    setOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  const handleNav = (id) => {
    close()
    scrollTo(id)
  }

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="site-header">
      <nav className="nav container">

        {/* Logo */}
        <a
          href="#home"
          className="nav__logo"
          onClick={(e) => { e.preventDefault(); handleNav('home') }}
        >
          <span className="logo-icon">☕</span>
          <span>Amber Roast</span>
        </a>

        {/* Links */}
        <ul className={`nav__links${open ? ' open' : ''}`} id="nav-links">
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="nav__link"
                onClick={(e) => { e.preventDefault(); handleNav(id) }}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="nav__link nav__link--cta"
              onClick={(e) => { e.preventDefault(); handleNav('contact') }}
            >
              Order Now
            </a>
          </li>
        </ul>

        {/* Burger */}
        <button
          className={`nav__burger${open ? ' open' : ''}`}
          id="nav-burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={toggle}
        >
          <span /><span /><span />
        </button>
      </nav>
    </header>
  )
}
