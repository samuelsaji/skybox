import { motion } from 'framer-motion'

const achievementsData = [
  {
    metric: '500+',
    title: 'enterprise workflows launched',
    desc: 'Trusted by teams that need dependable automation at scale.',
  },
  {
    metric: '98%',
    title: 'faster onboarding cycles',
    desc: 'Streamlined handoffs cut complexity and accelerate time to value.',
  },
  {
    metric: '4.9/5',
    title: 'average partner rating',
    desc: 'A calm, collaborative delivery experience from kickoff to launch.',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="section bg-soft">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
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
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: index * 0.12 }}
          >
            <div className="card-content">
              <div className="metric">{achievement.metric}</div>
              <h3>{achievement.title}</h3>
              <p>{achievement.desc}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
