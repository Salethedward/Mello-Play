import * as actionTypes from '../actions/actionTypes'
import { updateObject, failedObject } from '../utility'

const initialState = {
    allArtists: null,
    loading: false,
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ARTISTS_INIT: 
            return updateObject(state, { loading: true })

        case actionTypes.FETCH_ARTISTS_SUCCESS: 
            return updateObject(state, { allArtists: action.artists, loading: false })

        case actionTypes.FETCH_ARTISTS_FAIL: 
            return failedObject(state)
            
        default: return state
    }
}

export default reducer