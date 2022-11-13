import {
  REQUEST_GAME,
  RECEIVE_GAME,
  RECEIVE_GAME_FAIL,
} from '../actions'

export const gamePlayer = (state = [], action) => {
  switch (action.type) {
    case REQUEST_GAME:
      return {
        ...action.payload,
      }
    case RECEIVE_GAME:
      return {
        ...action.payload,
      }
    case RECEIVE_GAME_FAIL:
      return {
        game: {},
        isFetching: false,
      }
    default:
      return state
  }
}
