import chai from 'chai'
import Id from '../../src/utils/Id'
import { makeDashboard } from '../../src/models'

const expect = chai.expect

describe('dashboard tests', () => {
  describe('make dashboard tests', () => {
    it('should make chart model when all args are valid', () => {
      // arrange
      const obj = {
        id: Id.makeId(),
        title: 'test',
        description: 'test',
        charts: []
      }

      // act
      const result = makeDashboard(obj)

      // assert
      expect(result).to.deep.equal(obj)
    })

    it('should throw an error when id is invalid', () => {
      // arrange
      const obj = {
        id: '123',
        title: 'test',
        description: 'test',
        charts: []
      }

      // act, assert
      expect(() => makeDashboard(obj)).to.throw('Invalid dashboard id')
    })

    it('should throw an error when title is undefined', () => {
      // arrange
      const obj = {
        id: Id.makeId(),
        description: 'test',
        charts: []
      }

      // act, assert
      expect(() => makeDashboard(obj)).to.throw('Invalid dashboard title')
    })
  })
})
