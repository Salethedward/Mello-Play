import * as actionTypes from './actionTypes'
import axios from 'axios'

export const fetchAlbumsInit = () => {
    return {
        type: actionTypes.FETCH_ALBUMS_INIT
    }
}

export const fetchAlbumsSuccess = (albums) => {
    return {
        type: actionTypes.FETCH_ALBUMS_SUCCESS,
        albums: albums
    }
}

export const fetchAlbumsFail = () => {
    return {
        type: actionTypes.FETCH_ALBUMS_FAIL
    }
}

export const fetchArtistSuccess = (curArtist) => {
    return {
        type: actionTypes.FETCH_ARTIST_SUCCESS,
        curArtist: curArtist
    }
}

export const fetchArtistFail = () => {
    return {
        type: actionTypes.FETCH_ARTIST_FAIL
    }
}

export const fetchArtistAndAlbumsStart = (artistId) => {
    return dispatch => {
        dispatch(fetchAlbumsInit())
        axios.get(`/artists/${artistId}`)
            .then(res => {
                const data = res.data
                const newArtist = {
                    name: data.name,
                    followers: data.followers.total,
                    popularity: data.popularity,
                    genre: data.genres.join(', '),
                    image: data.images[0]
                }
                dispatch(fetchArtistSuccess(newArtist))
                console.log(res.data)
            })
            .catch(error => {
                dispatch(fetchArtistFail())
            })

        axios.get(`/artists/${artistId}/albums`)
            .then(res => {
                const data = res.data;
                dispatch(fetchAlbumsSuccess(data.items))
                console.log(data)
            })
            .catch(error => {
                dispatch(fetchAlbumsFail())
            })
    }
}