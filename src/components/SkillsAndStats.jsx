import { motion } from "framer-motion";
import { FaGaugeHigh, FaRocket, FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa6";

function StatCard({ icon: Icon, label, value, helper }) {
  return (
    <motion.div
      className="glass p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center gap-15">
        <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(90,12,35,0.08)', color: 'var(--accent)' }}>
          <Icon className="text-x1" />
        </div>
        <div>
          <div className="text-2xl font-bold" style={{ color: 'var(--accent-2)' }}>{value}</div>
          <div className="text-blue-200">{label}</div>
          {helper && <div className="text-green-300 text-sm mt-1">{helper}</div>}
        </div>
      </div>
    </motion.div>
  );
}

function SkillRow({ label, level }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-blue-200">{label}</span>
        <span className="text-sm text-green-300">{level}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-slate-300/60 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: 'var(--accent)' }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export default function SkillsAndStats() {
  const stats = [
    { icon: FaGaugeHigh, label: 'Páginas Lighthouse > 90', value: '95+', helper: 'React • HTML • CSS • Accesibilidad' },
    { icon: FaRocket, label: 'Proyectos Front-End', value: '8', helper: 'React, JS, Vite' },
  ];

  return (
    <motion.section
      id="skills-stats"
      className="py-20 text-slate-900"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* --- Bloque de métricas --- */}
        <h2 className="text-4xl font-bold mb-6 text-center neon-text">Impacto y Habilidades</h2>
        <p className="text-center text-slate-500 max-w-3xl mx-auto mb-10">
          Combinando React, JavaScript, HTML y CSS con visión analítica y enfoque en rendimiento, 
          cada entrega busca balance entre experiencia de usuario, claridad visual y eficiencia técnica.
        </p>


        {/* --- Bloque de habilidades --- */}
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10 text-gray-300">
          <li className="flex items-center"><FaHtml5 className="text-3xl mr-2 text-orange-500" /> HTML</li>
          <li className="flex items-center"><FaCss3Alt className="text-3xl mr-2 text-blue-500" /> CSS</li>
          <li className="flex items-center"><FaJs className="text-3xl mr-2 text-yellow-500" /> JavaScript</li>
          <li className="flex items-center"><FaReact className="text-3xl mr-2 text-blue-500" /> React</li>
          <li className="flex items-center"><FaGithub className="text-3xl mr-2 text-white" /> GitHub</li>
        </ul>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {stats.map((s, i) => (
            <StatCard key={i} icon={s.icon} value={s.value} label={s.label} helper={s.helper} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--accent-2)' }}>Frontend Core</h3>
            <SkillRow label="React" level={65} />
            <SkillRow label="JavaScript" level={68} />
            <SkillRow label="HTML" level={72} />
            <SkillRow label="CSS" level={76} />
           </div>
          <div className="glass p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--accent-2)' }}>Herramientas</h3>
            <SkillRow label="Git/GitHub" level={70} />
            <SkillRow label="Vite" level={78} />
            <SkillRow label="Accesibilidad (a11y)" level={75} />
            <SkillRow label="Performance" level={62} />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
