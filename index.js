'use strict';

var semver = require('semver');
var semverMax = require('semver-max');

module.exports = function firstSatisfied(range, versions) {
  var satisfing = versions.filter(function(ver) {
    return semver.satisfies(ver, range);
  });
  if (satisfing.length === 0) {
    return null;
  }

  return satisfing.reduce(semverMax.lt);
};
