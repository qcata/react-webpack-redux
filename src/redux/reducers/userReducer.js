import * as types from '../actions/actionTypes'
import { setAuthorizationHeader } from '../../configs/client'
import initialState from './initialState'

export default function user(state = initialState.user, action = {}) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      const user = action.payload
      setAuthorizationHeader(user.token)
      return user
    case types.LOGOUT_SUCCESS:
    case types.UNAUTHORIZED:
      setAuthorizationHeader()
      return {}
    default:
      return state
  }
}
