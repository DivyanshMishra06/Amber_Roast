export default function AnnouncementBar({ onClose }) {
  return (
    <div className="announcement-bar" id="announcement-bar">
      <span className="announcement-bar__icon">☕</span>
      <p>
        New: Seasonal <strong>Brown Butter Latte</strong> is back — available this weekend only!
      </p>
      <button
        className="announcement-bar__close"
        onClick={onClose}
        aria-label="Close announcement"
      >
        ✕
      </button>
    </div>
  )
}
