import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      id="hero"
      className="min-h-[80vh] pt-23 flex items-center justify-center px-6"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="relative w-full max-w-xl px-8 md:px-6 py-6 md:py-8 rounded-2xl shadow-lg backdrop-blur-md border border-white/10 bg-white/5 overflow-hidden">

        {/* Glow solo dentro del contenedor */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r 
                        from-blue-500/20 via-cyan-500/20 to-purple-500/20 
                        animate-gradient-move -z-10"></div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-200 drop-shadow-md">
          Jorge Andrés Ubaque Garzón
        </h1>

        {/* Línea de luz animada */}
        <motion.div
          className="mx-auto mt-3 h-[3px] w-24 md:w-32 rounded-full bg-gradient-to-r 
                     from-blue-400 via-cyan-400 to-purple-400"
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ duration: 1, delay: 0.4 }}
        ></motion.div>

        <p className="mt-5 text-lg md:text-x1 text-blue-200/90 text-center">
          Administrador de Empresas → Desarrollador Front-End
        </p>
      </div>
    </motion.section>
  );
}

export default Hero;
