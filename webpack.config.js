module.exports = {
	entry: "mocha!./test/client-tests",
	module: {
		loaders: [
			{ test: /\.json$/, loader: "json" },
			{ test: /\.css$/, loader: "style!css" }
		]
	}
}