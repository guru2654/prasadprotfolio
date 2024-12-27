import React, { useRef, useState } from 'react';
import '../styless/skills.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiPython, SiAngular, SiMysql } from 'react-icons/si'; // Import new icons
import { IoMdBrain } from 'react-icons/io'; 
import { IoIosFlask,IoIosGrid, IoIosList } from 'react-icons/io';
import { useSpring, animated } from 'react-spring';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { Grid, Pagination } from 'swiper/modules';

const skills = [
  { id: 1, name: 'HTML', icon: <FaHtml5 />, level: 90 },
  { id: 2, name: 'CSS', icon: <FaCss3Alt />, level: 85 },
  { id: 3, name: 'JavaScript', icon: <FaJs />, level: 80 },
  { id: 4, name: 'React', icon: <FaReact />, level: 75 },
  { id: 5, name: 'Node.js', icon: <FaNodeJs />, level: 70 },
  { id: 6, name: 'Python', icon: <SiPython />, level: 80 },
  { id: 7, name: 'Angular', icon: <SiAngular />, level: 65 },
  { id: 8, name: 'SQL', icon: <SiMysql />, level: 70 },
  { id: 9, name: 'Data Structures & Algorithms', icon: <IoIosGrid />, level: 75 },
  { id: 10, name: 'Machine Learning', icon: <IoIosFlask />, level: 65 }, // Using flask icon for ML
  { id: 11, name: 'Deep Learning', icon: <IoIosFlask />, level: 60 } // Using flask icon for DL
];

const SkillsSection = () => {
  return (
    <section className="skills-container">
      <h2> My Skills</h2>
      <div className="skills-list">
        {skills.map(skill => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
};

const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card">
      <div className="skill-icon">
        {skill.icon}
      </div>
      <div className="skill-info">
        <h3>{skill.name}</h3>
        <motion.div
          className="progress-bar"
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};

  


export default SkillsSection
