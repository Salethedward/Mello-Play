import React from 'react'

const mainContent = props => (
    <div 
        className="container d-flex flex-column justify-content-center align-items-center" 
        style={{height: "70vh"}}>
        { props.children }
    </div>
)

export default mainContent