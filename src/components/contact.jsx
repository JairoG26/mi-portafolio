import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="pt-32 pb-32 px-4 max-w-2xl mx-auto text-center flex flex-col justify-center"
    >
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      <p className="mb-4 text-gray-600">
        I'm available for new projects and collaborations. You can
        reach out to me directly or contact me through my social media:
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
        <a
          href="mailto:garavitojairo6@gmail.com"
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
        >
          <Mail className="w-5 h-5" />
          <span>garavitojairo6@gmail.com</span>
        </a>
        <a
          href="https://github.com/JairoG26"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
        >
          <Github className="w-5 h-5" />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/jairo-garavito-correa/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
        >
          <Linkedin className="w-5 h-5" />
          <span>LinkedIn</span>
        </a>
      </div>

      <p className="text-gray-500 mb-2">📍 Working from Bogotá D.C. Colombia 🇨🇴</p>

      <p className="text-lg font-semibold mt-4 text-blue-600">
        Do you have an interesting project? Let's talk!
      </p>
    </section>
  );
};
