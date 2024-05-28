import React from 'react';
import {Parallax} from 'react-parallax'
import '../css/hero.css';

const Hero = () => {
  return (
    <section id='hero'>
         <img src='/me.jpg' alt='picture of me'></img>
        <div className='hero-main'>
            <p className='intro'>Hey there, I'm</p>
            <h1 className='name'>Abel Challa</h1>
            <p className='hero-des'>I'm a Passionate Developer eager to learn and grow in the field of Software/Web development.</p>
        </div>
    </section>
  )
}

export default Hero