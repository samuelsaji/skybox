import { useState } from 'react'
import { motion } from 'framer-motion'
import heroBg from '../images/hero-bg3.png'

export default function Hero() {
  const [formState, setFormState] = useState('idle')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleQuickContact = (e) => {
    e.preventDefault()
    setFormState('sending')

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'hero_quick_contact', {
        event_category: 'lead',
        event_label: 'hero_quick_contact_form',
      })
    }

    setTimeout(() => {
      setFormState('sent')
      setEmail('')
      setPhone('')
      setTimeout(() => setFormState('idle'), 3000)
    }, 1200)
  }

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-container">
        <img src={heroBg} alt="Warehouse operations" className="hero-bg-image" width={1920} height={1080} fetchPriority="high" decoding="async" />
        <div className="hero-gradient-overlay"></div>
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
        transition={{ duration: 0.9, delay: 0.3 }}
        className="hero-contact-box"
      >
        <div className="hero-contact-box-header">
          <span className="dot" />
          Get in touch quickly
        </div>
        <p className="hero-contact-box-subtitle">Leave your details and we'll reach out within 24 hours.</p>
        <form onSubmit={handleQuickContact} className="hero-contact-form">
          <div className="input-group">
            <input
              type="email"
              id="hero-email"
              required
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="hero-email">Email Address</label>
          </div>
          <div className="input-group">
            <input
              type="tel"
              id="hero-phone"
              required
              placeholder=" "
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label htmlFor="hero-phone">Phone Number</label>
          </div>
          <button
            type="submit"
            className={`submit-btn ${formState}`}
            disabled={formState === 'sending' || formState === 'sent'}
          >
            <span>
              {formState === 'idle' && 'Get in Touch'}
              {formState === 'sending' && 'Sending...'}
              {formState === 'sent' && 'We\'ll be in touch!'}
            </span>
          </button>
        </form>
      </motion.div>
    </section>
  )
}
