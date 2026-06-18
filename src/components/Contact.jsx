import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-content glass animate-fade-in">
          <h2 className="contact-title">Let's Connect</h2>
          <p className="contact-desc">
            I'm always excited to discuss new projects, internship opportunities, and creative ideas. 
            If you're looking for a passionate developer or want to collaborate, feel free to reach out. 
            Let's build something impactful together!
          </p>
          
          <div className="contact-links">
            <a href="mailto:sfaiza7702@gmail.com" className="contact-link">
              <div className="contact-icon-wrapper"><Mail size={24} /></div>
              <span>sfaiza7702@gmail.com</span>
            </a>
            
            <a href="tel:+917780681608" className="contact-link">
              <div className="contact-icon-wrapper"><Phone size={24} /></div>
              <span>+91 7780681608</span>
            </a>
            
            <a href="#" className="contact-link" target="_blank" rel="noopener noreferrer">
              <div className="contact-icon-wrapper"><FaGithub size={24} /></div>
              <span>GitHub</span>
            </a>
            
            <a href="http://linkedin.com/in/shaik-faiza-88131a336/" className="contact-link" target="_blank" rel="noopener noreferrer">
              <div className="contact-icon-wrapper"><FaLinkedin size={24} /></div>
              <span>LinkedIn</span>
            </a>
          </div>
          
          <div className="contact-cta">
            <a href="#" className="btn btn-primary">
              View Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
