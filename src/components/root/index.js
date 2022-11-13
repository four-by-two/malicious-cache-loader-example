import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'
import propTypes from 'prop-types'
import Games from '../../modules/gameLobby'
import GamePlayer from '../../modules/gamePlayer'
import Login from '../../modules/login'
import Logout from '../../components/logout'
import Settings from '../../modules/settings'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { history } from '../../helpers/history'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <div className="wrapper">
        <Header />
        <div className="main">
          <Route component={Games} exact path="/" />
          <Route component={GamePlayer} path="/game/:gameId" />
          <Route component={Login} path="/login" />
          <Route component={Logout} path="/logout" />
          <Route component={Settings} path="/settings" />
        </div>
        <Footer />
      </div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: propTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
}

export default Root
