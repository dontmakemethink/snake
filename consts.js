const rowsAndCols = 30;
const blockSize = 20;
const maxFoodAtOneTime = 1;

const KEY_CODE = {
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40
}

const DIRECTION = {
  LEFT: [-1, 0],
  UP: [0, -1],
  RIGHT: [1, 0],
  DOWN: [0, 1],
}

let speed = 200;
