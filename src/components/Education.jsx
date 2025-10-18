import React from "react";
import { GraduationCap } from "lucide-react";

const Education = ({ portfolioData }) => {
  const educationList = Array.isArray(portfolioData?.education)
    ? portfolioData.education
    : [];

  return (
    <section
      id="education"
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-gray-50">
          Education & Certifications
        </h2>

        {/* Education Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {educationList.map((edu, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <GraduationCap className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-50">
                {edu.degree}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2 font-medium">
                {edu.institution}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {edu.duration}
              </p>
              <p className="text-gray-700 dark:text-gray-300">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
