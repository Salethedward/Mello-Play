import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions/index'
import MainContent from '../components/MainContent/MainContent'
import Albums from '../components/MainContent/Albums/Albums'
import Pagination from '../components/MainContent/Pagination/Pagination'
import SeveralTracks from './SeveralTracks'
import Spinner from '../components/UI/Spinner'

import Auxiliary from '../hoc/Auxiliary'


class SeveralAlbums extends PureComponent {

    componentDidUpdate () {
        window.scrollTo(0, 0)
    }

    render() {

        let severalAlbums = (
            <MainContent>
                <h1>Please click view albums button in artists page...</h1>
            </MainContent>
        )

        if (this.props.loading) {
            severalAlbums = (
                <MainContent>
                    <Spinner />
                </MainContent>
            )
        }

        if (this.props.error) {
            severalAlbums = (
                <MainContent>
                    <h1>Something went wrong!</h1>
                </MainContent>
            )
        }

        if (this.props.albums) {
            // Pagination
            const perPage = this.props.perPage
            const indexOfLast = this.props.curPage * perPage;
            const indexOfFirst = indexOfLast - perPage
            const currentAlbums = this.props.albums.slice(indexOfFirst, indexOfLast)

            severalAlbums = (
                <Auxiliary>
                    <div className="container border border-dark bg-secondary rounded my-5">
                        <Albums 
                            artist={this.props.curArtist}
                            albums={currentAlbums}
                            clicked={this.props.onTrackBtnClicked} />
                        <Pagination 
                            perPage={this.props.perPage}
                            total={this.props.albums.length}
                            paginate={this.props.onAlbumPageChanged}
                            curPage={this.props.curPage} />
                    </div>
                    <SeveralTracks />
                </Auxiliary>
            )
        }

        return severalAlbums
    }
}

const mapStateToProps = state => {
    return {
        loading: state.albums.loading,
        error: state.albums.error,
        albums: state.albums.allAlbums,
        curArtist: state.albums.currentArtist,
        curPage: state.pagination.currentAlbumPage,
        perPage: state.pagination.perPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTrackBtnClicked: (id) => dispatch(actions.fetchAlbumAndTracksStart(id)),
        onAlbumPageChanged: (pgNum) => dispatch(actions.changeAlbumPage(pgNum))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SeveralAlbums)