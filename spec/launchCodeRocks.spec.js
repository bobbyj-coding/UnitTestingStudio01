const launchOutput = require('../launchCodeRocks.js');
const assert = require('assert');

describe("launchOutput", function(){

  //testing code here...
it('should return "Launch!" when passed a number only divisible by 2,', function(){
  let expected = "Launch!";
  let actual = launchOutput(8);
  assert.strictEqual(actual,expected);
})

it('should return "Code!" when passed a number only divisible by 3,', function(){
  let expected = "Code!";
  let actual = launchOutput(9);
  assert.strictEqual(actual,expected);
})

it('should return "Rocks!" when passed a number only divisible by 5,', function(){
  let expected = "Rocks!";
  let actual = launchOutput(25);
  assert.strictEqual(actual,expected);
})

it('should return "LaunchCode!" when passed a number only divisible by 2 and 3,', function(){
  let expected = "LaunchCode!";
  let actual = launchOutput(18);
  assert.strictEqual(actual,expected);
})

it('should return "Code Rocks!" when passed a number only divisible by 3 and 5,', function(){
  let expected = "Code Rocks!";
  let actual = launchOutput(15);
  assert.strictEqual(actual,expected);
})

it('should return "Launch Rocks!" when passed a number only divisible by 2 and 5,', function(){
  let expected = "Launch Rocks!";
  let actual = launchOutput(10);
  assert.strictEqual(actual,expected);
})

it('should return "LaunchCode Rocks!" when passed a number only divisible by 2, 3 and 5,', function(){
  let expected = "LaunchCode Rocks!";
  let actual = launchOutput(30);
  assert.strictEqual(actual,expected);
})

it('should return "Rutabagas! That should not work." when passed a number not divisible by 2, 3 and 5,', function(){
  let expected = "Rutabagas! That should not work.";
  let actual = launchOutput(13);
  assert.strictEqual(actual,expected);
})

});