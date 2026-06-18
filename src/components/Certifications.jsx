import React from 'react';
import { Award } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: "Python Course Completion Certificate",
      issuer: "GeeksforGeeks",
    },
    {
      title: "Infosys Springboard Internship 6.0",
      issuer: "Pet Adoption and Rescue Management Portal",
    },
    {
      title: "Human Computer Interaction",
      issuer: "NPTEL (2026)",
    }
  ];

  return (
    <section id="certifications" className="section">
      <div className="container">
        
        <h2 className="cert-section-title">
          <Award className="cert-section-icon" size={32} /> Certifications
        </h2>
        
        <div className="simple-cert-list">
          {certifications.map((cert, index) => (
            <div key={index} className="simple-cert-card glass">
              <h3 className="simple-cert-title">{cert.title}</h3>
              <span className="simple-cert-issuer">{cert.issuer}</span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Certifications;
