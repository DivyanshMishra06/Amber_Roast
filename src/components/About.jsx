import Reveal from './Reveal'

const VALUES = [
  { icon: '🌱', title: 'Sustainably Sourced', desc: 'Direct-trade relationships with 6 farm families worldwide.' },
  { icon: '🔥', title: 'In-House Roasting',   desc: 'Roasted fresh twice a week — never sitting on a shelf for months.' },
  { icon: '🏡', title: 'Community First',      desc: 'We host open-mic nights, art displays, and local pop-ups monthly.' },
]

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container about__grid">

        {/* Visual */}
        <Reveal className="about__visual">
          <div className="about__img-frame">
            <div className="about__img about__img--1" />
            <div className="about__img about__img--2" />
          </div>
          <div className="about__badge">
            <span className="badge__icon">☕</span>
            <span className="badge__text">Est. 2013</span>
          </div>
        </Reveal>

        {/* Copy */}
        <Reveal className="about__copy" delay={120}>
          <p className="section__eyebrow">Our Story</p>
          <h2 className="section__title">Passion Poured Into Every Cup</h2>
          <p className="about__body">
            What started as a tiny corner kiosk on Maple Street has grown into the heart of our neighborhood.
            Amber Roast was founded on a single belief: <strong>great coffee deserves great care.</strong>
          </p>
          <p className="about__body">
            We source our beans directly from small-batch farmers in Ethiopia, Colombia, and Guatemala —
            then roast them in-house every Tuesday and Friday so you always get the freshest brew possible.
          </p>
          <ul className="about__values">
            {VALUES.map(({ icon, title, desc }) => (
              <li key={title}>
                <div className="value-icon-wrap">
                  <span className="value-icon">{icon}</span>
                </div>
                <div>
                  <strong>{title}</strong>
                  <p>{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

      </div>
    </section>
  )
}
