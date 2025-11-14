import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'; // Íconos de hamburguesa y cierre

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <motion.header 
            className='fixed top-0 left-0 right-0 z-50 glass'
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
                <a href="#hero" className="text-xl font-bold tracking-tight">
                    <span className="accent-text">&lt; Andrés</span> Ubaque &gt;
                </a>

                {/* Menú en desktop: visible en md y arriba */}
                <ul className='hidden md:flex items-center gap-6 text-sm'>
                    <li><a href='#about' className="hover:text-green-300">Sobre mí</a></li>
                    <li><a href="#skillsandstats" className="hover:text-green-300">Habilidades</a></li>
                    <li><a href="#projects" className="hover:text-green-300">Proyectos</a></li>
                    <li><a href="#certifications" className="hover:text-green-300">Certificados</a></li>
                    <li><a href="#contact" className="hover:text-green-300">Contacto</a></li>
                </ul>

                {/* Botón de hamburguesa: visible solo en mobile (md:hidden) */}
                <button 
                    className="md:hidden text-3xl focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isOpen ? <HiX /> : <HiMenu />}
                </button>
            </nav>

            {/* Menú mobile: dropdown animado, visible solo si isOpen es true */}
            <motion.div
                className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md z-40`}
                initial={{ opacity: 0, y: -20 }}
                animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
            >
                <ul className='flex flex-col items-center gap-4 py-6 text-sm'>
                    <li><a href='#about' className="hover:text-green-300" onClick={toggleMenu}>Sobre mí</a></li>
                    <li><a href="#skillsandstats" className="hover:text-green-300" onClick={toggleMenu}>Habilidades</a></li>
                    <li><a href="#projects" className="hover:text-green-300" onClick={toggleMenu}>Proyectos</a></li>
                    <li><a href="#certifications" className="hover:text-green-300" onClick={toggleMenu}>Certificados</a></li>
                    <li><a href="#contact" className="hover:text-green-300" onClick={toggleMenu}>Contacto</a></li>
                </ul>
            </motion.div>
        </motion.header>
    );
}

export default Header;