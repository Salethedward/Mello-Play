import React from 'react'
import NavigationItems from './Navigation/NaviationItems'
import NavbarToggleBtn from './NavbarToggleBtn'
import Logo from './Logo'

const toolbar = () => (
  <nav className="navbar fixed-top navbar-expand-sm navbar-dark" style={{background: "#00264d"}}>
    <Logo />
    <NavbarToggleBtn />
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <NavigationItems />
    </div>
  </nav>
)

export default toolbar