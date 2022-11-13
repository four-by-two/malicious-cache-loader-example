import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { history } from '../../helpers/history'
import { logout } from '../logout/actionCreators'

class LogoutPage extends Component {
  componentWillMount() {
    // dispatch action to erase user from state
    this.props.logout()
    history.push('./login')
  }

  render() {
    return null
  }
}
LogoutPage.propTypes = {
  logout: propTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  logout,
}, dispatch)

export default connect(null, mapDispatchToProps)(LogoutPage)
