export default function ListingsSection({ listings }) {
  return (
    <section id="listings" className="info-section">
      <div className="section-heading inline-heading">
        <div>
          <span className="section-tag">Featured homes</span>
          <h2>Homes that match your next chapter.</h2>
        </div>
        <a href="#contact" className="text-link">Get a custom search</a>
      </div>

      <div className="listing-grid">
        {listings.map((listing) => (
          <article key={listing.title} className="listing-card">
            <img src={listing.image} alt={listing.title} />
            <div className="listing-body">
              <div className="listing-meta">
                <span className="listing-price">{listing.price}</span>
                <span className="listing-badge">Featured</span>
              </div>
              <h3>{listing.title}</h3>
              <p>{listing.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
