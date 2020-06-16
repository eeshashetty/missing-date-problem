const solution = require('../solution')
test('Testing if Solution works', () => {
    const D = {"2019-01-01":100, "2019-01-04": 115}
    const new_D = {
        '2019-01-01': 100,
        '2019-01-02': 105,
        '2019-01-03': 110,
        '2019-01-04': 115
        }
    const sol = JSON.stringify(solution(D))
    expect(sol).toBe(JSON.stringify(new_D))
})

