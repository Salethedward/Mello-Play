import * as actionTypes from '../actions/actionTypes'
import { updateObject, failedObject } from '../utility'

const initialState = {
    allAlbums: null,
    currentArtist: null,
    loading: false,
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALBUMS_INIT:
            return updateObject(state, { loading: true })

        case actionTypes.FETCH_ALBUMS_SUCCESS:
            return updateObject(state, { allAlbums: action.albums, loading: false })

        case actionTypes.FETCH_ALBUMS_FAIL:
            return failedObject(state)

        case actionTypes.FETCH_ARTIST_SUCCESS:
            return updateObject(state, { currentArtist: action.curArtist, loading: false })

        case actionTypes.FETCH_ARTIST_FAIL:
            return failedObject(state)
            
        default: return state
    }
}

export default reducer