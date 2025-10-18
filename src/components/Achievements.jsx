import React from "react";
import { Award } from "lucide-react";

const Achievements = ({ portfolioData }) => {
  const achievementsList = Array.isArray(portfolioData?.achievements)
    ? portfolioData.achievements
    : [];

  return (
    <section
      id="achievements"
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-gray-50">
          Achievements & Awards
        </h2>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievementsList.map((achievement, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-start space-x-4"
            >
              <Award className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-50">
                  {achievement.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
