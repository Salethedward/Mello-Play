import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
    currentArtistPage: 1,
    currentAlbumPage: 1,
    perPage: 6
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_ARTIST_PAGE: 
            return updateObject(state, { currentArtistPage: action.value })

        case actionTypes.CHANGE_ALBUM_PAGE:
            return updateObject(state, { currentAlbumPage: action.value })
            
        case actionTypes.FIRST_PAGE:
            return updateObject(state, { currentArtistPage: 1, currentAlbumPage: 1 })

        default: return state
    }
}

export default reducer