import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectCard from './components/ProjectCard.jsx'

function App() {
  const myProjects = [
    {
      id: 1,
      title: "Interactive Calculator",
      description: "A React app that performs basic math using state and controlled inputs.",
      link: "https://github.com/GalacticMuva/my-first-app/blob/master/src/components/Calculator.jsx"
    },
    {
      id: 2,
      title: "Product Review Page",
      description: "A display of tech products using props and bootstrap components.",
      link: "https://github.com/GalacticMuva/my-first-app/blob/master/src/components/ProductCard.jsx"
    },
    {
      id: 3,
      title: "React Portfolio",
      description: "This very site! Built using React, Bootstrap, and custom CSS hover effects.",
      link: "https://github.com/GalacticMuva/react-portfolio.git" 
    }
  ];

  return (
    <div className="container my-5">

      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold">My Personal Portfolio</h1>
        <p className="lead text-secondary">A showcase of my Week 1 React Journey</p>
        <hr className="w-25 mx-auto" />
      </header>

      {/* About Me Section */}
      <section className="row justify-content-center mb-5">
        <div className="col-md-8 text-center bg-dark border border-secondary p-5 rounded-4 shadow-sm">    <h2 className="fw-bold mb-3">Hi, I'm Alessandra 👋</h2>
          <p className="lead text-muted">
            I am an aspiring Web Developer currently diving deep into the world of React.
            Over the past week, I've mastered component architecture, props, and dynamic
            rendering. My goal is to build clean, user-friendly applications that solve
            real-world problems.
          </p>
          {/* Technical Skills List */}
          <div className="d-flex flex-wrap justify-content-center gap-2">
            <span className="badge rounded-pill bg-primary px-3 py-2">React.js</span>
            <span className="badge rounded-pill bg-success px-3 py-2">JavaScript ES6</span>
            <span className="badge rounded-pill bg-info text-dark px-3 py-2">Bootstrap 5</span>
            <span className="badge rounded-pill bg-warning text-dark px-3 py-2">Vite</span>
            <span className="badge rounded-pill bg-danger px-3 py-2">Git & GitHub</span>
            <span className="badge rounded-pill bg-secondary px-3 py-2">UI/UX Design</span>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <div className="row g-4">
        {myProjects.map((project) => (
          <div className="col-md-6 col-lg-4" key={project.id}>
            <ProjectCard title={project.title} description={project.description} link={project.link} />
          </div>
        ))}
      </div>

      <footer className="text-center mt-5 pt-4 border-top text-muted">
        <p>&copy; 2026 | Built with React & Bootstrap</p>
      </footer>
    </div>
  );

}
export default App
