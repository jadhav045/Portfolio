import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Moon,
  Sun,
  Code,
  Briefcase,
  Award,
  GraduationCap,
  FileText,
} from "lucide-react";
import { portfolioData } from "./portfolioData";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  // 🔹 Apply dark/light class to <html> tag
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // 🔹 Track which section is currently visible
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "education",
        "achievements",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Smooth scroll helper
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {/* ✅ Navigation with Theme Toggle */}
        <Navbar
          portfolioData={portfolioData}
          scrollToSection={scrollToSection}
          activeSection={activeSection}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        {/* ✅ Main Sections */}
        <Hero portfolioData={portfolioData} scrollToSection={scrollToSection} />
        <About portfolioData={portfolioData} />
        <Skills portfolioData={portfolioData} />
        <Projects portfolioData={portfolioData} />
        <Experience portfolioData={portfolioData} />
        <Education portfolioData={portfolioData} />
        <Achievements portfolioData={portfolioData} />
        <Contact portfolioData={portfolioData} />

        {/* ✅ Footer */}
        <Footer portfolioData={portfolioData} />
      </div>
    </div>
  );
}
