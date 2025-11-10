
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";

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
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <li className="flex items-center"><FaHtml5 className="text-3xl mr-2 text-orange-500" /> HTML</li>
          <li className="flex items-center"><FaCss3Alt className="text-3xl mr-2 text-blue-500" /> CSS</li>
          <li className="flex items-center"><FaJs className="text-3xl mr-2 text-yellow-500" /> JavaScript</li>
          <li className="flex items-center"><FaReact className="text-3xl mr-2 text-blue-500" /> React</li>
          <li className="flex items-center"><FaGithub className="text-3xl mr-2 text-slate-900" /> GitHub</li>
          {/* Agrega más de tu CV, como React, Git, SQL */}
        </ul>
      </div>

    </motion.section>

 );
}

export default Skills;
