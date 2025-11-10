import { motion } from 'framer-motion';

function Header() {
    return(
        <motion.header 
        className='bg-gray-900 text-white p-4 fixed top-0 w-full shadow-lg'
        initial={{y:-100}}
        animate={{y:0}}
        transition={{duration:0.5}}>
            <nav className="container mx-auto flex justify-between">
            <h1 className="text-2xl font-bold text-green-400">Andrés Ubaque</h1>
            <ul className='flex space-x-4'>
                <li><a href='#hero' className="hover:text-green-400">Inicio</a></li>
                <li><a href='#about' className="hover:text-green-400">Sobre Mi</a></li>
                <li><a href="#skills" className="hover:text-green-400">Habilidades</a></li>
                <li><a href="#projects" className="hover:text-green-400">Proyectos</a></li>
                <li><a href="#certifications" className="hover:text-green-400">Certificaciones</a></li>
                <li><a href="#contact" className="hover:text-green-400">Contacto</a></li>
             </ul>
             
            </nav>

        </motion.header>
    );
}

export default Header;