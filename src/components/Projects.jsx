import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

function Projects() {
  const practiceProjects = [
    {
      title: 'Netflix Clone 🎬',
      description: 'Clon de Netflix con React y UI dinámica.',
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'To‑Do App',
      description: 'Gestor de tareas con filtros y persistencia.',
      demoLink: '#',
      codeLink: '#',
    },
  ];

  const businessProjects = [
    {
      title: 'GranAndesa 🌾',
      description: 'Sitio empresarial con landing pages y componentes reutilizables.',
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'Landing Comercial',
      description: 'Landing corporativa enfocada en conversión.',
      demoLink: '#',
      codeLink: '#',
    },
  ];

  return (
    <motion.section 
      id="projects"
      className="py-20 bg-transparent text-slate-900"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-center neon-text">
          Proyectos
        </h2>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4 text-[color:var(--accent-2)]">Práctica</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practiceProjects.map((project, index) => (
              <ProjectCard key={index} title={project.title} description={project.description} demoLink={project.demoLink} codeLink={project.codeLink} />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-2xl font-semibold mb-4 text-[color:var(--accent-2)]">Empresariales</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessProjects.map((project, index) => (
              <ProjectCard key={index} title={project.title} description={project.description} demoLink={project.demoLink} codeLink={project.codeLink} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;