const solution = require('../solution')
test('Testing if Solution works', () => {
    const D = { '2019-01-10': 10, '2019-01-11': 20, '2019-01-13': 10 }
    const new_D = {
        '2019-01-10': 10,
        '2019-01-11': 20,
        '2019-01-12': 15,
        '2019-01-13': 10
      }
    const sol = JSON.stringify(solution(D))
    expect(sol).toBe(JSON.stringify(new_D))
})

