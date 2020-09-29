import React from 'react'
import Arty from '../../../assets/images/arty.jpg'

const albumHeader = props => {
    let album = null

    if(props.curArtist) {
        let image = <img src={Arty} className="card-img-top p-3 border border-secondary" alt="artist img" />

        if(props.curArtist.image) {
            image = <img src={props.curArtist.image.url} className="card-img-top p-3 border border-secondary" alt="artist img" />
        }

        album = (
            <div className="card mb-3 bg-dark text-light w-75">
                <div className="p-4">
                    {image}
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title">{props.curArtist.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item list-group-item-dark">
                        <strong>Followers:  </strong>{props.curArtist.followers}
                    </li>
                    <li className="list-group-item list-group-item-dark">
                        <strong>Popularity:  </strong>{props.curArtist.popularity}
                    </li>
                    <li className="list-group-item list-group-item-dark">
                        <strong>Genre:  </strong>
                        <span className="text-capitalize">
                            {props.curArtist.genre ? props.curArtist.genre : '-'}
                        </span>
                    </li>
                </ul>
            </div>
        )
    }
    

    return album
}

export default albumHeader

