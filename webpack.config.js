var BannerPlugin = require("webpack/lib/BannerPlugin");
module.exports = {
	entry: "mocha!./test/client-tests",
	output: {
		path: __dirname
	},
	module: {
		loaders: [
			{ test: /\.json$/, loader: "json-loader" },
			{ test: /\.css$/, loader: "style-loader!css-loader" },
			{ test: /\.coffee$/, loader: "coffee-loader" }
		]
	},
	plugins: [
		new BannerPlugin("Used for the-big-test\nCreated by @sokra")
	]
}