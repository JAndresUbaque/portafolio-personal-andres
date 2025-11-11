import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp, FaDownload } from 'react-icons/fa';

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
        <p className="text-slate-700 mb-8">
          ¿Hablamos? Estoy abierto a oportunidades y colaboraciones.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="mailto:andres@example.com" className="px-4 py-2 rounded-md text-white flex items-center gap-2" style={{backgroundColor: 'var(--accent)'}}><FaEnvelope /> Email</a>
          <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border flex items-center gap-2" style={{borderColor: 'var(--accent)', color: 'var(--accent)'}}><FaLinkedin /> LinkedIn</a>
          <a href="https://github.com/JAndresUbaque" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border flex items-center gap-2" style={{borderColor: 'var(--accent)', color: 'var(--accent)'}}><FaGithub /> GitHub</a>
          <a href="https://wa.me/573000000000" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border flex items-center gap-2" style={{borderColor: 'var(--accent)', color: 'var(--accent)'}}><FaWhatsapp /> WhatsApp</a>
          <a href="/cv-andres-ubaque.pdf" download className="px-4 py-2 rounded-md border flex items-center gap-2" style={{borderColor: 'var(--accent)', color: 'var(--accent)'}}><FaDownload /> Descargar CV</a>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;