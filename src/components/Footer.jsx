export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-map">
        <iframe
          title="Marci Metzger office location"
          src="https://www.google.com/maps?q=3190+HW-160,+Suite+F,+Pahrump,+Nevada+89048,+United+States&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="footer-location">
        <p>3190 HW-160, Suite F, Pahrump, Nevada 89048</p>
        <a href="https://www.google.com/maps?daddr=3190+HW-160,+Suite+F,+Pahrump,+Nevada+89048,+United+States" target="_blank" rel="noreferrer">
          Get directions
        </a>
      </div>

      <div className="footer-socials" aria-label="Social media links">
        <a href="https://www.facebook.com/MarciHomes/" target="_blank" rel="noreferrer" aria-label="Facebook">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.3 0-5 1.9-5 5v3H6v4h3v6h4v-6h3.5l.5-4H13V9c0-.7.3-1 1-1Z" /></svg>
        </a>
        <a href="https://www.instagram.com/marcimetzger_theridge/" target="_blank" rel="noreferrer" aria-label="Instagram">
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" className="icon-fill" /></svg>
        </a>
        <a href="https://www.linkedin.com/in/marci-metzger-30642496/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8H2V21H5V8ZM3.5 3A1.8 1.8 0 1 0 3.5 6.6 1.8 1.8 0 0 0 3.5 3ZM22 13.6c0-3.9-2.1-5.8-5-5.8-2.3 0-3.3 1.3-3.9 2.2V8H10V21H13V14.3c0-1.8.3-3.5 2.5-3.5s2.5 1.9 2.5 3.6V21H22V13.6Z" /></svg>
        </a>
        <a href="https://www.yelp.com/biz/xr3yQN_m2SgO0R_7S6p62w" target="_blank" rel="noreferrer" aria-label="Yelp">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12.2 13.2-7.8 2.4a2 2 0 0 1-2.5-1.3l-.4-1.2a2 2 0 0 1 1.3-2.5l7.7-2.4 1.7 5ZM13.7 11l-.1-8a2 2 0 0 1 2-2h1.3a2 2 0 0 1 2 2l-.1 7.8-5.1.2ZM14 14.8l6.6 4.2a2 2 0 0 1 .6 2.8l-.7 1a2 2 0 0 1-2.8.6l-6.5-4.2 2.8-4.4ZM10.1 15.2l-2.8 6.2a2 2 0 0 1-2.7 1l-1.1-.5a2 2 0 0 1-1-2.7l2.8-6.1 4.8 2.1Z" /></svg>
        </a>
      </div>

      <div className="footer-bottom">
        <p>Marci Metzger - The Ridge Realty Group</p>
        <a href="tel:2069196886">(206) 919-6886</a>
      </div>
    </footer>
  )
}
