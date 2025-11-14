import { motion } from 'framer-motion';
import { Rocket, Building2 } from 'lucide-react';

export default function Services() {

  const services = [
    {
      title: "Landing Pages Modernas",
      description:
        "Diseño centrado en conversión, carga rápida, estructura clara y componentes optimizados con React y Vite.",
      Icon: Rocket,
    },
    {
      title: "Sitios Corporativos",
      description:
        "Webs empresariales profesionales con énfasis en branding, estructura sólida, confianza y posicionamiento.",
      Icon: Building2,
    },
  ];

  return (
    <motion.section
      id="services"
      className="py-12 text-slate-900"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center neon-text">
          Servicios
        </h2>

        <div className="space-y-10 py-8">
          {services.map(({ title, description, Icon }, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-6 p-4 md:p-6 rounded-xl backdrop-blur-md
                         bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* ICONO */}
              <div
                className="p-4 rounded-xl flex items-center justify-center shadow-inner"
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  color: "var(--accent)",
                }}
              >
                <Icon size={42} strokeWidth={1.5} />
              </div>

              {/* TEXTO */}
              <div>
                <h3
                  className="text-2xl font-bold mb-1"
                  style={{ color: "var(--accent-2)" }}
                >
                  {title}
                </h3>

                <p className="text-blue-200 text-lg leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
