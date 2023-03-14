import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import loop from './loop.css'

gsap.registerPlugin(ScrollTrigger);

function ImageScroller() {
  const additionalY = useRef({ val: 0 });
  const additionalYAnim = useRef(null);
  const offset = useRef(0);
  const cols = useRef([]);

  useEffect(() => {
    cols.current = gsap.utils.toArray('.col');

    cols.current.forEach((col, i) => {
      const images = col.childNodes;

      // DUPLICATE IMAGES FOR LOOP
      images.forEach((image) => {
        var clone = image.cloneNode(true);
        col.appendChild(clone);
      });

      // SET ANIMATION
      images.forEach((item) => {
        let columnHeight = item.parentElement.clientHeight;
        let direction = i % 2 !== 0 ? '+=' : '-='; // Change direction for odd columns

        gsap.to(item, {
          y: direction + Number(columnHeight / 2),
          duration: 20,
          repeat: -1,
          ease: 'none',
          modifiers: {
            y: gsap.utils.unitize((y) => {
              if (direction == '+=') {
                offset.current += additionalY.current.val;
                y = (parseFloat(y) - offset.current) % (columnHeight * 0.5);
              } else {
                offset.current += additionalY.current.val;
                y = (parseFloat(y) + offset.current) % -Number(columnHeight * 0.5);
              }

              return y;
            }),
          },
        });
      });
    });

    const imagesScrollerTrigger = ScrollTrigger.create({
      trigger: 'section',
      start: 'top 50%',
      end: 'bottom 50%',
      onUpdate: function (self) {
        const velocity = self.getVelocity();
        if (velocity > 0) {
          if (additionalYAnim.current) additionalYAnim.current.kill();
          additionalY.current.val = -velocity / 2000;
          additionalYAnim.current = gsap.to(additionalY.current, { val: 0 });
        }
        if (velocity < 0) {
          if (additionalYAnim.current) additionalYAnim.current.kill();
          additionalY.current.val = -velocity / 3000;
          additionalYAnim.current = gsap.to(additionalY.current, { val: 0 });
        }
      },
    });

    return () => {
      imagesScrollerTrigger.kill();
      cols.current.forEach((col) => {
        const images = col.childNodes;
        images.forEach((item) => {
          gsap.killTweensOf(item);
        });
      });
    };
  }, []);

  return (
    <div className='bod'>
      <section className='sectionl'>
        <h1 className='titlesec'>Alce Studios</h1>
      </section>  
      <div class="gallery">
        <div class="col">
          <div class="image">
            <img src="https://images.pexels.com/photos/10324713/pexels-photo-10324713.jpeg?cs=srgb&dl=pexels-taha-samet-arslan-10324713.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt=""/>
          </div>
          <div class="image">
            <img src="https://images.pexels.com/photos/10533885/pexels-photo-10533885.jpeg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt=""/>
          </div>
          <div class="image">
            <img src="https://images.pexels.com/photos/10253213/pexels-photo-10253213.jpeg?cs=srgb&dl=pexels-beepin-10253213.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt=""/>
          </div>
          </div>
          <div class="col">
            <div class="image">
              <img src="https://images.pexels.com/photos/10050979/pexels-photo-10050979.jpeg?cs=srgb&dl=pexels-%D0%B8%D0%BB%D1%8C%D1%8F-%D0%BF%D0%B0%D1%85%D0%BE%D0%BC%D0%BE%D0%B2-10050979.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt=""/>
            </div>
          <div class="image">
            <img src="https://images.pexels.com/photos/1128660/pexels-photo-1128660.jpeg?cs=srgb&dl=pexels-nur-andi-ravsanjani-gusma-1128660.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt=""/>
          </div>
          <div class="image">
            <img src="https://images.pexels.com/photos/9699293/pexels-photo-9699293.jpeg?cs=srgb&dl=pexels-lada-rezantseva-9699293.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt=""/>
          </div>
        </div>
        <div class="col">
          <div class="image">
            <img src="https://images.pexels.com/photos/6405575/pexels-photo-6405575.jpeg?cs=srgb&dl=pexels-daria-sannikova-6405575.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt=""/>
          </div>
          <div class="image">
            <img src="https://images.pexels.com/photos/10162526/pexels-photo-10162526.jpeg?cs=srgb&dl=pexels-svetlana%F0%9F%8E%9E-10162526.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt=""/>
          </div>
          <div class="image">
            <img src="https://images.pexels.com/photos/4394807/pexels-photo-4394807.jpeg?cs=srgb&dl=pexels-woodysmedia-4394807.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w" alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageScroller;