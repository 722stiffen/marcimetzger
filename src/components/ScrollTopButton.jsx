export default function ScrollTopButton({ isVisible, onClick }) {
  return (
    <button
      type="button"
      className={`scroll-top-button ${isVisible ? 'visible' : ''}`}
      onClick={onClick}
      aria-label="Scroll to top"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 11.5 12 3l9 8.5M6.5 9.5V20h11V9.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}
