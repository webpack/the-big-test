module.exports = {
	module: {
		loaders: [
			{ test: /\.json$/, loader: "json" },
			{ test: /\.css$/, loader: "style!css" }
		],
		postLoaders: [{
			test: /./, // any
			exclude: [
				/node_modules.chai/,
				/node_modules.mocha-loader/,
				/node_modules.coverjs-loader/,
				/node_modules.webpack.buildin/
			],
			loader: "coverjs-loader"
		}]
	}
}