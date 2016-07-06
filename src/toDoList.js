<<<<<<< HEAD
var ToDo = require('../src/toDo');

var ToDoList = function() {
  this.tasks = [];
};

ToDoList.prototype = {
	addToDo: function(task) {
    var toDo = new ToDo(task);
    this.tasks.push(toDo);
=======
// require ToDo

var ToDoList = function(ToDo) {
  this.ToDo = ToDo();
};
>>>>>>> 8c6a374e5b52a843abd968c167ddaa139f38834f

ToDoList.prototype = {
	addToDo: function(task) {
    var todo = new this.ToDo(task);
	}

};

module.exports = ToDoList;
