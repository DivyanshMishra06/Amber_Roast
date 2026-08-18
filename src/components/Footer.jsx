const NAV_LINKS = ['About Us', 'Menu', 'Gallery', 'Visit Us', 'Contact']
const IDS       = ['about', 'menu', 'gallery', 'hours', 'contact']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top-line" />
      <div className="container footer__grid">

        <div className="footer__brand">
          <a href="#home" className="nav__logo footer__logo">
            <span className="logo-icon">☕</span>
            <span>Amber Roast</span>
          </a>
          <p>Artisan coffee and warm community since 2013. Every cup tells a story.</p>
          <div className="footer__socials">
            <a href="#" aria-label="Instagram" className="social-link">📸</a>
            <a href="#" aria-label="Facebook"  className="social-link">👥</a>
            <a href="#" aria-label="Twitter"   className="social-link">🐦</a>
          </div>
        </div>

        <div className="footer__nav">
          <h4>Quick Links</h4>
          <ul>
            {NAV_LINKS.map((label, i) => (
              <li key={label}>
                <a href={`#${IDS[i]}`}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__hours">
          <h4>Hours</h4>
          <p>Mon–Fri: 7am – 8pm</p>
          <p>Saturday: 8am – 9pm</p>
          <p>Sunday: 8am – 6pm</p>
        </div>

        <div className="footer__contact">
          <h4>Contact</h4>
          <p>142 Maple Street<br />Portland, OR 97201</p>
          <p>(503) 847-2291</p>
          <p>hello@amberroast.cafe</p>
        </div>

      </div>
      <div className="footer__bottom container">
        <p>© 2026 Amber Roast Coffee &amp; Café. All rights reserved.</p>
        <p>Designed with ☕ and care.</p>
      </div>
    </footer>
  )
}
