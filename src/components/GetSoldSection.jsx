export default function GetSoldSection({ residential1, residential2, keyImage }) {
  const properties = [
    {
      image: residential1,
      text: 'We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, and we want to make sure our best is better every year.',
    },
    {
      image: residential2,
      text: 'Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.',
    },
    {
      image: keyImage,
      text: 'Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!',
    },
  ]

  return (
    <section className="get-sold-section info-section" id="listings">
      <div className="property-section-heading">
        <div>
          <h2>GET IT SOLD</h2>
        </div>
      </div>

      <div className="property-grid">
        {properties.map((property) => (
          <article key={property.title} className="property-card">
            <div className="property-image">
              <img src={property.image} alt="" />
            </div>
            <div className="property-body">
              <p>{property.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
