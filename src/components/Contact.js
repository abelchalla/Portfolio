import React from 'react'
import '../css/contact.css'

const Contact = () => {
  return (
    <footer id='contact'>
        <h2>Contact Me!</h2>
      <ul className='links'>
        <li><a href="https://www.linkedin.com/in/abel-challa-372a30279" target="_blank" rel="noopener noreferrer" className='button'>LinkedIn
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt='linkedin logo' className='contact-img' />
          </a></li>
        <li><a href="https://github.com/abelchalla" target="_blank" rel="noopener noreferrer" className='button'>GitHub 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt='github logo' className='contact-img' />
          </a></li>
        <li><a href="mailto:achal007@ucr.edu" className='button'>achal007@ucr.edu</a></li>
      </ul>
    </footer>
  )
}

export default Contact