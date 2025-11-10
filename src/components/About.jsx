import {motion} from 'framer-motion';
function About () {

    return(
        <motion.section
        id="about"
        className='py-20 text-slate-900'
        initial={{opacity: 0, y:50}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.8}}>
            <div className='max-w-6xl mx-auto px-6'>
                <h2 className='text-4xl font-bold mb-6 text-center neon-text'>Sobre mí</h2>
                <div className="glass p-6 md:p-8 rounded-xl">
                    <p className="text-lg mb-4">Soy Jorge Andrés Ubaque Garzón, administrador de empresas con experiencia en gestión de proyectos, construcción y emprendimiento. Estoy en transición a desarrollador front-end, con conocimientos en HTML, CSS, JavaScript y Git. Me destaco por mi enfoque en resultados, mentalidad innovadora y capacidad para liderar procesos desde la planeación hasta la ejecución.</p>
                    <h3 className="text-2xl font-semibold mb-4" style={{color:'var(--accent)'}}>Experiencia Laboral Destacada</h3>
                    <p className="text-lg mb-4">En HILADA (Marzo 2024 – Agosto 2024), gestioné redes sociales, actualicé la tienda virtual y creé campañas en Instagram y Facebook, aumentando la visibilidad de productos.</p>
                    <p className="text-lg mb-2">Como Coordinador de Proyectos en JEM S.A.S (Ene 2022 – Jun 2024), coordiné proyectos arquitectónicos, elaboré planos y gestioné trámites, logrando aprobaciones de licencias sin observaciones.</p>
                </div>
           </div>
        </motion.section>
    );
}
export default About;