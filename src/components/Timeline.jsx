import { motion } from 'framer-motion';

function TimelineItem({ title, subtitle, period, description }) {
  return (
    <motion.div
      className="relative pl-8"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute left-0 top-2 w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--accent-2' }} />
      <h3 className="text-xl font-semibold" style={{ color: 'var(--accent)' }}>{title}</h3>
      <div className="text-green-300 font-medium">{subtitle} • {period}</div>
      <p className="text-gray-400 mt-1">{description}</p>
    </motion.div>
  );
}

function Timeline() {
  const items = [
    {
      title: 'Transición a Front‑End',
      subtitle: 'React + JavaScript + HTML + CSS',
      period: '2024–2025',
      description: 'Proyectos con Vite, componentes reutilizables, UI accesible y optimizaciones de rendimiento.',
    },
    {
      title: 'Coordinación de Proyectos',
      subtitle: 'JEM S.A.S',
      period: '2022–2024',
      description: 'Gestión de stakeholders, planificación y entrega; documentación clara y mejora de tiempos.',
    },
    {
      title: 'Marketing y Web Management',
      subtitle: 'HILADA',
      period: '2024',
      description: 'Gestión de redes, actualizaciones de tienda online, campañas y mejora de visibilidad.',
    },
  ];

  return (
    <motion.section
      id="timeline"
      className="py-20 text-slate-900"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center neon-text">Trayectoria</h2>
        <div className="relative">
          <div className="absolute left-[6px] top-0 bottom-0 w-[2px] bg-slate-300/70" />
          <div className="space-y-8">
            {items.map((item, idx) => (
              <TimelineItem key={idx} {...item} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Timeline;
