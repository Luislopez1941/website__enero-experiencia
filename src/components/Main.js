import React from 'react';
import main from './Main.css';
import ReactPlayer from 'react-player';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Section1 from '../components/main/section1.js'
import Loop from './main/loop.js'
import Marquee from './main/marquee.js'
import Slider from './main/slider.js'



const Main = () => {

  return (
    <main className='main'>
      <div className='title__alce'>
        <div className='text__alce'>
          <h1>Alce <span id="offset">Stud</span>ios</h1>
        </div>
      </div>
      <Section1/>
      <Loop/>
     
      <Marquee/>
    </main>
  )
}

export default Main
