import React from 'react'
import './Heading.css'

export default function Heading({title}) {
    return (
        <div className="heading-container">
            <h1 className="heading-title">{title}</h1>
        </div>
    )
}
