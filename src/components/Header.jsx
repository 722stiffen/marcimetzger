export default function Header({ logo, isVisible }) {
  return (
    <header className={`topbar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="brand-wrap">
        <img src={logo} alt="Marci Metzger logo" className="brand-logo" />
      </div>

      <nav className="main-nav" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#listings">Listings</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href="tel:2069196886" className="primary-button small-button">
        Call Now
      </a>
    </header>
  )
}
