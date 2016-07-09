(function(exports) {

	function printItems(arrayList) {
	  var array = arrayList;
	  var print = '';

	  for (var i = 0; i < array.length; i++) {
	     print = print.concat('<li><div><button onclick="changeStatus(' + array[i].id + ')" >' + printIcon(array[i]) + '</button> <p>' +
       array[i].text + ' - ' + printStatus(array[i]) + '</p></div></li>');
	  }
	  return '<ul>' + print + '</ul>';
	}

  function printStatus(array) {
    return array.completed ? 'completed' : 'not completed';
  }

	function printIcon(array) {
		return array.completed ? '<i class="fa fa-beer fa-3x" aria-hidden="true"></i>' : '<i class="fa fa-clock-o fa-3x" aria-hidden="true"></i>';
	}

	exports.printItems = printItems;

})(this);
