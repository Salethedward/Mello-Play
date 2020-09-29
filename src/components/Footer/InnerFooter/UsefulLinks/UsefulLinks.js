import React from 'react'
import UsefulLink from './UsefulLink'

const usefulLinks = () => (
    <div className="col-lg-3 col-sm-6 pb-2">
        <h4><u>Useful links</u></h4>
        <ul className="list-unstyled">
            <UsefulLink>Home</UsefulLink>
            <UsefulLink>About</UsefulLink>
            <UsefulLink>Services</UsefulLink>
            <UsefulLink>Contact</UsefulLink>
        </ul>
    </div>
)

export default usefulLinks