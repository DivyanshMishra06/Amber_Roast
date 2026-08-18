import { useState, useEffect, useRef } from 'react'
import Reveal from './Reveal'
import { MENU_TABS, MENU_ITEMS } from '../data/siteData'

function MenuCard({ icon, name, price, desc, featured, badge }) {
  return (
    <div className={`menu-card${featured ? ' menu-card--featured' : ''}`}>
      {badge && <div className="menu-card__badge">{badge}</div>}
      <div className="menu-card__icon">{icon}</div>
      <div className="menu-card__body">
        <div className="menu-card__header">
          <h3>{name}</h3>
          <span className="menu-card__price">{price}</span>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default function Menu() {
  const [activeTab, setActiveTab] = useState('espresso')
  const gridRef    = useRef(null)

  // Animate cards in when tab switches
  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.menu-card') ?? []
    cards.forEach((card, i) => {
      card.style.opacity = '0'
      card.style.transform = 'translateY(20px)'
      card.style.transition = 'none'
      requestAnimationFrame(() => {
        card.style.transition = `opacity 0.4s ease ${i * 60}ms, transform 0.4s ease ${i * 60}ms`
        card.style.opacity = '1'
        card.style.transform = 'translateY(0)'
      })
    })
  }, [activeTab])

  return (
    <section className="menu section" id="menu">
      <div className="container">
        <Reveal className="section__header">
          <p className="section__eyebrow">What We Serve</p>
          <h2 className="section__title">Our Signature Menu</h2>
          <p className="section__desc">Every item crafted with intention. From your morning ritual to an afternoon treat.</p>
        </Reveal>

        {/* Tabs */}
        <Reveal>
          <div className="menu__tabs">
            {MENU_TABS.map(({ id, label }) => (
              <button
                key={id}
                className={`tab${activeTab === id ? ' tab--active' : ''}`}
                onClick={() => setActiveTab(id)}
              >
                {label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Panel */}
        <div className="menu__panel active">
          <div className="menu__grid" ref={gridRef}>
            {MENU_ITEMS[activeTab].map((item) => (
              <MenuCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
