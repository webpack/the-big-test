module.exports = {
	entry: "mocha!./test/client-tests",
	module: {
		loaders: [
			{ test: /\.json$/, loader: "json-loader" },
			{ test: /\.css$/, loader: "style-loader!css-loader" },
			{ test: /\.coffee$/, loader: "coffee-loader" }
		]
	}
}