import { motion } from 'framer-motion';

function CertCard({ title, institution, year }) {
  return (
    <motion.div 
      className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-green-500/50 transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-xl font-bold mb-1 text-green-400">{title}</h3>
      <p className="text-md">{institution} ({year})</p>
    </motion.div>
  );
}

export default CertCard;