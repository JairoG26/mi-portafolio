import React from "react";
import perfil from "../assets/perfil.jpg"; // Asegúrate de que este archivo esté en la carpeta `public`

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950 text-gray-800 dark:text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-10 max-w-5xl">
        
        {/* Imagen */}
        <div className="w-40 h-40 md:w-64 md:h-64 flex-shrink-0 overflow-hidden rounded-full shadow-lg border-4 border-blue-600">
          <img
            src={perfil}
            alt="Foto de perfil"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texto */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4 border-b-4 border-blue-600 inline-block">
            About Me
          </h2>
          <p className="text-lg leading-relaxed">
            Systems Engineer with a solid background in programming, web development (frontend and backend), and data analysis. 
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            I am passionate about data analytics and creating useful, elegant, and efficient solutions. I enjoy working in teams and building impactful projects.
          </p>

          {/* Botón de CV */}
          <div className="mt-6">
            <a
              href="/resume.pdf" 
              download
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}