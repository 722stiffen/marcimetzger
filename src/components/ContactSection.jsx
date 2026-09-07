export default function ContactSection() {
  return (
    <section className="contact-section info-section" id="contact">
      <div className="contact-heading">
        <span className="section-tag">Call or visit</span>
        <h2>Let's connect.</h2>
      </div>

      <div className="contact-layout">
        <form className="contact-form" action="mailto:hello@marcimetzger.com" method="post" encType="text/plain">
          <h3>Send Message</h3>
          <label>
            <span>Name</span>
            <input type="text" name="name" autoComplete="name" placeholder="Your name" required />
          </label>
          <label>
            <span>Email*</span>
            <input type="email" name="email" autoComplete="email" placeholder="you@example.com" required />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows="4" placeholder="Tell Marci how she can help..." required />
          </label>
          <button type="submit" className="contact-submit">Send</button>
        </form>

        <div className="contact-details">
          <h3>Marci Metzger - The Ridge Realty Group</h3>
          <p>3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</p>
          <div className="contact-quick-actions">
            <a href="tel:2069196886">Call (206) 919-6886</a>
            <a href="mailto:hello@marcimetzger.com">Email Marci</a>
          </div>
          <h3>Office Hours</h3>
          <p><strong>Open daily</strong> <span>8:00 am - 7:00 pm</span></p>
          <p>Appointments outside office hours available upon request. Just call!</p>
        </div>
      </div>
    </section>
  )
}
