import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

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
    { id: 'about', label: 'About' },
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
      <a href="#hero" onClick={(e) => handleClick(e, 'hero')} className="brand-mark">
        <span className="brand-dot" />
        Codescape
      </a>
      <nav>
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
    </motion.header>
  )
}
