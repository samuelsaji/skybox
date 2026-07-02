import { motion } from 'framer-motion'
import DotGrid from './DotGrid'

export default function Hero() {
  const handleCtaClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'hero_cta_click')
    }
  }

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-container">
        <DotGrid className="hero-dotgrid" />
        <div className="hero-fade-overlay"></div>
      </div>
      <div className="hero-copy">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="eyebrow"
        >
          Warehouse Management Software for Modern Supply Chains
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          Automate Your Warehouse Operations in the Cloud.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          Enterprise-grade software automation by Codescape. Access, filter, and control your entire inventory from any device, anywhere.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-actions"
        >
          <a href="#contact" className="btn btn-primary" onClick={handleCtaClick}>Request a Custom Demo</a>
          <a href="#about" className="btn btn-secondary">Explore the platform</a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-stats"
        >
          <div>
            <strong>30%</strong>
            <span>faster handoffs</span>
          </div>
          <div>
            <strong>24/7</strong>
            <span>operational support</span>
          </div>
          <div>
            <strong>4.9/5</strong>
            <span>client satisfaction</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="hero-card"
      >
        <div className="hero-card-top">
          <span className="dot" />
          Live automation overview
        </div>
        <div className="hero-card-body">
          <div className="mini-pill">AI-assisted workflows</div>
          <h3>One control center for every revenue-critical operation.</h3>
          <ul>
            <li>Instant lead routing</li>
            <li>Smart onboarding checklists</li>
            <li>Customer success alerts</li>
          </ul>
        </div>
      </motion.div>
    </section>
  )
}
