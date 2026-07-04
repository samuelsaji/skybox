import { motion } from 'framer-motion'
import teamImg from '../images/team.jpg'

export default function AboutUs() {
  return (
    <section id="about" className="section section-split">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-60px' }}
        transition={{ duration: 0.8 }}
        className="section-intro"
      >
        <span className="eyebrow">About Us</span>
        <h2>About Our Warehouse Automation Platform</h2>
        <p>
          We develop advanced <strong>cloud-based warehouse management software</strong> for B2B logistics, distribution, and supply chain enterprises. Our platform replaces rigid, on-premise legacy systems with secure, scalable cloud automation.
        </p>
        <p style={{ marginTop: '1rem', marginBottom: '2rem' }}>
          By eliminating manual inventory tracking, we help logistics leaders centralize their operations, reduce human error, and achieve absolute visibility over their supply chain from a single digital interface.
        </p>

        <a href="#services" className="btn btn-primary" style={{ background: 'var(--accent-strong)', color: 'white' }}>
          Explore Platform <span style={{ marginLeft: '8px' }}>→</span>
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, margin: '-60px' }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="about-image-container"
      >
        <div className="about-image-wrapper">
          <img src={teamImg} alt="Warehouse team and operations" />
        </div>

        <motion.div
          className="about-stats-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div>
            <strong>100+</strong>
            <span>Enterprises Onboarded</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
