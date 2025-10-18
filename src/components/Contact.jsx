import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = ({ portfolioData }) => {
  const contact = portfolioData?.contact || {};

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-50">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
          I'm always open to discussing new projects, creative ideas, or
          opportunities.
        </p>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contact.email && (
            <a
              href={`mailto:${contact.email}`}
              className="flex flex-col items-center space-y-3 p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-gray-900 dark:text-gray-50">
                Email
              </span>
            </a>
          )}
          {contact.linkedin && (
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-3 p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <Linkedin className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-gray-900 dark:text-gray-50">
                LinkedIn
              </span>
            </a>
          )}
          {contact.github && (
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-3 p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <Github className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-gray-900 dark:text-gray-50">
                GitHub
              </span>
            </a>
          )}
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl shadow-md">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900 dark:text-gray-50"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900 dark:text-gray-50"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900 dark:text-gray-50"
            ></textarea>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
