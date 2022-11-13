import { describe, it } from 'mocha'
import { expect } from 'chai'

import { gamePlayer } from './gamePlayer.reducers'

import {
  REQUEST_GAME,
  RECEIVE_GAME,
  RECEIVE_GAME_FAIL,
} from '../actions'

describe('* gamePlayer reducers:', () => {
  describe(`reducers/gamePlayer when action is ${REQUEST_GAME}`, () => {
    const action = {
      payload: {
        game: {},
        isFetching: true,
      },
      type: REQUEST_GAME,
    }

    it('updates game state "isFetching" to true', () => {
      expect(gamePlayer(undefined, action)).to.eql({
        game: {},
        isFetching: true,
      })
    })
  })

  describe(`reducers/gamePlayer when action is ${RECEIVE_GAME}`, () => {
    const action = {
      payload: {
        game: {
          id: 1,
          gameName: 'a name',
          image: 'url',
          description: 'lorem ipsum..',
          favorite: 1,
        },
        isFetching: false,
      },
      type: RECEIVE_GAME,
    }

    it('adds selected game on game state', () => {
      expect(gamePlayer(undefined, action)).to.eql({
        game: {
          id: 1,
          gameName: 'a name',
          image: 'url',
          description: 'lorem ipsum..',
          favorite: 1,
        },
        isFetching: false,
      })
    })
  })

  describe(`reducers/gamePlayer when action is ${RECEIVE_GAME_FAIL}`, () => {
    const action = {
      type: RECEIVE_GAME_FAIL,
    }

    it('updates gamePlayer state "isFetching" to false', () => {
      expect(gamePlayer(undefined, action)).to.eql({
        game: {},
        isFetching: false,
      })
    })
  })
})
