import React from 'react'
import { Link } from 'react-router-dom'

export default ({
  message,
  type,
  to,
} = {}) => {
  return (
    <div className={`alert alert-${type}`} role="alert">
      {to && <Link className="alert-link" to={to}>{message}</Link>}
      {!to && <div className="alert-link">{message}</div>}
    </div>
  )
}
