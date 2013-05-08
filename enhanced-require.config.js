module.exports = {
	module: {
		loaders: [
			{ test: /\.json$/, loader: "json" },
			{ test: /\.coffee$/, loader: "coffee-loader" }
		]
	}
}