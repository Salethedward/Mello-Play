import React from 'react'
import MusicPlay from '../../../assets/images/music-play.png'

const album = props => {
    const date = props.releaseDate.split('-')
    const reversedDate = date.reverse().join('/')

    let image = <img src={MusicPlay} className="card-img h-100" alt="Music Play" />

    if (props.image) {
        image = <img src={props.image.url} className="card-img h-100" alt="Album pic" />
    }

    return (
        <div className="card m-2
                    text-light border border-secondary
                    shadow-lg bg-dark rounded"
                style={{maxWidth: "540px"}}>
            <div className="row no-gutters">
                <div className="col-6 h-100">
                    {image}
                </div>
                <div className="col-6">
                    <div className="card-body">
                        <h5 className="card-title">
                            <strong className="text-info">Album Name:  </strong>{props.albumName}
                        </h5>
                        <p className="card-text">
                            <strong className="text-info">Release date:  </strong>{reversedDate}
                        </p>
                        <p className="card-text">
                            <strong className="text-info">Total tracks:  </strong>{props.totalTracks}
                        </p>
                        <button className="btn btn-outline-info btn-sm"
                                data-toggle="modal" 
                                data-target="#Modal" 
                                onClick={props.click}>
                            View Tracks
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default album

