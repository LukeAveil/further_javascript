var assert = require('chai').assert;
var expect = require('chai').expect;

var ToDo = require('../src/toDo').ToDo;


describe('ToDo', function() {

	var toDo;

	beforeEach(function() {
		toDo = new ToDo('Eat breakfast');
    toDoTwo = new ToDo('Eat lunch');
	});


	it('can create a to do', function() {
		expect(toDo).to.be.an.instanceof(ToDo);
	});

  it('can store and retrieve a task string', function() {
    assert.typeOf(toDo.task, 'string', 'task should be a string');
  });

  it('can store and retrieve a task', function() {
    assert.equal(toDo.task, 'Eat breakfast');
  });

  it('has initial status of incomplete', function() {
    assert.equal(toDo.isComplete, false);
  });

  it('once done, has status of complete', function() {
    toDo.finished();
    assert.equal(toDo.isComplete, true);
  });



});
