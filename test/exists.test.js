const { expect } = require('chai')
const { exists } = require('../solution')

describe('Sumarize', function() {
    const scenarios = [
        { testArgs: {
          list: [10, 29, 2],
          find: 4
        }, result: false },
        { testArgs: {
          list: [10, 23, 45, 23, 75, 1, 4, 123],
          find: 75
        }, result: true },
        { testArgs: {
          list: [],
          find: 10
        }, result: false },
        { testArgs: {
          list: [5, 4, 6, 2, 1, 4, 6, 7, 3, 2, 3, 4, 5, 5, 6, 2, 24, 45, 6, 3, 1, 23, 234, 234, 234, 234],
          find: 234
        }, result: true },
        { testArgs: {
          list: null,
          find: 156
        }, result: false },
        { testArgs: {
          list: undefined,
          find: 120
        }, result: false },
    ]
    scenarios.forEach(scenario => it(`Should return ${scenario.result} when the array is ${JSON.stringify(scenario.testArgs.list)} and the number to find is ${scenario.testArgs.find}`, function() {
        const result = exists(scenario.testArgs.list, scenario.testArgs.find)
        expect(result).to.be.a('boolean')
        expect(result).to.equal(scenario.result)
    }))
})