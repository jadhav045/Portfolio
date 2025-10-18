import React from "react";
import { Download, Code, Briefcase, Award, GraduationCap } from "lucide-react";

const About = ({ portfolioData }) => {
  const stats = [
    { icon: Code, label: "Projects", value: "50+" },
    { icon: Briefcase, label: "Experience", value: "3+ Years" },
    { icon: Award, label: "Awards", value: "4" },
    { icon: GraduationCap, label: "Certifications", value: "5+" },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-gray-50">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio and Highlights */}
          <div>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {portfolioData.about.bio}
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-6">
              {portfolioData.about.highlights.map((highlight, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-800 dark:text-gray-200">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* Resume Button */}
            <a
              href={portfolioData.about.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transform transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl text-center transition-all duration-300 hover:scale-105 transform cursor-pointer"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
                <div className="text-3xl md:text-4xl font-bold mb-1 text-gray-900 dark:text-gray-50">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
