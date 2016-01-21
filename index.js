'use strict';

const semver = require('semver');
const semverMax = require('semver-max');

module.exports = function firstSatisfied(range, versions) {
  const satisfing = versions.filter(ver => semver.satisfies(ver, range));
  if (satisfing.length === 0) {
    return null;
  }

  return satisfing.reduce(semverMax.lt);
};
