import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Íconos correctos
import { useState } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/20 border-b border-yellow-400/20"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

                {/* LOGO */}
                <a
                    href="#hero"
                    className="text-xl font-semibold tracking-tight hover:opacity-80 transition"
                >
                    <span className="text-yellow-400 text-left">&lt; Andrés</span> Ubaque / Dev &gt;
                </a>

                {/* MENÚ DESKTOP */}
                <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <li><a href="#about" className="hover:text-yellow-400 transition">Sobre mí</a></li>
                    <li><a href="#projects" className="hover:text-yellow-400 transition">Proyectos</a></li>
                    <li><a href="#certifications" className="hover:text-yellow-400 transition">Certificados</a></li>
                    <li><a href="#services" className="hover:text-yellow-400 transition">Servicios</a></li>
                    <li>
                        <a 
                            href="#contact" 
                            className="px-4 py-2 rounded-xl bg-yellow-400/20 border border-yellow-400/40 hover:bg-yellow-400/30 hover:border-yellow-400/60 transition"
                        >
                            Contacto
                        </a>
                    </li>
                </ul>

                {/* Botón hamburguesa */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden p-2 rounded-lg bg-yellow-500/80 text-white hover:bg-yellow-500 transition"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Menú móvil */}
<motion.div
    initial={{ height: 0, opacity: 0 }}
    animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="md:hidden overflow-hidden absolute top-full right-8 z-40" >
    <ul className="flex flex-col bg-gray-800/90 backdrop-blur-lg rounded-3xl p-4 shadow-lg border border-yellow-300/40 w-53"> 
        {[
            { text: "Inicio", href: "#hero" },
            { text: "Sobre mí", href: "#about" },
            { text: "Proyectos", href: "#projects" },
            { text: "Servicios", href: "#services" },
            { text: "Contacto", href: "#contact" }
        ].map((item) => (
            <li key={item.text} className="w-full">
                <a
                    href={item.href}
                    onClick={toggleMenu}
                    className="block p-2 rounded-xl text-gray-300 text-lg font-medium cursor-pointer 
                               hover:bg-yellow-100 hover:text-yellow-600 transition"  // Repito: rounded-xl (no x1, typo corregido), hover para efecto glow futurista
                >
                    {item.text}
                </a>
            </li>
        ))}
    </ul>
</motion.div>
        </motion.header>
    );
}

export default Header;
