import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import './YoutubeBtn.css'

export default function YoutubeBtn({text}) {
    return (
       
        <div className="yt-btn-container">
        <a href=""> 
            <FontAwesomeIcon className="fa-youtube" icon={faYoutube} />
             {text}
        </a>
    </div>
    )
}
