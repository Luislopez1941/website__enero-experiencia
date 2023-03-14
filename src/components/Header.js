import Header from './Header.css'
import headerImages from '../assets/images/images.js'

const header = () => {
  
  return (
    <header className='hero'>
      <div className='right'>
        <div className='right__container'>
          <div>
            <figure className='logo__container'>
              <img src={headerImages.logo} alt='logo de pagina'/>
              <h2>Alce Studios</h2>
            </figure>
          </div>
          <div className='layout__right'>
            <div className='main__right'>
              <h1>Lorem ipsum dolor sit amet</h1>
              <h3>Quo recusandae tempore qui temporibus
              nihil ex voluptatem velit est similique
              voluptas quo mollitia rerum.</h3>
              <div className='cta'>
                <a href="#">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                    Ver mas
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className='left'>
          <div className='left__container'>
            <nav className='nav__items'>
              <ul className='nav__links'>
                <li className='nav__item'><a className='nav__link' href='#'>Inicio</a></li>
                <li className='nav__item'><a className='nav__link' href='#'>Portafolio</a></li>
                <li className='nav__item'><a className='nav__link' href='#'>Seccion</a></li>
                <li className='nav__item'><a className='nav__link' href='#'>Información</a></li>
                <li className='nav__item'><a className='nav__link' href='#'>Contacto</a></li>
              </ul>
            </nav>
            <div className='burger'>
            </div>
          </div>
      </div>
    </header>
  )
}
export default header


