import Reveal from './Reveal'

const CONTACT_ITEMS = [
  { icon: '📍', strong: '142 Maple Street',     sub: 'Downtown District, Portland, OR 97201' },
  { icon: '📞', strong: '(503) 847-2291',        sub: 'Call ahead for group reservations' },
  { icon: '✉️', strong: 'hello@amberroast.cafe', sub: 'Catering & event inquiries welcome' },
]

const HOURS_ROWS = [
  { day: 'Monday – Friday', time: '7:00 AM – 8:00 PM' },
  { day: 'Saturday',        time: '8:00 AM – 9:00 PM' },
  { day: 'Sunday',          time: '8:00 AM – 6:00 PM' },
]

const AMENITIES = ['📶 Free WiFi', '🪑 Indoor Seating', '🌿 Outdoor Patio', '♿ Accessible']

export default function Hours() {
  return (
    <section className="hours section" id="hours">
      <div className="container hours__grid">

        {/* Info column */}
        <Reveal className="hours__info">
          <p className="section__eyebrow">Find Us</p>
          <h2 className="section__title">Visit Amber Roast</h2>

          {CONTACT_ITEMS.map(({ icon, strong, sub }) => (
            <div className="hours__contact-item" key={strong}>
              <div className="hours__contact-icon">{icon}</div>
              <div>
                <strong>{strong}</strong>
                <p>{sub}</p>
              </div>
            </div>
          ))}

          <div className="hours__schedule">
            <h3>Hours</h3>
            <table className="hours__table">
              <tbody>
                {HOURS_ROWS.map(({ day, time }) => (
                  <tr key={day}>
                    <td>{day}</td>
                    <td>{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="hours__amenities">
            {AMENITIES.map((a) => (
              <span className="amenity" key={a}>{a}</span>
            ))}
          </div>
        </Reveal>

        {/* Map placeholder */}
        <Reveal className="hours__map" delay={120}>
          <div className="map-placeholder">
            <div className="map-pin">📍</div>
            <p>142 Maple Street</p>
            <p>Portland, OR</p>
            <a
              href="https://www.google.com/maps/search/142+Maple+Street+Portland+OR"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary map-btn"
            >
              Get Directions
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
