import React from 'react'
import './YoutubeCard.css'

export default function YoutubeCard({text1, text2}) {
    return (
        <div className="youtube-card">
            <h2>{text1}</h2>
            <p>{text2}</p>
        </div>
    )
}
