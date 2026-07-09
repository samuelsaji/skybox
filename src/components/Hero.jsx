import { useState } from 'react'
import { motion } from 'framer-motion'
import heroBg from '../images/hero-bg3.png'

export default function Hero() {
  const [formState, setFormState] = useState('idle')
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')

  const handleQuickContact = (e) => {
    e.preventDefault()
    setFormState('sending')

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'hero_quick_contact', {
        event_category: 'lead',
        event_label: 'hero_quick_contact_form',
      })
    }

    const formData = new URLSearchParams()
    formData.append('source', 'Hero Quick Contact')
    formData.append('name', name)
    formData.append('contact', contact)

    const scriptUrl = import.meta.env.VITE_APP_GAS_URL;
    fetch(scriptUrl, {
      method: 'POST',
      body: formData,
    }).then((res) => res.json())
      .then((data) => {
        console.log('Script response:', data);
        setFormState('sent')
        setName('')
        setContact('')
        setTimeout(() => setFormState('idle'), 3000)
      }).catch((error) => {
        console.error('Error submitting form', error)
        setFormState('idle')
      })
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
              type="text"
              id="hero-name"
              required
              placeholder=" "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="hero-name">Full Name</label>
          </div>
          <div className="input-group">
            <input
              type="text"
              id="hero-contact"
              required
              placeholder=" "
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <label htmlFor="hero-contact">Email or Phone Number</label>
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

