import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formState, setFormState] = useState('idle')
  const [challenge, setChallenge] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormState('sending')

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'lead_form_submission', {
        event_category: 'lead',
        event_label: 'landing_page_form',
      })
    }

    setTimeout(() => {
      setFormState('sent')
      e.target.reset()
      setChallenge('')

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
            <h2 className="contact-title">Optimize Your Warehouse Workflow</h2>
            <p className="contact-subtitle">
              Ready to transition to a scalable cloud ecosystem? Fill out the form below to speak with an automation specialist.
            </p>
          </div>
          <div className="info-blocks">
            <p>
              <strong>Request a Product Demonstration</strong>
              Fill in your details to secure an automated demo.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-group">
            <input type="text" id="name" required placeholder=" " />
            <label htmlFor="name">Full Name</label>
          </div>
          <div className="input-group">
            <input type="text" id="company" required placeholder=" " />
            <label htmlFor="company">Company Name</label>
          </div>
          <div className="input-group">
            <input type="email" id="email" required placeholder=" " />
            <label htmlFor="email">Work Email</label>
          </div>
          
          <div className="input-group" style={{ position: 'relative' }}>
            <select
              id="challenge"
              required
              value={challenge}
              onChange={(e) => setChallenge(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              style={{
                width: '100%',
                padding: '0.9rem 0',
                border: 'none',
                borderBottom: '1px solid var(--border)',
                background: 'transparent',
                font: 'inherit',
                color: 'var(--text)',
                outline: 'none',
                cursor: 'pointer',
                appearance: 'none',
                borderBottomColor: isFocused ? 'var(--accent)' : 'var(--border)'
              }}
            >
              <option value="" disabled hidden></option>
              <option value="Inventory Inaccuracy" style={{ background: 'var(--surface)', color: 'var(--text)' }}>Inventory Inaccuracy</option>
              <option value="Outdated Software" style={{ background: 'var(--surface)', color: 'var(--text)' }}>Outdated Software</option>
              <option value="Lack of Remote Access" style={{ background: 'var(--surface)', color: 'var(--text)' }}>Lack of Remote Access</option>
              <option value="Other" style={{ background: 'var(--surface)', color: 'var(--text)' }}>Other</option>
            </select>
            <span style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              pointerEvents: 'none',
              color: 'var(--muted)',
              fontSize: '0.8rem'
            }}>▼</span>
            <label
              htmlFor="challenge"
              style={{
                position: 'absolute',
                left: 0,
                transition: 'all 0.2s ease',
                pointerEvents: 'none',
                ...((challenge !== '' || isFocused) ? {
                  top: '-0.8rem',
                  fontSize: '0.8rem',
                  color: isFocused ? 'var(--accent)' : 'var(--muted)'
                } : {
                  top: '0.95rem',
                  fontSize: '1rem',
                  color: 'var(--muted)'
                })
              }}
            >
              Primary Operational Challenge
            </label>
          </div>

          <button
            type="submit"
            className={`submit-btn ${formState}`}
            disabled={formState === 'sending' || formState === 'sent'}
            style={{
              borderColor: isFocused ? 'var(--accent)' : 'initial'
            }}
          >
            <span>
              {formState === 'idle' && 'Schedule My Software Demo'}
              {formState === 'sending' && 'Sending...'}
              {formState === 'sent' && 'Request received'}
            </span>
          </button>
        </form>
      </motion.div>
    </section>
  )
}
