import React from 'react';
import Layout from './components/Layout/Layout'
import MelloPlay from './containers/MelloPlay'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import paginationReducer from './store/reducers/pagination'
import artistsReducer from './store/reducers/artists'
import albumsReducer from './store/reducers/albums'
import tracksReducer from './store/reducers/tracks'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  artists: artistsReducer,
  albums: albumsReducer,
  tracks: tracksReducer,
  pagination: paginationReducer
})

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
))


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Layout>
            <MelloPlay />
          </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
