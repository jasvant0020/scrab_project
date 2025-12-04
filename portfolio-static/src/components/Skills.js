import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend',
      icon: '⚙️',
      skills: ['Java', 'Spring Boot', 'Spring MVC', 'Hibernate', 'JPA', 'Spring Security', 'REST APIs']
    },
    {
      title: 'Frontend',
      icon: '🎨',
      skills: ['React.js', 'React Hooks', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Bootstrap', 'Angular']
    },
    {
      title: 'Database',
      icon: '💾',
      skills: ['MongoDB', 'MySQL', 'SQL', 'Database Design', 'Query Optimization']
    },
    {
      title: 'Tools & Environment',
      icon: '🛠️',
      skills: ['Linux CLI', 'Arch Linux', 'Neovim', 'Git', 'Maven', 'Postman', 'VS Code', 'IntelliJ IDEA']
    },
    {
      title: 'Core Concepts',
      icon: '📚',
      skills: ['Data Structures', 'Algorithms', 'OOP', 'Design Patterns', 'MVC Architecture', 'Microservices']
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;