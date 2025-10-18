import React from "react";

const Skills = ({ portfolioData }) => {
    console.log(portfolioData.skills)
  const skills = Array.isArray(portfolioData?.skills)
    ? portfolioData.skills
    : [];

  return (
    <section
      id="skills"
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-gray-50">
          My Skills
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="text-5xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-2">
                {skill.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {skill.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
