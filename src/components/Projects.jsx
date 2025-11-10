import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

function Projects() {
  const projects = [
    { title: 'Netflix Clone 🎬', description: 'Clon de Netflix con React, mostrando habilidades en UI dinámica.', demoLink: 'https://demo-link.com', codeLink: 'https://github.com/tu-repo/netflix' },
    { title: 'GranAndesa 🌾', description: 'Web empresarial para GranAndesa, con landing pages y funcionalidades.', demoLink: 'https://demo-link.com', codeLink: 'https://github.com/tu-repo/granandesa' },
    // Agrega más: To-Do List, Adivina el número, etc.
  ];

  return (
    <motion.section 
      id="projects"
      className="py-16 bg-gray-900 text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-green-400">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} title={project.title} description={project.description} demoLink={project.demoLink} codeLink={project.codeLink} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;