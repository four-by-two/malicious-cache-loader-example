import { describe, it } from 'mocha'
import { expect } from 'chai'

import * as action from './index'

import {
  RECEIVE_GAMES,
  REQUEST_GAMES,
  RECEIVE_GAMES_FAIL,
} from '../actions'

describe('* gameLobby actionCreators:', () => {
  it('should create an action to request games ', () => {
    const expectedAction = {
      payload: { isFetching: true },
      type: REQUEST_GAMES,
    }

    expect(action.requestGames()).eql(expectedAction)
  })

  it('should create an action to receiveGames games ', () => {
    const games = {
      casinoGames: [],
    }
    const expectedAction =
      {
        payload: {
          casinoGames: [],
          isFetching: false,
        },
        type: RECEIVE_GAMES,
      }

    expect(action.receiveGames(games)).eql(expectedAction)
  })

  it('should create an action for receive games fail ', () => {
    const errorMsg = 'error'

    const expectedAction =
    {
      payload: errorMsg,
      type: RECEIVE_GAMES_FAIL,
    }

    expect(action.error(errorMsg)).eql(expectedAction)
  })
})
