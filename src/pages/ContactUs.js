import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faFacebookF,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import "./ContactUs.css";
import ScrollToTopButton from "../components/ScrollToTopButton";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const ContactDetail = ({ icon, detail, href }) => (
    <div className="contact-detail">
      <FontAwesomeIcon icon={icon} className="icon" />
      <a href={href} target="_blank" rel="noopener noreferrer">
        {detail}
      </a>
    </div>
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:alaerejones@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <main className="contact-us-page">
        <section className="contact-intro">
          <h2>Connect with Geogreatotechnics & Geodreels Ltd</h2>
          <p>
            At Geogreatotechnics & Geodreels Ltd (GGL), we're dedicated to
            building strong relationships with our clients, partners, and the
            communities we serve. <br /><br />Whether you’re looking for solutions in
            geotechnical, geophysical, environmental services, or have questions
            about our projects and services, our team is ready to provide the
            support and information you need.
          </p>
        </section>

        <section className="contact-details">
          <h2>How to Reach Us?</h2>

          <ContactDetail
            icon={faPhoneAlt}
            detail="08034003089"
            href="tel:+2348034003089"
          />

          <ContactDetail
            icon={faPhoneAlt}
            detail="07051189594"
            href="tel:+2347051189594"
          />
          <ContactDetail
            icon={faEnvelope}
            detail="geogreatotechnics@gmail.com"
            href="mailto:geogreatotechnics@gmail.com"
          />

          <ContactDetail
            icon={faMapMarkerAlt}
            detail="4 Daba Avenue, Off Airforce Road, Eliozu, Port Harcourt"
            href="https://maps.google.com/?q=4+Daba+Avenue,+Off+Airforce+Road,+Eliozu,+Port+Harcourt"
          />

          <ContactDetail
            icon={faMapMarkerAlt}
            detail="Suite 21, Cherry Plaza, Behind Eternal Filling Station, Utako, Abuja"
            href="https://maps.google.com/?q=Suite+21,+Cherry+Plaza,+Behind+Eternal+Filling+Station,+Utako,+Abuja"
          />

          <ContactDetail
            icon={faMapMarkerAlt}
            detail="14 Talabi Street, Adeniyi Jones, Ikeja, Lagos State"
            href="https://maps.google.com/?q=14+Talabi+Street,+Adeniyi+Jones,+Ikeja,+Lagos+State"
          />
        </section>

        <section className="social-media">
          <h2>Stay Connected</h2>
          <p>
            Follow us on our social media channels to stay updated on our latest
            projects, community involvement, and industry insights.
          </p>
          <a href="https://www.linkedin.com/company/geogreatotechnics-geodreels-ltd" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.facebook.com/geogreatotechnics-geodreels-ltd" target="_blank">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://twitter.com/GGL" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </section>

        <section className="contact-form">
          <h2>Contact Us</h2>
          <p>
            For general inquiries or to request a service quote, please fill out
            our online form. <br /><br /> Provide your name, contact information, and a brief
            description of your inquiry or project. <br /> <br />A GGL representative will get
            back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>

        <section className="maps-directions">
          <h2>Visit Us</h2>
          <p>
            Our doors are always open if you wish to visit any of our offices. <br /><br />
            Please call ahead to schedule an appointment, ensuring we can provide
            you with the best possible service upon your arrival.
          </p>
        </section>

        <section className="feedback-section">
          <h2>Feedback</h2>
          <p>
            Your feedback is invaluable to us. <br /><br />If you have any comments,
            suggestions, or concerns regarding our services or projects, please
            let us know through any of the contact methods listed above.<br /><br /> We are
            committed to continuous improvement and serving your needs to the best
            of our ability.
          </p>
        </section>
      </main>
      <ScrollToTopButton />
    </>
  );
}

export default ContactUs;
