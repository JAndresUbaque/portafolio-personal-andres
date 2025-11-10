import { motion } from 'framer-motion';
import { useState } from 'react';
// import emailjs from '@emailjs/browser'; // Descomenta después de instalar y configurar

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí integra emailjs.sendForm('tu_service_id', 'tu_template_id', e.target, 'tu_user_id');
    console.log('Formulario enviado:', formData);
  };

  return (
    <motion.section 
      id="contact"
      className="py-16 bg-black text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-green-400">Contacto</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <input type="text" name="name" placeholder="Nombre" onChange={handleChange} className="w-full mb-4 p-2 bg-gray-800 rounded" />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full mb-4 p-2 bg-gray-800 rounded" />
          <textarea name="message" placeholder="Mensaje" onChange={handleChange} className="w-full mb-4 p-2 bg-gray-800 rounded" />
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Enviar</button>
        </form>
        <div className="mt-8 text-center">
          <a href="https://tu-linkedin.com" className="mx-2 hover:text-green-400">LinkedIn</a>
          <a href="https://tu-github.com" className="mx-2 hover:text-green-400">GitHub</a>
          <a href="/cv-andres-ubaque.pdf" download className="mx-2 hover:text-green-400">Descargar CV</a>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;