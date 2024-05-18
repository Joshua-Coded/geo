// src/Gallery.js
import React, { useState } from 'react';
import './Gallery.css';
import project1 from '../images/project1.jpeg';
import project2 from '../images/project2.jpeg';
import project3 from '../images/project3.jpeg';
import project4 from '../images/project4.jpeg';
import project5 from '../images/project5.jpeg';
import ScrollToTopButton from "../components/ScrollToTopButton";

const initialImages = [
  {
    id: 1,
    src: project1,
    title: 'Resistivity Investigation for Groundbed in Port Harcourt Refinery',
    overview: 'Detailed visual documentation of our resistivity investigation employing Vertical Electrical Sounding techniques. This project highlights our capacity to deliver precise subsurface analysis critical for infrastructural integrity.',
    description: 'Team conducting resistivity testing with advanced equipment in the field.'
  },
  {
    id: 2,
    src: project2,
    title: 'Pipeline ROW Resistivity Survey of 6 inch x 31Km Stubb Creek Universal Energy',
    overview: 'An extensive resistivity survey designed to ensure the pipeline\'s longevity and efficiency. Our expertise facilitated a comprehensive understanding of subsurface conditions, optimizing the pipeline’s design and construction.',
    description: 'Geophysical team in action along the pipeline route, showcasing the integration of technology and field expertise.'
  },
  {
    id: 3,
    src: project3,
    title: 'Preliminary Cathodic Protection Survey and Earthing at Enwe East Ahoada',
    overview: 'Demonstrating our proficiency in cathodic protection to safeguard pipeline integrity. This project involved intricate surveying and earthing techniques, underscoring our commitment to pipeline safety and durability.',
    description: 'Engineers setting up cathodic protection systems in a complex field environment.'
  },
  {
    id: 4,
    src: project4,
    title: 'Preliminary Cathodic Protection Survey and Earthing at Enwe East Ahoada',
    overview: 'Demonstrating our proficiency in cathodic protection to safeguard pipeline integrity. This project involved intricate surveying and earthing techniques, underscoring our commitment to pipeline safety and durability.',
    description: 'Engineers setting up cathodic protection systems in a complex field environment.'
  },
  {
    id: 5,
    src: project5,
    title: 'Preliminary Cathodic Protection Survey and Earthing at Enwe East Ahoada',
    overview: 'Demonstrating our proficiency in cathodic protection to safeguard pipeline integrity. This project involved intricate surveying and earthing techniques, underscoring our commitment to pipeline safety and durability.',
    description: 'Engineers setting up cathodic protection systems in a complex field environment.'
  },
];

const Gallery = () => {
  const [images, setImages] = useState(initialImages);
  const [newImage, setNewImage] = useState({ src: '', title: '', overview: '', description: '' });

  const addImage = (e) => {
    e.preventDefault();
    if (newImage.src && newImage.title && newImage.overview && newImage.description) {
      const newImageObject = {
        id: images.length ? images[images.length - 1].id + 1 : 1,
        ...newImage
      };
      setImages([...images, newImageObject]);
      setNewImage({ src: '', title: '', overview: '', description: '' });
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setNewImage({ ...newImage, src: event.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <>
      <div className="gallery-container">
        <h1>Our Projects Gallery</h1>
        <p>Explore the depth and breadth of Geogreatotechnics & Geodreels Ltd's expertise through our project gallery. Each image represents a story of challenge, innovation, and success, embodying our commitment to excellence in geotechnical, environmental, and geophysical solutions across West Africa.</p>
        <div className="photo-grid">
          {images.map((image) => (
            <div key={image.id} className="photo">
              <img src={image.src} alt={image.title} />
              <div className="photo-info">
                <h2>{image.title}</h2>
                <p><strong>Overview:</strong> {image.overview}</p>
                <p><strong>Description:</strong> {image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default Gallery;
