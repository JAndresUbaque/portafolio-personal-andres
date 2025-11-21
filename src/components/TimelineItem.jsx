import { motion } from "framer-motion";

function TimelineItem({ title, subtitle, period, description, index }) {
  return (
    <motion.div
      className="relative pl-20"
      initial={{ opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
    >
      {/* Punto perfectamente centrado en la línea */}
      <div
        className="absolute left-8 top-2 w-4 h-4 rounded-full border-2"
        style={{
          backgroundColor: "var(--accent-2)",
          borderColor: "var(--accent)",
          boxShadow: "0 0 8px var(--accent)",
          transform: "translateX(-50%)",
        }}
      />

      <div className="flex flex-col space-x-10">
      <h3 className="text-2xl font-semibold" style={{ color: "var(--accent)" }}>
        {title}
      </h3>

      <p className="text-blue-200 font-medium mt-1 text-md">
        {subtitle} • {period}
      </p>

      <p className=" text-justify md:text-center text-gray-200 mt-2 text-[15px] mr-6 ">
        {description}
      </p>
      </div>
    </motion.div>
  );
}

export default TimelineItem;
