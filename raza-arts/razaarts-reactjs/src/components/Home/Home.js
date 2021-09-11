import React from 'react';
import './Home.css';
import Intro from './Intro';
import Painting from './Painting';
import Services from './Services';
import Payment from './Payment';
import LatestVideo from './LatestVideo';

export default function Home() {
    return (
        <div className="home-container">
            <Intro/>
            <Painting/>
            <Services/>
            <Payment/>
            <LatestVideo/>
        </div>
    )
}
