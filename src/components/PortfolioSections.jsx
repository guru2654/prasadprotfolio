import React from 'react'
import '../styless/portfolio.css'
import mainimage from '../assests/hj_mainimg.png'

const PortfolioSections = () => {
    return (
        <div className='section1outer'>
            <div className='subtextdiv'>
                <div className='left'>
                    <div className='about' >
                        <p style={{position:'relative',top:'260px',right:'68px'}} >Hi, I'm <span> Guru Prasad</span></p>
                        <p style={{position:'relative',top:'75px'}}>I build full stack websites and mobile applications, I will solve all your business problems. I am open to freelance work.</p>
                    </div>
                </div>
                <div className='right'>
                    {/* <div className='stat'>
                        <h1>30+</h1>
                        <p>Happy<br></br>clients</p>
                    </div> */}
                    <div style={{position:'relative',top:'100px',right:'65px'}} className='stat'>
                        <h1>2+</h1>
                        <p>Years of<br></br> experience</p>
                    </div>
                </div>
            </div>
            {/* <img src={mainimage}
                alt='mainimg'
                quality={100}
                className='mainimg'
            /> */}
            <div className='maintextdiv'>
                <p>I am a </p>
                <h1><span>&nbsp;</span>FULL STACK</h1>
                <h2>Developer</h2>
            </div>
            <video src={'/somke.mp4'} autoPlay loop muted
                className='smokevideo'></video>



        </div>
    )
}

export default PortfolioSections
