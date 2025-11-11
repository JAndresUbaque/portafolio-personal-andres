import { motion } from 'framer-motion';

function Header() {
    return(
        <motion.header 
        className='fixed top-0 left-0 right-0 z-50 glass'
        initial={{y:-80, opacity: 0}}
        animate={{y:0, opacity: 1}}
        transition={{duration:0.5}}>
            <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
                <a href="#hero" className="text-xl font-bold tracking-tight">
                    <span className="accent-text">&lt; Andrés</span> Ubaque &gt;
                </a>
                <ul className='hidden md:flex items-center gap-6 text-sm'>
                    <li><a href='#about' className="hover:text-slate-700">Sobre mí</a></li>
                    <li><a href="#skills" className="hover:text-slate-700">Habilidades</a></li>
                    <li><a href="#projects" className="hover:text-slate-700">Proyectos</a></li>
                    <li><a href="#certifications" className="hover:text-slate-700">Certificados</a></li>
                    <li><a href="#contact" className="hover:text-slate-700">Contacto</a></li>
                </ul>
            </nav>
        </motion.header>
    );
}

export default Header;