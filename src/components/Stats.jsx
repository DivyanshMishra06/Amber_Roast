import useCounter from '../hooks/useCounter'
import { STATS } from '../data/siteData'

function StatItem({ target, unit, label }) {
  const { count, ref } = useCounter(target)
  return (
    <div className="stat" ref={ref}>
      <div className="stat__top">
        <span className="stat__number">{count}</span>
        {unit && <span className="stat__unit">{unit}</span>}
      </div>
      <p className="stat__label">{label}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {STATS.map((s) => (
          <StatItem key={s.label} {...s} />
        ))}
      </div>
    </section>
  )
}
