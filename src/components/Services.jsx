import { motion } from 'framer-motion'
import serviceImg from '../images/service.jpg'
import service2Img from '../images/service 2.jfif'

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Services() {
  return (
    <section id="services" className="section services-section" style={{ backgroundColor: 'var(--surface-2)' }}>
      <div className="services-header-split">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="section-intro services-intro"
        >
          <span className="eyebrow">Services</span>
          <h2>Cloud-Based Warehouse Management Solutions</h2>
          <p>
            Our software automation platform migrates your entire warehouse workflow into a secure, accessible cloud environment — streamlined for speed and scale.
          </p>
          <div className="pill-row" style={{ marginTop: '1.2rem' }}>
            <motion.span
              className="pill"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Cloud Infrastructure
            </motion.span>
            <motion.span
              className="pill"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Real-time Sync
            </motion.span>
            <motion.span
              className="pill"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              B2B Logistics
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          className="services-header-image-wrapper"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <img src={service2Img} alt="Automated workflow statistics" className="services-header-image" />
        </motion.div>
      </div>

      <div className="services-content">
        <motion.div
          className="services-image-wrapper"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <img src={serviceImg} alt="Warehouse management professional" className="services-image" />
        </motion.div>

        <motion.div
          className="services-features"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-60px' }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              className="service-feature-item"
              variants={itemVariants}
              whileHover={{ x: 8, transition: { duration: 0.2 } }}
            >
              <div className="service-feature-accent"></div>
              <div>
                <strong>{feature.title}</strong>
                <span>{feature.desc}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
