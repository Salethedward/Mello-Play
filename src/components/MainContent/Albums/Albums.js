import React from 'react'
import AlbumHeader from './AlbumHeader'
import Album from './Album'

const albums = props => {
    const album = props.albums.map(album => {
        return <Album 
                    key={album.id}
                    albumName={album.name}
                    releaseDate={album.release_date}
                    totalTracks={album.total_tracks}
                    image={album.images[0]}
                    click={() => props.clicked(album.id)} />
    })

    return (
        <div className="container">
            <div className="container-fluid border border-dark bg-dark">
                <div className="row justify-content-center">
                    <AlbumHeader curArtist={props.artist} />
                </div>
            </div>
            <div className="row justify-content-center">
                {album}
            </div>
        </div>
    )
}

export default albums