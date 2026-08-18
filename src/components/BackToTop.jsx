export default function BackToTop({ visible }) {
  const handleClick = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <a
      href="#home"
      className={`back-to-top${visible ? ' visible' : ''}`}
      aria-label="Back to top"
      onClick={handleClick}
    >
      ↑
    </a>
  )
}
