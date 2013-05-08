module.exports = {
	entry: "mocha!./test/cover-client-tests",
	module: {
		loaders: [
			{ test: /\.json$/, loader: "json" },
			{ test: /\.css$/, loader: "style!css" },
			{ test: /\.coffee$/, loader: "coffee-loader" }
		],
		postLoaders: [{
			test: /./, // any
			exclude: [
				/node_modules.chai/,
				/node_modules.mocha-loader/,
				/node_modules.coverjs-loader/,
				/node_modules.webpack.buildin/,
				/node_modules.node-libs-browser/
			],
			loader: "coverjs-loader"
		}]
	}
}