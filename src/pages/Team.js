import React from "react";
import './Team.css';
import managingDirectorImage from '../images/managing-director.jpeg';
import executiveDirectorImage from '../images/executive-director.jpg';
import geophysicsManagerImage from '../images/geophysics-manager.jpg';
import profile from '../images/Profile_photo.jpg';

const teamMembers = [
  {
    id: 1,
    name: 'Engr. Segun Falodun, MNMGS, C.Eng, COMEG, MSc',
    position: 'Managing Director',
    image: managingDirectorImage,
    bio: 'Starting his journey in the geosciences and engineering fields as a Field Engineer in 2000, Engr. Falodun quickly distinguished himself with his adept skill set and innovative approach to complex projects. His hands-on experience with cathodic protection projects laid the groundwork for his comprehensive expertise in the oil and gas industry, extending to geotechnical and geophysical services across the challenging terrains of West Africa. Engr. Falodun’s commitment to integrating geophysics into environmental, corrosion, and geotechnical work has made significant strides in the field, backed by his extensive work on Vertical Electrical Soundings and other advanced geophysical methods. His academic credentials, including two Master of Science degrees with Distinctions and ongoing studies, underscore his relentless pursuit of knowledge and excellence. A member of prestigious societies and a contributor to engineering journals, Engr. Falodun’s professional and academic contributions have been widely recognized. Beyond his professional life, his passion for sports and travel speaks to a well-rounded personality, driven by curiosity and the pursuit of excellence.',
  },
  {
    id: 2,
    name: 'Bos Gerrit',
    position: 'Executive Director (Consultant)',
    image: executiveDirectorImage,
    bio: 'With a rich, thirty-year career in civil engineering across Europe and Africa, Bos Gerrit brings an unparalleled depth of knowledge to GGL. His expertise spans critical aspects of civil engineering, including dredging, piping, piling, and foundation engineering, contributing to foundational works that stand the test of time. Gerrit’s notable projects, including the design of a pile foundation for a 30,000-gallon water tank and low voltage carrying concrete poles, highlight his ability to blend innovative engineering solutions with practical applications, benefiting communities and projects alike.',
  },
  {
    id: 3,
    name: 'Dave Adoye',
    position: 'Geophysics/Water Resources Manager',
    image: geophysicsManagerImage,
    bio: 'As the head of Geophysics and Water Resources, Dave Adoye’s expertise in solar water boreholes has positioned him as a pioneer in sustainable water solutions. With over 17 years of experience and a solid educational background in geophysics, Dave has led more than 15 successful solar water projects, demonstrating a commitment to innovation and sustainability in the Niger Delta and beyond. Dave’s ongoing academic pursuits in Engineering Geology/Hydrology reflect his dedication to staying at the forefront of his field, ensuring that GGL’s projects benefit from the latest insights and technologies.',
  },
  {
    id: 4,
    name: 'Engineer Jones-ere Alaere',
    position: 'Business Development Manager',
    image: profile,
    bio: 'Engineer Alaere\'s transition from a solid foundation in software engineering to a significant role in oil and gas sector epitomizes GGL\'s innovative spirit. Her expertise in computing and information systems, combined with a strategic vision for the company\'s growth, has been instrumental in driving GGL\'s expansion. Her role in fostering new ventures, integrating modern technological solutions, and steering GGL towards sustainability highlights her unique blend of technical expertise and strategic insight. Under her guidance, GGL is set to explore new frontiers in the industry, ensuring comprehensive services that meet the evolving needs of our clients.',
  },
];

const Team = () => {
  return (
    <main className="team">
      <section>
        <h1>Our Team</h1>
        <p>At Geogreatotechnics & Geodreels Ltd, our unparalleled success stems from the collective expertise, dedication, and innovation of our core team. Each member brings a wealth of experience and a unique skill set, driving GGL toward new horizons in the engineering and geosciences sectors. Meet the esteemed leaders who shape our direction and define our legacy.</p>
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member">
            <img src={member.image} alt={member.position} />
            <div>
              <h2>{member.name}</h2>
              <p><strong>{member.position}</strong></p>
              <p>{member.bio}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Team;
