import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'

import { isUserLoggedIn, getUsername } from '../../modules/user/selectors'

const Header = props => (
  <nav className="nav justify-content-end flex-column flex-sm-row">
    <Link className="flex-sm-fill text-sm-center nav-link active" to="/" >Games</Link>
    {props.isLoggedIn && <div className="username-nav flex-sm-fill text-sm-center nav-link">{props.username}</div>}
    {props.isLoggedIn && <Link className="flex-sm-fill text-sm-center nav-link" to="/settings" >Settings</Link>}
    {props.isLoggedIn && <Link className="flex-sm-fill text-sm-center nav-link" to="/logout" >Logout</Link>}
    {!props.isLoggedIn && <Link className="flex-sm-fill text-sm-center nav-link" to="/login" >Login</Link>}
  </nav>
)

Header.defaultProps = {
  username: null,
}

Header.propTypes = {
  isLoggedIn: propTypes.bool.isRequired,
  username: propTypes.string,
}

function mapStateToProps(state) {
  const isLoggedIn = isUserLoggedIn(state)
  const username = getUsername(state)
  return {
    isLoggedIn,
    username,
  }
}
export default connect(mapStateToProps)(Header)
