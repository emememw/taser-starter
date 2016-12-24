const path = require("path");

module.exports = {
	context: `${__dirname}/src/js`,
	resolve: {
		root: [
			path.resolve(__dirname, "src/js"),
			path.resolve(__dirname, "assets"),
			path.resolve(__dirname, "node_modules"),
		],
		extensions: ["", ".js"],
	},
	entry: {
		app: ["core/app.js"],
	},
	output: {
		path: `${__dirname}/dist`,
		filename: "bundle.js",
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: "babel-loader",
			exclude: /node_modules\/(?!(taser)\/).*/
		}, {
			test: /\.png$/,
			exclude: /node_modules/,
			loader: "url-loader",
			query: {
				mimetype: "image/png"
			},
		}, {
			test: /\.json$/,
			exclude: /node_modules/,
			loader: "json-loader",
		}],
	},
	plugins: [],
};
