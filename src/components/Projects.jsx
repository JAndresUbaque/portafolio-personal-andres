import { motion } from "framer-motion";
import BusinessProjectCard from "./BusinessProjectCard";
import PracticeProjectCard from "./PracticeProjectCard";


function Projects() {
   const businessProjects = [
    {
      title: "Hilada",
      year: "Junio 2026", 
      description:
        "Mantenimiento y mejora continua de la tienda e-commerce en Shopify. Implementación de nuevas funcionalidades, optimización del diseño responsive, personalización de componentes y mejoras en la experiencia de usuario mediante HTML, CSS, JavaScript y Liquid",
      img: "/images/Hilada.JPG",
      link: "https://hilada.co/",
    },
    
  ];

  const practiceProjects = [
    {
      title: "NovaStream 🎬",
      year: "Junio 2026",  
      description:  
        "Plataforma de streaming ficticia construida como practica únicamente con HTML, CSS y JavaScript Vanilla.",
      img: "/images/NovaStream.JPG",
      demoLink: "https://novastream-practice.netlify.app//",
      codeLink: "https://github.com/JAndresUbaque/nova-stream.git",
    },
    {
      title: "To-Do React 📝​ ",
      year: "Junio 2026", 
      description:
        "Aplicación de lista de tareas desarrollada en React, con persistencia en LocalStorage, edición en vivo y animaciones suaves.",
      img: "/images/todo.png",
      demoLink: "https://tareas-app.netlify.app/",
      codeLink: "https://github.com/JAndresUbaque/ToDo-react.git",
    },
    {
      title: "Juego clásico “Adivina el número”🎲",
      year: "Junio 2026", 
      description:
        " Juego desarrollado con JavaScript puro. Practica lógica condicional, manejo del DOM y eventos dinámicos.",
      img: "/images/play.png",
      demoLink: "https://adivina-el-num-js.netlify.app/",
      codeLink: "https://github.com/JAndresUbaque/adivina-el-numero-js.git",
    },
    {
      title: "Calculadora Basica Web JavaScript 🧮",
      year: "Junio 2026", 
      description:
        "Calculadora desarrollada con HTML, CSS y JavaScript. Incluye operaciones básicas, porcentaje y manejo del DOM.",
      img: "/images/calculadora-preview.PNG",
      demoLink: "https://calculadorabasica-js.netlify.app/",
      codeLink: "https://github.com/JAndresUbaque/calculadora-js.git",
    },
  ];

 

  return (
    <section id="projects" className="py-20 text-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* TÍTULO PRINCIPAL */}
        <motion.h2
          className="text-4xl font-extrabold text-center neon-text mb-14 tracking-tight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Proyectos
        </motion.h2>

        {/* SECCIÓN EMPRESARIALES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl text-center font-semibold mb-6"
            style={{ color: "var(--accent-3)" }}
          >
            EMPRESARIALES
          </motion.h3>

          <div className="flex flex-wrap justify-center gap-6 " >
            {businessProjects.map((project, index) => (
              <BusinessProjectCard
                key={index}
                title={project.title}
                year={project.year}
                description={project.description}
                img={project.img}
                link={project.link}

              />
            ))}
          </div>
        </motion.div>

        {/* SECCIÓN PRÁCTICA */}
        <motion.div
          className="mb-20 gap-6 mt-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl text-center font-semibold mb-6"
            style={{ color: "var(--accent-3)" }}
          >
            PRÁCTICA
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {practiceProjects.map((project, index) => (
              <PracticeProjectCard
                key={index}
                title={project.title}
                year={project.year}
                description={project.description}
                img={project.img}
                demoLink={project.demoLink}
                codeLink={project.codeLink}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;
