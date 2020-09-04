import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import app from '../reducers'

const initStore = () => createStore(app, applyMiddleware(thunk))

export default initStore
