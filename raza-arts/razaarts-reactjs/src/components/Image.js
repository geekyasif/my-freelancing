import React from 'react'
import "./Image.css"

export default function Image({url}) {
    return (
            <img className="image" src={url} alt="" />
    )
}
