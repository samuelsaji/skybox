import { useState } from 'react'
import { motion } from 'framer-motion'
import DotGrid from './DotGrid'

export default function Contact() {
  const [formState, setFormState] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormState('sending')

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'lead_form_submission', {
        event_category: 'lead',
        event_label: 'landing_page_form',
      })
    }

    const formData = new URLSearchParams()
    formData.append('source', 'Main Contact Form')
    formData.append('name', e.target.name.value)
    formData.append('company', e.target.company.value)
    formData.append('email', e.target.email.value)
    formData.append('phone', e.target.phone.value)

    const scriptUrl = 'https://script.google.com/macros/s/AKfycbyJfULFfA_IHJ3uz8A5EC2kf2VeVDo3GvUQLQZuI1j7QhPK5-1MTEw-fDvJDZhRtGEpEg/exec'

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
