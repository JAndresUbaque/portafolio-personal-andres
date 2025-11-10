import { motion } from 'framer-motion';

function ProjectCard({ title, description, demoLink, codeLink }) {
  return (
    <motion.div 
      className="glass p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-2xl font-bold mb-2" style={{color: 'var(--accent)'}}>{title}</h3>
      <p className="text-base md:text-lg mb-5 text-slate-700">{description}</p>
      <div className="flex gap-3">
        <a href={demoLink} className="px-4 py-2 rounded-md text-white" style={{backgroundColor: 'var(--accent)'}}>Ver Demo</a>
        <a href={codeLink} className="px-4 py-2 rounded-md border" style={{borderColor: 'var(--accent)', color: 'var(--accent)'}}>Ver Código</a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;