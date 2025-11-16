import { motion } from "framer-motion";
import { FaMedal } from "react-icons/fa6";

function CertCard({ title, institution, year }) {
  return (
    
    <motion.div
  className="glass p-7 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-start gap-4 border border-transparent hover:border-[var(--accent-2)]"
  style={{
    background: 'linear-gradient(145deg, rgba(30, 34, 42, 0.8) 0%, rgba(142, 157, 185, 0.5) 100%)',
  }}
  whileHover={{ 
    scale: 1.03,
    background: 'linear-gradient(145deg, rgba(30, 34, 42, 0.9) 0%, rgba(36, 50, 75, 0.6) 100%)' 
  }}
>
      {/* Badge Lateral */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
        style={{
          backgroundColor: "rgba(255,204,0,0.15)",
          color: "var(--accent)"
        }}
      >
        <FaMedal className="text-2xl" />
      </div>

      {/* Contenido */}
      <div className="flex-1">
        <h3
          className="text-lg font-bold mb-1"
          style={{ color: "var(--accent-2)" }}
        >
          {title}
        </h3>

        <p className="text-blue-100 text-sm leading-tight">
          {institution}
        </p>

        <p className="text-green-600 text-sm font-semibold mt-1">
          {year}
        </p>
      </div>
    </motion.div>
  );
}

export default CertCard;
