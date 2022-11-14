import React from 'react'
import './SearchStyles.css'

import Gold from '../../assets/gold.png'

function Search() {
  return (
    <div name='book' className='search'>
       <div className='container'>
           <div className='left'>
              <h2> NFT Utility</h2>
              <p>Access into Astroheads very own private education centre where we will help peopl educate themselves about the web3 space and navigate the scary world of crypto.</p>
            <div className='search-col-2'>
              <div className='box'>
                  <div>
                    <img src={Gold} alt="/" style={{marginRight: '1rem'}}/>
                  </div>
                    <h3>OFFICIALLY CERTIFIED</h3>
              </div>
              <div className='box'>
                  <div>
                    <h3> JOIN OUR COMMUNITY </h3>
                    <p> Our Floor price has remianed steady for over a year now</p>
                    <button>View on Opensea</button>
                  </div>
              </div>
            </div>
            </div>
            <div className='right'>
              <div className='promo'>
                <h4 className='save'>Join our Giveaway</h4>
                <p className='timer'>12 Hours Left!</p>
                <p className='offers'> View Offer</p>
              </div>
              <form>
                <div className='input-wrap'>
                  <label>Traits</label>
                  <select>
                    <option value='1'>Eyes</option>
                    <option value='1'>Background</option>
                    <option value='1'>Head</option>
                    <option value='1'>Vechicle</option>
                    <option value='1'>Hand</option>
                    <option value='1'>Mouth</option>
                    <option value='1'>Back</option>
                  </select>
                </div>
                <div className='date'>
                  <div className='input-wrap'>
                    <label>Check-In</label>
                    <input type='date' />
                  </div>
                  <div className='input-wrap'>
                    <label>Check-Out</label>
                    <input type='date' />
                  </div>
                </div>
                <button>Browse</button>
              </form>
            </div>
          </div>
    </div>
  )
}

export default Search