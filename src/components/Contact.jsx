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
          {[
            { icon: FaEnvelope, label: 'Email', link: 'mailto:andres@example.com', bg: 'var(--accent-2)' },
            { icon: FaLinkedin, label: 'LinkedIn', link: 'https://linkedin.com/in/tu-perfil', border: true },
            { icon: FaGithub, label: 'GitHub', link: 'https://github.com/JAndresUbaque', border: true },
            { icon: FaWhatsapp, label: 'WhatsApp', link: 'https://wa.me/573000000000', border: true },
            { icon: FaDownload, label: 'CV', link: '/cv-andres-ubaque.pdf', border: true, download: true },
          ].map((c, idx) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={idx}
                href={c.link}
                download={c.download ? true : undefined}
                target={c.download ? '_self' : '_blank'}
                rel={c.download ? undefined : 'noreferrer'}
                className={`flex items-center justify-center sm:px-4 sm:py-2 px-4 py-3 rounded-md text-white border transition-all duration-300`}
                style={{
                  backgroundColor: c.border ? 'transparent' : c.bg,
                  borderColor: c.border ? 'var(--accent-2)' : 'transparent',
                  color: c.border ? 'var(--accent)' : '#fff',
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                aria-label={c.label}
              >
                <Icon className="text-xl sm:text-base" />
                <span className="hidden sm:inline ml-2">{c.label}</span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
