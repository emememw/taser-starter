const path = require("path");
const fsExtra = require("fs-extra");
const util = require("util");
const spawn = require("child_process").spawn;

console.log("Installing Taser ...");

console.log("Looking for package.json ...");
const projectPackageJson = require(path.resolve("package.json"));

console.log("Injecting dev-dependencies ...");
const devDependencies = require("./src/json/dev-dependencies.json");

let targetDevDependencies = projectPackageJson.devDependencies;
if (!targetDevDependencies) {
	targetDevDependencies = devDependencies;
} else {
	targetDevDependencies = Object.assign(targetDevDependencies, devDependencies);
}

projectPackageJson.devDependencies = targetDevDependencies;

console.log("Injecting scripts ...");
const scripts = require("./src/json/scripts.json");

let targetScripts = projectPackageJson.scripts;
if (!targetScripts) {
	targetScripts = scripts;
} else {
	targetScripts = Object.assign(targetScripts, scripts);
}

projectPackageJson.scripts = targetScripts;


fsExtra.writeJsonSync(path.resolve("package.json"), projectPackageJson);

console.log("Creating project structure ...");

fsExtra.ensureDirSync(path.resolve("src/js/core"));
fsExtra.ensureDirSync(path.resolve("src/html"));
fsExtra.ensureDirSync(path.resolve("assets"));

console.log("Copy files ...");
try {
	fsExtra.copySync(path.resolve(__dirname, "src/html/index.html"), path.resolve("src/html/index.html"), { clobber: false });
} catch(e) {
}
try {
	fsExtra.copySync(path.resolve(__dirname, "src/js/game.js"), path.resolve("src/js/core/game.js"), { clobber: false });
} catch(e) {
}
fsExtra.copySync(path.resolve(__dirname, "src/configfiles/babelrc.json"), path.resolve(".babelrc"));
fsExtra.copySync(path.resolve(__dirname, "src/configfiles/webpack.config.js"), path.resolve("webpack.config.js"));
fsExtra.copySync(path.resolve(__dirname, "src/configfiles/webpack.devserver.config.js"), path.resolve("webpack.devserver.config.js"));
fsExtra.copySync(path.resolve(__dirname, "src/configfiles/build.js"), path.resolve("build.js"));
fsExtra.copySync(path.resolve(__dirname, "src/js/app.js"), path.resolve("src/js/core/app.js"));

console.log("Installing dependencies ...");
const npmInstall = spawn("npm", ["install"]);
npmInstall.stdout.on("data", (data) => console.log(data.toString()));
npmInstall.stderr.on("data", (data) => console.log(data.toString()));
npmInstall.on("exit", (code) => code ? console.log(`npm install exited with code ${code}`) : console.log("Done! :)"));

