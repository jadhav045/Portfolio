import React from "react";
import { Github, ExternalLink } from "lucide-react";

const Projects = ({ portfolioData }) => {
  return (
    <section
      id="projects"
      className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-gray-50">
          Featured Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              {/* Project Name */}
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-50">
                {project.name}
              </h3>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.techStack.map((tech, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 mb-4">
                {project.highlights.map((highlight, j) => (
                  <li
                    key={j}
                    className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-300"
                  >
                    <span className="text-blue-600 dark:text-blue-400 mt-1">
                      •
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Links */}
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <Github className="w-5 h-5" />
                  <span>Code</span>
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
