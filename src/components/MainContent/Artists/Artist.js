import React from 'react'
import ArtistLogo from '../../../assets/images/arty.jpg'

const artist = props => {
    let image = <img src={ArtistLogo} className="card-img-top h-100" alt="artist logo" />
    if(props.image) {
        image = <img src={props.image.url} className="card-img-top h-100" alt="artist logo" />
    }

    return (
        <div className="col-10 col-sm-6 col-md-5 col-lg-4 col-xl-3 mb-3">
            <div className="card bg-dark text-info h-100 border border-dark">
                <div className="card-header h-100">{image}</div>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                </div>
                <ul className="list-group list-group-flush text-info">
                    <li className="list-group-item bg-dark">
                        <strong className="text-warning">Followers: </strong> {props.followers}
                    </li>
                    <li className="list-group-item bg-dark">
                        <strong className="text-warning">Popularity: </strong> {props.popularity}
                    </li>
                    <li className="list-group-item bg-dark">
                        <strong className="text-warning">Genre: </strong>
                        <span className="text-capitalize">{props.genre ? props.genre : '-'}</span>
                    </li>
                </ul>
                <div className="card-footer">
                    <button className="btn btn-danger btn-sm" onClick={props.click}>View Albums</button>
                </div>
            </div>
        </div>
    )
}

export default artist
