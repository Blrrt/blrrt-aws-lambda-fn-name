'use strict';

var lib = require('./');
var test = require('tape');

test('lib', function (t) {
  t.plan(2);
  t.equal(typeof lib, 'function');
  t.equal(lib('web', 'development', 'handle-post-created', '1.0.0'), 'web__development__handle-post-created__v1_0_0');
});
