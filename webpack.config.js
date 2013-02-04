module.exports = {
	module: {
		loaders: [
			{ test: /\.json$/, loader: "json" },
			{ test: /\.css$/, loader: "style!css" }
		]
	}
}