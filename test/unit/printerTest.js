var assert = require('chai').assert;
var expect = require('chai').expect;
var sinon = require('sinon');
var printItems = require('../../src/js/printer.js').printItems;



describe('Printer', function() {

	var Stub = sinon.stub();
  Stub.returns({ _printStatus: 'not completed'});
  Stub.withArgs('eat chocolate').returns({id: 1, text: 'eat chocolate', completed: false });

  it('should print a list of items in HTML', function() {
    var testArray = [{id: 0, text: 'phone grandma', completed: false},
    { id: 1, text: 'eat chocolate', completed: false}];
    expect(printItems(testArray)).to.contain('<ul><li><div><button onclick="changeStatus(0)" >' +
		'<i class="fa fa-clock-o fa-3x" aria-hidden="true"></i></button> <p>phone grandma - not completed</p></div></li>' +
		'<li><div><button onclick="changeStatus(1)" ><i class="fa fa-clock-o fa-3x" aria-hidden="true"></i></button> <p>eat chocolate - not completed</p></div></li></ul>');
	});
});
