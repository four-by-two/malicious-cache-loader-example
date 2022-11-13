import {
  GET_USER,
  UPDATE_USERNAME_SUCCESS,
} from '../actions'

import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from '../../login/actions'

import {
  LOG_OUT_SUCCESS,
} from '../../../components/logout/actions'

export const user = (state = {}, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...action.payload.user,
      }
    case LOGIN_REQUEST:
    case LOGIN_SUCCESS:
    case LOGIN_FAIL:
      return {
        ...action.payload,
      }
    case LOG_OUT_SUCCESS:
      return {}
    case UPDATE_USERNAME_SUCCESS:
      return {
        username: action.payload,
      }
    default:
      return state
  }
}
