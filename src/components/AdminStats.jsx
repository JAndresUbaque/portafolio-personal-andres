import { motion } from 'framer-motion';
import { FaGaugeHigh, FaUserGroup, FaRocket, FaClock } from 'react-icons/fa6';

function StatCard({ icon: Icon, label, value, helper }) {
  return (
    <motion.div
      className="glass p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(90,12,35,0.08)', color: 'var(--accent)' }}>
          <Icon className="text-xl" />
        </div>
        <div>
          <div className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>{value}</div>
          <div className="text-slate-700">{label}</div>
          {helper && <div className="text-slate-500 text-sm mt-1">{helper}</div>}
        </div>
      </div>
    </motion.div>
  );
}

function AdminStats() {
  const stats = [
    { icon: FaGaugeHigh, label: 'Páginas Lighthouse > 90', value: '95+', helper: 'React • HTML • CSS • Accesibilidad' },
    { icon: FaRocket, label: 'Proyectos Front‑End', value: '8', helper: 'React, JS, Vite' },
    { icon: FaUserGroup, label: 'Stakeholders gestionados', value: '10+', helper: 'Coordinación y comunicación efectiva' },
    { icon: FaClock, label: 'Time‑to‑Delivery', value: '-20%', helper: 'Mejora por automatización y enfoque ágil' },
  ];

  return (
    <motion.section
      id="admin-stats"
      className="py-20 text-slate-900"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-center neon-text">Impacto y Métricas</h2>
        <p className="text-center text-slate-700 max-w-3xl mx-auto mb-10">
          Combinando habilidades de React, JavaScript, HTML y CSS con experiencia administrativa,
          enfoco los entregables en rendimiento, claridad y valor para el negocio.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stats.map((s, i) => (
            <StatCard key={i} icon={s.icon} value={s.value} label={s.label} helper={s.helper} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default AdminStats;
