
var weapon = require('./');
var test = require('tape');

test('weapon', function(t) {
	t.equals(weapon(0), 0);
	t.equals(weapon(1), 1);
	
	t.end();
});
