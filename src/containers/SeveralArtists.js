import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import MainContent from '../components/MainContent/MainContent'
import Artists from '../components/MainContent/Artists/Artists'
import Pagination from '../components/MainContent/Pagination/Pagination'
import Spinner from '../components/UI/Spinner'
import * as actions from '../store/actions/index'

class SeveralArtists extends PureComponent {

    componentDidUpdate () {
        window.scrollTo(0, 0)
    }

    albumBtnClickedHandler = (albId) =>  {
        // Dispatching an action
        this.props.onAlbumBtnClicked(albId)

        // Pushing a new page
        this.props.history.push('/albums')
    }

    render() {        

        let severalArtists = (
            <MainContent>
                <h1>Please search for artists...</h1>
            </MainContent>
        )

        if (this.props.loading) {
            severalArtists = (
                <MainContent>
                    <Spinner />
                </MainContent>
            )
        }

        if (this.props.error) {
            severalArtists = (
                <MainContent>
                    <h1>Something went wrong!</h1>
                </MainContent>
            )
        }

        if (this.props.artists) {
            // Pagination
            const perPage = this.props.artistsPerPage
            const indexOfLast = this.props.curPage * perPage;
            const indexOfFirst = indexOfLast - perPage
            const currentArtists = this.props.artists.slice(indexOfFirst, indexOfLast)

            severalArtists = (
                <div className="container border border-dark bg-secondary rounded my-5">
                    <Artists 
                        artists={currentArtists} 
                        clicked={this.albumBtnClickedHandler} />
                    <Pagination 
                        perPage={this.props.artistsPerPage}
                        total={this.props.artists.length}
                        paginate={this.props.onArtistPageChanged}
                        curPage={this.props.curPage} />
                </div>
            )
        }
        
        return severalArtists
    }
}

const mapStateToProps = state => {
    return {
        loading: state.artists.loading,
        error: state.artists.error,
        artists: state.artists.allArtists,
        curPage: state.pagination.currentArtistPage,
        artistsPerPage: state.pagination.perPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAlbumBtnClicked: (id) => dispatch(actions.fetchArtistAndAlbumsStart(id)),
        onArtistPageChanged: (pgNum) => dispatch(actions.changeArtistPage(pgNum))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SeveralArtists)