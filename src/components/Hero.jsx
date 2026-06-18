import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, ArrowDown } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Full Stack Web Developer";
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed]);

  return (
    <section id="home" className="hero section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <h1 className="name">
            Hi, I'm <span className="highlight-text">Shaik<br/>Faiza</span>
          </h1>
          
          <div className="typewriter-container">
            <span className="typewriter-text">{text}</span>
            <span className="cursor">|</span>
          </div>
          
          <p className="summary">
            Skilled in Python, Flask, SQL, HTML, CSS, and JavaScript. Experienced in developing web applications and academic projects with strong problem-solving and software development skills.
          </p>
          
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary btn-pill">
              Let's Talk <ArrowRight size={18} />
            </a>
            <a href="/Faiza_Resume.pdf" download="Faiza_Resume.pdf" className="btn btn-dark btn-pill">
              <Download size={18} /> Download Resume (PDF)
            </a>
          </div>

          <div className="hero-social">
            <span className="social-text">Find me on</span>
            <div className="social-icons">
              <a href="https://github.com/Faiza005" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub size={18} />
              </a>
              <a href="http://linkedin.com/in/shaik-faiza-88131a336/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin size={18} />
              </a>
              <a href="mailto:sfaiza7702@gmail.com" className="social-icon">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="hero-visual-wrapper animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="hero-visual-circle">
            <img src="/profile_photo.jpeg" alt="Shaik Faiza" className="profile-img" />
          </div>
          <div className="scroll-indicator">
            <span>Scroll to explore</span>
            <div className="scroll-arrow">
              <ArrowDown size={16} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
