import React from 'react';
import '../css/about.css';
const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className='about-main'>  
        <img className='drawing' src='/drawingOfMe.png' alt='picture of me'></img>
        <div className='about-content'>
            <p className='about-par'>Hello my name is Abel Challa and I am an inspiring Software Developer/ Web Developer. 
                I am graduating from University of California, Riverside with a Computational Mathematics degree with a 3.84 gpa. 
                I plan on pursing my masters at OMSCS starting in 2025. 
                I'm seeking an internship opportunity to expand my knowledge and skills while contributing to make a positive impact. 
                In the future, I would like to focus on AI.
                Some of my hobbies include playing basketball, video games, and hanging out with friends.</p>
            <span>Resume: <a href="./resume.pdf" target="_blank" className='resume'><div>&#128463;</div></a></span>
        </div>
      </div>
    </section>
  )
}

export default About