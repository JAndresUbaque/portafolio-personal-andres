
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";

function SkillRow({ label, level }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-slate-900">{label}</span>
        <span className="text-sm text-slate-700">{level}%</span>
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

function Skills () {
 return (
    <motion.section
    id="skills"
    className="py-20 text-slate-900"
    initial={{opacity: 0, y:50}}
    animate={{opacity: 1, y:0}}
    transition={{duration: 0.8}}>
    <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center neon-text">Habilidades</h2>

        {/* Tech chips */}
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          <li className="flex items-center"><FaHtml5 className="text-3xl mr-2 text-orange-500" /> HTML</li>
          <li className="flex items-center"><FaCss3Alt className="text-3xl mr-2 text-blue-500" /> CSS</li>
          <li className="flex items-center"><FaJs className="text-3xl mr-2 text-yellow-500" /> JavaScript</li>
          <li className="flex items-center"><FaReact className="text-3xl mr-2 text-blue-500" /> React</li>
          <li className="flex items-center"><FaGithub className="text-3xl mr-2 text-slate-900" /> GitHub</li>
        </ul>

        {/* Skill Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--accent)' }}>Frontend Core</h3>
            <SkillRow label="React" level={85} />
            <SkillRow label="JavaScript" level={88} />
            <SkillRow label="HTML" level={92} />
            <SkillRow label="CSS" level={86} />
          </div>
          <div className="glass p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--accent)' }}>Herramientas</h3>
            <SkillRow label="Git/GitHub" level={80} />
            <SkillRow label="Vite" level={78} />
            <SkillRow label="Accesibilidad (a11y)" level={75} />
            <SkillRow label="Performance" level={72} />
          </div>
        </div>
      </div>

    </motion.section>

 );
}

export default Skills;
