import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

function Services() {
  const services = [
    { title: 'Desarrollo Web', description: 'Creación de sitios web responsivos y modernos usando HTML, CSS, JS y React, adaptados a tus necesidades empresariales.' },
    { title: 'Páginas Empresariales', description: 'Diseño de webs completas para empresas, con enfoque en marketing digital y visibilidad, basado en mi experiencia en emprendimiento.' },
    // Agrega más: Landing Pages, etc.
  ];

  return (
    <motion.section 
      id="services"
      className="py-16 bg-gray-900 text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-green-400">Servicios que Ofrezco</h2>
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