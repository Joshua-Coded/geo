import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection"; // Ensure the path is correct
import ServicesSection from "../components/ServicesSection"; // Updated from ServiceList to ServicesSection
import AboutHeroImage1 from "../images/featured project1.jpg";
import AboutHeroImage2 from "../images/featured project2b.jpg";
import AboutHeroImage3 from "../images/about.jpg";
import BusinessProfilePDF from "../images/company-profile.pdf";
import ScrollToTopButton from "../components/ScrollToTopButton";

import "./Home.css";

const HomePage = () => {
  return (
    <main className="home">
      <HeroSection />
      <ServicesSection />

      <section className="about-us">
        <div className="about-us-content">
          <h2>About Us</h2>
          <p>
            Discover Geogreatotechnics & Geodreels Ltd (GGL), a leading force
            since 2008 in providing top-notch geotechnical, geophysical, and
            environmental services across West Africa. With a rich heritage of
            excellence, our expertise spans various sectors, including oil and
            gas, construction, environmental projects, and more, delivering
            solutions that cater to the intricate demands of our clients.
            Committed to sustainability and community development, GGL actively
            contributes to projects that have a lasting positive impact on
            society and the environment.
          </p>
          <Link to="/about-us" className="btn-about-us">
            Learn More About Us
          </Link>
          <a href={BusinessProfilePDF} className="btn-download" download>
            Download Company Profile
          </a>
        </div>
      </section>
      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <p>
          Our dedicated team, commitment to safety, and innovative solutions set
          us apart. We understand the challenges of our industry and are devoted
          to delivering high-quality, sustainable solutions that meet our
          clients' needs while adhering to the highest safety and environmental
          standards. Our excellence is recognized through various
          certifications, awards, and recognitions, cementing our reputation as
          a trusted leader in the field.
        </p>
      </section>

      <section className="projects">
        <h2>Featured Projects</h2>
        <p>
          Our portfolio showcases a range of successful projects, demonstrating
          our capability to tackle complex challenges. From comprehensive
          geotechnical investigations for infrastructure development to the
          precise earthing and lightning protection of industrial facilities,
          our projects reflect our commitment to excellence and innovation. Each
          project undertaken has resulted in significant outcomes, such as
          enhanced safety measures, extended infrastructure lifespan, and
          improved environmental sustainability.
        </p>
        <div className="project-grid">
          <div className="project-card">
            <img src={AboutHeroImage1} alt="Prime Port Logistics Earthing" />
            <div className="project-info">
              <h3>Solar Installation for Opobo Nkoro L.G.A. Rivers State RUW</h3>
              <p>
                Comprehensive earthing solutions for industrial safety and
                compliance.
              </p>
            </div>
          </div>
          <div className="project-card">
            <img src={AboutHeroImage2} alt="NNPC Pipeline Protection" />
            <div className="project-info">
              <h3>
                Cathodic Protection Test Post Installation for Saidel/Desicon
                SSSGEP (SPDC Project)
              </h3>
              <p>
                Enhancing pipeline longevity with advanced cathodic protection.
              </p>
            </div>
          </div>
          <div className="project-card">
            <img src={AboutHeroImage3} alt="Solar Water Project Earthing" />
            <div className="project-info">
              <h3>Ogoni groundwater system cleanup through biosparging;</h3>
              <p>
                Supply of pressure gauges and engineering support for the Ogoni
                groundwater system cleanup through biosparging;
              </p>
            </div>
          </div>
          <div className="btn-group">
            <Link to="/projects" className="btn-more">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="contact-us">
        <h2>Connect With Us</h2>
        <p>
          Connect with us to learn more about how we can support your next
          project. Our team is ready to provide expert solutions tailored to
          your specific requirements. Whether you're in the planning stages or
          need immediate assistance, GGL is here to ensure your project's
          success.
        </p>
        <div className="contact-options">
          <Link to="/contact-us" className="btn-primary">
            Contact Details
          </Link>
          <a
            href="mailto:geogreatotechnics@gmail.com"
            className="btn-secondary"
          >
            Email Us
          </a>
        </div>
      </section>

      <ScrollToTopButton />
    </main>
  );
};

export default HomePage;
