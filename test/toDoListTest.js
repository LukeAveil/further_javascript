var assert = require('chai').assert;
var expect = require('chai').expect;
var sinon = require('sinon');

var ToDoList = require('../src/toDoList');
var ToDo = require('../src/toDo');

describe('ToDoList', function() {

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

  describe('#showNames', function(){
    it('shows the names', function(){
      toDoList.addToDo('Eat breakfast');
      toDoList.addToDo('Eat lunch');
      expect(toDoList.showNames()).to.eql(['Eat breakfast', 'Eat lunch']);
    });
  });

  describe('#render', function(){
    it('renders a list in html', function(){
      toDoList.addToDo('Eat breakfast');
      toDoList.addToDo('Eat lunch');
      expect(toDoList.render()).to.eql("<ul><li>Eat breakfast</li><li>Eat lunch</li></ul>");
    });
  });

});
