(function(exports) {

var ToDo = function(task) {
  this.task = task;
  this.isComplete = false;
};

ToDo.prototype = {
  finished: function() {
    this.isComplete = true;
  },
};
exports.ToDo = ToDo;
})(this);
