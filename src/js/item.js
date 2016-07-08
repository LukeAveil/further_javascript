(function(exports) {

  var idCounter = 0;

	var Item = function(item, completed)  {
	  this._item = item;
	  this._complete = typeof completed === "undefined" ? false : completed;
    this.id = idCounter++;
	};

	Item.prototype.get = function() {
  	return this._item;
	};

	Item.prototype.status = function() {
  	return this._complete;
	};

	Item.prototype.changeStatus = function() {
		return this._complete = !this._complete;
	};

	exports.Item = Item;

})(this);
