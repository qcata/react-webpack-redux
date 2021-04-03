import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PageNotFound from './components/PageNotFound'
import PrivateRoute from './components/routes/PrivateRoute'
import LoginPage from './components/login'
import LandingPage from './components/landingPage'

function App() {
  return (
    <div className="container-fluid" style={{ padding: 0 }}>
      <Switch>
        <PrivateRoute exact path="/" component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  )
}

export default App
