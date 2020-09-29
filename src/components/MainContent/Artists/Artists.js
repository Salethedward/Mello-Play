import React from 'react'
import Artist from './Artist'

const artists = props => {
    const newArtists = props.artists.map(artist => {

        return <Artist
                    key={artist.id}
                    name={artist.name}
                    followers={artist.followers.total}
                    popularity={artist.popularity}
                    genre={artist.genres[0]}
                    image={artist.images[0]}
                    click={() => props.clicked(artist.id)} />
        })

    return (
        <div className="container my-4 pt-3">
            <div className="row justify-content-center">
                {newArtists}
            </div>
        </div>
    )
}

export default artists