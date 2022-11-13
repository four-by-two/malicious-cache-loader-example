import {
  REQUEST_GAMES,
  RECEIVE_GAMES,
  RECEIVE_GAMES_FAIL,
} from '../actions'

export const asyncGames = (state = [], action) => {
  switch (action.type) {
    case REQUEST_GAMES:
      return {
        isFetching: true,
      }
    case RECEIVE_GAMES:
      return {
        ...action.payload,
        isFetching: action.payload.isFetching,
      }
    case RECEIVE_GAMES_FAIL:
      return {
        casinoGames: [],
        isFetching: false,
      }
    default:
      return state
  }
}
