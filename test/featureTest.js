var server = require("http-server").createServer();
var assert = require('assert');
var Browser = require('zombie');

describe('home page', function() {


  server.listen(8000);
  browser = new Browser({ site: 'http://localhost:8000'});


  beforeEach(function(done) {
    browser.visit('/', done);
  });

  it('has a index page', function() {
    browser.assert.status(200);
  });

  it('has a title', function(){
    browser.assert.text('title', 'To Do List');
  });

});
