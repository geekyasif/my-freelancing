import React from 'react'

export default function YoutubeVideo({url}) {
    return (
        <div>
              <iframe style={{ marginBottom: 20 }} width="350" height="200" src={ "https://www.youtube.com/embed/" + url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}
