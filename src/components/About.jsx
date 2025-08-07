import React from "react";
import "./About.css";

const skills = [
  { name: "JAVA", icon: "/images/java.png" },
  { name: "HTML", icon: "/images/html.png" },
  { name: "CSS", icon: "/images/css.png" },
  { name: "JAVASCRIPT", icon: "/images/js.png" },
  { name: "REACT JS", icon: "/images/reactjs.png" },
  { name: "GITHUB", icon: "/images/github.png" },
  { name: "NODE JS", icon: "/images/node.png" },
  { name: "SQL", icon: "/images/sql.png" },
];

const About = () => {
  const duplicatedSkills = [...skills, ...skills]; 
  return (
    <section className="skills-container">
      <div className="skills-box">
        <div className="skills-content">
          <h2 className="skills-title">What I do :</h2>
          <p className="skills-description">
            👋 Hi, I'm an aspiring Frontend Developer passionate about crafting
            beautiful, responsive UIs with HTML, CSS, React.js, and modern web tech!
            ⚙️ I love building smart, AI-powered apps using tools like Monaco
            Editor, Gemini API, and deploying with Vercel. 🚀 Let’s build
            something impactful together!
          </p>
          
          <div className="auto-scroll-container">
            <div className="scroll-track">
              {duplicatedSkills.map((skill, index) => (
                <div className="skill-card scroll-card" key={index}>
                  <img src={skill.icon} alt={skill.name} />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
