import { motion } from 'framer-motion';

function ProjectCard({ title, description, demoLink, codeLink }) {
  return (
    <motion.div 
      className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-green-500/50 transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-2xl font-bold mb-2 text-green-400">{title}</h3>
      <p className="text-lg mb-4">{description}</p>
      <div className="flex space-x-4">
        <a href={demoLink} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Ver Demo</a>
        <a href={codeLink} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">Ver Código</a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;