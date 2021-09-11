import React from 'react'
import Heading from '../Heading'
import Image from '../Image'
import './Painting.css'

export default function Painting() {
    return (
        <div className="painting-container">
            <Heading title="Turn your photo into painting !" />
            <p className="sub-heading">100% Hand-Painted to Perfection by BEST Portrait Artists.</p>
            <div className="images">
                <Image url="/images/1.jpg"/>
                <Image url="/images/2.jpg"/>
                <Image url="/images/3.jpg"/>
                <Image url="/images/4.jpg"/>
                <Image url="/images/5.jpg"/>
                <Image url="/images/6.jpg"/>
                <Image url="/images/7.jpg"/>
                <Image url="/images/8.jpg"/>
            </div>
        </div>
    )
}
