import React from 'react'
import Logo from '../../assets/images/music-play.png'

const logo = () => (
    <a className="navbar-brand text-info" href="/">
        <img src={Logo} width="30" height="30" loading="lazy" alt="logo" className="rounded-circle" />
        <span className="mx-2 font-weight-bold">MeLLo PlaY</span>
    </a>
)

export default logo