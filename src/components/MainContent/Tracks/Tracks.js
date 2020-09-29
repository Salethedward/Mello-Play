import React from 'react'
import Track from './Track'

const tracks = props => {
    const tracks = props.newTracks.map(track => {
        const artists = track.artists
        const newArtists = []
        artists.forEach(el => newArtists.push(el.name))
        const updatedArtists = newArtists.join(', ')

        return <Track 
                    key={track.id}
                    trackName={track.name}
                    trackDuration={track.duration_ms}
                    singers={updatedArtists} />
    })

    return (
        <ul className="list-group">
            {tracks}
        </ul>
    )
}

export default tracks