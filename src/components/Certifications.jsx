import { motion } from 'framer-motion';
import CertCard from './CertCard';

function Certifications() {
  const certs = [
    { title: 'Curso de Fundamentos de JavaScript', institution: 'Platzi', year: '2025' },
    { title: 'Diplomado en Gerencia de Proyectos', institution: 'Politécnico de Colombia (Virtual)', year: '2022' },
    // Agrega más de tu CV: Curso Profesional de Git y GitHub, Diplomado en Asociatividad, etc.
  ];

  return (
    <motion.section 
      id="certifications"
      className="py-16 bg-black text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-green-400">Certificaciones y Cursos</h2>
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