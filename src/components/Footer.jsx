import React from "react";

const Footer = ({ portfolioData }) => {
  const name = portfolioData?.hero?.name || "Your Name";

  return (
    <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-700 transition-colors duration-500">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          © 2025 {name}. Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
