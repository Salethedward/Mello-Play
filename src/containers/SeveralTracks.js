import React, { PureComponent } from 'react'
import Modal from '../components/MainContent/Modal/Modal'
import { connect } from 'react-redux'

class SeveralTracks extends PureComponent {
    render () {
        return (
            <Modal 
                album={this.props.currentAlbum}
                tracks={this.props.tracks}
                loading={this.props.loading}
                error={this.props.error} />
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.tracks.loading,
        error: state.tracks.error,
        currentAlbum: state.tracks.currentAlbum,
        tracks: state.tracks.allTracks
    }
}

export default connect(mapStateToProps)(SeveralTracks)