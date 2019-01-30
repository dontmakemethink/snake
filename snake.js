class Snake {
  posX = 0;
  posY = 0;
  speed = 200;
  direction = DIRECTION.RIGHT;

  constructor(blockSize) {
    this.blockSize = blockSize;
  }

  render() {
    rect(
      this.posX * this.blockSize,
      this.posY * this.blockSize,
      this.blockSize,
      this.blockSize,
    );
  }

  startSlithering() {
    setTimeout(() => {
      this.posX = this.posX + this.direction[0];
      this.posY = this.posY + this.direction[1];
      this.startSlithering()
    }, this.speed)
  }

  setDirection(direction) {
    this.direction = direction;
  }

  setSpeed(speed) {
    this.speed = speed;
  }
}
