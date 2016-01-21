const test = require('tape');
const firstSatisfied = require('./');

test('return minimum satisfing version', t => {
  const result = firstSatisfied('^1.1.0', ['0.5.0', '1.1.4', '1.2.3', '1.1.1']);

  t.equal(result, '1.1.1');
  t.end();
});

test('return null if no version satisifies range', t => {
  const result = firstSatisfied('^2.1.0', ['0.5.0', '1.1.4', '1.2.3', '1.1.1']);

  t.equal(result, null);
  t.end();
});
