import client from '../configs/client'
import { handleResponse, handleError } from './apiUtils'

export function login(credentials) {
  return client({ url: 'users/login', method: 'POST', data: credentials })
    .then(handleResponse)
    .catch(handleError)
}

export function logout() {
  return client({ url: 'users/logout', method: 'GET' })
    .then(handleResponse)
    .catch(handleError)
}