function setup() {
  const platformSize = rowsAndCols * blockSize
  createCanvas(platformSize, platformSize);

  noStroke();

  snake.startSlithering();
  food.startGenerating();
}

function drawGrid() {
  for(let i = 0; i < rowsAndCols; i++) {
    for(let j = 0; j < rowsAndCols; j++) {
      if ((i + (j % 2 === 0 ? 1 : 0)) % 2 == 0) {
        fill('#f1f1f1');
      } else {
        fill('#f9f9f9');
      }
      rect(i * blockSize, j * blockSize, blockSize, blockSize);
    }
  }
}

function draw() {
  clear();
  drawGrid();

  snake.render();
  food.render();
}

function keyPressed(event) {
  switch(event.keyCode) {
    case KEY_CODE.ARROW_LEFT:
      if (snake.hasOnlyHead() || snake.getDirection() !== DIRECTION.RIGHT)
        snake.setDirection(DIRECTION.LEFT);
      break;

    case KEY_CODE.ARROW_UP:
      if (snake.hasOnlyHead() || snake.getDirection() !== DIRECTION.DOWN)
        snake.setDirection(DIRECTION.UP);
      break;

    case KEY_CODE.ARROW_RIGHT:
      if (snake.hasOnlyHead() || snake.getDirection() !== DIRECTION.LEFT)
        snake.setDirection(DIRECTION.RIGHT);
      break;

    case KEY_CODE.ARROW_DOWN:
      if (snake.hasOnlyHead() || snake.getDirection() !== DIRECTION.UP)
        snake.setDirection(DIRECTION.DOWN);
      break;

    default:
      console.log('Puff...');
  }
}