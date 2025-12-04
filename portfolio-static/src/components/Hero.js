import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Arif Ali</span>
          </h1>
          <h2 className="hero-subtitle">Spring Boot Developer & Full-Stack Engineer</h2>
          <p className="hero-description">
            Building robust backend systems with Spring Boot and crafting modern web experiences with React.js. 
            3+ years of Linux CLI expertise on Arch Linux with Neovim.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-block">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="code-content">
              <code>
                <span className="keyword">@RestController</span><br/>
                <span className="keyword">public class</span> <span className="class">Developer</span> {'{'}<br/>
                &nbsp;&nbsp;<span className="comment">// Building solutions</span><br/>
                &nbsp;&nbsp;<span className="keyword">private</span> String name = <span className="string">"Arif Ali"</span>;<br/>
                &nbsp;&nbsp;<span className="keyword">private</span> String[] skills = {'{'}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Spring Boot"</span>,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"React.js"</span>,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Linux CLI"</span><br/>
                &nbsp;&nbsp;{'}'};<br/>
                {'}'}
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;