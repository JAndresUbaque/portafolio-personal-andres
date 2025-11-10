import { motion } from 'framer-motion';

function ServiceCard({ title, description }) {
  return (
    <motion.div 
      className="glass p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-2xl font-bold mb-2" style={{color:'var(--accent)'}}>{title}</h3>
      <p className="text-lg text-slate-700">{description}</p>
    </motion.div>
  );
}

export default ServiceCard;