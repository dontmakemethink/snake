const snake = {
  tail: [{
    posX: 0,
    posY: 0,
    direction: DIRECTION.RIGHT,
  }],

  render: () => {
    snake.tail.forEach(({ posX, posY }, index) => {
      if (index === 0) {
        fill('darkgreen');
      } else {
        fill('lightgreen');
      }
      rect(posX * blockSize, posY * blockSize, blockSize, blockSize);
    })
  },

  slither: () => {
    setTimeout(() => {
      const head = snake.getHead();
      const endOfTail = snake.tail[snake.tail.length - 1];
      const newHeadPosX = head.posX + head.direction[0];
      const newHeadPosY = head.posY + head.direction[1];

      const hitSelf = snake.tail
        .slice(1)
        .some(({ posX, posY, direction }) =>
          posX + direction[0] === newHeadPosX
            && posY + direction[1] === newHeadPosY
        )

      if (hitSelf) {
        snake.tail = snake.tail.slice(0, 1);
        speed = 200;
      } else {
        snake.tail = snake.tail.map(({ posX, posY, direction }, index) => {
          const newPosX = posX + direction[0];
          const newPosY = posY + direction[1];

          const keepInPlatform = (pos) => pos >= rowsAndCols ? 0 : pos < 0 ? rowsAndCols - 1: pos;

          return {
            posX: keepInPlatform(newPosX),
            posY: keepInPlatform(newPosY),
            direction: index === 0 ? direction : snake.tail[index - 1].direction,
          }
        })
      }

      if (food.getPiece(newHeadPosX, newHeadPosY)) {
        food.deletePiece(newHeadPosX, newHeadPosY);
        speed -= 5;
        snake.tail.push(endOfTail);
      }

      snake.slither();
    }, speed);
  },

  startSlithering: () => {
    snake.slither();
  },

  setDirection: (direction) => {
    snake.tail[0].direction = direction;
  },

  hasOnlyHead: () => snake.tail.length === 1,

  getHead: () => snake.tail[0],

  getDirection: () => snake.getHead().direction,
}
