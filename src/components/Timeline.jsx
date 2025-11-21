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
        "He desarrollado proyectos funcionales usando React y Vite, creando interfaces rápidas, accesibles y optimizadas. Me enfoco en componentes reutilizables, buenas prácticas y diseño orientado al usuario para entregar soluciones claras y profesionales."
    },
    {
      title: "Coordinación de Proyectos",
      subtitle: "JEM S.A.S",
      period: "2022–2024",
      description:
        "Lideré la gestión de proyectos y comunicación con stakeholders, asegurando claridad en entregables, tiempos y procesos. Esta experiencia fortaleció mi capacidad para documentar, planificar y trabajar bajo objetivos, habilidades que hoy aplico directamente al desarrollo web."
    },
    {
      title: "Marketing y Web Management",
      subtitle: "HILADA",
      period: "2024",
      description:
        "Gestioné la presencia digital de la marca, optimizando la comunicación visual y actualizando contenidos en la web. Esto me dio una visión más clara sobre experiencia de usuario, diseño visual y cómo conectar marcas con personas a través de interfaces efectivas."
    }
  ];

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 150px", "end 80%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" className="py-20 text-slate-100">
      <div className="max-w-6xl mx-auto px-3">
        <h2 className="text-4xl font-bold mb-14 text-center neon-text">
          Trayectoria
        </h2>

        <div ref={containerRef} className="relative">

          {/* Línea de fondo */}
          <div className="absolute left-8 top-0 bottom-0 w-[3px] bg-slate-500/30 rounded-xl" />

          {/* Línea animada */}
          <motion.div
            className="absolute left-8 top-0 w-[3px] bg-[var(--accent)] rounded-xl"
            style={{ height: lineHeight }}
          />

          {/* Items */}
          <div className="space-y-16 mt-1 ">
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
