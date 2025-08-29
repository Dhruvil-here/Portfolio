import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Hero.css";
import { ArrowDownRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="hero-section">
      <h2 className="typing-text">
        <button className="available-for-btn">
          <div className="circle">
            <div className="dot"></div>
            <div className="outline"></div>
          </div>
          Available for Work
        </button>
        <div className="typer">
          Aspiring frontend developer with strong foundations in <br />
          <Typewriter
            words={[
              "React js",
              "JavaScript",
              "HTML",
              "CSS",
              "Java",
              "SQL",
              "GitHub",
            ]}
            loop={10000}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </div>
        <ArrowDownRight
          className="scroll-arrow"
          size={48}
          onClick={() =>
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" })
          }
        />
      </h2>

      <div className="image">
        <div className="image-wrapper">
          <img src="/images/myimage.png" alt="Dhruvil Gautam" />
        </div>
        <div className="myname">Dhruvil Gautam</div>
      </div>
    </div>
  );
};

export default Hero;
