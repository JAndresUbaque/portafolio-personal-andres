import { motion } from "framer-motion";

function PracticeProjectCard({ title, img, description, demoLink, codeLink }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
        glass rounded-xl overflow-hidden 
        border border-white/10 shadow-lg
        hover:shadow-2xl hover:border-[var(--accent)]/40
        transition-all duration-300
        group relative
        aspect-square w-full max-w-[320px] mx-auto
      "
    >
      <img
        src={img}
        alt={title}
        className="
          w-full h-full object-cover
          group-hover:scale-105 transition-all duration-500
        "
      />

      <div
        className="
          absolute inset-0 bg-black/50 
          opacity-0 group-hover:opacity-100
          transition-all duration-300
          flex flex-col items-center justify-center text-center px-4
        "
      >
        <p className="text-gray-200 text-xs leading-snug mb-3">
          {description}
        </p>

        <div className="flex gap-2">
          <a
            href={demoLink}
            target="_blank"
            className="
              px-3 py-1.5 rounded-lg text-white text-xs font-medium
              bg-[var(--accent-2)] hover:bg-[var(--accent-2)]/80 transition
            "
          >
            Demo
          </a>

          <a
            href={codeLink}
            target="_blank"
            className="
              px-3 py-1.5 rounded-lg text-xs font-medium
              border transition
            "
            style={{
              borderColor: "var(--accent-2)",
              color: "var(--accent-2)",
            }}
          >
            Código
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 w-full bg-black/40 py-1 text-center">
        <h3 className="text-sm font-semibold" style={{ color: "var(--accent)" }}>
          {title}
        </h3>
      </div>
    </motion.div>
  );
}

export default PracticeProjectCard;
