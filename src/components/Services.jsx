import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

function Services() {
  const services = [
    { title: 'Desarrollo Web', description: 'Creación de sitios web responsivos y modernos usando HTML, CSS, JS y React, adaptados a tus necesidades empresariales.' },
    { title: 'Páginas Empresariales', description: 'Diseño de webs completas para empresas, con enfoque en marketing digital y visibilidad, basado en mi experiencia en emprendimiento.' },
  ];

  return (
    <motion.section 
      id="services"
      className="py-20 text-slate-900"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-center neon-text">Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Services;