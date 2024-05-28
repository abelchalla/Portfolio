import React from 'react'
import '../css/interests.css'

const Interests = () => {
  return (
    <section id="interests">
        <h2>Interests</h2>
      <ul className='interests'>
        <li className='interests-info'>
            <img src='/RoseHack.png' alt='image of rosehack' className='int-img'/>
            <p>Participated in one hackathon recently called Rose Hack. As it was my first one I was mainly there to get a feel of the environment. I worked in a group of 3 to make a baby sitting app. However my group left midway so I decided to make a Compound interest Calculator since I believe investing early is the way to go.</p>
        </li>
        <li className='interests-info'>
            <img src='/acm.png' alt='image of amc logo' className='int-img'/>
            <p>Member of the ACM @ UCR. ACM at UCR is the largest student-run technical organization with a focus on Computer Science.
            </p>
        </li>
        <li className='interests-info'>
            <img src='/odin.png' alt='image of odin project logo' className='int-img'/>
            <p>Currently completing the Odin Project and taking courses on EDX to get all around knowledge.
            </p>
        </li>
      </ul>
    </section>
  )
}

export default Interests