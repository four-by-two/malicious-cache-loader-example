import {
  GET_USER,
  UPDATE_USERNAME_SUCCESS,
} from '../actions'

export const getUser = (theUser = null) => (dispatch) => {
  // get user from localstorage
  const user = !theUser ? JSON.parse(localStorage.getItem('user')) : theUser
  return dispatch({
    payload: { user },
    type: GET_USER,
  })
}

export const updateUsername = (username) => (dispatch) => {
  // save the user on localStorage
  localStorage.setItem('user', JSON.stringify({ username }))

  dispatch({
    payload: username,
    type: UPDATE_USERNAME_SUCCESS,
  })
}
