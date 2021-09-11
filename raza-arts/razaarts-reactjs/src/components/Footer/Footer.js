import React from 'react'
import './Footer.css'
import SocialIcons from '../SocialIcons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faFax, faGlassMartini, faMailBulk, faMap, faMapMarked, faMapPin, faMapSigns, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faMailchimp } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-brand-logo-container">
                <img src="/images/logo.jpg" alt="" />
                <h1>Raza Arts</h1>                
                    <SocialIcons/>
            </div>

            <div className="footer-contact-us">

                <div className="footer-round-card-container">
                    <div className="footer-rounded-card">
                        <FontAwesomeIcon icon={faMap} size="2x"/>
                    </div>
                    <p>Ballia, U.P, INDIA (277001)</p>
                </div>

                <div className="footer-round-card-container">
                    <div className="footer-rounded-card">
                        <FontAwesomeIcon icon={faPhone} size="2x"/>
                    </div>
                    <p>+91 123456789</p>
                </div>

                <div className="footer-round-card-container">
                    <div className="footer-rounded-card">
                        <FontAwesomeIcon icon={faMailBulk} size="2x"/>
                    </div>
                    <p>razaarts@gmail.com</p>
                </div>

            </div>
            <div className="bottom-footer">
                <p>© Copyright RazaArts. All Right Reserved. Designed and Developed by Geeky Asif</p>
            </div>
        </div>
    )
}
