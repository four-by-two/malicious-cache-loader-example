import React from 'react'
import propTypes from 'prop-types'

const Button = props => (
  <button
    className="btn btn-primary btn-lg btn-block message"
    onClick={() => { props.action(props.goto) }}
    type="button"
  >
    <span>{props.message}</span>
  </button>
)

Button.defaultProps = {
  goto: '/',
}

Button.propTypes = {
  action: propTypes.func.isRequired,
  goto: propTypes.string,
  message: propTypes.string.isRequired,
}

export default Button
