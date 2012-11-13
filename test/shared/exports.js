var should = require("chai/lib/chai").should();

describe("exports-loader", function() {
	it("should export a var", function() {
		var exports = require("exports?a!./exports-loader/stuff");
		should.exist(exports);
		exports.should.be.eql("a");
	});

	it("should export some vars", function() {
		var exports = require("exports?a,b,c!./exports-loader/stuff");
		should.exist(exports);
		exports.should.have.property("a").be.eql("a");
		exports.should.have.property("b").be.eql("b");
		exports.should.have.property("c").be.eql("c");
	});

	it("should export renamed vars", function() {
		var exports = require("exports?a=b,b=c,c=a!./exports-loader/stuff");
		should.exist(exports);
		exports.should.have.property("a").be.eql("b");
		exports.should.have.property("b").be.eql("c");
		exports.should.have.property("c").be.eql("a");
	});

	it("should export stuff from obj", function() {
		var exports = require("exports?a=obj.a,b=obj.b,obj=obj!./exports-loader/stuff");
		should.exist(exports);
		exports.should.have.property("a").be.eql("A");
		exports.should.have.property("b").be.eql("B");
		exports.should.have.property("obj").be.eql({
			a: "A",
			b: "B",
			c: "C"
		});
	});
});