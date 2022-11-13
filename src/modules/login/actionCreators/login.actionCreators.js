import axios from 'axios'
import { USERS_URL } from '../../../constants'
import { history } from '../../../helpers/history'

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../actions'

export const requestLogin = () => {
  return {
    payload: {
      isFetching: true,
    },
    type: LOGIN_REQUEST,
  }
}

export const loginSuccess = (user) => {
  return {
    payload: {
      ...user,
      isFetching: false,
    },
    type: LOGIN_SUCCESS,
  }
}

export const loginFailure = () => {
  return {
    payload: {
      isFetching: false,
    },
    type: LOGIN_FAIL,
  }
}

export const login = (username, password) => (dispatch) => {
  dispatch(requestLogin())
  const URL = `${USERS_URL}?username=${username}&password=${password}`
  return axios(URL)
    .then((response) => {
      return response.data
    })
    .then((user) => {
      dispatch(loginSuccess(user))
      // save the user on localStorage
      localStorage.setItem('user', JSON.stringify(user))
      // direct the logedin user to the games page
      history.push('/')
    })
    .catch(() => {
      return dispatch(loginFailure())
      // pending: dispatch error message on the client as a notification..
    })
}
