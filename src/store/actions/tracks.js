import * as actionTypes from './actionTypes'
import axios from 'axios'

export const fetchTracksInit = () => {
    return {
        type: actionTypes.FETCH_TRACKS_INIT
    }
}

export const fetchTracksSuccess = (tracks) => {
    return {
        type: actionTypes.FETCH_TRACKS_SUCCESS,
        tracks: tracks
    }
}

export const fetchTracksFail = () => {
    return {
        type: actionTypes.FETCH_TRACKS_FAIL
    }
}

export const fetchAlbumSuccess = (curAlbum) => {
    return {
        type: actionTypes.FETCH_ALBUM_SUCCESS,
        curAlbum: curAlbum
    }
}

export const fetchAlbumFail = () => {
    return {
        type: actionTypes.FETCH_ALBUM_FAIL
    }
}

export const fetchAlbumAndTracksStart = (albumId) => {
    return dispatch => {
        dispatch(fetchTracksInit())
        axios.get(`/albums/${albumId}`)
            .then(res => {
                const data = res.data
                const newAlbum = {
                    name: data.name,
                    popularity: data.popularity,
                    releaseDate: data.release_date,
                    totalTracks: data.total_tracks
                }
                dispatch(fetchAlbumSuccess(newAlbum))
                console.log(res.data)
            })
            .catch(error => {
                dispatch(fetchAlbumFail())
                console.log(error)
            })

        axios.get(`/albums/${albumId}/tracks`)
            .then(res => {
                const data = res.data;
                dispatch(fetchTracksSuccess(data.items))
                console.log(data.items)
            })
            .catch(error => {
                dispatch(fetchTracksFail())
                console.log(error)
            })
    }
}