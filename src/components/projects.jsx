import { useState } from "react";

const data = [
  {
    title: "Analytics Dashboard for University Schedules",
    description: "ETL and visualizations of university schedules.",
    technologies: ["Python", "PostgreSQL", "Power BI"],
    image: "/image-project-1.png",
    demoLink: "/Tablero_proyecto.pdf",
    codeLink: "https://github.com/JairoG26/Dashboard-Horarios.git"
  },
  {
    title: "Personal Portfolio Website",
    description: "A personal website to showcase my projects and skills.",
    technologies: ["React", "Tailwind CSS", "Vercel"],
    image: "/image-project-2.png",
    demoLink: "https://mi-portafolio-theta-one.vercel.app/",
    codeLink: "https://github.com/JairoG26/mi-portafolio.git"
  },
  {
    title: "Task Manager Website",
    description: "A web application to manage tasks and projects.",
    technologies: ["React", "Node.js", "PostgreSQL", "Express", "Tailwind CSS"],
    image: "/image-project-3.png",
    demoLink: "https://task-manager-j26.netlify.app/",
    codeLink: "https://github.com/JairoG26/task-manager.git"
  }
];

export const Projects = () => {

    const [selectedTech, setSelectedTech] = useState('All');

    const allTechnologies = [
    'All',
    ...new Set(data.flatMap(p => p.technologies))
    ];

    const filteredProjects = selectedTech === 'All'
    ? data
    : data.filter(p => p.technologies.includes(selectedTech));


    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold mb-10 border-b-4 border-blue-600 inline-block">Projects</h2>

        {/* Filtros */}
        <div className="flex flex-wrap gap-2 mb-8">
          {allTechnologies.map((tech, i) => (
            <button
              key={i}
                type="button"
              onClick={() => setSelectedTech(tech)}
              className={`cursor-pointer text-sm px-4 py-2 rounded-full border ${
                selectedTech === tech
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-white'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Proyectos filtrados */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <img src={project.image} alt={project.title} className="h-40 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
                  >
                    View Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline px-4 py-2 rounded"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-10">No projects found with this technology.</p>
        )}
      </div>
    </section>
    )
}