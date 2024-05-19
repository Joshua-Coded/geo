import React, { useState } from 'react';
import './QualityHSE.css';
import project1 from '../images/project1.jpeg';
import project2 from '../images/project2.jpeg';
import project3 from '../images/project3.jpeg';
import ScrollToTopButton from '../components/ScrollToTopButton';

const initialHSEs = [
  {
    id: 1,
    src: project1,
    title: 'ISO 9001:2015 for Quality Management Systems',
    overview: 'Our dedication to maintaining the highest levels of quality management in our operations.',
    description: 'This certification underscores our commitment to delivering services that exceed client expectations.'
  },
  {
    id: 2,
    src: project2,
    title: 'ISO 14001:2015 for Environmental Management Systems',
    overview: 'Our commitment to minimizing environmental impact through sustainable practices.',
    description: 'Implementing resource conservation, waste management, and environmentally friendly technologies.'
  },
  {
    id: 3,
    src: project3,
    title: 'OHSAS 18001 for Occupational Health and Safety Management',
    overview: 'Ensuring the health and safety of our employees and clients.',
    description: 'Comprehensive safety measures and risk assessments to prevent accidents and injuries.'
  },
  // Add more initial HSEs as needed
];

const QualityHSE = () => {
  const [hses, setHSEs] = useState(initialHSEs);

  return (
    <>
      <div className="quality-hse-container">
        <h1 style={{ color: "#00796b", fontSize: "2em" }}>Commitment to Excellence <br />  Our Quality <br /> &<br /> HSE Standards </h1>
        <p>At Geogreatotechnics & Geodreels Ltd (GGL), our unwavering commitment to quality, health, safety, and environmental stewardship stands at the core of everything we do. Guided by international standards and best practices, we ensure that our projects not only meet but exceed the expectations of our clients, while safeguarding our people and the planet.</p>


        <h1 style={{ color: "#00796b", fontSize: "2em" }}>HSE POLICY STATEMENT </h1>
        <p>GEOGREATOTECHNICS AND GEODREELS LIMITED is committed to the provision of a safe and healthy work environment for all personnel and members of the public in all her operation and administration locations. <br /><br />

          Safety is a priority and second to none in the process of project executions or operation and in respect of this <br /><br />

          we take all the necessary procedures or steps required to curb or reduce the chances of injury, accident, or illness in any of our work site.<br /><br />


          We ensure all conditions that involve instrumentation and control is primary.</p>

        {/* policy */}
        <div className="quality-hse-grid">
          <h1 style={{ color: "#00796b", fontSize: "2em" }}> Our HSE Policy Includes </h1>
          <p>All standard priority shall be given to the Health, Safety and security of Employees, Contractors, and
            Members of the public.</p>
          <p>All materials and equipment shall be certified prior to usage.</p>
          <p>Job hazard analysis (JHA) shall be done before commencement of work at all sites and note the potent risks associated with the job and infer control measures.</p>
          <p>Achieve and maintain continuous improvement in HSE performance.<br /><br /> Safety and awareness training on recent advancement/information or technologies in HSE shall be imparvted among the staff and other workers.</p>
          <p>We shall maintain professionalism and competence among our staff by motivating them to performing their duties in line with the policy, and review and develop new HSE practices and procedures.</p>
          <p>Always have a cordial and harmonious relationship with host communities.</p>
          <p>Our HSE policies shall consistently be implemented according to client’s standard, the relevant laws and regulations guiding the operations in the Federal Republic of Nigeria and other host nations.</p>
        </div>




        <div className="quality-hse-grid">
          <h1 style={{ color: "#00796b", fontSize: "2em" }}> - Certifications - </h1>
          {hses.map((hse) => (
            <div key={hse.id} className="quality-hse">

              <img src={hse.src} alt={hse.title} />
              <div className="quality-hse-info">
                <h2 style={{ color: "#00796b", textAlign: "center", fontSize: "1.2em" }}>{hse.title}</h2>
                <p><strong style={{ textAlign: "left" }}>Overview:</strong> {hse.overview}</p>
                <p><strong>Description:</strong> {hse.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default QualityHSE;
