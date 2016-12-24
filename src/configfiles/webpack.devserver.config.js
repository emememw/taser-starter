const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("./webpack.config.js");

config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
	contentBase: "dist",
	hot: true,
	inline: true,
});
server.listen(8080);
