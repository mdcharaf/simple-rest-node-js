/* eslint-disable no-unused-expressions */
import chai from 'chai'
import Id from '../../src/utils/Id'
import { makeChart } from '../../src/models'
import makeChartController from '../../src/http/controllers/chartController'

const expect = chai.expect

describe('chart controller tests', () => {
  const dashboardId = Id.makeId()
  const dashboardServiceMock = {
    addChart: async () => {},
    removeChart: async (dashboardId, chartId) => {}
  }
  let chartController

  beforeEach(() => {
    chartController = makeChartController({ dashboardService: dashboardServiceMock, makeChart })
  })

  describe('add charts tests', () => {
    describe('add charts happy scenarios tests', () => {
      const scenarios = [
        { chart: { dashboardId, title: 'dummy', type: 'line', range: '5/5/2020-6/6/2020', interval: 'month' } },
        { chart: { dashboardId, title: 'dummy', type: 'bar', range: '5/5/2020-6/6/2020', interval: 'day' } },
        { chart: { dashboardId, title: 'dummy', type: 'pie', range: '5/5/2020 00:00:00-5/5/2020 01:00:00', interval: 'hour' } }
      ]

      scenarios.forEach(scenario => {
        it('should add chart successfully', async () => {
          // act
          const response = await chartController.add({ body: scenario.chart })
          // assert
          const { id: chartId, ...chartInfo } = response.body

          expect(response.statusCode).to.equal(201)
          expect(chartId).not.to.be.null
          expect({ ...chartInfo }).to.deep.equal(scenario.chart)
        })
      })
    })

    describe('invalid add chart scenarios', () => {
      const scenarios = [
        {
          chart: { dashboardId: null, title: 'dummy', type: 'line', range: '5/5/2020-6/6/2020', interval: 'month' },
          expectedError: 'Invalid dashboard id'
        },
        {
          chart: { dashboardId, type: 'line', range: '5/5/2020-6/6/2020', interval: 'month' },
          expectedError: 'Invalid chart title'
        },
        {
          chart: { dashboardId, title: 'dummy', type: 'dummy', range: '5/5/2020-6/6/2020', interval: 'month' },
          expectedError: 'Invalid chart type, choose among line, pie or bar'
        },
        {
          chart: { dashboardId, title: 'dummy', type: 'bar', range: 'dummy', interval: 'month' },
          expectedError: 'Invalid range value, use range format {from}-{to}'
        },
        {
          chart: { dashboardId, title: 'dummy', type: 'pie', range: '5/5/2020-6/6/2020-5/5/2020', interval: 'month' },
          expectedError: 'Invalid range value, use range format {from}-{to}'
        },
        {
          chart: { dashboardId, title: 'dummy', type: 'pie', range: '6/6/2020-5/5/2020', interval: 'month' },
          expectedError: 'Invalid date range values'
        },
        {
          chart: { dashboardId, title: 'dummy', type: 'line', range: '5/5/2020-6/6/2020', interval: 'minute' },
          expectedError: 'Invalid interval value'
        },
        {
          chart: { dashboardId, title: 'dummy', type: 'line', range: '5/5/2020 00:00:00-5/5/2020 08:00:00', interval: 'hour' },
          expectedError: 'Cannot use interval hour when date range is more than 7 hours'
        }
      ]

      scenarios.forEach(scenario => {
        it('should respond with 400 when trying to add an invalid chart', async () => {
          // arrange, act
          const response = await chartController.add({ body: scenario.chart })
          // assert
          expect(response.statusCode).to.equal(400)
          expect(response.body.error).to.equal(scenario.expectedError)
        })
      })
    })
  })

  describe('remove charts tests', () => {
    it('should remove chart successfully', async () => {
      // arrange
      const chartId = Id.makeId()

      // act
      const response = await chartController.remove({ body: { dashboardId }, params: { chartId } })

      // assert
      expect(response.statusCode).to.equal(200)
    })
  })
})
