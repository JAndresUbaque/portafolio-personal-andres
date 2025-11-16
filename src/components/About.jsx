import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      className="py-20 text-slate-100"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Título */}
        <motion.h2
          className="text-4xl font-extrabold text-center neon-text mb-12 tracking-tigh"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Sobre mí
        </motion.h2>

        {/* Contenedor */}
        <motion.div
          className="glass rounded-2xl p-8 md:p-10 space-y-8"
          initial={{ scale: 0.97, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >

          {/* Descripción */}
          <motion.p
            className="text-lg leading-relaxed text-gray-300 text-justify"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Soy <span className="font-semibold text-white te">Jorge Andrés Ubaque Garzón</span>, 
            administrador de empresas con experiencia en gestión de proyectos, construcción 
            y emprendimiento. Actualmente estoy en transición hacia el desarrollo 
            <span className="font-semibold text-white"> Front-End</span>, 
            trabajando con tecnologías como <span className="text-white">HTML, CSS, JavaScript, React y Git</span>.
            Me caracterizo por un enfoque en resultados, pensamiento innovador y la capacidad 
            de liderar procesos desde la planificación hasta la ejecución.
          </motion.p>

          {/* Experiencia profesional */}
          <motion.div
            className="space-y-5 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            <h3
              className="text-2xl font-semibold"
              style={{ color: "var(--accent)" }}
            >
              Experiencia Laboral Destacada
            </h3>

            <div className="space-y-4 text-justify">

              <div className="border-l-4 border-[var(--accent)] pl-4">
                <p className="text-lg text-gray-300">
                  <span className="font-semibold text-white">HILADA (Mar 2024 – Ago 2024)</span>  
                  — Gestión de redes sociales, actualización de tienda virtual y creación de campañas 
                  en Instagram y Facebook, logrando aumentar la visibilidad de productos.
                </p>
              </div>

              <div className="border-l-4 border-[var(--accent)] pl-4">
                <p className="text-lg text-gray-300">
                  <span className="font-semibold text-white text-justify    ">JEM S.A.S (Ene 2022 – Jun 2024)</span>  
                  — Coordinación de proyectos arquitectónicos, elaboración de planos y gestión 
                  de trámites. Obtuve aprobaciones de licencias sin observaciones.
                </p>
              </div>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;
