import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import ArtistSearch from './ArtistSearch'
import SeveralArtists from './SeveralArtists'
import SeveralAlbums from './SeveralAlbums'

class MelloPlay extends Component {
    render () {
        return(
            <Switch>
                <Route path="/artists" component={SeveralArtists} />
                <Route path="/albums" component={SeveralAlbums} />
                <Route path="/" component={ArtistSearch} />
            </Switch>
        )
    }
}

export default MelloPlay