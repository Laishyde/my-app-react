import React, { useState } from 'react';
import './Content.css';
import Image from '../assets/1.png'
import Image2 from '../assets/baby.png'
import Image3 from '../assets/e3.png'
import Image4 from '../assets/m3.png'
import Image5 from '../assets/oito.png'
import Image6 from '../assets/2.png'
import Image7 from '../assets/cinco.png'
import Image8 from '../assets/dois.png'
import Image9 from '../assets/tres.png'
import Image10 from '../assets/quatro.png'



function Content() {
    // Estados para as contagens de likes e dislikes
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);

    // Função para lidar com a contagem de likes
    const handleLike = () => {
        setLikeCount(likeCount + 1);
    };

    // Função para lidar com a contagem de dislikes
    const handleDislike = () => {
        setDislikeCount(dislikeCount + 1);
    };

    return (
        <div>
            <div className='text'>
            <p className='text1'>Na minha experiência profissional,fui responsável por realizar todo o design de publicidade e propaganda, bem como criar e gerenciar o conteúdo das redes sociais da empresa,sempre comprometida em oferecer soluções criativas e eficazes para promover a marca e alcançar o público-alvo de maneira eficiente.</p>
            </div>

        <div className='conteudo'>      
        <div className="card3">
              <img className='image' src={Image} alt="" width={300} />
            <div className="like-dislike-counts">
              
                <div className="like-count">
                    <span>Like: {likeCount}</span>
                    <button onClick={handleLike}>👍</button>
                </div>
                <div className="dislike-count">
                    <span>Dislike: {dislikeCount}</span>
                    <button onClick={handleDislike}>👎</button>
                </div>
            </div>
        </div>
        <div className="card3">
              <img className='image' src={Image2} alt="" width={300}  />
            <div className="like-dislike-counts">
              
                <div className="like-count">
                    <span>Like: {likeCount}</span>
                    <button onClick={handleLike}>👍</button>
                </div>
                <div className="dislike-count">
                    <span>Dislike: {dislikeCount}</span>
                    <button onClick={handleDislike}>👎</button>
                </div>
            </div>
        </div>
        <div className="card3">
              <img className='image' src={Image5} alt="" width={300}  />
            <div className="like-dislike-counts">
              
                <div className="like-count">
                    <span>Like: {likeCount}</span>
                    <button onClick={handleLike}>👍</button>
                </div>
                <div className="dislike-count">
                    <span>Dislike: {dislikeCount}</span>
                    <button onClick={handleDislike}>👎</button>
                </div>
            </div>
        </div>
            <div className="card3">
              <img className='image' src={Image9} alt="" width={300} />
            <div className="like-dislike-counts">
              
                <div className="like-count">
                    <span>Like: {likeCount}</span>
                    <button onClick={handleLike}>👍</button>
                </div>
                <div className="dislike-count">
                    <span>Dislike: {dislikeCount}</span>
                    <button onClick={handleDislike}>👎</button>
                </div>
                   
             </div>
        
           </div>
           <div className="card3">
              <img className='image' src={Image7} alt="" width={300} />
            <div className="like-dislike-counts">
              
                <div className="like-count">
                    <span>Like: {likeCount}</span>
                    <button onClick={handleLike}>👍</button>
                </div>
                <div className="dislike-count">
                    <span>Dislike: {dislikeCount}</span>
                    <button onClick={handleDislike}>👎</button>
                </div>
                   
             </div>
        
           </div>
           <div className="card3">
              <img className='image' src={Image8} alt="" width={300} />
            <div className="like-dislike-counts">
              
                <div className="like-count">
                    <span>Like: {likeCount}</span>
                    <button onClick={handleLike}>👍</button>
                </div>
                <div className="dislike-count">
                    <span>Dislike: {dislikeCount}</span>
                    <button onClick={handleDislike}>👎</button>
                </div>
                   
             </div>
        
           </div>
           <div className="card3">
              <img className='image' src={Image9} alt="" width={300} />
            <div className="like-dislike-counts">
              
                <div className="like-count">
                    <span>Like: {likeCount}</span>
                    <button onClick={handleLike}>👍</button>
                </div>
                <div className="dislike-count">
                    <span>Dislike: {dislikeCount}</span>
                    <button onClick={handleDislike}>👎</button>
                </div>
                   
             </div>
        
           </div>
           <div className="card3">
              <img className='image' src={Image4} alt="" width={300} />
            <div className="like-dislike-counts">
              
                <div className="like-count">
                    <span>Like: {likeCount}</span>
                    <button onClick={handleLike}>👍</button>
                </div>
                <div className="dislike-count">
                    <span>Dislike: {dislikeCount}</span>
                    <button onClick={handleDislike}>👎</button>
                </div>
                   
             </div>
        
           </div>
           <div className="card3">
              <img className='image' src={Image10} alt="" width={300} />
            <div className="like-dislike-counts">
              
                <div className="like-count">
                    <span>Like: {likeCount}</span>
                    <button onClick={handleLike}>👍</button>
                </div>
                <div className="dislike-count">
                    <span>Dislike: {dislikeCount}</span>
                    <button onClick={handleDislike}>👎</button>
                </div>
                   
             </div>
        
           </div>
           
        </div>
        </div>
        
    );
}

export default Content;
