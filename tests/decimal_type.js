var Decimal = require('../lib/decimaljs.js');
var assert = require('assert');


assert.equal(Decimal(5) instanceof Decimal, true);
assert.equal(Decimal(5), '5');
assert.equal(Decimal('5'), '5');
assert.equal(Decimal(5.1), '5.1');
assert.equal(Decimal(Decimal(5.1)) instanceof Decimal, true);
