let funcs = require('../app/calculator.js')
let assert = require('assert')
let mocha = require('mocha')

describe("add", function() {

    it("add(6,9) expected result 15", function() {
      assert.equal(funcs.add(6, 9), 15);
    });
  
  });

  describe("add", function() {

    it("add(6,9) expected result 10", function() {
      assert.equal(funcs.add(6, 9), 10);
    });
  
  });

  describe("sub", function() {

    it("sub(666, 420) expected result 246", function() {
      assert.equal(funcs.sub(666, 420), 246);
    });
  
  });

  describe("sub", function() {

    it("sub(666, 420) expected result 642", function() {
      assert.equal(funcs.sub(666, 420), 642);
    });
  
  });

  describe("div", function() {

    it("div(16, 4) expected result 4", function() {
      assert.equal(funcs.div(16, 4), 4);
    });
  
  });

  describe("div", function() {

    it("div(16, 4) expected result 8", function() {
      assert.equal(funcs.div(16, 4), 8);
    });
  
  });

  describe("mul", function() {

    it("mul(5, 10) expected result 50", function() {
      assert.equal(funcs.mul(5, 10), 50);
    });
  
  });

  describe("mul", function() {

    it("mul(5, 10) expected result 150", function() {
      assert.equal(funcs.mul(5, 10), 150);
    });
  
  });