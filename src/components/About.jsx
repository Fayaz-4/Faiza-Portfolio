import React from 'react';
import { Code2, Server, Database, Lightbulb, GraduationCap } from 'lucide-react';
import './About.css';

const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Sri Venkateshwara College of Engineering and Technology",
      year: "2022 - 2026",
      score: "CGPA: 8.58"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Chaitanya Junior College, Piler",
      year: "2020 - 2022",
      score: "Percentage: 67%"
    },
    {
      degree: "SSC",
      institution: "Z.P Girls High School",
      year: "2019 - 2020",
      score: "Percentage: 92%"
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        
        <div className="about-header">
          <span className="section-pill">About Me</span>
          <h2 className="about-title">
            Passionate about creating <span className="highlight-text">impactful solutions</span>
          </h2>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm <strong className="highlight-strong">Shaik Faiza</strong>, a Computer Science and Engineering student with an unwavering passion for technology and innovation.
            </p>
            <p>
              My journey in tech started with curiosity about how things work, which evolved into building <strong className="highlight-strong">full-stack applications</strong> and diving deep into <strong className="highlight-strong">backend development</strong>. I believe in writing clean, maintainable code that solves real-world problems.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to projects, or designing intuitive user interfaces. I'm particularly excited about the intersection of <strong className="highlight-strong">web development</strong> and software architecture.
            </p>
            <p>
              Currently seeking opportunities where I can contribute my skills, learn from industry experts, and make a meaningful impact.
            </p>
          </div>

          <div className="about-grid">
            <div className="feature-card glass">
              <div className="feature-icon-wrapper"><Code2 size={24} /></div>
              <h4 className="feature-title">Full Stack</h4>
              <p className="feature-desc">End-to-end development</p>
            </div>
            
            <div className="feature-card glass">
              <div className="feature-icon-wrapper"><Server size={24} /></div>
              <h4 className="feature-title">Backend Focus</h4>
              <p className="feature-desc">Robust APIs and logic</p>
            </div>
            
            <div className="feature-card glass">
              <div className="feature-icon-wrapper"><Database size={24} /></div>
              <h4 className="feature-title">Databases</h4>
              <p className="feature-desc">Schema design & scaling</p>
            </div>
            
            <div className="feature-card glass">
              <div className="feature-icon-wrapper"><Lightbulb size={24} /></div>
              <h4 className="feature-title">Problem Solver</h4>
              <p className="feature-desc">Creative solutions</p>
            </div>
          </div>
        </div>

        <div className="education-timeline">
          <h3 className="timeline-title">
            <GraduationCap className="icon" /> Education Background
          </h3>
          <div className="timeline">
            {education.map((item, index) => (
              <div key={index} className="timeline-item glass">
                <div className="timeline-dot"></div>
                <h4 className="degree">{item.degree}</h4>
                <h5 className="institution">{item.institution}</h5>
                <div className="timeline-meta">
                  <span className="year">{item.year}</span>
                  <span className="score">{item.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
