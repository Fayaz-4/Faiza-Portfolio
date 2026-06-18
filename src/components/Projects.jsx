import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Hotel Booking System",
      category: "FULL STACK WEB APPLICATION",
      description: "A comprehensive full-stack web application designed for seamless hotel room reservations. Integrated with Razorpay for secure simulated payments, featuring robust user authentication, room search, booking management, and cancellation capabilities. Built on a powerful RESTful API architecture.",
      features: [
        "User authentication & management",
        "Room search & booking logic",
        "Razorpay payment integration",
        "RESTful APIs with MySQL"
      ],
      tech: ["React", "Spring Boot", "MySQL", "Razorpay API"],
      image: "/hotel1.png",
      github: "#",
      demo: "#"
    },
    {
      title: "Pet Adoption and Rescue Management Portal",
      category: "SMART MANAGEMENT SYSTEM",
      description: "An intelligent pet adoption and rescue management platform developed to streamline pet operations. Features real-time adoption request tracking, automated allocation, and secure pet registration. Optimized adoption efficiency and significantly improved rescue management.",
      features: [
        "Pet registration management",
        "Adoption request tracking",
        "Rescue management features",
        "Secure storage and retrieval"
      ],
      tech: ["HTML", "CSS", "JavaScript", "SQL"],
      image: "/pet1.png",
      github: "#",
      demo: "#",
      featured: true
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">
          Work that <span className="highlight-text">matters</span>
        </h2>
        <p className="projects-subtitle">A showcase of projects that demonstrate my skills in development, design, and problem-solving.</p>
        
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card-horizontal glass">
              
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-img" />
              </div>

              <div className="project-details">
                {project.featured && <span className="featured-badge">⭐ Featured Project</span>}
                <span className="project-category">{project.category}</span>
                <h3 className="project-title-text">{project.title}</h3>
                
                <p className="project-desc">{project.description}</p>
                
                <ul className="project-features">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.github} className="btn-link">
                    <FaGithub size={18} /> View Code
                  </a>
                  <a href={project.demo} className="btn-link">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
