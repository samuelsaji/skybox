import { useState } from 'react'
import { motion } from 'framer-motion'
import DotGrid from './DotGrid'

const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  return input.replace(/<[^>]*>?/gm, '').trim(); // Basic strip HTML tags
}

export default function Contact() {
  const [formState, setFormState] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [lastSubmitted, setLastSubmitted] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrorMsg('')

    // Honeypot check
    const honeypot = e.target.bot_field?.value;
    if (honeypot) {
      setFormState('idle'); // Silently fail for bots
      return;
    }

    // Throttle check (30 seconds)
    const now = Date.now();
    if (now - lastSubmitted < 30000) {
      setErrorMsg('Please wait a moment before submitting again.');
      return;
    }

    const emailStr = e.target.email.value;
    const phoneStr = e.target.phone.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s\-\+\(\)]{7,20}$/; // Basic phone format

    if (!emailRegex.test(emailStr)) {
      setErrorMsg('Please enter a valid email address.')
      return;
    }

    if (!phoneRegex.test(phoneStr)) {
      setErrorMsg('Please enter a valid phone number.')
      return;
    }

    setLastSubmitted(now)
    setFormState('sending')

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'lead_form_submission', {
        event_category: 'lead',
        event_label: 'landing_page_form',
      })
    }

    const formData = new URLSearchParams()
    formData.append('source', 'Main Contact Form')
    formData.append('name', sanitizeInput(e.target.name.value))
    formData.append('company', sanitizeInput(e.target.company.value))
    formData.append('email', sanitizeInput(emailStr))
    formData.append('phone', sanitizeInput(phoneStr))

    const scriptUrl = import.meta.env.VITE_APP_GAS_URL;
    fetch(scriptUrl, {
      method: 'POST',
      body: formData,
    }).then((res) => res.json())
      .then((data) => {
        console.log('Script response:', data); // will show { result: "error", error: "..." } if it's still failing
        setFormState('sent')
        e.target.reset()

        setTimeout(() => {
          setFormState('idle')
        }, 3000)
      }).catch((error) => {
        console.error('Error submitting form', error)
        setFormState('idle')
      })
  }

  return (
    <section id="contact" className="section contact-section-wrapper">
      {/* DotGrid background */}
      <div className="contact-dotgrid-bg">
        <DotGrid
          dotSize={4}
          gap={16}
          baseColor="#d4d0cc"
          activeColor="#ff6715"
          proximity={80}
          speedTrigger={100}
          shockRadius={90}
          shockStrength={2.5}
        />
      </div>

      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-60px' }}
        transition={{ duration: 0.8 }}
      >
        <div className="contact-info">
          <div>
            <motion.span
              className="eyebrow"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Contact
            </motion.span>
            <motion.h2
              className="contact-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Optimize Your Warehouse Workflow
            </motion.h2>
            <motion.p
              className="contact-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Ready to transition to a scalable cloud ecosystem? Fill out the form below to speak with an automation specialist.
            </motion.p>
          </div>
          <div className="info-blocks">
            <p>
              <strong>Request a Product Demonstration</strong>
              Fill in your details to secure an automated demo.
            </p>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="contact-form"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {/* Bot protection honeypot */}
          <div style={{ display: 'none' }} aria-hidden="true">
            <label htmlFor="bot_field">Don't fill this out</label>
            <input type="text" id="bot_field" name="bot_field" tabIndex="-1" autoComplete="off" />
          </div>

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

          <div className="input-group">
            <input type="tel" id="phone" required placeholder=" " />
            <label htmlFor="phone">Phone Number</label>
          </div>

          {errorMsg && <div style={{ color: '#ff6715', marginBottom: '1rem', fontSize: '0.9rem' }}>{errorMsg}</div>}

          <button
            type="submit"
            className={`submit-btn ${formState}`}
            disabled={formState === 'sending' || formState === 'sent'}
          >
            <span>
              {formState === 'idle' && 'Schedule a Meeting'}
              {formState === 'sending' && 'Sending...'}
              {formState === 'sent' && 'Request received'}
            </span>
          </button>
        </motion.form>
      </motion.div>
    </section>
  )
}
