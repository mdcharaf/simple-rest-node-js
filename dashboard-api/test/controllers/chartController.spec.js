/* eslint-disable no-unused-expressions */
import chai from 'chai'
import Id from '../../src/utils/Id'
import { makeChart } from '../../src/models'
import makeChartController from '../../src/http/controllers/chartController'

const expect = chai.expect

describe('chart controller tests', () => {
  const dashboardServiceMock = {
    addChart: async () => {}
  }
  let chartController

  beforeEach(() => {
    chartController = makeChartController({ dashboardService: dashboardServiceMock, makeChart })
  })

  describe('add charts tests', async () => {
    it('should add chart successfully', async () => {
      // arrange
      const chart = {
        dashboardId: Id.makeId(),
        title: 'dummy',
        type: 'line',
        range: '5/5/2020-6/6/2020',
        interval: 'month'
      }

      // act
      const response = await chartController.add({ body: chart })

      // assert
      const { id: chartId, ...chartInfo } = response.body

      expect(response.statusCode).to.equal(201)
      expect(chartId).not.to.be.null
      expect({ ...chartInfo }).to.deep.equal(chart)
    })
  })
})
