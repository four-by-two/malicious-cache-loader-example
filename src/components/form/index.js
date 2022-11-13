import React from 'react'
import propTypes from 'prop-types'

import Notification from '../notification'
import * as message from '../../constants'

const Form = ({
  handleChange, handleSubmit, hasPassword, submitted, password, username,
} = {}) => (
  <form name="form" onSubmit={(event) => { handleSubmit(event) }}>
    <div className="form-group">
      <label htmlFor="inputUsername">Username</label>
      <input
        className="form-control"
        id="inputUsername"
        name="username"
        onChange={(event) => { handleChange(event) }}
        placeholder="Enter username"
        type="text"
        value={username}
      />
      {submitted && !username &&
        <Notification
          message={message.USERNAME_REQUIRED}
          type="danger"
        />
      }
    </div>
    {hasPassword &&
    <div className="form-group">
      <label htmlFor="inputPassword">Password</label>
      <input
        className="form-control"
        id="inputPassword"
        name="password"
        onChange={event => handleChange(event)}
        placeholder="Password"
        type="password"
        value={password}
      />
      {submitted && !password &&
        <Notification
          message={message.PASSWORD_REQUIRED}
          type="danger"
        />}
    </div>}
    <button className="btn btn-primary" type="submit" value={submitted}>Submit</button>
  </form>
)

Form.defaultProps = {
  password: null,
}

Form.propTypes = {
  handleChange: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
  hasPassword: propTypes.bool.isRequired,
  password: propTypes.string,
  submitted: propTypes.bool.isRequired,
  username: propTypes.string.isRequired,
}

export default Form
