import Taser from "taser";

class Game extends Taser.Game {
	constructor() {
		super({ viewWidth: 800, viewHeight: 600, scale: 2 });
	}

	preload() {
		// load your assets here
		// Taser.game().phaser.load.spritesheet("sprites", require("sprites.png"), 16, 16);
		// Taser.game().phaser.load.image("tiles", require("tiles.png"));
		// this.gameMap = new Taser.GameMap("testmap", [[0,1,2]], 16, "tiles");
	}

	start() {
		// define your games start here
		// this.gameMap.load();
		// this.gameMap.addEntity(new Taser.Entity({
		// 		x: 20, y: 20, spritesheet: "sprites",
		// 		animations: [{ name: "default", frames: [0]}]
		// }));
	}

	update() {
		// Toggle Full-Screen
		if (Taser.Input.keyPressed("f")) {
			Taser.Display.toggleFullScreen();
			Taser.Input.resetKey("f");
		}
		// update logic
	}

	render() {
		// render logic
	}
	
}

export default Game;
