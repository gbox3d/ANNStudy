
const repl = require('repl')

// const tinyFlow = require("./tinyFlow").default
import {tinyFlow} from './tinyFlow'

// console.log(tinyFlow)

var testPerceptron = new tinyFlow({
    weights: [0.3, 0.3],
    threshold: -0.5
})


var repl_context = repl.start({
    prompt: 'Node.js via stdin> ',
    input: process.stdin,
    output: process.stdout
}).context;

// var tPercp = new tinyPerceptron({ size: 2 })
// var sampleTrainDataAND = {
//     inputs: [[0, 0], [0, 1], [1, 0], [1, 1]],
//     outputs: [0, 0, 0, 1]
// }

// tPercp.train({
//     outputs : sampleTrainDataAND.outputs,
//     inputs: sampleTrainDataAND.inputs,
//     learning_rate : 0.03
// })



repl_context.testPerceptron = testPerceptron

console.log('tiny Perceptron AND compute sample')
console.log('try "  testPerceptron.compute({x:[1,1]})"')



