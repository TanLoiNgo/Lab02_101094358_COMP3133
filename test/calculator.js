
var calculator = require('../app/calculator.js')
var assert = require('chai').assert

describe("add", function () {
    it("add(5,2) expected result 7", function(){
        assert.equal(calculator.add(5, 2), 7);
    });

    it("add(5,2) expected result 8", function(){
        assert.equal(calculator.add(5, 2), 8)
    })
})


describe("mul", function(){
    it("mul(5,2) expected result 10", function(){
        assert.equal(calculator.mul(5, 2), 10);
    });

    it("mul(5,2) expected result 12", function(){
        assert.equal(calculator.mul(5, 2), 7)
    })
})


describe("div", function(){
	it("div(6,2) expected result 3", function(){
        assert.equal(calculator.div(6, 2), 3);
    });

    it("div(6,2) expected result 2", function(){
        assert.equal(calculator.div(6, 2), 2)
    })
    
})


describe("sub", function() {
    it("sub(7,2) expected result 5", function(){
        assert.equal(calculator.sub(7, 2), 5);
    });

    it("sub(7,2) expected result 3", function(){
        assert.equal(calculator.sub(7, 2), 3)
    })
})