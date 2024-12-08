import React from 'react'
import signature from '../assests/guruprasad1.png'
import { useState } from 'react'
import '../styless/navbar.css'

const NavbarSection = () => {

    const [navActive, setNavActive] = useState(false)

  const handleButtonClick=(section)=>{
    console.log(section)
  }  
  const handlenavbarclick=()=>{
    setNavActive(!navActive)
  }
  return (
    <div className="navouter">
      <div className="sign">
        <img
          src={signature}
          width={125}
          quality={100}
          alt="signatre"
        />
        
      </div>
      <div className={navActive? 'nav_toggler navactive':'nav_toggler'} onClick={()=>handlenavbarclick()} >
        <span></span>
      </div>

        <div className="right">
        <button onClick={() => handleButtonClick("home")}>Home</button>
        <button onClick={() => handleButtonClick("about")}>About</button>
        <button onClick={() => handleButtonClick("projects")}>Projects</button>
        <button onClick={() => handleButtonClick("skills")}>Skills</button>
        <button onClick={() => handleButtonClick("contact")}>Contact</button>
      </div>
      {navActive && <div className="right1">
        <button onClick={() => handleButtonClick("home")}>Home</button>
        <button onClick={() => handleButtonClick("about")}>About</button>
        <button onClick={() => handleButtonClick("projects")}>Projects</button>
        <button onClick={() => handleButtonClick("skills")}>Skills</button>
        <button onClick={() => handleButtonClick("contact")}>Contact</button>
      </div>}
    </div>
  );
}

export default NavbarSection
