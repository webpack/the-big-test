var should = require("chai/lib/chai").should();

describe("worker-loader", function() {
	it("should create a valid worker", function(done) {
		var MyWorker = require("worker!./worker-loader/worker");
		var worker = new MyWorker();
		worker.postMessage("abc123");
		worker.onmessage = function(event) {
			if(typeof __$coverObject !== "undefined" && event.data.indexOf("{") === 0) {
				// To cover worker code
				// we transfer the coverObject
				var workerCover = JSON.parse(event.data);
				for(var name in workerCover)
					__$coverObject[name] = workerCover[name];
				return;
			}
			event.data.should.be.eql("abc123");
			done();
		};
	});
});