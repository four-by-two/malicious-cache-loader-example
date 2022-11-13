import { describe, it } from 'mocha'
import { expect } from 'chai'

import { asyncGames } from './gameLobby.reducers'

import {
  REQUEST_GAMES,
  RECEIVE_GAMES,
  RECEIVE_GAMES_FAIL,
} from '../actions'

describe('* gameLoby reducers:', () => {
  describe(`reducers/gameLobby when action is ${REQUEST_GAMES}`, () => {
    const action = {
      payload: { isFetching: true },
      type: REQUEST_GAMES,
    }

    it('updates games state "isFetching" to true', () => {
      expect(asyncGames(undefined, action)).to.eql({
        isFetching: true,
      })
    })
  })

  describe(`reducers/gameLobby when action is ${RECEIVE_GAMES}`, () => {
    const action = {
      payload: {
        games: {
          casinoGames: [],
        },
        isFetching: false,
      },
      type: RECEIVE_GAMES,
    }

    it('adds casinoGames list on games state', () => {
      expect(asyncGames(undefined, action)).to.eql({
        games: {
          casinoGames: [],
        },
        isFetching: false,
      })
    })
  })

  describe(`reducers/gameLobby when action is ${RECEIVE_GAMES_FAIL}`, () => {
    const action = {
      type: RECEIVE_GAMES_FAIL,
    }

    it('updates games state "isFetching" to false', () => {
      expect(asyncGames(undefined, action)).to.eql({
        casinoGames: [],
        isFetching: false,
      })
    })
  })
})
