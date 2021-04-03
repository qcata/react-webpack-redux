import React from 'react'
import { connect } from 'react-redux'
import { login } from '../../redux/actions/userActions'
import './styles.scss'

const LoginPage = (props) => {
  return (
    <React.Fragment>
      login page
    </React.Fragment>
  )
}

export default connect(null, { login })(LoginPage)
