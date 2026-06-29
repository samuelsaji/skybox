import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import GlassSurface from './GlassSurface'

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleClick = (e, id) => {
    e.preventDefault()
    const target = document.getElementById(id)
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth',
      })
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`site-header ${scrolled ? 'site-header-scrolled' : ''}`}
    >
      <GlassSurface
        className="navbar-pill"
        width="65%"
        height="auto"
        borderRadius={9999}
        backgroundOpacity={0.7}
        brightness={20}
        blur={15}
        saturation={1.5}
      >
        <div className="navbar-left">
          <a href="#hero" onClick={(e) => handleClick(e, 'hero')} className="brand-mark">
            <span className="brand-logo-bars">
              <i></i><i></i><i></i><i></i><i></i>
            </span>
            <span style={{ marginLeft: '10px', fontWeight: 600, letterSpacing: '-0.02em' }}>SkyBox</span>
          </a>
        </div>

        <nav className="navbar-right">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleClick(e, link.id)}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </GlassSurface>
    </motion.header>
  )
}
