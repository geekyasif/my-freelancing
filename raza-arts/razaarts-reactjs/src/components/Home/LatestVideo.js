import React from 'react'
import './LatestVideo.css'
import YoutubeCard from '../YoutubeCard'
import YoutubeBtn from '../YoutubeBtn'
import YoutubeVideo from '../YoutubeVideo'
import Heading from '../Heading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import {
    faUpload,
    faPallet,
    faCheckCircle,
    faTruck,
    faCreditCard,
    faMehBlank,
    faBuilding,
    faUniversity,
  } from "@fortawesome/free-solid-svg-icons";

export default function LatestVideo() {
    return (
        <div className="latest-video-container">
            
            <Heading title="Latest Videos" />

            <div className="latest-videos">

                <YoutubeVideo url="91zThgS0wMw"/>

                <YoutubeVideo url="DYx3lYTCSA0"/>

                <YoutubeVideo url="vDR6dnPLCIY"/>

                <YoutubeVideo url="tyGqCMbq3oM"/>


                <YoutubeVideo url="Wf8ZYqxrbY4"/>

                <YoutubeVideo url="uxxFdx9r6DA"/>

            </div>

            <div className="yt-card-contianer">
                <YoutubeCard text1="2.5k" text2="Subscribers"/>
                <YoutubeCard text1="50" text2="Videos"/>
                <YoutubeCard text1="98k" text2="Views"/>
            </div>

            <div className="latest-video-yt-btn-container">
                <a href=""> 
                    <FontAwesomeIcon className="fa-youtube" icon={faYoutube} />
                    Subscribe Now 🚀
                </a>
            </div>


        </div>
    )
}
