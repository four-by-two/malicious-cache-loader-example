export const getGames = (state) => {
  return (state && state.games && state.games.casinoGames) || []
}
