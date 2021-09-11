import React from 'react'
import './SocialIcons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function SocialIcons() {
    return (
       
        <div className="social-icons-container">
            <a href=""><FontAwesomeIcon className="social-icons-btn"  size="lg" icon={faInstagram}/></a>
            <a href=""><FontAwesomeIcon className="social-icons-btn"  size="lg" icon={faFacebook}/></a>
            <a href=""><FontAwesomeIcon className="social-icons-btn"  size="lg" icon={faLinkedin}/></a>
            <a href=""><FontAwesomeIcon className="social-icons-btn"  size="lg" icon={faYoutube}/></a>
        </div>
    )
}
