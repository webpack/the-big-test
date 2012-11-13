var should = require("chai/lib/chai").should();

describe("imports-loader", function() {
	it("should import a module", function() {
		var importModule = require("imports?moduleA!./imports-loader/import-test-file");
		should.exist(importModule);
		importModule.should.be.eql({ module: true });
	});

	it("should import a module with text", function() {
		var importModule = require("imports?moduleA=moduleB!./imports-loader/import-test-file");
		should.exist(importModule);
		importModule.should.be.eql({ moduleB: true });
	});

	it("should import a file with text", function() {
		var importModule = require("imports?moduleA=./file!./imports-loader/import-test-file");
		should.exist(importModule);
		importModule.should.be.eql({ file: true });
	});

	it("should import custom javascript", function() {
		var importModule = require("imports?moduleA=>{custom:true}!./imports-loader/import-test-file");
		should.exist(importModule);
		importModule.should.be.eql({ custom: true });
	});

	it("should import multiple stuff", function() {
		var importModule = require("imports?moduleA,moduleB=./file,moduleC=>{custom:true}!./imports-loader/import-test-file2");
		should.exist(importModule);
		importModule.should.have.property("moduleA").be.eql({ module: true });
		importModule.should.have.property("moduleB").be.eql({ file: true });
		importModule.should.have.property("moduleC").be.eql({ custom: true });
	});
});