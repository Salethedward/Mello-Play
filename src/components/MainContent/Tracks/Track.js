import React from 'react'

const track = props => {
    const seconds = (Math.floor(props.trackDuration / 1000)) % 60;
    const minute = (Math.floor(props.trackDuration / 60000)) % 60;
    const duration = `0${minute}:${seconds > 10 ? seconds : `0${seconds}`}`

    return (
        <li className="list-group-item bg-dark border border-secondary">
            {props.trackName} - <span className="text-light">({duration})</span>
            <p className="text-warning">Singer(s): {props.singers}</p>
        </li>
    )
}

export default track