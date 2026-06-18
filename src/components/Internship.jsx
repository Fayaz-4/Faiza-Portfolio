import React from 'react';
import { Briefcase, Download } from 'lucide-react';
import './Internship.css';

const Internship = () => {
  const internshipData = {
    title: "Pet Adoption and Rescue Management Portal",
    company: "Infosys Springboard - Internship 6.0",
    date: "Feb 2026 - Apr 2026",
    points: [
      "Successfully completed Internship 6.0 by developing a Pet Adoption and Rescue Management Portal.",
      "Designed and implemented modules for pet registration, adoption requests, and rescue management.",
      "Developed backend functionality using Python and integrated database operations.",
      "Applied software engineering principles including requirement analysis, testing, debugging, and documentation.",
      "Enhanced practical skills in web development, database management, and problem-solving."
    ],
    certificate: "/certificate.pdf",
    image: "/internship.png"
  };

  return (
    <section id="internship" className="section">
      <div className="container">
        <h2 className="section-title">
          <Briefcase className="section-icon" /> Internship
        </h2>
        
        <div className="internship-card glass">
          <div className="internship-image-container">
            <img src={internshipData.image} alt="Internship Workspace" className="internship-img" />
          </div>

          <div className="internship-details">
            <h3 className="internship-title">{internshipData.title}</h3>
            <h4 className="internship-company">{internshipData.company}</h4>
            <span className="internship-date">{internshipData.date}</span>
            
            <ul className="internship-points">
              {internshipData.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            
            <a href={internshipData.certificate} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-pill">
              <Download size={18} /> Internship Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
