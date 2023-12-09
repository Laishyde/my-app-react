import './Header.css';
import Logo from '../assets/logo.png'
import Gif from '../assets/gif.gif'
import React, { useState } from 'react';
function Header(){
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return(
        <div>
            <header>
                 <div className="mobile-menu">
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      {isOpen && (
        <div className="menu-items">
          <ul>
            <li><a href="#Sobre">Sobre</a></li>
            <li><a href="#Experiencia">Experiência</a></li>
            <li><a href="#Contato">Contato</a></li>
          </ul>
        </div>
      )}
    </div>
                
              <img className='logo' src={Logo} alt="" />
                <div className='list'>
             <a href="#Sobre"><li >Sobre</li></a>
             <a href="#Experiencia">  <li>Experiência</li></a> 
              <a href="#Contato">  <li>Contato</li></a>
                </div>
            </header>
            <div className='wall'>
                <div className='heart'>
                <img id='Voltar' className='gif' src={Gif} alt=""  />
                </div>
            </div>
        </div>

    )
}
export default Header