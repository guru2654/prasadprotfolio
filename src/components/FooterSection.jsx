import React from 'react'
import "../styless/footer.css"

const FooterSection = () => {
  return (
    <div className="section4outermost">
      <div className="left">
        <p>If you are Looking for a web/app developer or need
          help with your project then feel free to contact me at
          
        </p>
        <span><i class="fa fa-phone"></i> +91 9177863850</span>
        <span style={{marginLeft:'10px'}}><i class="fa fa-envelope"></i> guruprasadprasadam8@gmail.com</span>
        <div  onClick={() => window.open('https://www.linkedin.com/in/guruprasad26/', '_blank')} url="https://linkedin.com" style={{ marginLeft:'10px',cursor:'pointer' }}>
        <a class="fa fa-linkedin" style={{border:'1px solid',borderRadius:'5px',padding:'3px',backgroundColor:'steelblue' }}></a>
        <span> Guruprasad</span>
        </div>
          
      </div>

      <div className="right">
        <h1>
          Let&apos;s<br />
          Work<br />
          together
        </h1>
      </div>
    </div>
  )
}

export default FooterSection
