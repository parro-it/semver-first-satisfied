var test = require('tape');
var firstSatisfied = require('./');

test('return minimum satisfing version', function(t) {
  var result = firstSatisfied('^1.1.0', ['0.5.0', '1.1.4', '1.2.3', '1.1.1']);

  t.equal(result, '1.1.1');
  t.end();
});

test('return null if no version satisifies range', function(t) {
  var result = firstSatisfied('^2.1.0', ['0.5.0', '1.1.4', '1.2.3', '1.1.1']);

  t.equal(result, null);
  t.end();
});
