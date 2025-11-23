import { motion } from "framer-motion";
import PracticeProjectCard from "./PracticeProjectCard";
import BusinessProjectCard from "./BusinessProjectCard";

function Projects() {
  const practiceProjects = [
    {
      title: "Netflix Clone 🎬",
      description:
        "Clon de Netflix construido con React, rutas dinámicas y UI modular.",
      img: "/images/netflix.png",
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "To-Do App",
      description:
        "Aplicación de tareas con filtros, animaciones y almacenamiento local.",
      img: "/images/todo.png",
      demoLink: "#",
      codeLink: "#",
    },
  ];

  const businessProjects = [
    {
      title: "GranAndesa 🌾",
      img: "/images/granandesa.png",
      link: "#",
    },
    {
      title: "Landing Comercial",
      img: "/images/landing.png",
      link: "#",
    },
   {
      title: "Landing Comercial",
      img: "/images/landing.png",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 text-slate-100">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" >
            {businessProjects.map((project, index) => (
              <BusinessProjectCard
                key={index}
                title={project.title}
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
