import { motion } from 'framer-motion';

function CertCard({ title, institution, year }) {
  return (
    <motion.div 
      className="glass p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-xl font-bold mb-1" style={{color:'var(--accent-2)'}}>{title}</h3>
      <p className="text-md text-gray-300">{institution} ({year})</p>
    </motion.div>
  );
}

export default CertCard;
