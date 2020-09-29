import React from 'react'

const usefulLink = props => (
    <li>
        <a href="!#" className="text-secondary">{props.children}</a>
    </li>
)

export default usefulLink