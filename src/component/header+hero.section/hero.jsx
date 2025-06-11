import React from 'react'
import './hero.css'

function hero() {
  return (
    <div className='hero-container'>
        <div className='header'>
            <div className='logo'>
                <img src="/logo.png" alt="" />
            </div>
            <div className='header-pages'>
                <button>Home</button>
                <button>About us</button>
                <button>Services</button>
                <button>Portfolio</button>
                <button>Case Studies</button>
                <button>FAQ</button>
                <button>More</button>
            </div>
            <div className='letstalk'>
                <button>Let's Talk</button>
            </div>
        </div>
        <div className='hero'>
            <p className='h1'>Empowering Your Business <br />with <span>AI Excellence</span></p>
            <p className='p'>Transform your business with cutting-edge artificial intelligence solutions.</p>
            <button>Get a free consultation</button>
        </div>
    </div>
  )
}

export default hero
