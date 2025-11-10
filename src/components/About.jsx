import {motion} from 'framer-motion';
function About () {

    return(
        <motion.section
        id="about"
        className='py-16 bg-gray-900 text-white'
        initial={{opacity: 0, y:50}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.8}}>
            <div className='container mx-auto px-4'>
                <h2 className='text-4xl font-bold mb-8 text-center text-green-400'>Sobre Mi</h2>
                <p className="text-lg mb-4">Soy Jorge Andrés Ubaque Garzón, administrador de empresas con experiencia en gestión de proyectos, construcción y emprendimiento. Estoy en transición a desarrollador front-end, con conocimientos en HTML, CSS, JavaScript y Git. Me destaco por mi enfoque en resultados, mentalidad innovadora y capacidad para liderar procesos desde la planeación hasta la ejecución.</p>
                <h3 className="text-2xl font-semibold mb-4 text-green-300">Experiencia Laboral Destacada</h3>
                <p className="text-lg mb-4">En HILADA (Marzo 2024 – Agosto 2024), gestioné redes sociales, actualicé la tienda virtual y creé campañas en Instagram y Facebook, aumentando la visibilidad de productos.</p>
                <p className="text-lg mb-4">Como Coordinador de Proyectos en JEM S.A.S (Ene 2022 – Jun 2024), coordiné proyectos arquitectónicos, elaboré planos y gestioné trámites, logrando aprobaciones de licencias sin observaciones.</p>
        {/* Agrega más de tu CV, como DICOIN y Goretti, en párrafos similares */}
           </div>
        </motion.section>
    );
}
export default About;