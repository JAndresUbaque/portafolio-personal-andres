import { motion } from "framer-motion";
import { Monitor, Smartphone, ShoppingBag, Brush } from "lucide-react";

const services = [
  {
    title: "Sitios Web Modernos",
    desc: "Desarrollos rápidos, seguros y con un diseño visual que transmite profesionalismo. Ideales para negocios que buscan tener presencia digital sólida.",
    icon: Monitor,
  },
  {
    title: "Landing Pages que Convierten",
    desc: "Páginas diseñadas para captar clientes. Mensajes claros, estructura optimizada y enfoque en resultados.",
    icon: Smartphone,
  },
  {
    title: "Diseño Visual Profesional",
    desc: "Mejoro la presentación de tu marca con interfaces limpias, estética cuidada y una experiencia fácil de navegar.",
    icon: Brush,
  },
  {
    title: "Tiendas Virtuales (Próximamente)",
    desc: "E-commerce con catálogo, pagos y carrito de compras. Una solución completa para vender online.",
    icon: ShoppingBag,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 md:px-10">
      
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center neon-text"
      >
        Servicios
      </motion.h2>

      {/* Subtítulo */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-gray-300 max-w-2xl mx-auto mt-3"
      >
        Soluciones claras y profesionales para que tu negocio tenga presencia real en internet.
      </motion.p>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">

        {services.map(({ title, desc, icon: Icon }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative group p-6 rounded-2xl border border-white/10 bg-white/5
                       backdrop-blur-md hover:bg-white/10 transition-all duration-300"
          >
            {/* Glow neon suave */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500
                            bg-[var(--accent)]/10 blur-2xl -z-10"></div>

            {/* Icono */}
            <div className="flex items-center justify-center mb-4">
              <Icon
                size={42}
                className="text-[var(--accent)] drop-shadow-[0_0_6px_var(--accent)]"
              />
            </div>

            {/* Título */}
            <h3 className="text-xl font-semibold text-[var(--accent-2)] text-center">
              {title}
            </h3>

            {/* Descripción */}
            <p className="text-gray-300 text-center mt-3 leading-relaxed">
              {desc}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
