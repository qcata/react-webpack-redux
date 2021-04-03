import * as types from './actionTypes'

export function beginApiCall() {
  return { type: types.BEGIN_API_CALL }
}

export function apiCallError(error) {
  return { type: types.API_CALL_ERROR, payload: error }
}

export function apiCallSuccess() {
  return { type: types.API_CALL_SUCCESS }
}
