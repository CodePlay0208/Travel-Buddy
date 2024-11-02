import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { persistReducer, persistStore } from 'redux-persist'
import storage from "redux-persist/lib/storage"

import rootReducer from './reducers'
import thunk from 'redux-thunk'
import socketMiddleware from './middleware/socketMiddleware'
import Socket from './services/socket/socket'

// const socket = new Socket()
const initialState = {}
// const middleWare = [socketMiddleware(socket), thunk]
const middleWare = [thunk]

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)))

export const persistor = persistStore(store)
