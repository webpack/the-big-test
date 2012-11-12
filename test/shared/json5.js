var should = require("chai").should();

describe("json5-loader", function() {
	it("should load a test file", function() {
		var testfile = require("json5!./json5-loader/testfile.json5");
		should.exist(testfile);
		testfile.should.have.property("foo").be.eql("bar");
		testfile.should.have.property("while").be.eql(true);
		testfile.should.have.property("this").be.eql("is a multi-line string");
		testfile.should.have.property("here").be.eql("is another");
		testfile.should.have.property("hex").be.eql(0xDEADbeef);
		testfile.should.have.property("half").be.eql(.5);
		testfile.should.have.property("finally").be.eql('a trailing comma');
		testfile.should.be.eql(require("./json5-loader/testfile.json"));
	});
});