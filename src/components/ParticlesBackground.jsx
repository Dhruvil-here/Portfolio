import React, { useEffect } from "react";

const ParticlesBackground = () => {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 300,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
            random: true,
          },
          size: {
            value: 2,
            random: true,
          },
          line_linked: {
            enable: false,
          },

          move: {
            enable: true,
            speed: 1,
            direction: "none",
            out_mode: "out",
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100vh",
      }}
    />
  );
};

export default ParticlesBackground;
