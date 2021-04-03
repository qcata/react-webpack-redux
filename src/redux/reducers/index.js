import { combineReducers } from 'redux'

// Imports: Reducers
import user from './userReducer'
import apiCallsInProgress from './apiStatusReducer'

// Redux: Root Reducer
const rootReducer = combineReducers({
  user,
  apiCallsInProgress,
})

export default rootReducer
