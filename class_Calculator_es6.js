class Calculator{
    constructor(firstNumber) {
        this.firstNumber = firstNumber;
    }

    sum(){
        let result = this.firstNumber;
        if (arguments.length) {
            for (let i = 0; i < arguments.length; i++){
                result += arguments[i];
            }
        }
        return result;
    }

    dif(){
        var result = this.firstNumber;
        if (arguments.length) {
            for (var i = 0; i < arguments.length; i++) {
                result -= arguments[i];
            }
        }
        return result;
    }

    div(){
        try {
            var result = this.firstNumber;
            if (arguments.length) {
                for (var i = 0; i < arguments.length; i++){
                    if (arguments[i] == 0) throw new Error('Делить на ноль нельзя!');
                    result /= arguments[i];
                }
            }
            return result;
        }
        catch(e) {
            console.error(e.message);
            return this.firstNumber;
        }
    }

    mul(){
        if (this.firstNumber == 0) return 0
        else {
            var result = this.firstNumber;
            if (arguments.length) {
                for (var i = 0; i < arguments.length; i++){
                    if (arguments[i] == 0) return 0;
                    result *= arguments[i];
                }
            }
        }
        return result;
    }
}

class SqrCalc extends Calculator{
    constructor(firstNumber){
        super(firstNumber)
    }

    sum() {
        let res = super.sum.apply(this,arguments);
        return res * res;
    }

    dif() {
        let res = super.dif.apply(this,arguments);
        return res * res;
    }

    div() {
        let res = super.div.apply(this,arguments);
        return res * res;
    }

    mul() {
        let res = super.mul.apply(this,arguments);
        return res * res;
    }
}

module.exports = SqrCalc;
