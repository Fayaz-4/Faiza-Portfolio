import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('All Skills');

  const skillsData = [
    { name: 'Python', category: 'Programming', percentage: 85, color: '#fcd34d' },
    
    { name: 'HTML5', category: 'Frontend', percentage: 90, color: '#f97316' },
    { name: 'CSS3', category: 'Frontend', percentage: 85, color: '#3b82f6' },
    { name: 'JavaScript', category: 'Frontend', percentage: 85, color: '#eab308' },
    { name: 'React.js', category: 'Frontend', percentage: 80, color: '#06b6d4' },
    
    { name: 'Flask', category: 'Backend', percentage: 80, color: '#ffffff' },
    
    { name: 'SQL', category: 'Database', percentage: 85, color: '#f43f5e' },
    { name: 'MySQL', category: 'Database', percentage: 80, color: '#0ea5e9' },
    
    { name: 'Git', category: 'Tools', percentage: 85, color: '#f14e32' },
    { name: 'GitHub', category: 'Tools', percentage: 85, color: '#94a3b8' },
    { name: 'VS Code', category: 'Tools', percentage: 90, color: '#0078d7' },
    { name: 'Jupyter Notebook', category: 'Tools', percentage: 80, color: '#f37626' },
    
    { name: 'Problem Solving', category: 'Core Skills', percentage: 90, color: '#8b5cf6' },
    { name: 'Team Collaboration', category: 'Core Skills', percentage: 95, color: '#10b981' },
    { name: 'Critical Thinking', category: 'Core Skills', percentage: 85, color: '#ef4444' },
    { name: 'Communication', category: 'Core Skills', percentage: 90, color: '#6366f1' },
  ];

  const categories = ['All Skills', 'Programming', 'Frontend', 'Backend', 'Database', 'Tools', 'Core Skills'];

  const filteredSkills = activeFilter === 'All Skills' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeFilter);

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="skills-title">
          Technologies I <span className="highlight-text">work with</span>
        </h2>
        <p className="skills-subtitle">A comprehensive toolkit spanning frontend, backend, databases, and tools.</p>
        
        <div className="skills-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="skill-bar-card glass">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage" style={{ color: '#8b5cf6' }}>{skill.percentage}%</span>
              </div>
              <div className="skill-progress-bg">
                <div 
                  className="skill-progress-fill" 
                  style={{ 
                    width: `${skill.percentage}%`,
                    backgroundColor: skill.color,
                    boxShadow: `0 0 10px ${skill.color}80`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
