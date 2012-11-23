module.exports = {
	output: "bundle.js",
	publicPrefix: "/",
	debug: true,
	includeFilenames: true,
	watch: true,
	postLoaders: [{
		test: ".", // any
		exclude: [
			"node_modules.chai",
			"node_modules.coverjs-loader",
			"node_modules.webpack.buildin"
		],
		loader: "coverjs-loader"
	}]
}