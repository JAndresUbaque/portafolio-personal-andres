import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TimelineItem from "./TimelineItem";

function Timeline() {
  const items = [
    {
      title: "Transición a Front-End",
      subtitle: "React + JavaScript + HTML + CSS",
      period: "2024–2025",
      description:
        "Proyectos con Vite, UI accesible, componentes reutilizables y optimizaciones de rendimiento."
    },
    {
      title: "Coordinación de Proyectos",
      subtitle: "JEM S.A.S",
      period: "2022–2024",
      description:
        "Gestión de stakeholders, documentación clara, planificación y mejora de tiempos."
    },
    {
      title: "Marketing y Web Management",
      subtitle: "HILADA",
      period: "2024",
      description:
        "Gestión de redes, actualizaciones web, campañas y mejora de visibilidad."
    }
  ];

  const containerRef = useRef(null);

  // Progreso del scroll sobre el timeline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 150px", "end 80%"]
  });

  // Transformación para "llenar" la línea
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" className="py-20 text-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-14 text-center neon-text">
          Trayectoria
        </h2>

        <div ref={containerRef} className="relative">

          {/* Línea de fondo (gris) */}
          <div className="absolute left-[14px] top-0 bottom-0 w-[3px] bg-slate-500/30 rounded-xl" />

          {/* Línea animada (relleno progresivo) */}
          <motion.div
            className="absolute left-[14px] top-0 w-[3px] bg-[var(--accent)] rounded-xl"
            style={{ height: lineHeight }}
          />

          {/* Items */}
          <div className="space-y-14 mt-2">
            {items.map((item, index) => (
              <TimelineItem key={index} index={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;

