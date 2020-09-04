import * as api from '../api'
import {LOAD_USER} from '../types'

export const loadUser = (id) => dispatch =>
  api.loadUser(id)
    .then(({token, userName, userId, imageUrl}) => {
      dispatch({
        type: LOAD_USER,
        userId,
        userName,
        token,
        imageUrl
      })
    }, e => Promise.reject(e))