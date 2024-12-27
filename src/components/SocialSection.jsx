import React from 'react'
import '../styless/social.css'
import { SocialIcon } from 'react-social-icons'

const SocialSection = () => {
  return (
    <div className="social">
      

      <div className="socialcard"
        onClick={() => window.open('https://www.linkedin.com/in/guruprasad26/', '_blank')}
      >
        
        <span url="https://linkedin.com" style={{ height: 40, width: 40 }} />
        <a class="fa fa-linkedin"></a>
        <p>Guruprasad</p>
      </div>

      
    </div>
  )
}

export default SocialSection
