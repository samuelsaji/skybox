import { motion } from 'framer-motion'

const pillars = [
  'Operational visibility across every workflow',
  'Automation built for high-growth teams',
  'A measured approach to implementation and scale',
]

export default function Services() {
  return (
    <section id="about" className="section section-split">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
        className="section-intro"
      >
        <span className="eyebrow">About</span>
        <h2>Built for operators who want clarity, speed, and control.</h2>
        <p>
          Codescape helps ambitious businesses simplify complex processes with a single operating layer for customer-facing work. From onboarding to renewals, every workflow is designed to be measurable, reliable, and easy to grow.
        </p>
        <div className="pill-row">
          <span className="pill">Revenue operations</span>
          <span className="pill">Automation design</span>
          <span className="pill">Strategic enablement</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="about-panel"
      >
        <div className="about-panel-card">
          <h3>Why teams choose us</h3>
          <ul>
            {pillars.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="about-panel-card accent-card">
          <span>Launch in weeks, not quarters</span>
          <strong>From audit to rollout, every engagement is deliberate and pragmatic.</strong>
        </div>
      </motion.div>
    </section>
  )
}
