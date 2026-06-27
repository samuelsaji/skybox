import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formState, setFormState] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormState('sending')

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'contact_submit', {
        event_category: 'lead',
        event_label: 'landing_page_form',
      })
    }

    setTimeout(() => {
      setFormState('sent')
      e.target.reset()

      setTimeout(() => {
        setFormState('idle')
      }, 3000)
    }, 1200)
  }

  return (
    <section id="contact" className="section">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
      >
        <div className="contact-info">
          <div>
            <span className="eyebrow">Contact</span>
            <h2 className="contact-title">Let’s design the next phase of your growth.</h2>
            <p className="contact-subtitle">
              Share your goals and we’ll map the fastest path to a smoother operating model.
            </p>
          </div>
          <div className="info-blocks">
            <p>
              <strong>Reach us</strong>
              hello@codescape.co
            </p>
            <p>
              <strong>Based in</strong>
              London · New York · Remote-first
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-group">
            <input type="text" id="name" required placeholder=" " />
            <label htmlFor="name">Full Name</label>
          </div>
          <div className="input-group">
            <input type="email" id="email" required placeholder=" " />
            <label htmlFor="email">Business Email</label>
          </div>
          <div className="input-group">
            <input type="text" id="company" required placeholder=" " />
            <label htmlFor="company">Company</label>
          </div>
          <div className="input-group">
            <textarea id="message" rows="4" required placeholder=" "></textarea>
            <label htmlFor="message">What are you trying to improve?</label>
          </div>

          <button
            type="submit"
            className={`submit-btn ${formState}`}
            disabled={formState === 'sending' || formState === 'sent'}
          >
            <span>
              {formState === 'idle' && 'Schedule a call'}
              {formState === 'sending' && 'Sending...'}
              {formState === 'sent' && 'Request received'}
            </span>
          </button>
        </form>
      </motion.div>
    </section>
  )
}
