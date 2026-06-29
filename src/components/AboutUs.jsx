import { motion } from 'framer-motion'

export default function AboutUs() {
  return (
    <section id="SkyBox" className="section section-split">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
        className="section-intro"
      >
        <span className="eyebrow">About</span>
        <h2>About Our Warehouse Automation Platform</h2>
        <p>
          We develop advanced <strong>cloud-based warehouse management software</strong> for B2B logistics, distribution, and supply chain enterprises. Our platform replaces rigid, on-premise legacy systems with secure, scalable cloud automation.
        </p>
        <p style={{ marginTop: '1rem' }}>
          By eliminating manual inventory tracking, we help logistics leaders centralize their operations, reduce human error, and achieve absolute visibility over their supply chain from a single digital interface.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="about-panel"
      >
        <div className="about-panel-card accent-card">
          <span>Enterprise Grade</span>
          <strong>Modernize your operations with cloud-first infrastructure.</strong>
        </div>
        <div className="about-panel-card">
          <h3>Targeted Solutions</h3>
          <ul>
            <li>B2B Logistics &amp; Distribution</li>
            <li>Supply Chain Enterprises</li>
            <li>Scalable Cloud Systems</li>
          </ul>
        </div>
      </motion.div>
    </section>
  )
}
