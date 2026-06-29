import { motion } from 'framer-motion'

const features = [
  {
    title: 'Universal Cloud Access',
    desc: 'Securely manage operations via desktop, tablet, or mobile. No local server maintenance required.',
  },
  {
    title: 'Advanced Multi-Filter Search',
    desc: 'Filter your entire inventory instantly by SKU, batch, storage zone, arrival date, or custom tags.',
  },
  {
    title: 'Automated Stock Tracking',
    desc: 'Real-time data updates eliminate manual counting errors and trigger automated low-stock alerts.',
  },
  {
    title: 'End-to-End Operation Controls',
    desc: 'Seamlessly manage receiving, picking, packing, and shipping processes within one centralized dashboard.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section section-split">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
        className="section-intro"
      >
        <span className="eyebrow">Services</span>
        <h2>Cloud-Based Warehouse Management Solutions</h2>
        <p>
          Our software automation platform migrates your entire warehouse workflow into a secure, accessible cloud environment.
        </p>
        <div className="pill-row" style={{ marginTop: '1.5rem' }}>
          <span className="pill">Cloud Infrastructure</span>
          <span className="pill">Real-time Sync</span>
          <span className="pill">B2B Logistics</span>
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
          <ul style={{ display: 'grid', gap: '1.2rem', listStyle: 'none' }}>
            {features.map((feature) => (
              <li key={feature.title} style={{ paddingLeft: '0', position: 'relative' }}>
                <strong style={{ display: 'block', color: 'var(--text)', fontSize: '1.05rem', marginBottom: '0.2rem' }}>
                  {feature.title}
                </strong>
                <span style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: '1.5' }}>
                  {feature.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}
