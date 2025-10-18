

import React, { useState, useEffect, useRef } from 'react';

// --- Data ---
// The JSON data is now included directly in the component to resolve the import error.
const portfolioData = {
  "personalInfo": {
    "name": "Tanmay Jadhav",
    "title": "Software Engineer & Full-Stack Developer",
    "pitch": "I build secure, scalable, and user-centric web applications with a passion for clean code and great user experiences.",
    "professionalPhoto": "https://placehold.co/400x400/E2E8F0/4A5568?text=TJ",
    "email": "jadhavtanmay199@gmail.com",
    "socialLinks": {
      "github": "https://github.com/jadhav045",
      "linkedin": "https://www.linkedin.com/in/tanmay-jadhav-/",
      "leetcode": "https://leetcode.com/jadhav045/"
    }
  },
  "about": {
    "narrative": "I am a passionate Computer Science undergraduate with a strong foundation in software engineering and full-stack development. My journey into technology began with a curiosity for how things work, which has since evolved into a drive to solve complex problems and build meaningful applications. My work on the 'Club Connects' project, which resulted in a published research paper, taught me the importance of a data-driven approach to development. I thrive on challenges, whether it's architecting a secure, zero-knowledge application like DailyVault or diving deep into algorithms on LeetCode. I am eager to apply my skills in a professional environment and contribute to building high-impact software."
  },
  "skills": [
    {
      "category": "Languages",
      "items": ["Java", "Python", "JavaScript", "SQL"]
    },
    {
      "category": "Technologies",
      "items": ["React", "Node.js", "Express.js", "MongoDB", "MySQL", "Docker", "Socket.IO"]
    },
    {
      "category": "Professional Tools",
      "items": ["Git", "GitHub", "JIRA", "Agile/Scrum", "VS Code"]
    }
  ],
  "projects": [
    {
      "title": "DailyVault – Privacy-Focused Diary",
      "image": "https://placehold.co/600x400/1A202C/FFFFFF?text=DailyVault",
      "description": "Architected a zero-knowledge web application with a primary focus on user privacy, featuring end-to-end, client-side encryption using modern cryptographic standards (AES-GCM & PBKDF2).",
      "stack": ["JavaScript", "Node.js", "Web Crypto API", "Security"],
      "liveDemo": "#",
      "viewCode": "https://github.com/jadhav045/DailyVault.git"
    },
    {
      "title": "AI Web Platform",
      "image": "https://placehold.co/600x400/2D3748/FFFFFF?text=AI+Platform",
      "description": "Developed a full-stack, AI-driven platform for text generation and summarization by integrating Google Gemini and Hugging Face APIs, with a focus on a responsive, non-blocking user interface.",
      "stack": ["React", "Node.js", "Google Gemini API", "Hugging Face"],
      "liveDemo": "#",
      "viewCode": "https://github.com/jadhav045/AI-Web-Platform.git"
    },
    {
      "title": "Club Connects",
      "image": "https://placehold.co/600x400/4A5568/FFFFFF?text=Club+Connects",
      "description": "Co-authored a research paper and developed a full-stack MERN application to enhance student-club networking, featuring real-time chat and notifications using Socket.IO.",
      "stack": ["MERN Stack", "Socket.IO", "Team Project", "Research"],
      "liveDemo": "#",
      "viewCode": "#"
    },
    {
      "title": "Personal Expense Tracker",
      "image": "https://placehold.co/600x400/718096/FFFFFF?text=Expense+Tracker",
      "description": "Built a secure web app for managing personal finances using Node.js and MySQL, featuring user authentication, categorized tracking, and a data visualization dashboard with Chart.js.",
      "stack": ["Node.js", "MySQL", "Chart.js", "Security"],
      "liveDemo": "#",
      "viewCode": "https://github.com/jadhav045/PersonalExpenseTracker.git"
    }
  ],
  "achievements": [
    {
      "title": "LeetCode Problem Solving",
      "description": "Successfully solved over 270 problems, demonstrating strong skills in Data Structures and Algorithms. (131 Medium, 9 Hard)"
    },
    {
      "title": "Runner-Up, Sci-Tech Competition",
      "description": "Secured 2nd place among 50+ participants by developing an interactive game using Python and the Turtle library."
    }
  ],
  "certifications": [
    {
      "name": "AWS Cloud Practitioner",
      "issuer": "Amazon Web Services",
      "date": "April 2025"
    },
    {
      "name": "CCNAv7: Introduction to Networks",
      "issuer": "Cisco",
      "date": "November 2024"
    },
    {
      "name": "Programming in Java",
      "issuer": "Infosys Springboard",
      "date": "November 2023"
    }
  ],
  "activities": [
    {
      "role": "Active Member",
      "organization": "Industry Institute Interaction Council (I2IC)",
      "description": "Co-organized and facilitated technical workshops on emerging technologies like AI/ML, Data Analytics, and Full-Stack Web Development for students, helping to bridge the gap between academia and industry."
    }
  ],
  "hobbies": ["Chess", "Technical Blogging", "Hiking"]
};


// --- Helper Components & Icons ---

const SunIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-15.66l-.7.7m-12.26 12.26l-.7.7M21 12h-1M4 12H3m15.66 8.66l-.7-.7m-12.26-12.26l-.7-.7" />
  </svg>
);

const MoonIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const LeetcodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 5.844a.718.718 0 0 0-.253.575v11.362a.718.718 0 0 0 .253.575l5.406 5.406a1.374 1.374 0 0 0 .961.438h7.034a1.374 1.374 0 0 0 1.374-1.374V1.374A1.374 1.374 0 0 0 20.517 0h-7.034ZM18 20.125h-4.375v-2.75H18v2.75Zm0-4.125h-4.375v-2.75H18v2.75Zm0-4.125h-4.375v-2.75H18v2.75Z"></path><path d="M12.25 10.875H9.5v2.75h2.75v-2.75Z"></path></svg>
);

const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block ml-1"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);


// --- Main App Component ---

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const sections = {
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    experience: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  // A simple fade-in observer hook
  const useFadeIn = () => {
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-4');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
            }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);
    return ref;
  };

  // --- Components ---
  const Header = () => (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md shadow-gray-200/50 dark:shadow-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-gray-800 dark:text-white tracking-wider">
            {portfolioData.personalInfo.name}
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection(sections.about)} className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">About</button>
            <button onClick={() => scrollToSection(sections.skills)} className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Skills</button>
            <button onClick={() => scrollToSection(sections.projects)} className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Projects</button>
            <button onClick={() => scrollToSection(sections.contact)} className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Contact</button>
          </nav>
          <button onClick={toggleTheme} className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            {theme === 'light' ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </header>
  );

  const Hero = () => {
    const fadeInRef = useFadeIn();
    return (
    <section ref={fadeInRef} className="py-24 sm:py-32 opacity-0 transform translate-y-4 transition-all duration-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 dark:text-white leading-tight tracking-tighter">
          {portfolioData.personalInfo.title}
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          {portfolioData.personalInfo.pitch}
        </p>
        <div className="mt-10 flex justify-center items-center gap-4">
          <a href={`mailto:${portfolioData.personalInfo.email}`} className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
            Contact Me
          </a>
          <a href="/resume.pdf" download="Tanmay_Jadhav_Resume.pdf" className="px-8 py-3 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 font-semibold rounded-lg shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-transform transform hover:scale-105">
            Download Resume
          </a>
        </div>
        <div className="mt-10 flex justify-center items-center gap-6">
          <a href={portfolioData.personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors transform hover:scale-110"><GithubIcon /></a>
          <a href={portfolioData.personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors transform hover:scale-110"><LinkedinIcon /></a>
          <a href={portfolioData.personalInfo.socialLinks.leetcode} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors transform hover:scale-110"><LeetcodeIcon /></a>
        </div>
      </div>
    </section>
  )};

  const Section = ({ title, children, sectionRef }) => {
    const fadeInRef = useFadeIn();
    return(
      <section ref={sectionRef} className="py-16 sm:py-20">
        <div ref={fadeInRef} className="container mx-auto px-4 sm:px-6 lg:px-8 opacity-0 transform translate-y-4 transition-all duration-700">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-12">{title}</h2>
          {children}
        </div>
      </section>
  )};

  const About = () => (
    <Section title="About Me" sectionRef={sections.about}>
      <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
        <img 
          src={portfolioData.personalInfo.professionalPhoto} 
          alt={portfolioData.personalInfo.name}
          className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover shadow-lg"
        />
        <p className="flex-1 text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center md:text-left">
          {portfolioData.about.narrative}
        </p>
      </div>
    </Section>
  );

  const Skills = () => (
    <Section title="Skills & Technologies" sectionRef={sections.skills}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.skills.map((skillCategory, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">{skillCategory.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillCategory.items.map((item, i) => (
                <span key={i} className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium px-3 py-1 rounded-full">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );

  const Projects = () => (
    <Section title="Projects" sectionRef={sections.projects}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {portfolioData.projects.map((project, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
                    <div className="p-6">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.stack.map((tech, i) => (
                                <span key={i} className="text-xs font-semibold bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-2 py-1 rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center justify-end gap-4">
                            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 font-semibold hover:underline">
                                Live Demo <ExternalLinkIcon />
                            </a>
                            <a href={project.viewCode} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 font-semibold hover:underline">
                                View Code <ExternalLinkIcon />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </Section>
  );

  const AchievementsAndMore = () => (
    <Section title="Achievements & Activities">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center lg:text-left">Achievements</h3>
                <div className="space-y-6">
                    {portfolioData.achievements.map((item, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                            <h4 className="font-bold text-lg text-gray-800 dark:text-white">{item.title}</h4>
                            <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center lg:text-left">Activities & Certifications</h3>
                <div className="space-y-6">
                    {portfolioData.activities.map((item, index) => (
                         <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                             <h4 className="font-bold text-lg text-gray-800 dark:text-white">{item.role} - <span className="font-medium">{item.organization}</span></h4>
                             <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                         </div>
                    ))}
                    {portfolioData.certifications.map((item, index) => (
                         <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                             <h4 className="font-bold text-lg text-gray-800 dark:text-white">{item.name}</h4>
                             <p className="text-gray-600 dark:text-gray-400">{item.issuer} - {item.date}</p>
                         </div>
                    ))}
                </div>
            </div>
        </div>
    </Section>
  );

  const Contact = () => (
    <Section title="Get In Touch" sectionRef={sections.contact}>
        <div className="max-w-xl mx-auto text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                I'm currently seeking new opportunities and would love to hear from you. Whether you have a question or just want to connect, feel free to reach out.
            </p>
            <a href={`mailto:${portfolioData.personalInfo.email}`} className="inline-block px-10 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
                Say Hello
            </a>
        </div>
    </Section>
  );

  const Footer = () => (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-600 dark:text-gray-400">
            <div className="flex justify-center items-center gap-6 mb-4">
                <a href={portfolioData.personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"><GithubIcon /></a>
                <a href={portfolioData.personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"><LinkedinIcon /></a>
                <a href={portfolioData.personalInfo.socialLinks.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"><LeetcodeIcon /></a>
            </div>
            <p>&copy; {new Date().getFullYear()} {portfolioData.personalInfo.name}. All Rights Reserved.</p>
        </div>
    </footer>
  )

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen font-sans transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AchievementsAndMore />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

