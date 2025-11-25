import { motion } from "framer-motion";
import "./flipCard.css"; // Importante: estilos del efecto flip

function BusinessProjectCard({ title, img, description, link }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
        relative mx-auto rounded-xl overflow-hidden
        border border-white/10 shadow-lg glass
        hover:shadow-2xl hover:border-[var(--accent)]/40
        transition-all duration-300
        flip-card
      "
      style={{ width: "320px", height: "320px" }}
    >
      <div className="flip-card-inner">

        {/* Frente */}
        <div className="flip-card-front">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-fill"
          />

          <div className="absolute bottom-0 w-full bg-black/40 py-2 text-center">
            <h3 className="text-sm font-semibold" style={{ color: "var(--accent)" }}>
              {title}
            </h3>
          </div>
        </div>

        {/* Parte trasera */}
        <div className="flip-card-back">
          <div className="flex flex-col items-center justify-center h-full px-5 text-center">

            <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--accent)" }}>
              {title}
            </h3>

            <p className="text-gray-200 text-sm leading-snug mb-4">
              {description}
            </p>

            <a
              href={link}
              target="_blank"
              className="
                px-4 py-2 rounded-lg text-white text-sm font-medium
                bg-[var(--accent-2)] hover:bg-[var(--accent-2)]/80 
                transition
              "
            >
              Ver Proyecto
            </a>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export default BusinessProjectCard;
