import { useState } from 'react'
import Reveal from './Reveal'

const INITIAL = { name: '', email: '', phone: '', date: '', type: '', message: '' }

export default function Contact() {
  const [form,   setForm]   = useState(INITIAL)
  const [status, setStatus] = useState('idle') // idle | loading | success

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => {
      setStatus('success')
      setForm(INITIAL)
      setTimeout(() => setStatus('idle'), 5000)
    }, 1200)
  }

  return (
    <section className="contact section" id="contact">
      <div className="container contact__grid">

        {/* Copy */}
        <Reveal className="contact__copy">
          <p className="section__eyebrow">Get in Touch</p>
          <h2 className="section__title">
            Reserve Your Table or<br />Place a Catering Order
          </h2>
          <p>
            Whether it's a team breakfast, a birthday brunch, or catering for your next
            event — we'd love to make it special. Fill in the form and we'll get back to
            you within 24 hours.
          </p>
          <ul className="contact__perks">
            <li><span>✓</span> Reply within 24 hours</li>
            <li><span>✓</span> Group bookings welcome</li>
            <li><span>✓</span> Custom catering menus available</li>
          </ul>
        </Reveal>

        {/* Form */}
        <Reveal className="contact__form" delay={120} as="form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input id="name" name="name" type="text" placeholder="Jane Smith"
                value={form.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="jane@example.com"
                value={form.email} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone (optional)</label>
              <input id="phone" name="phone" type="tel" placeholder="(503) 000-0000"
                value={form.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="date">Preferred Date</label>
              <input id="date" name="date" type="date"
                value={form.date} onChange={handleChange} />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="type">Request Type</label>
            <select id="type" name="type" value={form.type} onChange={handleChange}>
              <option value="">Select one…</option>
              <option value="table">Table Reservation</option>
              <option value="catering">Catering Order</option>
              <option value="event">Private Event</option>
              <option value="feedback">General Feedback</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message" name="message" rows={4}
              placeholder="Tell us about your group size, dietary needs, event details…"
              value={form.message} onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn--primary btn--full"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending…' : 'Send Message ✉️'}
          </button>

          {status === 'success' && (
            <div className="form-success visible">
              <span>☕</span> Thanks! We'll be in touch within 24 hours.
            </div>
          )}
        </Reveal>

      </div>
    </section>
  )
}
