import { describe, it } from 'mocha'
import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

import { getGames } from './index'

describe('* gameLobby/selectors:', () => {
  it('gets games list from state', () => {
    const state =
    {
      games: {
        casinoGames: [
          {
            gameDscription: 'lorem ipsum',
            gameId: 1,
            gameName: 'Finn',
            gameUrl: 'someurl',
          },
          {
            gameDscription: 'lorem ipsum',
            gameId: 2,
            gameName: 'Immortal',
            gameUrl: 'someurl',
          },
        ],
      },
    }
    const result = getGames(state)
    deepFreeze(state)
    expect(result).to.eql(state.games.casinoGames)
  })
})
