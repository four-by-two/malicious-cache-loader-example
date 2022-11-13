import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducers from './modules/reducers'
import loggerMiddleware from './middlewares/logger'
import { getUser } from './modules/user/actionCreators'

export const history = createHistory()

// Initial state
const initialState = {}

const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history),
]

if (process.env.NODE_ENV) {
  middleware.push(loggerMiddleware)
}
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension // eslint-disable-line prefer-destructuring

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
)

const store = createStore(
  rootReducers,
  initialState,
  composedEnhancers,
)

// check if user is logged in
store.dispatch(getUser())

export default store
