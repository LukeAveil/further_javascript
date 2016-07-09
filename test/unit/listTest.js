var assert = require('chai').assert;
var expect = require('chai').expect;
var sinon = require('sinon');
var List = require('../../src/js/list.js').List;

describe('List', function() {

  var Stub = sinon.stub();
  Stub.withArgs('phone grandma').returns({ text: 'phone grandma', completed: false });
  Stub.withArgs('eat chocolate').returns({ text: 'eat chocolate', completed: false });


  it('should print a list of items', function() {
    var todo = new List();
    todo.addItem('phone grandma', Stub);
    todo.addItem('eat chocolate', Stub);
    expect(todo.list[0].text).to.equal('phone grandma');
    expect(todo.list[1].text).to.equal('eat chocolate');
  });
});
