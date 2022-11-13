import { describe, it } from 'mocha'
import { expect } from 'chai'

import { user } from './user.reducers'

import {
  GET_USER,
  UPDATE_USERNAME_SUCCESS,
} from '../actions'

import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from '../../login/actions'

describe('* user reducers:', () => {
  describe(`reducers/user when action is ${GET_USER}`, () => {
    const theUser = { username: 'testuser' }
    const action = {
      payload: { user: { ...theUser } },
      type: GET_USER,
    }

    it('updates user state', () => {
      expect(user(theUser, action)).to.eql({
        username: 'testuser',
      })
    })
  })

  describe(`reducers/user when action is ${UPDATE_USERNAME_SUCCESS}`, () => {
    const username = 'testuser'
    const action = {
      payload: username,
      type: UPDATE_USERNAME_SUCCESS,
    }

    it('updates username on state', () => {
      expect(user(undefined, action)).to.eql({
        username,
      })
    })
  })

  describe(`reducers/user when action is ${LOGIN_REQUEST}`, () => {
    const action = {
      payload: {
        isFetching: true,
      },
      type: LOGIN_REQUEST,
    }

    it('updates user state "isFetching" to true', () => {
      expect(user(undefined, action)).to.eql({
        isFetching: true,
      })
    })
  })

  describe(`reducers/user when action is ${LOGIN_SUCCESS}`, () => {
    const theUser = { username: 'testuser' }
    const action = {
      payload: {
        ...theUser,
        isFetching: false,
      },
      type: LOGIN_SUCCESS,
    }

    it('updates user state', () => {
      expect(user(undefined, action)).to.eql({
        ...theUser,
        isFetching: false,
      })
    })
  })

  describe(`reducers/user when action is ${LOGIN_FAIL}`, () => {
    const action = {
      payload: {
        isFetching: false,
      },
      type: LOGIN_FAIL,
    }

    it('updates user state "isFetching" to false', () => {
      expect(user(undefined, action)).to.eql({
        isFetching: false,
      })
    })
  })
})
