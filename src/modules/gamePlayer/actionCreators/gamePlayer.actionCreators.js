import axios from 'axios'
import { GAME_URL } from '../../../constants'

// action costants
import {
  RECEIVE_GAME,
  REQUEST_GAME,
  RECEIVE_GAME_FAIL,
} from '../actions'

export const requestGame = () => {
  return {
    payload: {
      game: {},
      isFetching: true,
    },
    type: REQUEST_GAME,
  }
}

export const receiveGame = (data) => {
  return {
    payload: {
      game: data,
      isFetching: false,
    },
    type: RECEIVE_GAME,
  }
}

export const error = (err) => {
  return {
    payload: err,
    type: RECEIVE_GAME_FAIL,
  }
}

export const fetchGame = gameId => (dispatch) => {
  dispatch(requestGame())

  return axios(`${GAME_URL}${gameId}`)
    .then((response) => {
      return response.data
    })
    .then((game) => {
      return dispatch(receiveGame(game))
    })
    .catch((err) => {
      return dispatch(error(err))
    })
}
