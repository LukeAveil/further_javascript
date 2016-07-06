(function(exports){
var ToDoList = function(ToDo) {
  this.ToDo = ToDo;
  this.tasks = [];
};

ToDoList.prototype = {
	addToDo: function(task, ToDo) {
    var toDo = new this.ToDo(task);
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

exports.ToDoList = ToDoList;
})(this);
