let Calculator = function(firstNumber) {
    this.firstNumber = firstNumber;
};
 
Calculator.prototype.sum = function(){
    let result = this.firstNumber;	
    if (arguments.length) {
        for (let i = 0; i < arguments.length; i++){
            result += arguments[i];
        }
    }
    return result;
};

Calculator.prototype.dif = function(){
    var result = this.firstNumber;
    if (arguments.length) {
        for (var i = 0; i < arguments.length; i++){
            result -= arguments[i];
        }
    }
    return result;
};
 
Calculator.prototype.div = function(){
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
};
 
Calculator.prototype.mul = function(){
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
};
 
let SqrCalc = function(firstNumber){
    Calculator.call(this,firstNumber);	
};
 
SqrCalc.prototype = Object.create(Calculator.prototype);
 
SqrCalc.prototype.sum = function() {
	let res = Calculator.prototype.sum.apply(this,arguments);
	return res * res;
};

SqrCalc.prototype.dif = function() {
	let res = Calculator.prototype.dif.apply(this,arguments);
	return res * res;
};

SqrCalc.prototype.div = function() {
	let res = Calculator.prototype.div.apply(this,arguments);
	return res * res;
};

SqrCalc.prototype.mul = function() {
	let res = Calculator.prototype.mul.apply(this,arguments);
	return res * res;
};

module.exports = SqrCalc;