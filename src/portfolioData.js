// src/data/portfolioData.js

export const portfolioData = {
  hero: {
    name: "Alex Johnson",
    tagline: "Full-Stack Developer & Data Enthusiast",
    description: "Crafting elegant solutions to complex problems"
  },
  about: {
    bio: "Passionate developer with 3+ years of experience building scalable web applications. I love solving challenging problems and creating user-centric solutions that make a difference.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    highlights: [
      "3+ years of full-stack development",
      "Expert in MERN stack & Python",
      "Led 5+ successful project deliveries",
      "Open source contributor"
    ],
    resumeLink: "#"
  },
  skills: {
    "Programming Languages": ["Python", "JavaScript", "TypeScript", "Java", "C++"],
    "Frameworks & Libraries": ["React", "Node.js", "Express", "Django", "Next.js", "TailwindCSS"],
    "Tools & Platforms": ["Git", "Docker", "MongoDB", "PostgreSQL", "AWS", "Firebase"],
    "Specializations": ["REST APIs", "GraphQL", "CI/CD", "Agile", "Microservices"]
  },
  projects: [
    {
      name: "E-Commerce Platform",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      description: "Full-featured e-commerce platform with payment integration and admin dashboard",
      github: "https://github.com",
      demo: "https://demo.com",
      highlights: [
        "Handles 10K+ daily users",
        "Integrated secure payment gateway",
        "Real-time inventory management"
      ]
    },
    {
      name: "AI Task Manager",
      techStack: ["Python", "TensorFlow", "React", "FastAPI"],
      description: "Smart task management app with ML-powered priority suggestions",
      github: "https://github.com",
      demo: "https://demo.com",
      highlights: [
        "85% accuracy in task prioritization",
        "Natural language processing",
        "Cross-platform mobile support"
      ]
    }
  ],
  experience: [
    {
      role: "Full-Stack Developer",
      company: "TechCorp Solutions",
      duration: "Jan 2023 - Present",
      responsibilities: [
        "Led development of microservices architecture serving 50K+ users",
        "Reduced API response time by 40% through optimization",
        "Mentored 3 junior developers and conducted code reviews"
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "State University",
      duration: "2018 - 2022",
      details: "GPA: 3.8/4.0 | Dean's List | Focus: Software Engineering & AI"
    }
  ],
  achievements: [
    {
      title: "1st Place - National Hackathon 2023",
      description: "Built AI-powered healthcare solution in 48 hours"
    }
  ],
  contact: {
    email: "alex.johnson@email.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://alexjohnson.dev"
  }
};
