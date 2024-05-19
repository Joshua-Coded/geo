import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import heroImage from "../images/aboutgeogreato.jpg";
import { Link } from "react-router-dom";
import ScrollToTopButton from "../components/ScrollToTopButton";
import "./AboutUs.css";

const ContactDetail = ({ icon, detail, href }) => (
  <div className="contact-detail">
    <FontAwesomeIcon icon={icon} className="icon" />
    <a href={href} target="_blank" rel="noopener noreferrer">
      {detail}
    </a>
  </div>
);

const AboutUs = () => {
  const navigateToTeamPage = () => {
    // This causes a full page reload to the services page
    window.location.href = '/team';
  };

  const navigateToHSEPage = () => {
    // This causes a full page reload to the services page
    window.location.href = '/quality-hse';
  };
  return (
    <>
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-content">
          <h1 className="hero-title">
            ABOUT GEOGREATOTECHNICS & GEODREELS LTD
          </h1>
          <p className="hero-subtitle">
            Geotechnical Expertise in West Africa <br></br>Leading the industry
            in geotechnical and environmental solutions.
          </p>
        </div>
      </div>

      <div className="content-section">
        <div className="card">
          <h2>Company History</h2>
          <p>
            Founded in 2008, GGL has evolved into a beacon of geotechnical
            excellence in West Africa. Our journey is a testament to our
            relentless pursuit of innovation, quality, and customer
            satisfaction. Marked by significant milestones such as pioneering
            advanced geotechnical solutions and forming strategic partnerships,
            we continue to set industry standards and lead with integrity and
            excellence.
          </p>
        </div>

        <div className="card vision-mission">
          <h2>Vision & Mission</h2>
          <p>
            Our vision is to be the premier company of integrity in the West
            African sub-region, offering unparalleled services across our areas
            of expertise. Committed to ethical practices and continual
            innovation, we aim to leverage technological advancements to expand
            our services and make significant, positive impacts on society and
            the environment. Through our work, we aspire to contribute to
            sustainable development and enhance the quality of life in the
            communities we serve.
          </p>
        </div>

        <div className="card">
          <h2>Our Team</h2>
          <p>
            At GGL, our strength lies in our people. A team of highly skilled
            professionals, including engineers, geoscientists, and technical
            specialists, are the backbone of our success. Their expertise
            ensures we deliver services that exceed expectations. Dedicated to
            continuous learning and development, our team stays at the forefront
            of industry trends and technologies, ensuring that GGL remains a
            leader in providing cutting-edge solutions.
          </p>
          <Link onClick={navigateToTeamPage} to="/team" className="btn-link">
            More About The Team
          </Link>
        </div>

        <div className="card">
          <h2>Technology & Innovation</h2>
          <p>
            We are at the forefront of integrating technology and innovation
            into our services. Our commitment to using advanced methodologies
            enhances our efficiency and effectiveness, allowing us to tackle
            even the most challenging projects with confidence. By embracing new
            technologies and innovative practices, we not only improve our
            service delivery but also contribute to the industry's progress and
            sustainability.
          </p>
        </div>

        <div className="card">
          <h2>HSE Policy</h2>
          <p>
            Our unwavering commitment to Health, Safety, and Environment (HSE)
            standards underscores everything we do. We believe in creating a
            safe working environment for our employees, clients, and the
            communities we serve, emphasizing sustainability in all our
            projects. Our HSE practices exceed industry standards, reflecting
            our dedication to protecting the environment and ensuring the
            well-being of all stakeholders.
          </p>
          <Link onClick={navigateToHSEPage} to="/quality-hse" className="btn-link">
            GGL HSE Policy
          </Link>
        </div>

        <div className="card contact-details">
          <h2>Contact Details</h2>
          <ContactDetail
            icon={faMapMarkerAlt}
            detail="4 Daba Avenue, Off Airforce Road, Eliozu, Port Harcourt"
            href="https://maps.google.com/?q=4+Daba+Avenue,+Off+Airforce+Road,+Eliozu,+Port+Harcourt"
          />
          <ContactDetail
            icon={faPhoneAlt}
            detail="08034003089, 07051189594"
            href="tel:+2348034003089"
          />
          <ContactDetail
            icon={faEnvelope}
            detail="geogreatotechnics@gmail.com"
            href="mailto:geogreatotechnics@gmail.com"
          />
        </div>
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default AboutUs;
