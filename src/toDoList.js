var ToDo = require('../src/toDo');
var Mustache = require("mustache");

var ToDoList = function() {
  this.tasks = [];
};

ToDoList.prototype = {
	addToDo: function(task) {
    var toDo = new ToDo(task);
    this.tasks.push(toDo);
	},

  showNames: function(){
    var list = this.tasks.map(function(task){
      return task.task;
    });
    return list;
  },
  render: function(){
    var view = {
      tasks: this.showNames()
    };
    var template = '<ul>{{#tasks}}<li>{{.}}</li>{{/tasks}}</ul>';
    var html = Mustache.to_html(template, view);
    return html;
  }

};

module.exports = ToDoList;
