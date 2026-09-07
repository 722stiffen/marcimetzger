export default function AgentsSection({ agents }) {
  return (
    <section className="agents-section info-section" id="about">
      <div className="agents-heading">
        <h2>About</h2>
        <p>With nearly 3 decades of experience, Marci provides personal guidance for every client.</p>
      </div>

      <div className={`agents-grid ${agents.length === 1 ? 'single-agent' : ''}`}>
        {agents.map((agent) => (
          <article key={agent.name} className="agent-card">
            <img src={agent.image} alt={agent.name} className="agent-photo" />
            <h3>{agent.name}</h3>
            <span className="agent-role">{agent.role}</span>
            <p className="agent-sales">{agent.sales}</p>
            <div className="agent-tags">
              {agent.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <div className="agent-actions">
              <a href="tel:2069196886">Call</a>
              <a href="mailto:hello@marcimetzger.com">Email</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
