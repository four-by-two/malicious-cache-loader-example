import { describe, it, beforeEach } from 'mocha'
import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

import { getUser, isUserLoggedIn, getUsername } from './index'

describe('* user/selectors', () => {
  let state
  beforeEach(() => {
    state = {
      user: {
        username: 'testuser',
      },
    }
  })
  it('returns logged in user', () => {
    deepFreeze(state)
    expect(getUser(state)).to.eql(state.user)
  })
  it('returns empty user when user is logged out', () => {
    state = { user: {} }
    deepFreeze(state)
    expect(getUser(state)).to.eql(state.user)
  })
  it('returns the username of the logged in user', () => {
    deepFreeze(state)
    expect(getUsername(state)).to.eql('testuser')
  })
  it('returns true if the user is logged in', () => {
    deepFreeze(state)
    expect(isUserLoggedIn(state)).to.eql(true)
  })
})
