import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      className="site-footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      <p>&copy; 2026 SkyBox. Powered by Codescape.</p>
      <div>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#achievements">Achievements</a>
        <a href="#contact">Contact</a>
      </div>
    </motion.footer>
  )
}
