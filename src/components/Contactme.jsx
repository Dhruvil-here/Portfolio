import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contactme.css';
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Instagram } from 'lucide-react';

const Contactme = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_afj97sd',        // 🔁 Replace with your EmailJS service ID
        'template_2rtosye',       // 🔁 Replace with your EmailJS template ID
        form.current,
        'sf53AE6uVnik4zsc5'         // 🔁 Replace with your EmailJS public key
      )
      .then(
        () => {
          alert('Message sent successfully ✅');
          form.current.reset();
        },
        (error) => {
          console.error(error);
          alert('Failed to send message ❌');
        }
      );
  };

  return (
    <section className="contact-section">
      <div className="contact-left">
        <h2>Connect With Me</h2>
        <p>I'm always open to collaborating or just chatting!</p>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/dhruvilgautam/"
            className="linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={40} />
          </a>
          <a
            href="https://github.com/Dhruvil-here"
            className="github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={40} />
          </a>
          <a
            href="https://www.instagram.com/dhruvil_here/"
            className="instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={40} />
          </a>
        </div>
      </div>

      <div className="contact-right">
        <h2>Contact Me</h2>
        <form className="styled-form" ref={form} onSubmit={sendEmail}>
          <div className="input-pair">
            <div className="input-group">
              <label>Name :</label>
              <input type="text" name="user_name" placeholder="Your name" required />
            </div>
            <div className="input-group">
              <label>Email :</label>
              <input type="email" name="user_email" placeholder="Your email" required />
            </div>
          </div>

          <div className="input-group">
            <label>Message :</label>
            <textarea name="message" placeholder="Your message..." rows="6" required></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contactme;
