import Reveal from './Reveal'
import { TESTIMONIALS } from '../data/siteData'

function TestimonialCard({ initials, name, source, quote }) {
  return (
    <Reveal className="testimonial">
      <div className="testimonial__quote-mark">"</div>
      <div className="testimonial__stars">★★★★★</div>
      <p className="testimonial__quote">{quote}</p>
      <div className="testimonial__author">
        <div className="author__avatar">{initials}</div>
        <div>
          <strong>{name}</strong>
          <span>{source}</span>
        </div>
      </div>
    </Reveal>
  )
}

export default function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <Reveal className="section__header">
          <p className="section__eyebrow">What People Say</p>
          <h2 className="section__title">Loved by the Neighborhood</h2>
        </Reveal>
        <div className="testimonials__track">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}
