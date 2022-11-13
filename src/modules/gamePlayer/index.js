import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import _ from 'lodash'

import * as message from '../../constants'

import {
  fetchGame,
} from './actionCreators'

import {
  getGame,
} from './selectors'

import { isUserLoggedIn } from '../user/selectors'
import Button from '../../components/button'
import '../../css/index.scss'
import { history } from '../../helpers/history'


class GamePlayer extends Component {
  constructor(props) {
    super(props)
    this.goto = this.goto.bind(this)
  }

  componentDidMount() {
    const {
      gameId,
    } = this.props.match.params

    this.props.fetchGame(gameId)
  }


  goto(path) { // eslint-disable-line class-methods-use-this
    history.push(path)
  }

  render() {
    const { isLoggedIn, game } = this.props
    const nogame = _.isEmpty(game)

    const gamebg = !nogame ? { backgroundImage: `url(${game.image})` }
      : { backgroundImage: `url(${message.LOADER_URL})` }

    return (
      <div className="my-container">
        <div className="my-row justify-content-center">
          <div className="game-player col-sm-6" style={gamebg}>
            <span className="closeButton" onClick={() => this.goto('/')} role="button" tabIndex={0}>x</span>
            {!isLoggedIn &&
              <div className="mx-auto w-100 p-3 bg-dark small-container">
                { /* if user is not logged in */ }
                <Button
                  action={this.goto}
                  goto="/login"
                  message={message.LOGIN_TO_PLAY}
                />
              </div>}

            {/* if the user is loggd in and if the game does not exist: e.g. game/13762 */}
            {isLoggedIn
            && nogame &&
              <div className="mx-auto w-100 p-3 bg-dark small-container">
                <Button
                  action={this.goto}
                  goto="/"
                  message={message.GAME_NOT_EXIST}
                />
              </div>}
          </div>
        </div>
        <div className="my-row justify-content-center">
          <div className="col-sm-12">
            {!nogame && `${game.gameName}.  ${game.description}`}
          </div>
        </div>
      </div>
    )
  }
}

GamePlayer.propTypes = {
  fetchGame: propTypes.func.isRequired,
  game: propTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  isLoggedIn: propTypes.bool.isRequired,
  match: propTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
}

const mapStateToProps = (state) => {
  const isLoggedIn = isUserLoggedIn(state)
  return {
    game: getGame(state),
    isLoggedIn,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchGame,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GamePlayer)
