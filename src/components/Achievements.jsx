import { motion } from 'framer-motion'
import workflowAutomationImg from '../images/workflow_automation.svg'
import onboardingSpeedImg from '../images/onboarding_speed.svg'
import collaborationSuccessImg from '../images/collaboration_success.svg'

const achievementsData = [
  {
    metric: '500+',
    title: 'enterprise workflows launched',
    desc: 'Trusted by teams that need dependable automation at scale.',
    image: workflowAutomationImg,
  },
  {
    metric: '98%',
    title: 'faster onboarding cycles',
    desc: 'Streamlined handoffs cut complexity and accelerate time to value.',
    image: onboardingSpeedImg,
  },
  {
    metric: '4.9/5',
    title: 'average partner rating',
    desc: 'A calm, collaborative delivery experience from kickoff to launch.',
    image: collaborationSuccessImg,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export default function Achievements() {
  return (
    <section id="achievements" className="section bg-soft" style={{ marginBottom: '120px' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-60px' }}
        transition={{ duration: 0.8 }}
        className="section-heading"
      >
        <span className="eyebrow">Achievements</span>
        <h2>Measured outcomes that help teams move with confidence.</h2>
      </motion.div>

      <div className="card-container">
        {achievementsData.map((achievement, index) => (
          <motion.article
            key={achievement.title}
            className="card"
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-60px' }}
            whileHover={{
              y: -12,
              scale: 1.02,
              boxShadow: '0 30px 60px rgba(18, 18, 18, 0.1)',
              transition: { duration: 0.3, ease: 'easeOut' }
            }}
          >
            <div className="card-image-wrapper">
              <img src={achievement.image} alt={achievement.title} className="card-image" width={250} height={160} loading="lazy" decoding="async" />
            </div>
            <div className="card-content">
              <motion.div
                className="metric"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              >
                {achievement.metric}
              </motion.div>
              <h3>{achievement.title}</h3>
              <p>{achievement.desc}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
