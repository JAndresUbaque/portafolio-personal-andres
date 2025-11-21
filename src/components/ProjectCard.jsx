import { motion } from "framer-motion";

function ProjectCard({ title, description, demoLink, codeLink }) {
  return (
    <motion.div
      className="
        glass p-7 rounded-2xl shadow-lg 
        hover:shadow-xl transition-all duration-300
        border border-white/10
      "
      whileHover={{ y: -5 }}
    >
      {/* TÍTULO */}
      <h3
        className="text-2xl font-bold mb-2 tracking-tight"
        style={{ color: "var(--accent)" }}
      >
        {title}
      </h3>

      {/* DESCRIPCIÓN */}
      <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6">
        {description}
      </p>

      {/* BOTONES */}
      <div className="flex justify-center gap-4">
        {/* Botón Demo */}
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-5 py-2.5 rounded-lg text-white font-medium
            hover:opacity-90 transition-all duration-200
          "
          style={{ backgroundColor: "var(--accent-2)" }}
        >
          Ver Demo
        </a>

        {/* Botón Código */}
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-5 py-2.5 rounded-lg font-medium
            border hover:bg-white/5 transition-all duration-200
          "
          style={{
            borderColor: "var(--accent-2)",
            color: "var(--accent-2)",
          }}
        >
          Ver Código
        </a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
