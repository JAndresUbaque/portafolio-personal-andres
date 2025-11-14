import { motion } from "framer-motion";
import CertCard from "./CertCard";

function Certifications() {
  const certs = [
    { 
      title: "Curso de Fundamentos de JavaScript", 
      institution: "Platzi", 
      year: "2025" 
    },
    { 
      title: "Diplomado en Gerencia de Proyectos", 
      institution: "Politécnico de Colombia (Virtual)", 
      year: "2022" 
    },
    { 
      title: "Git y GitHub Profesional", 
      institution: "Platzi", 
      year: "2025" 
    },
  ];

  return (
    <motion.section
      id="certifications"
      className="py-20 text-slate-900"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Título */}
        <h2 className="text-4xl font-bold mb-6 text-center neon-text">
          Certificaciones y Cursos
        </h2>

        {/* Subtítulo descriptivo */}
        <p className="text-center text-blue-200 max-w-2xl mx-auto mb-12">
          Formación continua que refuerza mis habilidades técnicas y mi perfil profesional,
          con enfoque en desarrollo web, buenas prácticas y gestión de proyectos.
        </p>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certs.map((cert, index) => (
            <CertCard
              key={index}
              title={cert.title}
              institution={cert.institution}
              year={cert.year}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Certifications;
