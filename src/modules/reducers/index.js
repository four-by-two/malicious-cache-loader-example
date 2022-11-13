import { combineReducers } from 'redux'

import {
  asyncGames as games,
} from '../gameLobby/reducers'

import {
  user,
} from '../user/reducers'

import {
  gamePlayer,
} from '../gamePlayer/reducers'

const rootReducers = combineReducers({
  gamePlayer,
  games,
  user,
})

export default rootReducers
