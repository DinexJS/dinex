var index = (function (exports) {
  'use strict';

  const expect = (a) => {
    return {
      toBe: (b) => {
        if (typeof a === 'object' && a !== null) {
          return JSON.stringify(a) === JSON.stringify(b);
        } else {
          return a === b;
        }
      },
    };
  };

  const test = (name, callback) => {
    let passed = 'failed';
    if (callback() === true) {
      passed = 'passed';
    }
    console.log(`${name} test : ${passed}`);
    return callback() === true;
  };

  exports.expect = expect;
  exports.test = test;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
})({});
