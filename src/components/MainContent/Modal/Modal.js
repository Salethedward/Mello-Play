import React from 'react'
import Tracks from '../Tracks/Tracks'
import Spinner from '../../UI/Spinner'

const modal = props => {
    let modalTitle = null
    let modalBody = null

    if (props.loading) {
        modalBody = <Spinner />
    }

    if ( props.error ) {
        modalBody = <p className="text-center">Something went Wrong</p>
    }

    if (props.album) {
        const date = props.album.releaseDate.split('-')
        const reversedDate = date.reverse().join('/')

        modalTitle = (
            <h5 className="modal-title" id="ModalLabel">
                {props.album.name}<span className="text-light"> - MeLLoPlaY.com</span>
            </h5>
        )
        modalBody = (
            <div className="modal-body">
                <div className="border border-secondary mb-2 p-2">
                    <h5 className="text-light">
                        <span className="text-secondary">Popularity: </span>{props.album.popularity}
                    </h5>
                    <h5 className="text-light">
                        <span className="text-secondary">Release date: </span>{reversedDate}
                    </h5>
                    <h5 className="text-light">
                        <span className="text-secondary">Total tracks: </span>{props.album.totalTracks}
                    </h5>
                </div>
                <Tracks newTracks={props.tracks} />
            </div>
        )
    }

    return (
    <div className="modal fade" id="Modal" tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content bg-dark text-info">
                <div className="modal-header">
                    { modalTitle }
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                { modalBody }
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default modal