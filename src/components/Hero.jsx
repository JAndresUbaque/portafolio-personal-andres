import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.section 
      id="hero"
      className="h-screen bg-linear-to-r from-gray-800 to-black flex items-center justify-center text-white"  // tailwind-intellisense-disable (opcional si warning persiste)
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 glow">Jorge Andrés Ubaque Garzón</h1>
        <p className="text-xl">Administrador de Empresas → Desarrollador Front-End</p>
      </div>
    </motion.section>  
  );
}

export default Hero;