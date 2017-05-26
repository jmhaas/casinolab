const main = require("../src/main/main.js");

describe('Hello world', function() {
	it('says hello', function() {
		expect(main.helloWorld()).toBe('Hello World!');
	});
});