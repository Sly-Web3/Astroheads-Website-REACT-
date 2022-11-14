import React, {useState} from 'react'
import {BiSearch} from 'react-icons/bi'
import {BsPerson} from 'react-icons/bs'
import {HiOutlineMenu} from 'react-icons/hi'
import{FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'

import {Link} from 'react-scroll'

import './NavbarStyles.css'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

  return (
    <div name='home' className={nav ? 'navbar nabbar-bg' : 'navbar'}>
        <div className={nav ? 'logo dark' : 'logo'}>
            <h2>ASTROHEADS</h2>
        </div>
        <ul className='nav-menu'>
            <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
            <Link to='destinations' smooth={true} duration={500}><li>NFTs</li></Link>
            <Link to='carousel' smooth={true} duration={500}><li>About</li></Link>
            <Link to='search' smooth={true} duration={500}><li>Rarity</li></Link>
          
        </ul>
        <div className='nav-icons'>
            <BiSearch className='icon' style={{marginRight: '1rem'}} />
            <BsPerson className='icon' />
        </div>
        <div className='hamburger' onClick={handleNav}>
            {!nav ? (<HiOutlineMenu className='icon' />) : (<AiOutlineClose style={{color:'#000'}} className='icon' />)}
        </div>

        <div className={nav ? 'mobile-menu active' : 'mobile-menu'}> 
            <ul className="mobile-nav">
            <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
            <Link to='destinations' smooth={true} duration={500}><li>NFTs</li></Link>
            <Link to='carousel' smooth={true} duration={500}><li>About</li></Link>
            <Link to='search' smooth={true} duration={500}><li>Rarity</li></Link>
            </ul>
            <div className='mobile-menu-bottom'>
                <div className='menu-icons'>
                    <button>Search</button>
                    <button>Account</button>
                </div>
                <div className='social-icons'></div>
                    <FaFacebook className='icon' />
                    <FaInstagram className='icon' />
                    <FaTwitter className='icon' />
                    <FaPinterest className='icon' />
                    <FaYoutube className='icon' />
            </div>
        </div>
    </div>
  )
}

export default Navbar