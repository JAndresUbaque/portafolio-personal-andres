import { motion } from 'framer-motion';

function TimelineItem({ title, subtitle, period, description, index }) {
  return (
    <motion.div
      className="relative pl-12"
      initial={{ opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
    >
      {/* Punto con brillo */}
      <div
        className="absolute left-0 top-2 w-4 h-4 rounded-full border-2"
        style={{
          backgroundColor: 'var(--accent-2)',
          borderColor: 'var(--accent)',
          boxShadow: '0 0 8px var(--accent)'
        }}
      />

      <h3 className="text-2xl font-semibold" style={{ color: 'var(--accent)' }}>
        {title}
      </h3>

      <p className="text-blue-200 font-medium mt-1 text-md">
        {subtitle} • {period}
      </p>

      <p className="text-gray-300 mt-2 text-[15px] leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

export default TimelineItem;
