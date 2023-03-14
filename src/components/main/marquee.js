import React from 'react'
import Marquee from './marquee.css';
import headerImages from '../../assets/images/images.js'

const marquee = () => {
  return (
    <div className='marque'> 
    <div className='title__marquee'>
    <h2>Nuestros clientes</h2>
    </div>
      <article class="wrapper">
        <div class="marquee">
          <div class="marquee__group">
            <div className='marquee__items'>
              <img className='marquee__item' src={headerImages.carajillo} />
            </div>
            <div className='marquee__items'>
              <img className='marquee__item' src={headerImages.chambao} />
            </div>
            <div className='marquee__items'>
              <img className='marquee__item' src={headerImages.chartiers} />
            </div>
            <div className='marquee__items'>
              <img className='marquee__item' src={headerImages.ZaytunTABOO} />
            </div>
            <div className='marquee__items'>
              <img className='marquee__item' src={headerImages.colegiocesare} />
            </div>
            <div className='marquee__items'>
              <img className='marquee__item' src={headerImages.divinacarne} />
            </div>
            <div className='marquee__items'>
              <img className='marquee__item' src={headerImages.fish} />
            </div>
            <div className='marquee__items'>
              <img className='marquee__item' src={headerImages.confessions} />
            </div>
          </div>
          <div aria-hidden="true" class="marquee__group">
            <div className='marquee__items'>
              <img className='marquee__item' src={headerImages.carajillo} />
            </div>
            <div className='marquee__items'>
              <img className='marquee__item' src={headerImages.chambao} />
            </div>
            <div className='marquee__items'>
              <img className='marquee__item' src={headerImages.chartiers} />
            </div>
            <div className='marquee__items'>
              <img className='marquee__item' src={headerImages.ZaytunTABOO} />
            </div>
            <div className='marquee__items'>
              <img className='marquee__item' src={headerImages.colegiocesare} />
            </div>
            <div className='marquee__items'>
              <img className='marquee__item' src={headerImages.divinacarne} />
            </div>
            <div className='marquee__items'>
              <img className='marquee__item' src={headerImages.fish} />
            </div>
            <div className='marquee__items'>
              <img className='marquee__item' src={headerImages.confessions} />
            </div>
          </div>
        </div>
        <div class="marquee marquee--reverse">
          <div class="marquee__group">
            <div className='marquee__items'>
              <img className='marquee__item' src={headerImages.global} />
            </div>
            <div className='marquee__items'>
              <img className='marquee__item' src={headerImages.IXGlobal} />
            </div>
            <div className='marquee__items'>
              <img className='marquee__item' src={headerImages.marina} />
            </div>
            <div className='marquee__items'>
              <img className='marquee__item' src={headerImages.mesekh} />
            </div>
            <div className='marquee__items'>
              <img className='marquee__item' src={headerImages.mexhoteles} />
            </div>
            <div className='marquee__items'>
              <img className='marquee__item' src={headerImages.PRINCIPALBLANCO} />
            </div>
            <div className='marquee__items'>
              <img className='marquee__item' src={headerImages.TABOO} />
            </div>
            <div className='marquee__items'>
              <img className='marquee__item' src={headerImages.Rosanegra} />
            </div>
            <div className='marquee__items'>
              <img className='marquee__item' src={headerImages.YACHTIME} />
            </div>
          </div>
          <div aria-hidden="true" class="marquee__group">
            <div className='marquee__items'>
              <img className='marquee__item' src={headerImages.global} />
            </div>
            <div className='marquee__items'>
              <img className='marquee__item' src={headerImages.IXGlobal} />
            </div>
            <div className='marquee__items'>
              <img className='marquee__item' src={headerImages.marina} />
            </div>
            <div className='marquee__items'>
              <img className='marquee__item' src={headerImages.mesekh} />
            </div>
            <div className='marquee__items'>
              <img className='marquee__item' src={headerImages.mexhoteles} />
            </div>
            <div className='marquee__items'>
              <img className='marquee__item' src={headerImages.PRINCIPALBLANCO} />
            </div>
            <div className='marquee__items'>
              <img className='marquee__item' src={headerImages.TABOO} />
            </div>
            <div className='marquee__items'>
              <img className='marquee__item' src={headerImages.Rosanegra} />
            </div>
            <div className='marquee__items'>
              <img className='marquee__item' src={headerImages.YACHTIME} />
            </div>
      </div>
  </div>
</article>
</div>


  )
}

export default marquee
