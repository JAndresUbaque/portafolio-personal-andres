import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.section 
      id="contact"
      className="py-20 text-slate-900"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Contacto</h2>
        <p className="text-slate-600 mb-8">
          ¿Hablamos? Estoy abierto a oportunidades y colaboraciones.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="mailto:andres@example.com" className="px-4 py-2 rounded-md text-white" style={{backgroundColor: 'var(--accent)'}}>Email</a>
          <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border" style={{borderColor: 'var(--accent)', color: 'var(--accent)'}}>LinkedIn</a>
          <a href="https://github.com/JAndresUbaque" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border" style={{borderColor: 'var(--accent)', color: 'var(--accent)'}}>GitHub</a>
          <a href="https://wa.me/573000000000" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border" style={{borderColor: 'var(--accent)', color: 'var(--accent)'}}>WhatsApp</a>
          <a href="/cv-andres-ubaque.pdf" download className="px-4 py-2 rounded-md border" style={{borderColor: 'var(--accent)', color: 'var(--accent)'}}>Descargar CV</a>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;