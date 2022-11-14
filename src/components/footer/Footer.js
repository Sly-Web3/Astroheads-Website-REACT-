import React from 'react'
import './FooterStyles.css'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='top'>
                <h3>ASTROHEADS</h3>
                <div className='socials'>
                    <FaFacebook className='icon' />
                    <FaInstagram className='icon' />
                    <FaTwitter className='icon' />
                </div>
            </div>
            <div className='bottom'>
                <div className='left'>
                    <ul>
                        <li>About</li>
                        <li>Partnerships</li>
                        <li>Careers</li>
                        <li>Newsroom</li>
                        <li>Advertising</li>
                    </ul>
                </div> 
                <div className='left'>
                    <ul>
                        <li>Contact</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>Policy</li>
                        <li>Pricing</li>
                    </ul>

                </div>
                </div>
            </div>
        </div>
  )
}

export default Footer