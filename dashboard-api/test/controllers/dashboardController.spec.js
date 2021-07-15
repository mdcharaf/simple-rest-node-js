import chai from 'chai'
import { makeDashboard } from '../../src/models'
import makeDashboardController from '../../src/http/controllers/dashboardController'

const expect = chai.expect

describe('dashboard controller tests', () => {
  const dashboardServiceMock = {
    addDashboard: (obj) => obj,
    listDashboards: () => [
      { title: '1', description: '1', charts: [] },
      { title: '2', description: '2', charts: [] },
      { title: '4', description: '2', charts: [] }
    ],
    removeDashboard: (id) => 1
  }
  let dashboardController

  beforeEach(() => {
    dashboardController = makeDashboardController({ dashboardService: dashboardServiceMock, makeDashboard })
  })

  describe('add dashboard tests', () => {
    it('should add dashboard successfully', async () => {
      // arrange
      const dashboard = {
        title: 'test title',
        description: 'test description',
        charts: []
      }

      // act
      const response = await dashboardController.add({ body: dashboard })

      // assert
      expect(response.statusCode).to.equal(201)
      // eslint-disable-next-line no-unused-expressions
      expect(response.body.id).not.to.be.null
      expect(response.body.title).to.equal(dashboard.title)
      expect(response.body.descriptions).to.equal(dashboard.descriptions)
      // eslint-disable-next-line no-unused-expressions
      expect(response.body.charts).to.be.empty
    })

    describe('invalid dashboard tests', () => {
      const variations = [
        { dashboard: { description: 'test' }, expectedError: 'Invalid dashboard title' },
        { dashboard: { title: 'test' }, expectedError: 'Invalid dashboard description' },
        { dashboard: { title: 'x'.repeat(51), description: 'test' }, expectedError: 'Dashboard title length must be less than 50' },
        { dashboard: { title: 'test', description: 'd'.repeat(251) }, expectedError: 'Dashboard description length must be less than 250' }
      ]

      variations.forEach(variation => {
        it('should respond with 400 when providing an invalid dashboard', async () => {
          // arrange, act
          const response = await dashboardController.add({ body: variation.dashboard })

          // assert
          expect(response.statusCode).to.equal(400)
          expect(response.body.title).to.equal(variations.expectedError)
        })
      })
    })
  })

  describe('list dashboard tests', () => {
    it('should list dashboards', async () => {
      // arrange
      const dashboards = dashboardServiceMock.listDashboards()

      // act
      const response = await dashboardController.list()

      // assert
      expect(response.statusCode).to.equal(200)
      expect(response.body).to.have.deep.members(dashboards)
    })
  })

  describe('remove dashboard tests', () => {
    it('should remove dashboard', async () => {
      // arrange
      const dummyId = '123'
      const expectedCount = dashboardServiceMock.removeDashboard(dummyId)

      // act
      const response = await dashboardController.remove({ params: { id: dummyId } })

      // assert
      expect(response.statusCode).to.equal(200)
      expect(response.body.deleteCount).to.equal(expectedCount)
    })

    it('should respond with 400 when fail to remove', async () => {
      // arrange
      const dummyId = '123'
      dashboardServiceMock.removeDashboard = (id) => { throw new Error('Failed') }

      // act
      const response = await dashboardController.remove({ params: { id: dummyId } })

      // assert
      expect(response.statusCode).to.equal(400)
      expect(response.body.error).to.equal('Failed')
    })
  })
})
