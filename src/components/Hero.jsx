import React from "react";

const Hero = ({ portfolioData, scrollToSection }) => {
  return (
    <section
      id="home"
      className="pt-32 pb-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8 inline-block">
          <div className="w-36 h-36 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 animate-pulse">
            <img
              src={portfolioData.about.photo}
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-[pulse_2s_ease-in-out_infinite]">
          {portfolioData.hero.name}
        </h1>

        {/* Tagline */}
        <p className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          {portfolioData.hero.tagline}
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
          {portfolioData.hero.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
