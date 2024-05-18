import React from "react";
import { Link } from "react-router-dom";
import aboutImage from "../images/about.png";
import "./Services.css";
import ScrollToTopButton from "../components/ScrollToTopButton";

const servicesData = [
  {
    id: "electrical-earthing",
    name: "Electrical Earthing",
    description:
      "GeoGreatoTechnics provides top-tier electrical earthing services that are essential for the safety and efficiency of electrical systems in industrial, commercial, and residential settings. Our team of certified engineers uses advanced diagnostic tools to conduct site-specific assessments and designs custom earthing solutions that meet stringent regulatory standards. We specialize in system grounding, fault analysis, and the installation of high-conductivity earthing components that reduce electrical interference and enhance system stability. Our comprehensive service includes post-installation testing and maintenance, ensuring long-term reliability and compliance with all electrical safety norms.",
    imageUrl: aboutImage, // Replace with actual path
  },
  {
    id: "cathodic-protection",
    name: "Pipeline Cathodic Protection & Structural Corrosion Mitigation",
    description:
      "At GeoGreatoTechnics, we offer specialized cathodic protection services designed to prevent corrosion in pipelines and metal structures. Our approach includes detailed site evaluations, design of tailored protection systems, and meticulous installation of anodes and cathodic protection systems using state-of-the-art techniques like cable cad welding and pin brazing. Our services extend to monitoring and maintenance, ensuring that protection systems function optimally over the lifespan of the infrastructure. We work closely with clients to develop solutions that meet industry-specific standards, reduce downtime, and extend asset life.",
    imageUrl: aboutImage, // Replace with actual path
  },
  {
    id: "geotechnical-investigation",
    name: "Geophysical and Geotechnical Investigation & Water Drilling",
    description:
      "GeoGreatoTechnics delivers comprehensive geophysical and geotechnical investigation services, utilizing a variety of methodologies such as 2D and 3D resistivity imaging, seismic refraction, and ground-penetrating radar to provide accurate subsurface data. These insights are crucial for civil engineering, mining, and environmental projects, where understanding soil properties and subsurface anomalies is key. Additionally, our water drilling services are integrated with sustainable technologies, including solar-powered systems, to provide reliable water access in remote and underserved areas, ensuring project sustainability and compliance with environmental standards.",
    imageUrl: aboutImage, // Replace with actual path
  },
  {
    id: "civil-construction",
    name: "Civil Construction",
    description:
      "Our civil construction services at GeoGreatoTechnics encompass a wide range of projects from high-rise buildings and residential complexes to large-scale infrastructure developments like bridges and roads. We manage the entire construction lifecycle, including project management, material procurement, quality control, and safety management. Our expertise also covers specialized construction techniques that meet the unique challenges of each project, ensuring that all structures are durable, compliant with international standards, and delivered on schedule.",
    imageUrl: aboutImage, // Replace with actual path
  },
  {
    id: "sand-dredging",
    name: "Sand Dredging & Piling",
    description:
      "GeoGreatoTechnics specializes in sand dredging and piling, crucial for coastal defense projects, infrastructure development, and environmental restoration. Our dredging operations are designed to manage sedimentation, enhance water quality, and restore habitats, while our piling solutions provide deep foundation support necessary for constructing on unstable or soft soils. Utilizing advanced dredging and piling machinery and technology, we ensure minimal environmental impact and adherence to all regulatory requirements, delivering projects that are both efficient and sustainable.",
    imageUrl: aboutImage, // Replace with actual path
  },
  {
    id: "environmental-impact-assessment",
    name: "Environmental Impact Assessment (EIA)",
    description:
      "Our Environmental Impact Assessment (EIA) services at GeoGreatoTechnics involve a thorough analysis of potential environmental effects of proposed projects. We use sophisticated modeling tools to predict impacts, develop mitigation strategies, and ensure compliance with environmental regulations. Our EIAs are comprehensive, covering areas such as biodiversity, water quality, air emissions, and socio-economic impacts, helping stakeholders make informed decisions and facilitating smooth regulatory approvals.",
    imageUrl: aboutImage, // Replace with actual path
  },

  {
    id: "renewable-energy-site-evaluations",
    name: "Renewable Energy Site Evaluations",
    description:
      "GeoGreatoTechnics excels in conducting thorough renewable energy site evaluations, essential for identifying and validating potential sites for solar, wind, and hydro projects. Our evaluations are rooted in detailed assessments of environmental, technical, and socio-economic factors. We deploy advanced technologies such as GIS for spatial analysis and environmental modeling to assess wind patterns, solar irradiance, and water flow rates, ensuring the selected sites are not only viable but also positioned for maximum energy production. Our comprehensive approach considers grid connectivity, potential environmental impacts, land use compatibility, and community benefits, making our evaluations a cornerstone for sustainable energy development.",
    imageUrl: aboutImage, // Replace with actual path
  },
  {
    id: "sustainable-resource-management",
    name: "Sustainable Resource Management",
    description:
      "Our sustainable resource management services are designed to help clients efficiently use and conserve natural resources while minimizing environmental footprints. GeoGreatoTechnics employs a holistic approach that includes water resource management, ecosystem conservation, and the integration of renewable energy systems to mitigate climate change impacts. We specialize in developing and implementing water conservation projects, land management strategies, and energy audits that promote sustainability. Our solutions are tailored to the specific needs of each project, incorporating best practices and innovative technologies to optimize resource use and ensure regulatory compliance.",
    imageUrl: aboutImage, // Replace with actual path
  },
  {
    id: "energy-efficiency-consulting",
    name: "Energy Efficiency Consulting",
    description:
      "GeoGreatoTechnics provides top-tier energy efficiency consulting services aimed at enhancing operational practices and building efficiencies. Our team of experts analyzes current energy usage patterns and designs systems to reduce consumption and operational costs. We offer solutions that range from retrofitting older installations with energy-saving technologies to designing new systems that incorporate the latest in energy-efficient technologies, such as LED lighting, high-efficiency HVAC systems, and smart building controls. Our consulting services extend to training client teams on best practices for energy management, ensuring long-term sustainable outcomes.",
    imageUrl: aboutImage, // Replace with actual path
  },

  // Additional Specialized Services
  {
    id: "marine-services",
    name: "Marine Services",
    description:
      "Our marine services at GeoGreatoTechnics cover a comprehensive range of activities including marine recovery, diving services, and underwater construction and inspections. Equipped with state-of-the-art diving gear and supported by advanced remotely operated vehicles (ROVs), our certified divers and marine specialists undertake a variety of tasks such as underwater welding, salvage operations, and ecological assessments. We ensure all activities are carried out with strict adherence to safety and environmental protocols, delivering high-quality solutions that meet the complex demands of marine and offshore projects.",
    imageUrl: aboutImage, // Replace with actual path
  },
  {
    id: "surveying-and-mapping",
    name: "Surveying and Mapping",
    description:
      "GeoGreatoTechnics offers precision surveying and mapping services using cutting-edge technology and methodologies. Our services include but are not limited to topographic surveys, hydrographic mapping, aerial drone surveys, and laser scanning. These services are critical for accurate site analysis, design, and construction across various sectors including construction, environmental, oil and gas, and mining. Our detailed mappings help clients in decision-making processes, risk management, and regulatory compliance, supporting the entire lifecycle of the project from planning through to execution and maintenance.",
    imageUrl: aboutImage, // Replace with actual path
  },
  {
    id: "flood-control-and-water-management",
    name: "Flood Control and Water Management",
    description:
      "At GeoGreatoTechnics, we specialize in designing and implementing comprehensive flood control and water management systems tailored to protect communities and enhance the resilience of infrastructure. Our approach integrates detailed hydrological studies, climate modeling, and civil engineering to develop effective solutions such as levees, dams, rain gardens, and stormwater management systems. We focus on sustainable practices that not only mitigate the risk of flooding but also enhance water quality and availability, contributing to healthier ecosystems and communities.",
    imageUrl: aboutImage, // Replace with actual path
  },
];

const Services = () => {
  return (
    <main className="services-page">
      <section className="services-intro">
        <h1 style={{ color: "#00796b" }}>Our Services</h1>
        <p>
          At Geogreatotechnics & Geodreels Ltd, we offer a wide range of
          specialized services tailored to meet the diverse needs of the
          geotechnical, environmental, and sustainable energy sectors. Our
          expertise spans from advanced ground engineering techniques to
          pioneering solutions in renewable energy, reflecting our commitment to
          excellence, innovation, and sustainability.
        </p>
      </section>

      {servicesData.map((service) => (
        <section id={service.id} key={service.id} className="service-section">
          <h2>{service.name}</h2>
          <img
            src={service.imageUrl}
            alt={service.name}
            className="service-image"
          />
          <p>{service.description}</p>
        </section>
      ))}

      <section className="contact-section">
        <h2>Why Choose GGL?</h2>
        <p>
          Geogreatotechnics & Geodreels Ltd stands at the forefront of
          engineering and environmental solutions, driven by a passion for
          innovation, excellence, and a sustainable future. Our comprehensive
          service offering, backed by an experienced team of professionals,
          positions us as your ideal partner for projects that demand the
          highest standards of quality and sustainability.
        </p>
        <Link to="/contact-us" className="contact-link">
          Get in Touch
        </Link>
      </section>
      <ScrollToTopButton />
    </main>
  );
};

export default Services;
