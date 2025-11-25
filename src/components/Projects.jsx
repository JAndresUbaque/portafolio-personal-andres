import { motion } from "framer-motion";
import PracticeProjectCard from "./PracticeProjectCard";
import BusinessProjectCard from "./BusinessProjectCard";

function Projects() {
  const practiceProjects = [
    {
      title: "Netflix Clone 🎬",
      description:
        "Clon de la página principal de Netflix como práctica de HTML y CSS.",
      img: "/portafolio-personal-andres/images/netflix.png",
      demoLink: "https://jandresubaque.github.io/clon-netflix/",
      codeLink: "https://github.com/JAndresUbaque/clon-netflix.git",
    },
    {
      title: "To-Do React 📝​ ",
      description:
        "Aplicación de lista de tareas desarrollada en React, con persistencia en LocalStorage, edición en vivo y animaciones suaves.",
      img: "/portafolio-personal-andres/images/todo.png",
      demoLink: "https://jandresubaque.github.io/ToDo-react/",
      codeLink: "https://github.com/JAndresUbaque/ToDo-react.git",
    },
    {
      title: "Juego clásico “Adivina el número”🎲",
      description:
        " Juego desarrollado con JavaScript puro. Practica lógica condicional, manejo del DOM y eventos dinámicos.",
      img: "/portafolio-personal-andres/images/play.png",
      demoLink: "https://jandresubaque.github.io/adivina-el-numero-js/",
      codeLink: "https://github.com/JAndresUbaque/adivina-el-numero-js.git",
    },
  ];

  const businessProjects = [
    {
      title: "GranAndesa 🌾",
      description:
        "Sitio web institucional de Granandesa, empresa dedicada a soluciones nutricionales para la porcicultura, ganadería y avicultura. Desarrollado con HTML, CSS y JavaScript, con diseño moderno y adaptable para dispositivos móviles.",
      img: "/portafolio-personal-andres/images/granandesa.png",
      link: "https://jandresubaque.github.io/granandesa-web/",
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

        {/* SECCIÓN PRÁCTICA */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3
            className="text-2xl font-semibold mb-6"
            style={{ color: "var(--accent-3)" }}
          >
            PRÁCTICA
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {practiceProjects.map((project, index) => (
              <PracticeProjectCard
                key={index}
                title={project.title}
                description={project.description}
                img={project.img}
                demoLink={project.demoLink}
                codeLink={project.codeLink}
              />
            ))}
          </div>
        </motion.div>

        {/* SECCIÓN EMPRESARIALES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3
            className="text-2xl font-semibold mb-6"
            style={{ color: "var(--accent-3)" }}
          >
            EMPRESARIALES
          </h3>

          <div className="flex flex-wrap justify-center gap-6 " >
            {businessProjects.map((project, index) => (
              <BusinessProjectCard
                key={index}
                title={project.title}
                description={project.description}
                img={project.img}
                link={project.link}

              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
