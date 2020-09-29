import * as actionTypes from './actionTypes'

export const changeArtistPage = pageNum => {
    return {
        type: actionTypes.CHANGE_ARTIST_PAGE,
        value: pageNum
    }
}

export const changeAlbumPage = pageNum => {
    return {
        type: actionTypes.CHANGE_ALBUM_PAGE,
        value: pageNum
    }
}

export const firstPage = () => {
    return {
        type: actionTypes.FIRST_PAGE
    }
}