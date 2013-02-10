var should = require("chai/lib/chai").should();

describe("expose-loader", function() {
	it("should expose a property to the global context", function() {
		delete global.property;
		delete require.cache[require.resolve("expose?property!./expose-loader/stuff")];
		require("expose?property!./expose-loader/stuff");
		global.property.should.be.eql("ABC");
		delete global.property;
	});
});