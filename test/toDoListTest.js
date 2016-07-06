var assert = require('chai').assert;
var expect = require('chai').expect;
var sinon = require('sinon');

var ToDoList = require('../src/toDoList');

describe('ToDoList', function() {

  var toDoList;


  beforeEach(function() {
    toDoList = new ToDoList();
  });

  it('can create a new to do list', function() {
    expect(toDoList).to.be.an.instanceof(ToDoList);
  });

  it('can store a new task in a to do object', function() {
  	toDoList.addToDo('Eat breakfast');
  	expect(toDoList.tasks[0]).to.contain({task: 'Eat breakfast'});
  });

});
