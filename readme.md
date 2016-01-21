# semver-first-satisfied

> Find minimum in an array of version that satisfies a semver range.

> Return the version string or null if no version in the arrya satisfy given range.

[![Travis Build Status](https://img.shields.io/travis/parro-it/semver-first-satisfied.svg)](http://travis-ci.org/parro-it/semver-first-satisfied)
[![NPM module](https://img.shields.io/npm/v/semver-first-satisfied.svg)](https://npmjs.org/package/semver-first-satisfied)
[![NPM downloads](https://img.shields.io/npm/dt/semver-first-satisfied.svg)](https://npmjs.org/package/semver-first-satisfied)

## Installation

```bash
npm install --save semver-first-satisfied
```

## Usage

```javascript
  const firstSatisfied = require('semver-first-satisfied');
  console.log(firstSatisfied('^1.1.0', ['0.5.0', '1.1.4', '1.2.3', '1.1.1']));
```
> '1.1.1'

## License


The MIT License (MIT)

Copyright (c) 2015 parro-it
