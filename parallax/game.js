var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create, update: update, render: render});

var layer7,
    layer6,
    layer5,
    layer4,
    layer3,
    layer2,
    layer1;
var constant = 0.5;
var speed = 0.5;
var cursors;

function preload() {
  game.load.image('layer1', 'layer1.png')
  game.load.image('layer2', 'layer2.png')
  game.load.image('layer3', 'layer3.png')
  game.load.image('layer4', 'layer4.png')
  game.load.image('layer5', 'layer5.png')
  game.load.image('layer6', 'layer6.png')
  game.load.image('layer7', 'layer7.png')
}

function create() {
  layer7 = game.add.sprite(0, 0, 'layer7');
  layer6 = game.add.sprite(0, 0, 'layer6');
  layer5 = game.add.tileSprite(0, 0, 1920, 1080, 'layer5');
  layer4 = game.add.tileSprite(0, 0, 1920, 1080, 'layer4');
  layer3 = game.add.tileSprite(0, 0, 1920, 1080, 'layer3');
  layer2 = game.add.tileSprite(0, 0, 1920, 1080, 'layer2');
  layer1 = game.add.tileSprite(0, 0, 1920, 1080, 'layer1');
  cursors = game.input.keyboard.createCursorKeys();

}

function update() {
  layer1.tilePosition.x -= 8 * speed;
  layer2.tilePosition.x -= 8 * speed;
  layer3.tilePosition.x -= 4 * speed;
  layer4.tilePosition.x -= 2 * speed;
  layer5.tilePosition.x -= 1 * speed;
}

function render() {}
