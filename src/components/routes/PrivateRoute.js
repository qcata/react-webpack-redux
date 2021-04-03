import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthorizationHeader } from '../../configs/client'

const PrivateRoute = ({ component: Component, token, userId, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!token) {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          )
        }
        setAuthorizationHeader(token)
        return (
          <div>
            <Component {...props} />
          </div>
        )
      }}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
    userId: state.user.id,
    isAdmin: state.user.isAdmin,
  }
}

export default connect(mapStateToProps)(PrivateRoute)
