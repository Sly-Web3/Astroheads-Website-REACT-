import React from 'react'
import './DestinationsStyle.css'

import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'
import Maldives2 from '../../assets/maldives2.jpg'
import KeyWest from '../../assets/keywest.jpg'


function Destinations() {
  return (
    <div name='destinations' className='destinations'>
        <div className='container'>
            <h1>A Collection of Aliens from Outerspace</h1>
            <div className='img-container'>
                <img className='span-3 image-grid-row-2' src={BoraBora} alt='/'></img>
                <img src={BoraBora2} alt='/'></img>
                <img src={Maldives} alt='/'></img>
                <img src={Maldives} alt='/'></img>
                <img src={KeyWest} alt='/'></img>
            </div>
        </div>
    </div>
  )
}

export default Destinations