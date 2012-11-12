var path = require("path");

// Server side test

var EnhancedMocha = require("./lib/EnhancedMocha");

var mocha = new EnhancedMocha({
	reporter: "spec"
});

mocha.addFile(path.join(__dirname, "shared", "index.js"));
mocha.addFile(path.join(__dirname, "server", "index.js"));

mocha.run(function(errors) {
	process.exit(errors);
});