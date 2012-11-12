var path = require("path");

// Client side tests

var Server = require("webpack-dev-server");

new Server(path.join(__dirname, "lib", "main.js"), {
	middleware: {
		noInfo: true
	},
	webpack: {
		output: "bundle.js",
		debug: true,
		watch: true,
		resolve: {
			alias: {
				chai: "chai/lib/chai"
			}
		}
	}
}).listen(8082, "localhost");
console.log("http://localhost:8082");

// Server side test

var EnhancedMocha = require("./lib/EnhancedMocha");

var mocha = new EnhancedMocha({
	reporter: "spec"
});

mocha.addFile(path.join(__dirname, "shared", "index.js"));
mocha.addFile(path.join(__dirname, "server", "index.js"));

mocha.watch();