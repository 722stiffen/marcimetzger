export default function ServicesSection({ services }) {
  const serviceFeatures = [
    {
      icon: '✓',
      title: 'Trusted Expertise',
      text: services[2].text,
    },
    {
      icon: '⌕',
      title: 'Real Estate Done Right',
      text: services[0].text,
    },
    {
      icon: '◎',
      title: 'Commercial & Residential',
      text: services[1].text,
    },
    {
      icon: '$',
      title: 'Personal Service',
      text: 'We live, work, and play in this community, providing responsive support from your first call through closing.',
    },
  ]

  return (
    <section id="services" className="info-section services-section">
      <div className="section-heading">
        <h2>Why Choose Marci Metzger</h2>
        <p>We bring decades of experience and a personalized approach to every client.</p>
      </div>

      <div className="service-grid">
        {serviceFeatures.map((service) => (
          <article key={service.title} className="service-card">
            <div className="service-icon" aria-hidden="true">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
