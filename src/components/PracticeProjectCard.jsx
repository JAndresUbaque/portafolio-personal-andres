import { motion } from "framer-motion";
import { useState } from "react";

function PracticeProjectCard({ year, title, img, description, demoLink, codeLink }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      onClick={() => setIsActive((prev) => !prev)}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
        glass rounded-xl overflow-hidden 
        border border-white/10 shadow-lg
        hover:shadow-2xl hover:border-[var(--accent)]/40
        transition-all duration-300
        group relative cursor-pointer
        aspect-square w-full max-w-[320px] mx-auto
      "
    >
      <img
        src={img}
        alt={title}
        className="h-full w-full object-fill group-hover:scale-105 transition-all duration-500"
      />

      <div
        className={`
          absolute inset-0 bg-black/65 transition-all duration-300
          flex flex-col items-center justify-center text-center px-4
          ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
        `}
      >
        <p className="text-gray-100 text-md leading-snug mb-3">{description}</p>
        <div className="flex gap-2">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="px-4 py-2.5 rounded-lg text-white text-sm font-medium bg-[var(--accent-2)] hover:bg-[var(--accent-2)]/80 transition"
          >
            Demo
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="px-4 py-2.5 rounded-lg text-sm font-medium border transition"
            style={{ borderColor: "var(--accent-2)", color: "var(--accent-2)" }}
          >
            Código
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 w-full bg-black/85 py-1 text-center">
        <h3 className="text-sm font-semibold" style={{ color: "var(--accent)" }}>
          {title}
        </h3>
        <p className="text-xs text-gray-300">
             {year}
        </p>
      </div>
    </motion.div>
  );
}

export default PracticeProjectCard;