import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "CodeMedic",
    image: "/images/codemedic.png", // Make sure image is in `public/images/`
    description:
      "AI-powered code reviewer & fixer using Gemini API and Monaco Editor.",
    github: "https://github.com/Dhruvil-here/CodeMedic",
    live: "https://code-medic.vercel.app/",
  },
  {
    title: "Spendings-Tracker",
    image: "/images/expensetracker.png",
    description:
      "Desktop app to manage daily and monthly expenses using Java Swing and MySQL.",
    github: "https://github.com/Dhruvil-here/SpendingsTracker",
    live: "#",
  },
  {
    title: "Resume-Builder",
    image: "/images/resumebuilder.avif",
    description: "Website to build a resume template to decrease human efforts",
    github: "https://github.com/Dhruvil-here/Resume-Builder",
    live: "https://your-portfolio.vercel.app",
  },
];

const Projects = () => {
  return (
    <section className="projects-section">

      <h2 className="section-title">My Portfolio Highlights:</h2>

      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <img src={proj.image} alt={proj.title} className="project-image" />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="project-links">
              <a href={proj.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={proj.live} target="_blank" rel="noreferrer">
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
