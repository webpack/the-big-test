var should = require("chai/lib/chai").should();

describe("worker-loader", function() {
	it("should create a valid worker", function(done) {
		var MyWorker = require("worker!./worker-loader/worker");
		var worker = new MyWorker();
		worker.postMessage("abc123");
		worker.onmessage = function(event) {
			event.data.should.be.eql("abc123");
			done();
		};
	});
});