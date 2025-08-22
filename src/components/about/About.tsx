import React from 'react';
import './About.css';
import { aboutImg } from '../../images';

import { FaDownload } from "react-icons/fa6";
import SecTitle from '../secTitle/SecTitle';


interface ExperienceType {
  id: number;
  number: string;
  text: string;
}

interface LinkType {
  href: string;
  text: string;
  icon?: React.ReactNode;
}

const experienceData: ExperienceType[] = [
  { id: 1, number: '5+', text: 'Years of experience' },
  { id: 2, number: '3K+', text: 'Happy Customers' },
  { id: 3, number: '5+', text: 'Success Projects' },
];

const downloadLink: LinkType = {
  href: '',
  text: 'Download',
  icon: <FaDownload />
};

const About: React.FC = () => {
  return (
    <section className="about section" id="about">
      <div className="container flex-center">
        <SecTitle title="About me" subtitle="About me" />
        <div className="about-wrapper">
          <div className="about-img">
            <img src={aboutImg} alt="about" />
          </div>
          <div className="about-info">
            <div className="description">
              <h3>I'm Ilay</h3>
              <h4>A Lead <span>Front-End Developer</span> based in <span>California</span></h4>
              <p>
                I design and develop services for customers specializing in creating stylish, modern
                websites, web services and online stores. My passion is to design digital user experiences through
                meaningful interactions. Check out my Portfolio
              </p>
            </div>
            <ul className="professional-list">
              {experienceData.map(exp => (
                <li key={exp.id} className="list-item">
                  <span className="number">{exp.number}</span>
                  <span className="text">{exp.text}</span>
                </li>
              ))}
            </ul>
            <a href={downloadLink.href} className="inner-info-link">
              {downloadLink.text} {downloadLink.icon}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
