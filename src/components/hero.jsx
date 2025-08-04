import React from 'react';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white">
          ¡Hola! Soy <span className="text-blue-600">Jairo Garavito</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Desarrollador de software enfocado en soluciones web, móviles y sistemas de recomendación.
        </p>
        <div className="mt-6">
          <a
            href="#projects"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Ver proyectos
          </a>
        </div>
      </div>
    </section>
  );
};