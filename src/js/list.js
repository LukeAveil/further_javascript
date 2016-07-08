(function(exports) {

	var List = function()  {
	  this.list = [];
	};

  	List.prototype = {
      addItem: function(item, completed, itemConstructor){
  	  this.list.push(createItem(item, completed, itemConstructor));
  	  return this.list;
  	},
      getItemById: function(itemId) {
      var lookup = {};
      for (var i = 0; i < this.list.length; i++) {
        lookup[this.list[i].id] = this.list[i];
      }
      return lookup[itemId];
    }

  };

	// Helpers //

	function createItem(item, completed, itemConstructor) {
	  return new itemConstructor(item, completed);
	}

	exports.List = List;

})(this);
