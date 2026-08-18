export default function ProgressBar({ progress }) {
  return (
    <div
      className="progress-bar"
      style={{ width: `${progress.toFixed(2)}%` }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  )
}
