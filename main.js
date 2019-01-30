const platformSize = 600;
const blockSize = 20;

const snake = new Snake(blockSize);

function setup() {
  createCanvas(platformSize, platformSize);
  snake.startSlithering();
}

function draw() {
  clear();
  snake.render();
}

function keyPressed(event) {
  switch(event.keyCode) {
    case KEY_CODE.ARROW_LEFT:
      snake.setDirection(DIRECTION.LEFT);
      break;

    case KEY_CODE.ARROW_UP:
      snake.setDirection(DIRECTION.UP);
      break;

    case KEY_CODE.ARROW_RIGHT:
      snake.setDirection(DIRECTION.RIGHT);
      break;

    case KEY_CODE.ARROW_DOWN:
      snake.setDirection(DIRECTION.DOWN);
      break;

    default:
      console.log('Puff...');
  }
}