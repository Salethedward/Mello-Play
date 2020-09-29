import React from 'react'

const spinner = () => (
    <div className="text-center">
        <div className="spinner-border mt-5 p-5" style={{width: "5rem", height: "5rem"}} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
)
export default spinner