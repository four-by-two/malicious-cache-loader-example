export const getUser = state => (state && state.user)
export const isUserLoggedIn = state => (state && state.user && (state.user.username !== undefined))
export const getUsername = state => state && state.user.username
