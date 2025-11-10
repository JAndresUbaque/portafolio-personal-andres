import { motion } from 'framer-motion';

function ServiceCard({ title, description }) {
  return (
    <motion.div 
      className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-green-500/50 transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-2xl font-bold mb-2 text-green-400">{title}</h3>
      <p className="text-lg">{description}</p>
    </motion.div>
  );
}

export default ServiceCard;