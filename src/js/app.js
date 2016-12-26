import BabelPolyFill from "babel-polyfill";
import Taser from "taser.js"
import Game from "core/game";

const App = {};

App.start = function start() {
	this.setup();
};

App.setup = function setup() {
	this.setupPhaser();
	Taser.Input.init();
	this.game = new Game();
};

App.setupPhaser = function setupPhaser() {
	global.window.PIXI = require("phaser/dist/pixi.min.js");
	global.window.p2 = require("phaser/dist/p2.min.js");
	global.window.Phaser = require("phaser");
};

global.window.document.querySelector("#content").innerHTML = "";
App.start();
// TODO improve module hot reload
/*if (module.hot) {
	module.hot.accept();
}*/

export default App;
