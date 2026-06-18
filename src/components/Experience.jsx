import React from 'react';
import { Briefcase, Award } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience & Certifications</h2>
        <p className="experience-subtitle">A timeline of my professional growth and hands-on experience in technology.</p>
        
        <div className="experience-content">
          
          <div className="exp-column">
            <h3 className="exp-col-title">
              <Briefcase className="icon" /> Internship
            </h3>
            
            <div className="exp-card glass">
              <h4 className="exp-role">Pet Adoption and Rescue Management Portal</h4>
              <h5 className="exp-company">Infosys Springboard - Internship 6.0</h5>
              <p className="exp-duration">Feb 2026 - Apr 2026</p>
              
              <ul className="exp-details">
                <li>Successfully completed Internship 6.0 by developing a Pet Adoption and Rescue Management Portal.</li>
                <li>Designed and implemented modules for pet registration, adoption requests, and rescue management.</li>
                <li>Developed backend functionality using Python and integrated database operations.</li>
                <li>Applied software engineering principles including requirement analysis, testing, debugging, and documentation.</li>
                <li>Enhanced practical skills in web development, database management, and problem-solving.</li>
              </ul>
            </div>
          </div>

          <div className="exp-column">
            <h3 className="exp-col-title">
              <Award className="icon" /> Certifications
            </h3>
            
            <div className="cert-list">
              <div className="cert-card glass">
                <h4>Python Course Completion Certificate</h4>
                <p>GeeksforGeeks</p>
              </div>
              
              <div className="cert-card glass">
                <h4>Infosys Springboard Internship 6.0</h4>
                <p>Pet Adoption and Rescue Management Portal</p>
              </div>
              
              <div className="cert-card glass">
                <h4>Human Computer Interaction</h4>
                <p>NPTEL (2026)</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
