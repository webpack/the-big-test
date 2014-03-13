var BannerPlugin = require("webpack/lib/BannerPlugin");

module.exports = function(grunt) {
	grunt.initConfig({
		webpack: {
			test: {
				entry: "mocha!./test/client-tests",
				module: {
					loaders: [
						{ test: /\.json$/, loader: "<%= 'json' %>" },
					]
				},
				plugins: [
					new BannerPlugin("Used for the-big-test\nCreated by @sokra")
				]
			},
			"cover-test": {
				entry: "mocha!./test/cover-client-tests",
				module: {
					loaders: [
						{ test: /\.json$/, loader: "json" },
					]
				},
				module: {
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
			},
			options: {
				output: {
					path: "assets",
					publicPath: "assets/"
				},
				module: {
					loaders: [
						{ test: /\.css$/, loader: "style!css" },
						{ test: /\.coffee$/, loader: "coffee-loader" }
					],
				},
				plugins: [
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-webpack');
	
	grunt.registerTask('default', ['webpack:test']);
	grunt.registerTask('cover', ['webpack:cover-test']);
};