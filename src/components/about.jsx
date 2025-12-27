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
          <h1 className="text-4xl font-extrabold mb-1">
            Jairo Garavito
          </h1>

          <p className="text-blue-600 dark:text-blue-600 font-medium mb-4">
            Systems & Computer Engineer · Junior Developer · Data Analytics
          </p>
          <p className="text-lg leading-relaxed">
            Systems and Computer Engineer with hands-on experience in cloud-based web development, 
            backend architecture, and data analytics. I have worked with technologies such as 
            Google Cloud Platform, Node.js, Vue.js, React, Flask, and Power BI to build scalable 
            and data-driven solutions.
          </p>

          <p className="mt-4 text-lg leading-relaxed">
            I am particularly interested in data analytics, automation, and decision-support systems, 
            where I enjoy transforming data into meaningful insights and efficient tools. My experience 
            as a teaching assistant strengthened my skills in technical communication, problem-solving, 
            and teamwork.
          </p>

          <p className="mt-4 text-lg leading-relaxed">
            I am motivated by challenges that combine technology, data, and real-world impact, and I 
            enjoy collaborating on projects that prioritize clarity, efficiency, and quality.
          </p>

          {/* Botón de CV */}
          <div className="mt-6">
            <a
              href="/resume.pdf" 
              download
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}