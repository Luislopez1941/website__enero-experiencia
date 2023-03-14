import React from 'react'
import footer from './Footer.css'
import headerImages from '../assets/images/images.js'


const Footer = () => {
  return (
    <footer className='footer'>
        

        <div className='container__footer'>
            <div className='contact'>
                <div className='title'>
                    <h4>ExperienciasEnero</h4>
                </div>
                <div className='about'>
                    <h5>Home</h5>
                    <h5>About</h5>
                    <h5>Contact</h5>
                    <h5>Blog</h5>
                </div>
                <small>Copyright @ 2021 Experiencias All
                rights reserved</small>
            </div>
            <div className='location'>
                <div className='item'>
                    <img src={headerImages.location} alt="ubicacion"></img>
                    <small>Ghaziabad</small>
                </div>
                <div className='item'>
                    <img src={headerImages.call} alt="telefono"></img>
                    <small>+52 998-804-9373</small>
                </div>
                <div className='item'>
                    <img src={headerImages.mail} alt="correo"></img>
                    <small>expe@gmail.com</small>
                </div>
            </div>
            <div className='company'>
                <h4>Sobre la compañía</h4>
                <small>"Derechos reservados" indica que una obra está protegida
                    por derechos de autor y no puede ser utilizada sin el permiso del titular.
                </small>
                <div className='social__networks'>
                    <img src={headerImages.facebook} alt='facebook'></img>
                    <img src={headerImages.instagram} alt='instagram'></img>
                    <img src={headerImages.twitter} alt='twitter'></img>
                    <img src={headerImages.linkedin} alt='linkedin'></img>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
