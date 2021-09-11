import React from 'react'
import './Services.css'
import Heading from '../Heading'
import HireMeBtn from '../HireMeBtn'

export default function Services() {
    return (
        <div className="services-container">
            <Heading title="Our Services" />

            <div className="price-card-container">
                <div className="price-card">
                    <img src="/images/2.jpg" alt="" />
                    <div className="price-card-text-container">
                        <p className="category-text">Oil Painting on Canvas</p>
                        <p>A3 size ₹ 4000</p>
                        <p>A2 size ₹ 7000</p>
                        <p>A1 size ₹ 12000</p>
                        <p>Working Days 7-15 </p>
                    </div>
                </div>

                <div className="price-card">
                    <img src="/images/7.jpg" alt="" />
                    <div className="price-card-text-container">
                        <p className="category-text">Pencil Drawing Black & white</p>
                        <p>A3 Size ₹ 2000</p>
                        <p>A2 size ₹ 3000</p>
                        <p>A1 size ₹ 4000</p>
                        <p>Working Days 4-5</p>
                    </div>
                </div>


                <div className="price-card">
                    <img src="/images/3.jpg" alt="" />
                    <div className="price-card-text-container">
                        <p className="category-text">Colour Pencil Drawing </p>
                        <p>A3 Size ₹ 2000</p>
                        <p>A1 size ₹ 4000</p>
                        <p>A2 size ₹ 3000</p>
                        <p>Working Days 4-5 </p>
                    </div>
                </div>



            </div>

            <div className="draw-my-portrait-btn-container">
                <HireMeBtn text="Draw My Portrait 👋"/>
            </div>

            
        </div>
    )
}
