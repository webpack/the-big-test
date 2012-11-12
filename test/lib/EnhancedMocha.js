var Mocha = require("mocha");
var er = require("enhanced-require");

function EnhancedMocha(options) {
	Mocha.call(this, options);
}
module.exports = EnhancedMocha;

EnhancedMocha.prototype = Object.create(Mocha.prototype);

EnhancedMocha.prototype.loadFiles = function(fn) {
	var self = this;

	var require = er(module, {
		recursive: true,
		hot: true,
		watch: true,
		applyUpdate: false,
		onAutomaticCheck: function(err, modules) {
			if(self.watching) {
				if(!self.running)
					self.run();
				else
					self.outdated = true;
			}
		},
		resolve: self.options.resolve
	});
	var suite = this.suite;
	suite.suites.length = 0;
	suite.tests.length = 0;
	try {
		this.files.forEach(function(file){
			suite.emit('pre-require', global, file, self);
			suite.emit('require', require(file), file, self);
			suite.emit('post-require', global, file, self);
		});
	} catch(e) {
		suite.addTest(new Mocha.Test("fix test errors", function() {
			throw e;
		}));
	}
	if(fn) fn();
}

EnhancedMocha.prototype.watch = function() {
	var self = this;
	self.outdated = false;
	self.running = true;
	self.watching = true;

	// reinit ui to fix ui bugs
	this.ui(this.options.ui);

	// run the tests
	this.run(function(failures) {
		self.running = false;
		if(self.outdated)
			self.watch();
	});
};
