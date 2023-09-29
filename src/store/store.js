import { configureStore, combineReducers } from '@reduxjs/toolkit'
import dataReducer from './dataSlice'
import keyReducer from './keySlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const reducer = combineReducers({
    dataReducer,
    keyReducer
})
const persistedReducer = persistReducer(persistConfig, reducer)
export default configureStore({
    reducer: persistedReducer,
    middleware: []
})
