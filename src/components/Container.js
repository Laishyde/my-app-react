import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import './Container.css';
import Card1 from '../assets/icon1.png';
import Card2 from '../assets/icon2.png';
import Card3 from '../assets/icon3.png';
import Card4 from '../assets/icon4.png';
import Video from '../assets/catcat.mp4';
import Video2 from '../assets/video.mp4';

function Container() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const playerRef = useRef(null);

  const handleVideoEnd = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(0);
      setIsVideoPlaying(true);
    }
  };

  const handleVideoStart = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div>
      <div className='text'>
      <h1 id='Sobre'>Sobre</h1>
        <p>Olá eu sou a Laís tenho Experiência em engenharia de software com especialidades em desenvolvimento frontend e testes, infraestrutura, arquitetura de software, boas práticas, design gráfico, experiência de usuário, usabilidade e acessibilidade.</p>
        <p>Sou uma profissional adaptável e empática, atuo de maneira colaborativa identificando e elaborando soluções com foco nas necessidades da empresa. Minha principal motivação é sempre contribuir na criação e construção de soluções inovadoras para modernizar processos através da tecnologia.</p>
      </div>
      <div className='cd'>
        <div id="card" className="card">
          <div className="content">
            <div className='icon'>
              <img className='Card1' src={Card1} alt="" />
              <div>
                <h2 className='hh'> Desenvolvedor Front-End</h2>
              </div>
            </div>
          </div>
        </div>
        <div id="card" className="card">
          <div className="content">
            <div className='icon'>
              <img className='Card1' src={Card2} alt="" />
              <div>
                <h2 className='hh'> Web Designer</h2>
              </div>
            </div>
          </div>
        </div>
        <div id="card" className="card">
          <div className="content">
            <div className='icon'>
              <img className='Card1' src={Card3} alt="" />
              <div>
                <h2 className='hh'> Desenvolvedor Back-End</h2>
              </div>
            </div>
          </div>
        </div>
        <div id="card" className="card">
          <div className="content">
            <div className='icon'>
              <img className='Card1' src={Card4} alt="" />
              <div>
                <h2 className='hh'> Engenheiro de Software</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 id='Experiencia' className='text text1'>Experiência</h1>
      <div className="container">
        <div className="left-side">
          <div className='an'>
            <ReactPlayer
              ref={playerRef}
              url={Video}
              playing={isVideoPlaying}
              loop={false}
              width="100%"
              height="100%"
               muted={true}
              onEnded={handleVideoEnd}
              onStart={handleVideoStart}
            />
          </div>
        </div>
        <div className="divider">
          <div id="circle"></div>
        </div>
        <div className="right-side">
          <div className='two'>
             <ReactPlayer
              ref={playerRef}
              url={Video2}
              playing={isVideoPlaying}
              loop={false}
              width="100%"
              height="100%"
               muted={true}
              onEnded={handleVideoEnd}
              onStart={handleVideoStart}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
