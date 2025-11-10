import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.section 
      id="hero"
      className="min-h-[80vh] pt-24 flex items-center justify-center text-slate-900"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center max-w-3xl px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight neon-text">Jorge Andrés Ubaque Garzón</h1>
        <p className="text-lg md:text-xl text-slate-600">Administrador de Empresas → Desarrollador Front‑End</p>
      </div>
    </motion.section>  
  );
}

export default Hero;