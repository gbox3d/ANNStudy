/*
퍼셉트론 학습 예제
*/

const repl = require('repl')
import {tinyFlow} from './tinyFlow'

var tPercp = new tinyFlow({ size: 2 })
var sampleTrainDataAND = {
    inputs: [[0, 0], [0, 1], [1, 0], [1, 1]],
    outputs: [0, 0, 0, 1]
}

tPercp.train({
    outputs : sampleTrainDataAND.outputs,
    inputs: sampleTrainDataAND.inputs,
    learning_rate : 0.03
})



var repl_context = repl.start({
    prompt: 'Node.js via stdin> ',
    input: process.stdin,
    output: process.stdout
}).context;


repl_context.tPercp = tPercp
repl_context.testTrain = function(trainCount) {

    
    for(let i=0;i<trainCount;i++) {
        tPercp.train(
            {
                outputs : sampleTrainDataAND.outputs,
                inputs: sampleTrainDataAND.inputs,
                learning_rate : 0.03
            }
        )
    }
}

console.log("\n\n-------------------------\n"+
" try : \n"+
"> testTrain(1000)\n"+
"> tPercp.compute({x:[1,1]})\n ")