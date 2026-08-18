import Reveal from './Reveal'
import { GALLERY_ITEMS } from '../data/siteData'

export default function Gallery() {
  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <Reveal className="section__header">
          <p className="section__eyebrow">Our Space</p>
          <h2 className="section__title">A Place Worth Coming Back To</h2>
        </Reveal>
      </div>

      <div className="gallery__grid">
        {GALLERY_ITEMS.map(({ cls, large, label }) => (
          <Reveal
            key={cls}
            className={`gallery-item${large ? ' gallery-item--large' : ''}`}
          >
            <div className={`gallery-item__img ${cls}`} />
            <div className="gallery-item__overlay">
              <p>{label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
