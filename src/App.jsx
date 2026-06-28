import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'achievements', 'contact']
      const scrollPosition = window.scrollY + 220

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section)
          break
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar activeSection={activeSection} />
        <main>
          <Hero />
          <Services />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
