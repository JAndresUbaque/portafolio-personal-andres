
import { motion } from 'framer-motion';
import CertCard from './CertCard';

function Certifications() {
  const certs = [
    { title: 'Curso de Fundamentos de JavaScript', institution: 'Platzi', year: '2025' },
    { title: 'Diplomado en Gerencia de Proyectos', institution: 'Politécnico de Colombia (Virtual)', year: '2022' },
    { title: 'Git y GitHub Profesional', institution: 'Platzi', year: '2025' },
  ];

  return (
    <motion.section 
      id="certifications"
      className="py-15 text-slate-900"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-9 text-center neon-text">Certificaciones y Cursos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <CertCard key={index} title={cert.title} institution={cert.institution} year={cert.year} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Certifications;
