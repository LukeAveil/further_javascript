

	Item.prototype.get = function() {
  	return this.text;
	};

	Item.prototype.status = function() {
  	return this.completed;
	};

	Item.prototype.changeStatus = function() {
		return this.completed = !this.completed;
	};

	exports.Item = Item;

})(this);
