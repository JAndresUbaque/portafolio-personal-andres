import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp, FaDownload } from 'react-icons/fa';

function Contact() {
  return (
    <motion.section 
      id="contact"
      className="py-20 text-slate-800"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 neon-text">Contacto</h2>
        <p className="text-gray-200 mb-8">
          ¿Hablamos? Estoy abierto a oportunidades y colaboraciones.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a 
            href="mailto:andres@example.com" 
            className="flex items-center justify-center w-12 h-12 sm:w-auto sm:px-4 sm:py-2 rounded-md text-white" 
            style={{ backgroundColor: 'var(--accent-2)' }}
            aria-label="Email"
          >
            <FaEnvelope className="text-xl sm:text-base" />
            <span className="hidden sm:inline ml-2">Email</span>
          </a>
          <a 
            href="https://linkedin.com/in/tu-perfil" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center justify-center w-12 h-12 sm:w-auto sm:px-4 sm:py-2 rounded-md border" 
            style={{ borderColor: 'var(--accent-2)', color: 'var(--accent)' }}
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-xl sm:text-base" />
            <span className="hidden sm:inline ml-2">LinkedIn</span>
          </a>
          <a 
            href="https://github.com/JAndresUbaque" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center justify-center w-12 h-12 sm:w-auto sm:px-4 sm:py-2 rounded-md border" 
            style={{ borderColor: 'var(--accent-2)', color: 'var(--accent)' }}
            aria-label="GitHub"
          >
            <FaGithub className="text-xl sm:text-base" />
            <span className="hidden sm:inline ml-2">GitHub</span>
          </a>
          <a 
            href="https://wa.me/573000000000" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center justify-center w-12 h-12 sm:w-auto sm:px-4 sm:py-2 rounded-md border" 
            style={{ borderColor: 'var(--accent-2)', color: 'var(--accent)' }}
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="text-xl sm:text-base" />
            <span className="hidden sm:inline ml-2">WhatsApp</span>
          </a>
          <a 
            href="/cv-andres-ubaque.pdf" 
            download 
            className="flex items-center justify-center w-12 h-12 sm:w-auto sm:px-4 sm:py-2 rounded-md border" 
            style={{ borderColor: 'var(--accent-2)', color: 'var(--accent)' }}
            aria-label="Descargar CV"
          >
            <FaDownload className="text-xl sm:text-base" />
            <span className="hidden sm:inline ml-2">Descargar CV</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;