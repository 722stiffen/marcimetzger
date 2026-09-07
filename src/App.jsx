import { useEffect, useState } from 'react'
import './App.css'
import AgentsSection from './components/AgentsSection'
import ContactSection from './components/ContactSection'
import PartnerLogosSection from './components/PartnerLogosSection'
import ExperienceSection from './components/ExperienceSection'
import Footer from './components/Footer'
import GetSoldSection from './components/GetSoldSection'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ScrollTopButton from './components/ScrollTopButton'
import ServicesSection from './components/ServicesSection'
import hero from './assets/hero.png'
import key from './assets/key.webp'
import logo from './assets/logo.webp'
import marci from './assets/MARCI.png'
import oip from './assets/oip.png'
import residential1 from './assets/residential1.webp'
import residential2 from './assets/residential2.webp'
import service1 from './assets/services1.webp'
import service2 from './assets/services2.webp'
import service3 from './assets/services3.webp'
import gallery1 from './assets/gallery1.webp'
import gallery2 from './assets/gallery2.webp'
import gallery3 from './assets/gallery3.webp'
import gallery4 from './assets/gallery4.webp'
import gallery5 from './assets/gallery5.webp'
import gallery6 from './assets/gallery6.webp'
import gallery7 from './assets/gallery7.webp'
import ridgeLogo from './assets/logo2.webp'
import housingLogo from './assets/logo3.webp'
import realtorLogo from './assets/logo4.webp'
import chamberLogo from './assets/logo5.webp'

const services = [
  {
    title: 'Real Estate Done Right',
    text: "Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
    image: service1,
  },
  {
    title: 'Commercial & Residential',
    text: "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put your hard-earned dollars.",
    image: service2,
  },
  {
    title: 'Rely on Expertise',
    text: 'If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.',
    image: service3,
  },
]

const agents = [
  { name: 'MARCI METZGER', role: 'REALTOR FOR NEARLY 3 DECADES', sales: '206-919-6886', tags: [], image: marci },
]

const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7]

const partnerLogos = [
  { image: ridgeLogo, alt: 'The Ridge Realty Group' },
  { image: housingLogo, alt: 'Equal Housing Opportunity' },
  { image: realtorLogo, alt: 'REALTOR' },
  { image: chamberLogo, alt: 'Pahrump Valley Chamber of Commerce' },
]

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      setShowScrollTop(currentScroll > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="page-shell">
      <Header logo={logo} isVisible />

      <main id="home">
        <HeroSection image={oip} />
        <GetSoldSection residential1={residential1} residential2={residential2} keyImage={key} />
        <ServicesSection services={services} />
        <AgentsSection agents={agents} />
        <ExperienceSection images={gallery} />
        <ContactSection />
        <PartnerLogosSection logos={partnerLogos} />
      </main>

      <Footer />
      <ScrollTopButton isVisible={showScrollTop} onClick={scrollToTop} />
    </div>
  )
}

export default App
