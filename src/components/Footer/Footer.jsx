import React from 'react'
import "./Footer.css"
import { Linkedin, Mail } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faXTwitter,faGithub } from '@fortawesome/free-brands-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
export default function Footer() {
  return (
    
    <div className='footer' id="footer">
  {library.add( faXTwitter,faGithub,faRocket)}

      <h1>Lets Get Connected <FontAwesomeIcon icon="fa-solid fa-rocket" className='icon'/></h1>
      <div className='icons-container'>
          <div>
            <a href="https://www.linkedin.com/in/sivatejach/"><Linkedin className='icon'/></a>
          </div>
          <div>
          <a href="https://x.com/Tej2k3"><FontAwesomeIcon icon="fa-brands fa-x-twitter fa-lg" className='icon'/></a>
          </div>
          <div>
            <a href='mailto:chsteja2003@gmail.com'><Mail className='icon'/></a>
          </div>
          <div>
          <a href='https://github.com/Sivatejach'><FontAwesomeIcon icon="fa-brands fa-github" className='icon'/></a>
          </div>
          
      </div>
      <p>Build By Siva Teja Cherukupalli</p>
    </div>
  )
}
