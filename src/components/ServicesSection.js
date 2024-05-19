import React from "react";
import { Link } from "react-router-dom";
import "./ServicesSection.css";

const servicesCategories = [
  {
    id: 1,
    title: "Electrical Earthing",
    description:
      "We provide comprehensive electrical earthing services to ensure the safety and operational integrity of electrical installations. Our team designs and implements earthing systems that meet the highest standards for industrial, commercial, and residential projects, emphasizing reliability and compliance.",
    link: "/services#electrical-earthing",
  },
  {
    id: 2,
    title: "Pipeline Cathodic Protection",
    description:
      "Our expertise in cathodic protection covers everything from preliminary surveys to the design, procurement, and installation of systems that safeguard pipelines and structures from corrosion. Using advanced techniques like cable cad welding and pin brazing, we extend the life of your assets and ensure their integrity.",
    link: "/services#pipeline-cathodic-protection",
  },
  {
    id: 3,
    title: "Geophysical, Geotechnical Investigation & Water drilling",
    description:
      "GGL's geophysical and geotechnical services offer deep insights into subsurface conditions. From 2D resistivity and seismic analysis to soil thermal resistivity studies. Our water drilling services further enable access to critical water resources, incorporating solar power installations for sustainable water supply solutions.",
    link: "/services#geophysical-investigation",
  },
  {
    id: 4,
    title: "Environmental Impact Assessments",
    description:
      "We conduct comprehensive EIAs to evaluate the environmental implications of proposed projects, offering strategies to mitigate negative impacts. Our assessments align with regulatory requirements and best practices, facilitating sustainable project development.",
    link: "/services#environmental-impact",
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2>Our Classified Services</h2>
      <p className="services-intro">
        GGL is proud to offer a broad spectrum of services, including Electrical
        Earthing, Pipeline Cathodic Protection, Geophysical & Geotechnical
        Investigation, and Environmental Impact Assessments. Serving key
        industries such as oil & gas, construction, and environmental sectors,
        our innovative approaches and use of cutting-edge technology ensure
        superior service delivery.
      </p>
      <div className="services-grid">
        {servicesCategories.map((service) => (
          <Link to={service.link} className="service-card" key={service.id}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </Link>
        ))}
      </div>
      <div className="see-more-container">
        {/* <Link to="/services" className="see-more-button">
          Explore All Services
        </Link> */}
      </div>
    </section>
  );
};

export default ServicesSection;