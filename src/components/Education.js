import React from 'react';
import '../css/education.css';
const Education = () => {
    return (
        <section id="education">
          <h2 className='white'>My Education</h2>
          <div className='eds'>
          <img src='/ucr.png' alt='ucr logo' className='ucr-logo'/>
            <div className='ed-info'>
            <p>Bachelor of Science in Computational Mathematics</p>
            <p>University of California, Riverside</p>
            <p>Graduating in 2024</p>
            <p>Dean's List (4x)</p>
            <p>GPA 3.84/4</p>
            </div>
            </div>
            <p><b>Relevant Coursework:</b> 
              <ul className='nav1'>
                <li>Web Development</li>
                <li>Data Structures</li>
                <li>Algorithms</li>
                <li>Discrete Structure</li>
                <li>Artificial Intelligence</li>
                <li>Object Oriented Programming</li>
                <li>Machine Organization</li>
                <li>Compiler Design</li>
                <li>Assembly Language</li>
                <li>Numerical Analysis</li>
                <li>Linear Algebra</li>
              </ul> 
            </p>
            <h2 className='white'>Skills</h2>
            <b>Programming: </b>
            <ul className='nav2'>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" alt='C icon' className='icon'/></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt='C++ icon' className='icon' /></li>
                <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt='html5 icon' className='icon'/>
          </li>
                <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt='css3 icon' className='icon' />
          </li>
                <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt='javascipt icon' className='icon' />
          </li>
                <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt='react icon' className='icon'/>
          </li>
                <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt='python icon' className='icon'/>
          </li>
                <li> 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" alt='postgre sql icon' className='icon' />
          </li>
              </ul>
 {/*
          <h3 className='center'>Abel Challa</h3>
          <p className='center'>achal007@ucr.edu | 310-467-6755 | github.com/abelchalla</p>
          <hr/>
          <h2 className='ed'>Education/Skills</h2>
          <div>
            <h3>Education</h3>
            <ul>
              <li><b>UNIVERSITY OF CALIFORNIA, Riverside</b> | B.S. IN COMPUTATIONAL MATH(MATH + CS)
              <p>GPA: 3.84 | June 2024</p>
              </li>
              <li><b>RELEVANT COURSEWORK</b> 
              <ul className='nav1'>
                <li>Web Development</li>
                <li>Data Structures</li>
                <li>Algorithms</li>
                <li>Discrete Structure</li>
                <li>Artificial Intelligence</li>
                <li>Object Oriented Programming</li>
                <li>Machine Organization</li>
                <li>Compiler Design</li>
                <li>Assembly Language</li>
                <li>Numerical Analysis</li>
                <li>Linear Algebra</li>
              </ul>
              </li>
            </ul>
          </div>
          <div>
            <h3>Skills</h3>
            <ul className='skills'>
              <li><b>PROGRAMMING</b> <br/> PROFICIENT:
              <ul className='nav1'>
                <li>C</li>
                <li>C++</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Python</li>
                <li>SQL</li>
              </ul>
            </li>
              <li><b>SPOKEN & WRITTEN</b> <br/> NATIVE FLUENCY:
              <ul className='nav1'>
                <li>English</li>
                <li>Amharic</li>
              </ul>
            </li>
            </ul>
    </div> */}
        </section>
      )
}

export default Education