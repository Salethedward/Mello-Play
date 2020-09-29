import React from 'react'

const newsletter = () => (
    <div className="col-lg-3 col-sm-6 pb-2">
        <h4><u>Newsletter</u></h4>
        <p>Enter your email address below:</p>
        <form onSubmit={(event) => event.preventDefault()}>
            <div className="input-group">
                <input type="email" className="formcontrol" />
                <div className="input-group-append m-1">
                    <button className="btn btn-dark">Subscribe</button>
                </div>
            </div>
        </form>
    </div>
)

export default newsletter