var expect = require('chai').expect;
var time = require('../src/ParseTimeAgo');

describe('parse-time-ago-test', function() {
  describe('ago', function() {
    it('should be an humanized time', function() {
      expect(time.ago('2016-01-12T08:29:13.063Z')).to.satisfy(typeChecker);
      function typeChecker(input) {
        return typeof input === 'string';
      }
    });
  })
});
