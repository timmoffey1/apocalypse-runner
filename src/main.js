const config = {  type: Phaser.AUTO,  width: 800,  height: 600,  physics: {    default: 'arcade',    arcade: {      gravity: { y: 0 },      debug: false    }  },  scene: [GameScene]};

const game = new Phaser.Game(config);

class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
        // Load assets here
    }

    create() {
        // Set up your game here
    }

    update() {
        // Game loop logic
    }
}