import React from 'react'
import './HeroStyles.css'
import {AiOutlineSearch} from 'react-icons/ai'

import Video from '../../assets/spacevideo.mp4'

function Hero() {
    return (
        <div className='hero'> 
           <video autoPlay loop muted id='video'>
              <source src={Video} type='video/mp4' />
           </video>
           <div className="overlay"></div>
           <div className="content">
               <h1>ASTROHEADS</h1>
               <h2>A collection of 6513 Aliens, born on the Ethereum Blockchain</h2>
            </div>
        </div>
    )       
}
  
export default Hero