/* given a dictionary D where key is of form YYYY-MM-DD 
and its corresponding value is an integer, 
returns a new dictionary D with missing dates values, 
which are average of prev and next date value */

// input -> {"2019-01-01":100, "2019-01-04": 115}
// output -> {"2019-01-01":100, "2019-01-02": 105, "2019-01-03": 110, "2019-01-04": 115}

// input -> {"2019-01-10":10, "2019-01-11": 20, "2019-01-13": 10}
// output -> {"2019-01-10":10, "2019-01-11": 20, "2019-01-12": 15, "2019-01-13": 10}

const date = require('date-and-time')

function solution(D) {
    const dates = []
    for(var key in D){
        dates.push(key)
    }
    var D_new = new Object()
    for(var i = 1; i<dates.length; i++){
        const prev = new Date(dates[i-1])
        const now = new Date(dates[i])
        const diff = (now - prev)/(1000*60*60*24)
        const prev_d = date.format(prev, 'YYYY-MM-DD')
        const now_d = date.format(now, 'YYYY-MM-DD')
        const avg = (D[now_d] - D[prev_d])/diff
        var val = D[prev_d]-avg
        for(var j = 0; j<=diff; j++)
        { const t = prev.getTime() + (1000*60*60*24)*j
          const d = date.format(new Date(t), 'YYYY-MM-DD') 
          val += avg
          D_new[d] = val
        }
        
    }

    return D_new
}

const D1 = {"2019-01-01":100, "2019-01-04": 115}
const D2 = {"2019-01-10":10, "2019-01-11": 20, "2019-01-13": 10}

console.log("Input =", D1)
console.log("Output =", solution(D1))
console.log("\nInput =", D2)
console.log("Output =", solution(D2))