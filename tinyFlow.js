/*
초소형 인공 신경망
*/

function tinyFlow({ weights, threshold, size }) {
    
    if (threshold !== undefined) {
        //this.w = weights
        this.thres = threshold
    }
    if (weights !== undefined) {
        this.w = weights
    }

    
    if (size !== undefined) {
        this.thres = -1;
        this.w = []

        for (let i = 0; i < size; i++) {
            this.w[i] = Math.random()
        }

    }

}

tinyFlow.prototype = Object.assign(tinyFlow.prototype, {
    //연산 함수 
    compute : function ({ x }) {

        let sum = 0
        //console.log(this.w)
        this.w.forEach((_w, index) => {
    
            sum += _w * x[index]
            //console.log(element * w[index] )
        });
    
        let _r = sum + this.thres
    
        //console.log(_r)
    
        return _r >= 0 ? 1 : 0
    
    },
    //훈현 함수 
    train : function({ learning_rate, inputs, outputs }) {

        inputs.forEach((input, input_index ) => {
    
            let _out = tinyFlow.prototype.compute.call(this,{ x: input })
    
            this.w.forEach(( _w, w_index )=> {
                let _dw = learning_rate *( outputs[input_index] - _out ) * input[w_index]
                this.w[w_index] += _dw // 변화율 누적
            })
    
            this.thres += learning_rate * (outputs[input_index] - _out)
    
            
        })
        console.log(this.w,this.thres)
    }

})

// export default tinyFlow
export {tinyFlow}
