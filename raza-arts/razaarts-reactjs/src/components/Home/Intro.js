import React from 'react'
import './Intro.css'
import HireMeBtn from '../HireMeBtn'
import SocialIcons from '../SocialIcons'

export default function Intro() {
    return (
        <div className="intro-container">

            <div className="intro-row">
            
                <div className="intro-col-1">
                    
                    <div className="intro">
                        <h5>Hello, I'm</h5>
                        <h1>Raza Khan</h1>
                        <h5>Professional and Experience Artist</h5>
                    </div>

                    <SocialIcons/>
                    <HireMeBtn text="Hire me 👋"/>
                    

                </div>

                <div className="intro-col-2">
                    <img className="intro-img" src="images/logo.jpg" alt="" />
                </div>
                
            </div>
        </div>
    )
}
