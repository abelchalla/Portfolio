import React from 'react'
import '../css/projects.css'
const Projects = () => {
  return (
    <section id='projects'>
        <h2 className='proj-title'>Projects</h2>
        <div className='projects'>
        <div className='project'>
          <div className='project-info'>
          <h3>New York Times API (2024)</h3>
            <ul className='proj-tech-stack'>
                <p>Tech Stack: </p>
                <li><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt='C++ icon' className='icon icon1' /></li>
                <li><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt='C++ icon' className='icon icon1' /></li>
                <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt='html5 icon' className='icon icon1'/>
          </li>
                <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt='css3 icon' className='icon icon1' />
          </li>
            </ul>
            <p>Developed a dynamic web application using React, incorporating hooks such as useState and useEffect for state management and asynchronous data fetching. Integrated the New York Times Most Popular API to display articles filtered by popularity metrics (most viewed, shared, and emailed) over different timeframes (day, week, month).
            Enhanced user experience and performance by implementing pagination, allowing users to navigate through articles in manageable sections, reducing load times and preventing overwhelming displays of content.</p>
          </div>
          <img src='/nycApi.png' alt='image of my New York Times API project' className='task'/>
        </div>


        <div className='project'>
          <div className='project-info'>
          <h3>Amazon Online Shopping System (2024)</h3>
            <ul className='proj-tech-stack'>
                <p>Tech Stack: </p>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"  alt='C++ icon' className='icon icon1' /></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"  alt='C++ icon' className='icon icon1' /></li>
            </ul>
            <p>Designed and implemented a robust database schema using PostgreSQL to manage complex data relationships between products, customers, orders, and suppliers.
Developed server-side logic and functionality using Java and JDBC to handle various operations such as order management, product updates, and data retrieval.</p>
          </div>
          <img src='/amazon.png' alt='image of my New York Times API project' className='task'/>
        </div>

        <div className='project'>
          <div className='project-info'>
          <h3>Task Scheduler (2023)</h3>
            <ul className='proj-tech-stack'>
                <p>Tech Stack: </p>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt='C++ icon' className='icon icon1' /></li>
            </ul>
            <p>Developed a task management application using command-line interface (CLI) interactions, allowing users to create, edit,
and delete tasks with optional features such as title, description, priority, duration, and due date within the terminal. Implemented project functionality for grouping tasks and creating subtasks within largertasks, improving organization and
efficiency.</p>
          </div>
          <img src='/taskScheduler.png' alt='image of my task scheduler' className='task'/>
        </div>


        <div className='project'>
          <div className='project-info'>
          <h3>Calculator (2023)</h3>
            <ul className='proj-tech-stack'>
                <p>Tech Stack: </p>
                <li><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt='C++ icon' className='icon icon1' /></li>
                <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt='html5 icon' className='icon icon1'/>
          </li>
                <li>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt='css3 icon' className='icon icon1' />
          </li>
            </ul>
            <p> Implemented dynamic user interface elements,including a clear and delete button for easy input manipulation. Utilized event handling and JavaScript functions to perform arithmetic operations such as addition, subtraction,
 multiplication, and division. Demonstrated proficiency in responsive web design by ensuring the calculator website adapts well to different screen sizes
 and devices.</p>
          </div>
          <img src='/calculator.png' alt='image of my New York Times API project' className='task'/>
        </div>
      </div>
    </section>
  )
}

export default Projects