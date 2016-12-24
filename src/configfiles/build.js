const fsExtra = require("fs-extra");
const util = require("util");
const spawn = require("child_process").spawn;

fsExtra.emptyDirSync("./dist");
fsExtra.copySync("./src/html/index.html", "./dist/index.html");

const webpack = spawn("node", ["./node_modules/webpack/bin/webpack.js"]);

webpack.stdout.on('data', function(data) {
	console.log(data.toString());
});

webpack.stderr.on('data', function(data) {
	console.log(data.toString());
});

webpack.on('exit', function(code) {
	console.log('webpack exited with code ' + code.toString());
});
