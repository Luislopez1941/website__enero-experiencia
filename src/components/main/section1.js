import React, { useEffect } from 'react';
import section1 from './section1.css'
import headerImages from '../../assets/images/images.js'

function ScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-reveal]');

    const scrollReveal = function () {
      for (let i = 0; i < revealElements.length; i++) {
        const isElementsOnScreen =
          revealElements[i].getBoundingClientRect().top < window.innerHeight;

        if (isElementsOnScreen) {
          revealElements[i].classList.add('revealed');
        } else {
          revealElements[i].classList.remove('revealed');
        }
      }
    };

    window.addEventListener('scroll', scrollReveal);
    window.addEventListener('load', scrollReveal);

    return () => {
      window.removeEventListener('scroll', scrollReveal);
      window.removeEventListener('load', scrollReveal);
    };
  }, []);

  return (
    <section className='information__section'>
        <div className='image__box' data-reveal="reveal__left">
        </div>
        <div className='content-box'>
          <h2 className='title__box' data-reveal="reveal__left" ><span id="offsett">Alce <span id="offset">Stud</span>ios</span></h2>
          <p className='text__box' data-reveal="reveal__left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Id laborum iste doloremque ab facere unde alias sit commodi
          accusamus? Eius ut molestiae nemo perspiciatis, pariatur numquam
          accusamus voluptatem libero sint.
          </p>
        </div>
        <div className='content-box content__box-dos'>
          <h2 className='title__box' data-reveal="reveal__left">Alce <span id="offset">Stud</span>ios</h2>
          <p className='text__box' data-reveal="reveal__left">
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Id laborum iste doloremque
          ab facere unde alias sit commodi accusamus? Eius
          ut molestiae nemo perspiciatis, pariatur numquam
          accusamus voluptatem libero sint.
          </p>
        </div>
        <div className='image__box-dos' data-reveal="reveal__left"></div>
      </section>
  )
}

export default ScrollReveal;