export default function PartnerLogosSection({ logos }) {
  return (
    <section className="partner-logos-section" aria-label="Professional affiliations">
      <div className="partner-logos-grid">
        {logos.map((logo) => (
          <div className="partner-logo" key={logo.alt}>
            <img src={logo.image} alt={logo.alt} />
          </div>
        ))}
      </div>
    </section>
  )
}
