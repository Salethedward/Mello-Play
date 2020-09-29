import * as actionTypes from '../actions/actionTypes'
import { updateObject, failedObject } from '../utility'

const initialState = {
    allTracks: [],
    currentAlbum: null,
    loading: false,
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TRACKS_INIT:
            return updateObject(state, { loading: true })

        case actionTypes.FETCH_TRACKS_SUCCESS:
            return updateObject(state, { allTracks: action.tracks, loading: false })

        case actionTypes.FETCH_TRACKS_FAIL:
            return failedObject(state)

        case actionTypes.FETCH_ALBUM_SUCCESS:
            return updateObject(state, { currentAlbum: action.curAlbum, loading: false })

        case actionTypes.FETCH_ALBUM_FAIL:
            return failedObject(state)
            
        default: return state
    }
}

export default reducer