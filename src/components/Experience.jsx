import React from "react";

const Experience = ({ portfolioData }) => {
  return (
    <section
      id="experience"
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-gray-50">
          Work Experience
        </h2>

        <div className="space-y-8">
          {portfolioData.experience.map((exp, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Role & Company */}
              <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
                    {exp.role}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {exp.company}
                  </p>
                </div>
                <span className="mt-2 md:mt-0 text-sm text-gray-500 dark:text-gray-400">
                  {exp.duration}
                </span>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, j) => (
                  <li key={j} className="flex items-start space-x-3">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">
                      ▹
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {resp}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
