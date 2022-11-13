import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import Notification from '../../components/notification'

import * as message from '../../constants'

import '../../css/index.scss'

import {
  fetchGames,
} from './actionCreators'

import {
  getGames,
} from './selectors'

import { isUserLoggedIn } from '../user/selectors'

class GameLobby extends Component {
  componentDidMount() {
    this.props.fetchGames()
  }

  render() {
    const {
      games,
      isLoggedIn,
    } = this.props

    let casinoGames

    const notificationType = isLoggedIn ? 'success' : 'danger'
    const notificationMessage = isLoggedIn ? message.PLAY_FOR_REAL : message.PLAY_FOR_FUN

    if (games && games.length > 0) {
      casinoGames = games.map((game, idx) => {
        // loop through the games array and build the elements
        const className = 'my-content-1'

        return (
          <div className={className} key={idx} >
            <div className="card">
              <img alt={game.gameName} className="card-img-top" src={game.image} />
              <div className="card-body">
                <p className="card-title">{idx + 1}. {game.gameName}</p>
                <p className="card-text">{game.description}</p>
                <Notification
                  message={notificationMessage}
                  to={`game/${game.gameId}`}
                  type={notificationType}
                />
              </div>
            </div>
          </div>)
      })
    }


    return (
      <div className="my-container">
        <div className="my-row">
          {casinoGames}
        </div>
      </div>
    )
  }
}

GameLobby.propTypes = {
  fetchGames: propTypes.func.isRequired,
  games: propTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  isLoggedIn: propTypes.bool.isRequired,
}


const mapStateToProps = (state) => {
  const isLoggedIn = isUserLoggedIn(state)
  return {
    games: getGames(state),
    isLoggedIn,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchGames,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameLobby)
