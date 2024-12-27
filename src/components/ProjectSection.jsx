import React from 'react'
import '../styless/projectsection.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import projectswipercss from '../styless/projectswipper.module.css'
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { FaGithub } from 'react-icons/fa';


const projects = [
  {
    id: 1,
    name: 'Portfolio Website',
    description: 'A personal portfolio to showcase my skills and projects.',
    githubLink: 'https://github.com/username/portfolio',
    //image: 'portfolio-image.jpg' // You can use an image or screenshot of your project
  },
  {
    id: 2,
    name: 'E-commerce App',
    description: 'A fully functional e-commerce platform with user authentication and payment gateway.',
    githubLink: 'https://github.com/username/e-commerce-app',
    //image: 'ecommerce-image.jpg'
  },
  {
    id: 3,
    name: 'Task Manager',
    description: 'A task management app to keep track of daily tasks with priorities.',
    githubLink: 'https://github.com/username/task-manager',
    //image: 'task-manager-image.jpg'
  }
];


const ProjectSection = () => {
  return (
    // <div className='projectdiv'>
    //     <h1>My projects</h1>
        
    //     <div className='projectswipercontainer'>
    //     <Swiper
    //       effect={'coverflow'}
    //       grabCursor={true}
    //       centeredSlides={true}
    //       slidesPerView={'auto'}
    //       coverflowEffect={{
    //         rotate: 50,
    //         stretch: 0,
    //         depth: 100,
    //         modifier: 1,
    //         slideShadows: true,
    //       }}
    //       pagination={true}
    //       modules={[EffectCoverflow, Pagination]}
    //       className="mySwiper"



    //     >
    //       <SwiperSlide>
    //         <div className="projectcard">
    //           <h1>Project 1</h1>
    //         </div>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <div className="projectcard">
    //           <h1>Project 2</h1>
    //         </div>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <div className="projectcard">
    //           <h1>Project 3</h1>
    //         </div>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <div className="projectcard">
    //           <h1>Project 4</h1>
    //         </div>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <div className="projectcard">
    //           <h1>Project 5</h1>
    //         </div>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <div className="projectcard">
    //           <h1>Project 6</h1>
    //         </div>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <div className="projectcard">
    //           <h1>Project 7</h1>
    //         </div>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <div className="projectcard">
    //           <h1>Project 8</h1>
    //         </div>
    //       </SwiperSlide>
    //       <SwiperSlide>
    //         <div className="projectcard">
    //           <h1>Project 9</h1>
    //         </div>
    //       </SwiperSlide>
    //     </Swiper>
    //   </div>
        
    //     </div>
    <section className="projects-container">
    <h2>Projects</h2>
    <div className="projects-list">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </section>
    
      
    
  )
}

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        {/* <img src={project.image} alt={project.name} /> */}
      </div>
      <div className="project-info">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          <FaGithub className="github-icon" />
          View Code
        </a>
      </div>
    </div>
  );
};

export default ProjectSection
