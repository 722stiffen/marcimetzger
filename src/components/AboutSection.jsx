export default function AboutSection({ image }) {
  return (
    <section id="about" className="info-section split-layout">
      <div className="section-copy">
        <span className="section-tag">Why clients choose Marci</span>
        <h2>Real estate support that feels personal, clear, and proactive.</h2>
        <p>
          From your first showing to the final signature, every step is shaped around your goals. We blend local insight, responsive communication, and honest guidance so you feel confident in every decision.
        </p>

        <ul className="check-list">
          <li>Neighborhood expertise in Pahrump and surrounding communities</li>
          <li>Strong negotiation and presentation strategies</li>
          <li>Responsive support from first call to closing</li>
        </ul>

      </div>

      <div className="image-panel">
        <img src={image} alt="Marci Metzger portrait" />
      </div>
    </section>
  )
}
