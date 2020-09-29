import React from 'react'

const searchBar = props => (
    <form className="input-group my-3" onSubmit={props.submitted}>
        <input 
            type="text" 
            className="form-control" 
            placeholder="Search for artists..." 
            aria-label="Search for artists" 
            aria-describedby="button-addon2"
            onChange={props.changed}
            value={props.value} />
        <div className="input-group-append">
            <button className="btn btn-outline-info" type="submit" id="button-addon2">Search</button>
        </div>
    </form>
)

export default searchBar