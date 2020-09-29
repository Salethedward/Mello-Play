import * as actionTypes from './actionTypes'
import * as actions from './index'
import axios  from 'axios'

export const fetchArtistsInit = () => {
    return {
        type: actionTypes.FETCH_ARTISTS_INIT
    }
}

export const fetchArtistsSuccess = (artists) => {
    return {
        type: actionTypes.FETCH_ARTISTS_SUCCESS,
        artists: artists
    }
}

export const fetchArtistsFail = () => {
    return {
        type: actionTypes.FETCH_ARTISTS_FAIL,
    }
}

export const fetchArtistsStart = (artistName) => {
    return dispatch => {
        dispatch(actions.firstPage())
        dispatch(fetchArtistsInit())
        axios.get("/search", {
            params: {
                q: artistName,
                type: 'artist'
            } 
        })
            .then(response => {
                const data = response.data;
                const artists = data.artists;
                dispatch(fetchArtistsSuccess(artists.items))
                console.log(artists.items)
            })
            .catch(error => {
                dispatch(fetchArtistsFail())
                console.log(error)
            })
    }
}
