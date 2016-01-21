const test = require('tape');
const semverFirstSatisfied = require('./');

test('it work!', t => {
  const result = semverFirstSatisfied();
  t.equal(result, 42);
  t.end();
});
