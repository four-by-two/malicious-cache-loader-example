import { describe, it } from 'mocha'
import { expect } from 'chai'

import * as action from './index'

import {
  RECEIVE_GAME,
  REQUEST_GAME,
  RECEIVE_GAME_FAIL,
} from '../actions'


describe('* gamePlayer actionCreators:', () => {
  it('should create an action to request game ', () => {
    const expectedAction = {
      payload: {
        game: {},
        isFetching: true,
      },
      type: REQUEST_GAME,
    }

    expect(action.requestGame()).eql(expectedAction)
  })

  it('should create an action to receiveGame game ', () => {
    const game = {}
    const expectedAction =
      {
        payload: {
          game: {},
          isFetching: false,
        },
        type: RECEIVE_GAME,
      }

    expect(action.receiveGame(game)).eql(expectedAction)
  })

  it('should create an action for receive game fail ', () => {
    const errorMsg = 'error'

    const expectedAction =
    {
      payload: errorMsg,
      type: RECEIVE_GAME_FAIL,
    }

    expect(action.error(errorMsg)).eql(expectedAction)
  })
})
