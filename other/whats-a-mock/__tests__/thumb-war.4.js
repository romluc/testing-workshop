import thumbWar from '../thumb-war'
import * as utilsMock from '../utils'

jest.mock('../utils', () => {
  const actualUtils = require.requireActual('../utils') // Remember you can do this and overwrite only a subset of properties if you need the original ones
  return {
    ...actualUtils,
    getWinner: jest.fn((p1, p2) => p2),
  }
})

test('returns winner', () => {
  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
  expect(winner).toBe('Kent C. Dodds')
  expect(utilsMock.getWinner).toHaveBeenCalledTimes(2)
  utilsMock.getWinner.mock.calls.forEach((args) => {
    expect(args).toEqual(['Ken Wheeler', 'Kent C. Dodds'])
  })
})
