import React, { useState } from 'react';
import './Projects.css';
import project1 from '../images/project1.jpeg';
import project2 from '../images/project2.jpeg';
import project3 from '../images/project3.jpeg';
import project4 from '../images/project4.jpeg';
import ScrollToTopButton from "../components/ScrollToTopButton";

const initialProjects = [
  {
    id: 1,
    src: project1,
    title: 'Prime Port Logistics Permanent Building Earthing and Lightning Protection',
    client: 'Prime Port Logistics, 2023',
    overview: 'Implemented comprehensive earthing and lightning protection to ensure operational safety and compliance with international standards.',
    impact: 'Enhanced safety and system integrity, setting a new benchmark in industrial electrical safety.'
  },
  {
    id: 2,
    src: project2,
    title: 'Solar Water Project Earthing for ICRC',
    client: 'International Committee of the Red Cross (ICRC), 2017',
    overview: 'Designed and installed earthing systems for solar water facilities, integrating renewable energy with essential water supply systems.',
    impact: 'Secured essential water supply facilities with sustainable energy sources, ensuring reliability and safety.'
  },
  {
    id: 3,
    src: project3,
    title: 'NNPC Pipeline ROW-Warri to Bonny Cathodic Protection',
    client: 'Eadro/Ocean Marine Solution, 2017-2019',
    overview: 'Comprehensive cathodic protection services along critical pipeline routes to mitigate corrosion and enhance pipeline longevity.',
    impact: 'Significantly extended the operational lifespan of crucial oil and gas infrastructure, ensuring uninterrupted energy supply.'
  },
  {
    id: 3,
    src: project4,
    title: 'NNPC Pipeline ROW-Warri to Bonny Cathodic Protection',
    client: 'Eadro/Ocean Marine Solution, 2017-2019',
    overview: 'Comprehensive cathodic protection services along critical pipeline routes to mitigate corrosion and enhance pipeline longevity.',
    impact: 'Significantly extended the operational lifespan of crucial oil and gas infrastructure, ensuring uninterrupted energy supply.'
  },

];

const Projects = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [newProject, setNewProject] = useState({ src: '', title: '', client: '', overview: '', impact: '' });

  const addProject = (e) => {
    e.preventDefault();
    if (newProject.src && newProject.title && newProject.client && newProject.overview && newProject.impact) {
      const newProjectObject = {
        id: projects.length ? projects[projects.length - 1].id + 1 : 1,
        ...newProject
      };
      setProjects([...projects, newProjectObject]);
      setNewProject({ src: '', title: '', client: '', overview: '', impact: '' });
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setNewProject({ ...newProject, src: event.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  return (
    <>
      <div className="projects-container">
        <h1>Demonstrating Excellence: Our Portfolio - Geogreatotechnics & Geodreels Ltd</h1>
        <p>Geogreatotechnics & Geodreels Ltd (GGL) has a proud history of executing over sixty ambitious projects across the West African Subregion, showcasing our unparalleled expertise in geotechnical, geophysical, environmental services, and beyond. Our portfolio reflects our commitment to excellence, innovation, and sustainability, underlining our role as a key player in advancing infrastructure, energy, and environmental projects. Here is a glimpse into some of our transformative projects:</p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project">
              <img src={project.src} alt={project.title} />
              <div className="project-info">
                <h2>{project.title}</h2>
                <p><strong>Client:</strong> {project.client}</p>
                <p><strong>Overview:</strong> {project.overview}</p>
                <p><strong>Impact:</strong> {project.impact}</p>
                {/* <button onClick={() => removeProject(project.id)}>Remove</button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default Projects;
